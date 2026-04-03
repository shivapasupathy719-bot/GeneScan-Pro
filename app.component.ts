import { Component, inject, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService } from './services/analysis.service';
import { AnalysisResult, DiseaseProfile, TreatmentSimulation, Patient } from './services/types';
import { PdfService } from './services/pdf.service';
import { AuditService, AuditAction } from './services/audit.service';
import { CellCanvasComponent } from './components/cell-canvas.component';
import { ChatAssistantComponent } from './components/chat-assistant.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { auth, db, googleProvider, signInWithPopup, firebaseSignOut, onAuthStateChanged, User, doc, setDoc, serverTimestamp } from './firebase';
import * as QRCode from 'qrcode';

type ViewState = 'LOGIN' | 'DASHBOARD' | 'MANUAL_ENTRY' | 'LOADING' | 'HISTORY' | 'PATIENTS';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CellCanvasComponent, ChatAssistantComponent, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private analysisService = inject(AnalysisService);
  private pdfService = inject(PdfService);
  private auditService = inject(AuditService);
  private fb: FormBuilder = inject(FormBuilder);

  viewState = signal<ViewState>('LOGIN');
  
  // Auth State
  user = signal<User | null>(null);
  isAuthReady = signal(false);
  
  loadingMessage = signal<string>('Initializing analysis engine...');
  qrCodeDataUrl = signal<string | null>(null);
  
  currentProfile = signal<DiseaseProfile | null>(null);
  currentResult = signal<AnalysisResult | null>(null);
  
  // Visualization Controls
  heatmapEnabled = signal<boolean>(false);
  show3DEffect = signal<boolean>(true);
  uploadedImage = signal<string | null>(null);
  isStained = signal<boolean>(false);
  
  // History
  scanHistory = signal<AnalysisResult[]>([]);
  patients = signal<Patient[]>([]);
  
  // Simulation State
  simulationResult = signal<TreatmentSimulation | null>(null);
  isSimulating = signal(false);
  showSimulationModal = signal(false);
  showImageViewer = signal(false);
  currentUserName = signal<string>('');

  stainedImage = computed(() => {
    const uploaded = this.uploadedImage();
    if (!uploaded) return 'https://picsum.photos/seed/blood-sample/800/800';
    return uploaded;
  });
  systemAccuracy = signal<number>(98.4);

  // System Status
  aiEngineStatus = signal<'ONLINE' | 'OFFLINE' | 'DEGRADED'>('OFFLINE');
  databaseStatus = signal<'CONNECTED' | 'DISCONNECTED'>('DISCONNECTED');
  quotaStatus = signal<'OK' | 'EXCEEDED'>('OK');

  patientInfo = { name: '', id: '', age: 0, sex: 'Unknown' };

  // Staff Login Form
  staffForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  // Manual Analysis Form
  manualForm = this.fb.group({
    patientName: ['', Validators.required],
    description: ['', Validators.required],
    image: [null],
    age: [null as number | null, [Validators.required, Validators.min(0)]],
    sex: ['', Validators.required],
    // Biometrics (Optional)
    hemoglobin: [null as number | null],
    wbc: [null as number | null],
    platelets: [null as number | null],
    mcv: [null as number | null],
  });

  // Simulation Form
  simulationForm = this.fb.group({
    treatment: ['', Validators.required],
    days: [30, [Validators.required, Validators.min(1)]]
  });

  availableDiseases = this.analysisService.getLibrary();
  private authSubscription?: { unsubscribe: () => void };

  hasApiKey = signal<boolean>(true);

  async ngOnInit() {
    this.checkSystemStatus();
    
    // Check for API Key selection (Required for Gemini 3 Pro)
    try {
      const aistudio = (window as { aistudio?: { hasSelectedApiKey: () => Promise<boolean> } }).aistudio;
      if (aistudio && typeof aistudio.hasSelectedApiKey === 'function') {
        const selected = await aistudio.hasSelectedApiKey();
        this.hasApiKey.set(selected);
      }
    } catch (err) {
      console.warn("API Key check failed:", err);
    }

    if (this.availableDiseases && this.availableDiseases.length > 0) {
      this.currentProfile.set(this.availableDiseases[0]); 
      this.currentResult.set(this.availableDiseases[0].template);
    } else {
      console.error("Disease library is empty or failed to load.");
    }

    // Firebase Auth Listener
    try {
      onAuthStateChanged(auth, (user) => {
        this.handleAuthStateChange(user);
        this.isAuthReady.set(true);
      });
    } catch (err: unknown) {
      const error = err as Error;
      console.warn("Firebase initialization failed:", error.message);
      this.isAuthReady.set(true);
      this.databaseStatus.set('DISCONNECTED');
    }

    this.generateQrCode();
    this.systemAccuracy.set(this.analysisService.getSystemAccuracy());
    
    // Subscribe to accuracy updates from anywhere (e.g. Chat)
    this.analysisService.accuracyUpdate$.subscribe(score => {
      this.systemAccuracy.set(score);
    });
  }

  private async handleAuthStateChange(user: User | null) {
    this.user.set(user);
    if (user) {
      this.currentUserName.set(user.displayName || user.email?.split('@')[0] || 'User');
      
      this.databaseStatus.set('CONNECTED');
      
      // Sync user profile to Firestore
      try {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: user.email === 'shivapasupathy719@gmail.com' ? 'admin' : 'staff',
          createdAt: serverTimestamp()
        }, { merge: true });
      } catch (e) {
        console.warn("Failed to sync user profile", e);
      }

      try {
        await this.loadHistory();
      } catch (err) {
        console.warn("Failed to load initial data", err);
      }
    } else {
      this.databaseStatus.set('DISCONNECTED');
    }
  }

  async generateQrCode() {
    try {
      const url = window.location.href;
      const qr = await QRCode.toDataURL(url, {
        margin: 2,
        color: {
          dark: '#ffffff',
          light: '#0B1221'
        }
      });
      this.qrCodeDataUrl.set(qr);
    } catch (err) {
      console.error('QR Code generation failed', err);
    }
  }

  ngOnDestroy() {
    if (this.authSubscription) this.authSubscription.unsubscribe();
  }

  private checkSystemStatus() {
    const apiKey = this.analysisService.getApiKey();
    if (apiKey && apiKey.length > 10) {
      this.aiEngineStatus.set('ONLINE');
    } else {
      this.aiEngineStatus.set('OFFLINE');
    }
  }

  async loginWithGoogle(silent = false) {
    try {
      await signInWithPopup(auth, googleProvider);
      this.viewState.set('DASHBOARD');
    } catch (error: unknown) {
      const err = error as { message?: string; code?: string };
      console.error("Login failed", error);
      if (!silent) {
        let msg = "Google Login failed. ";
        if (err.code === 'auth/popup-blocked') {
          msg += "The popup was blocked by your browser. Please allow popups for this site.";
        } else if (err.code === 'auth/cancelled-popup-request') {
          msg += "The login process was cancelled.";
        } else {
          msg += "Please check your internet connection and try again.";
        }
        alert(msg);
      }
      throw error;
    }
  }

  async loadHistory() {
    try {
      const history = await this.analysisService.getHistory(20);
      this.scanHistory.set(history);
    } catch (err) {
      console.error("History load failed", err);
    }
  }

  viewHistory() {
    this.loadHistory();
    this.viewState.set('HISTORY');
  }

  async viewPatients() {
    this.patients.set(await this.analysisService.getPatients());
    this.viewState.set('PATIENTS');
  }

  selectPatient(patient: Patient) {
    this.manualForm.patchValue({
      patientName: patient.name,
      age: patient.age,
      sex: patient.sex
    });
    this.viewState.set('MANUAL_ENTRY');
  }

  loadFromHistory(scan: AnalysisResult) {
    this.currentResult.set(scan);
    this.currentProfile.set({
      id: scan.id || 'history',
      name: scan.diseaseName,
      description: scan.clinicalNotes,
      type: 'Healthy',
      template: scan
    });
    this.viewState.set('DASHBOARD');
  }

  showCalibrationModal = signal(false);
  calibrationDiagnosis = signal('');
  calibrationFeedback = signal('');

  calibrateAI() {
    const result = this.currentResult();
    if (!result) return;
    this.calibrationDiagnosis.set(result.diseaseName);
    this.showCalibrationModal.set(true);
  }

  async selectApiKey() {
    try {
      const aistudio = (window as { aistudio?: { openSelectKey: () => Promise<void> } }).aistudio;
      if (aistudio && typeof aistudio.openSelectKey === 'function') {
        await aistudio.openSelectKey();
        this.hasApiKey.set(true); // Assume success as per guidelines
      }
    } catch (err) {
      console.error("Failed to open key selector:", err);
    }
  }

  confirmCalibration() {
    const result = this.currentResult();
    if (!result) return;

    const correctDiagnosis = this.calibrationDiagnosis();
    
    if (correctDiagnosis) {
      const calibrationEntry = {
        input: {
          description: this.manualForm.value.description || result.clinicalNotes,
          biometrics: {
            hemoglobin: this.manualForm.value.hemoglobin,
            wbc: this.manualForm.value.wbc,
            platelets: this.manualForm.value.platelets,
            mcv: this.manualForm.value.mcv
          }
        },
        correctOutput: {
          diseaseName: correctDiagnosis,
          notes: `Expert Calibration: ${correctDiagnosis}. Feedback: ${this.calibrationFeedback() || "None"}`
        },
        timestamp: new Date().toISOString()
      };

      // Add to service's knowledge base
      const currentKB = this.analysisService.getCustomDataset() || [];
      this.analysisService.setCustomDataset([...currentKB, calibrationEntry]);
      
      this.showCalibrationModal.set(false);
      
      // Clear modal state
      this.calibrationFeedback.set('');
      
      alert(`AI Calibration Successful!\n\nThe system has been updated with this verified case of "${correctDiagnosis}". This data will be used to refine future diagnostic simulations and improve the accuracy of the morphology analysis engine.`);
    }
  }

  // --- Simulation Methods ---

  openSimulation() {
    this.showSimulationModal.set(true);
    this.simulationResult.set(null);
  }

  async runSimulation() {
    const result = this.currentResult();
    if (!result || this.simulationForm.invalid) return;

    this.isSimulating.set(true);
    try {
      const val = this.simulationForm.value;
      const sim = await this.analysisService.simulateTreatment(result, val.treatment!, val.days!);
      this.simulationResult.set(sim);
    } catch (e) {
      console.error(e);
      alert("Simulation failed.");
    } finally {
      this.isSimulating.set(false);
    }
  }

  async runAccuracyTest() {
    this.loadingMessage.set('Running comprehensive accuracy validation...');
    this.viewState.set('LOADING');
    
    try {
      const result = await this.analysisService.runAccuracyTest();
      this.systemAccuracy.set(result.score);
      this.viewState.set('DASHBOARD');
      alert(result.details);
    } catch (error) {
      console.error('Accuracy test failed:', error);
      this.viewState.set('DASHBOARD');
      alert('Accuracy test failed. Please check system logs.');
    }
  }

  // --- Auth Methods ---

  async handleStaffLogin() {
    if (this.staffForm.valid) {
      const { username, password } = this.staffForm.value;

      if (password === 'Shiv@.pm2010') {
        this.currentUserName.set(username || 'User');
        
        // If not logged in with Firebase, attempt Google Login but don't block
        if (!this.user()) {
          try {
            await this.loginWithGoogle(true);
          } catch {
            console.warn("Google Login failed, proceeding in Local Mode (History will not be saved)");
            this.viewState.set('DASHBOARD');
          }
        } else {
          this.viewState.set('DASHBOARD');
        }
      } else {
        alert('Access Denied: Incorrect Access Key.');
        this.staffForm.get('password')?.reset();
      }
    }
  }

  async signOut() {
    const userId = this.user()?.uid;
    await firebaseSignOut(auth);
    if (userId) await this.auditService.log(AuditAction.LOGOUT, userId, 'User', 'SUCCESS');
    this.viewState.set('LOGIN');
    this.currentUserName.set('');
    this.staffForm.reset();
  }

  // --- App Logic ---

  enterManualMode() {
    this.viewState.set('MANUAL_ENTRY');
    this.uploadedImage.set(null);
    this.isStained.set(false);
    this.manualForm.patchValue({
        patientName: '',
        description: '',
        age: null,
        sex: '',
        hemoglobin: null,
        wbc: null,
        platelets: null,
        mcv: null
    });
    this.currentProfile.set(null); // Reset dropdown
  }

  goBack() {
    if (this.currentResult()) {
        this.viewState.set('DASHBOARD');
    } else {
        alert("Please complete a scan first.");
    }
  }

  loadSample(profile: DiseaseProfile) {
    this.currentProfile.set(profile);
    this.currentResult.set(profile.template);
  }

  onProfileChange(selection: DiseaseProfile | 'CUSTOM' | null) {
    if (selection === 'CUSTOM') {
      this.enterManualMode();
    } else if (selection) {
      this.loadSample(selection);
      this.viewState.set('DASHBOARD');
    }
  }

  onFileSelected(event: Event) {
    this.isStained.set(false);
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.compressImage(file).then(base64 => {
        this.uploadedImage.set(base64);
      });
    }
  }

  private compressImage(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }

  toggleHeatmap() {
    this.heatmapEnabled.update(v => !v);
  }

  toggle3DEffect() {
    this.show3DEffect.update(v => !v);
  }

  async runManualAnalysis() {
    this.viewState.set('LOADING');
    this.loadingMessage.set('Preparing sample for analysis...');
    
    try {
        const formVal = this.manualForm.value;
        const patientName = formVal.patientName || 'Anonymous Patient';
        const desc = formVal.description || '';
        const image = this.uploadedImage();
        
        const biometrics = {
          hemoglobin: formVal.hemoglobin ?? undefined,
          wbc: formVal.wbc ?? undefined,
          platelets: formVal.platelets ?? undefined,
          mcv: formVal.mcv ?? undefined
        };

        this.patientInfo = {
            ...this.patientInfo,
            id: 'N/A',
            name: patientName,
            age: formVal.age || 0,
            sex: formVal.sex || 'Unknown'
        };

        this.loadingMessage.set('Scanning cellular structures...');
        await new Promise(r => setTimeout(r, 800));
        
        this.loadingMessage.set('Consulting AI medical knowledge base...');
        
        let result: AnalysisResult;
        
        if (image) {
            const base64 = image.split(',')[1];
            result = await this.analysisService.analyzeImage(base64, desc);
        } else {
            result = await this.analysisService.analyzeCustomSample(desc || 'Standard blood sample', biometrics);
        }
        
        this.loadingMessage.set('Finalizing report and visualization...');
        result.scanName = patientName;
        this.currentResult.set(result);
        
        // Save to Firestore
        if (this.user()) {
          try {
            const { scanId, patientId } = await this.analysisService.saveScan(result, this.patientInfo);
            result.id = scanId;
            result.patientId = patientId;
            this.patientInfo.id = patientId;
            await this.loadHistory();
          } catch (saveError) {
            console.warn("Failed to save scan to history, but analysis completed:", saveError);
            // We don't fail the whole analysis if just saving to history fails
          }
        }

        this.currentProfile.set({
          id: 'custom',
          name: image ? 'Image Scan Analysis' : 'Custom Description',
          description: image ? 'Analysis generated from uploaded microscopic image.' : desc,
          type: 'Healthy', 
          template: result
        });
        this.viewState.set('DASHBOARD');
    } catch (e: unknown) {
        const error = e as Error;
        console.error("Analysis Error:", error);
        this.viewState.set('MANUAL_ENTRY');
        
        let errorMsg = `Analysis failed: ${error.message || 'Please check your API keys and internet connection.'}`;
        if (error.message && error.message.includes('Quota exceeded')) {
          errorMsg = "Analysis quota exceeded. Please try again later.";
        } else if (error.message && error.message.includes('permission')) {
          errorMsg = "Database permission error. Please ensure you are logged in correctly.";
        }
        
        alert(errorMsg);
    }
  }

  downloadReport() {
    const result = this.currentResult();
    if (result) {
      this.auditService.log(AuditAction.EXPORT_REPORT, result.id, 'ScanResult', 'SUCCESS');
      this.pdfService.generateReport(result, this.patientInfo.name, this.patientInfo.age, this.patientInfo.sex);
    }
  }

  toggleVirtualStain() {
    if (!this.uploadedImage()) return;
    this.isStained.update(v => !v);
  }

  openImageViewer() {
    this.showImageViewer.set(true);
  }

  getDnaSegments(sequence: string, mutationPos?: number) {
    return sequence.split('').map((char, index) => {
      const isMutated = mutationPos && Math.abs(index - mutationPos) <= 0; 
      
      let colorClass = 'text-slate-400';
      if (char === 'A') colorClass = 'text-[#4ADE80]'; // Green
      if (char === 'T') colorClass = 'text-[#60A5FA]'; // Blue
      if (char === 'C') colorClass = 'text-[#F87171]'; // Red
      if (char === 'G') colorClass = 'text-[#FACC15]'; // Yellow
      
      if (isMutated) {
          colorClass = 'text-white bg-yellow-600 px-0.5 rounded font-bold animate-pulse';
      }

      return { char, colorClass };
    });
  }
}
