
export interface DiagnosisOption {
  condition: string;
  probability: number;
  reasoning: string;
}

export interface BloodParameter {
  name: string;
  unit: string;
  value: number | string;
  range: string;
  status: 'NORMAL' | 'ABNORMAL' | 'CRITICAL';
}

export interface GeneSequence {
  gene: string;
  location: string;
  sequence: string;
  mutation?: {
    pos: number;
    from: string;
    to: string;
    type: string;
    desc: string;
  };
}

export interface PathogenInfo {
  name: string;
  type: string;
  transmission: string;
  incubationPeriod: string;
  globalPrevalence: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
}

export interface TreatmentSimulation {
  treatment: string;
  days: number;
  projectedOutcome: string;
  cellChangePercentage: number;
  sideEffects: string[];
  successProbability: number;
  bestCaseOutcome: string;
  worstCaseOutcome: string;
  drugInteractions: string[];
}

export interface DiseaseAnalysis {
  pathophysiology: string;
  epidemiology: string;
  standardOfCare: string[];
  recentResearch: string[];
  clinicalGuidelines?: string[];
  medicalLiterature?: { title: string; url: string; summary: string }[];
}

export interface ComparativeData {
  parameter: string;
  patientValue: number;
  normalAverage: number;
  populationPercentile: number;
  trend: 'UP' | 'DOWN' | 'STABLE';
}

export interface Patient {
  id?: string;
  name: string;
  age: number;
  sex: string;
  userId: string;
  lastScan: string;
  createdAt: string;
}

export interface AnalysisResult {
  id?: string;
  userId?: string;
  timestamp?: unknown;
  createdAt?: unknown;
  scanName?: string;
  patientName?: string;
  patientAge?: number;
  patientSex?: string;
  diseaseName: string;
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  probability: number;
  confidenceScore: number;
  clinicalNotes: string;
  morphologySummary: string;
  geneticMarkers: string[];
  geneSequences: GeneSequence[];
  parameters: BloodParameter[];
  visualData: {
    rbcCount: number;
    wbcCount: number;
    plateletCount: number;
    morphology: 'normal' | 'sickle' | 'blast' | 'microcytic' | 'macrocytic' | 'infected' | 'schistocyte' | 'elliptocyte' | 'stomatocyte' | 'leukemia' | 'anemia' | 'rouleaux';
    cellColor: string;
  };
  stats: {
    totalCells: number;
    normalCells: number;
    abnormalCells: number;
    mutationsFound: number;
  };
  diseaseAnalysis?: DiseaseAnalysis;
  pathogenInfo?: PathogenInfo;
  comparativeData?: ComparativeData[];
  differentialDiagnosis?: DiagnosisOption[];
  patientId?: string;
}

export interface Biometrics {
  hemoglobin?: number;
  wbc?: number;
  platelets?: number;
  mcv?: number;
}

export interface DiseaseProfile {
  id: string;
  name: string;
  description: string;
  type: string;
  template: AnalysisResult;
}
