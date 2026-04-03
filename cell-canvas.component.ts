import { Component, ElementRef, input, ViewChild, AfterViewInit, effect, OnDestroy, NgZone, inject } from '@angular/core';

interface CellParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  type: 'rbc' | 'wbc' | 'platelet';
  status: 'normal' | 'abnormal';
  hasMutation: boolean;
  pulsePhase: number;
  rotation: number;
}

@Component({
  selector: 'app-cell-canvas',
  standalone: true,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `],
  template: `
    <div class="relative w-full h-full bg-[#0B1221] overflow-hidden border border-slate-800 rounded-xl shadow-inner group">
      <canvas #canvas class="absolute top-0 left-0 w-full h-full"></canvas>
      
      <!-- Microscope Vignette Overlay -->
      <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,rgba(11,18,33,0.4)_70%,rgba(11,18,33,0.8)_100%)]"></div>
      
      <!-- Lens Flare / Dust Particles (Visual Polish) -->
      <div class="absolute inset-0 pointer-events-none opacity-10 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
      
      <!-- Scanning Line Effect -->
      <div class="absolute top-0 left-0 w-full h-1 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-scan pointer-events-none"></div>
    </div>
  `
})
export class CellCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  visualData = input.required<{
    rbcCount: number;
    wbcCount: number;
    plateletCount: number;
    morphology: 'normal' | 'sickle' | 'blast' | 'microcytic' | 'macrocytic' | 'infected' | 'schistocyte' | 'elliptocyte' | 'stomatocyte' | 'leukemia' | 'anemia' | 'rouleaux';
    cellColor: string;
  }>();

  heatmapEnabled = input<boolean>(false);
  show3DEffect = input<boolean>(true);

  private ctx!: CanvasRenderingContext2D;
  private animationId = 0;
  private cells: CellParticle[] = [];
  private width = 0;
  private height = 0;
  private globalTime = 0;
  private ngZone = inject(NgZone);
  private resizeObserver!: ResizeObserver;

  constructor() {
    effect(() => {
        const data = this.visualData();
        console.log('CellCanvas: Received visualData', data);
        if (this.width > 0 && this.height > 0) {
           this.initSimulation(data);
        }
    });
  }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: false })!;
    
    this.resizeObserver = new ResizeObserver(() => {
       this.ngZone.run(() => this.resizeCanvas());
    });
    
    if (canvas.parentElement) {
        this.resizeObserver.observe(canvas.parentElement);
    }
    
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    this.resizeObserver?.disconnect();
  }

  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement; 
    if (parent) {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      this.width = rect.width;
      this.height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      if (this.visualData()) {
         this.initSimulation(this.visualData());
      }
    }
  }

  initSimulation(data: { morphology: string; rbcCount?: number; wbcCount?: number; plateletCount?: number }) {
    if (!this.width || !this.height) return;

    this.cells = [];
    const morphology = data.morphology;
    const isHealthy = morphology === 'normal';
    
    // 1. RBCs (The majority)
    const rbcCount = Math.min(data.rbcCount || 200, 250);
    for (let i = 0; i < rbcCount; i++) {
        this.spawnCell('rbc', isHealthy);
    }

    // 2. WBCs (Fewer, larger)
    const wbcCount = Math.min(data.wbcCount || 7, 15);
    for (let i = 0; i < wbcCount; i++) {
        this.spawnCell('wbc', isHealthy);
    }

    // 3. Platelets (Tiny fragments)
    const plateletCount = Math.min(data.plateletCount || 25, 50);
    for (let i = 0; i < plateletCount; i++) {
        this.spawnCell('platelet', isHealthy);
    }
  }

  private spawnCell(type: 'rbc' | 'wbc' | 'platelet', isHealthy: boolean) {
    let status: 'normal' | 'abnormal' = 'normal';
    if (!isHealthy && type === 'rbc') {
        if (Math.random() > 0.4) status = 'abnormal';
    }

    let r = 14;
    if (type === 'wbc') r = 22;
    if (type === 'platelet') r = 4;

    // Add some randomness to size
    r += (Math.random() * 4 - 2);

    this.cells.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1, 
        r: r,
        type: type,
        status: status,
        hasMutation: status === 'abnormal' && Math.random() > 0.7,
        pulsePhase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2
    });
  }

  animate() {
    this.render();
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    if (!this.ctx || !this.width || !this.height) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    this.globalTime += 0.01;

    // 1. Background
    ctx.fillStyle = '#0B1221'; 
    ctx.fillRect(0, 0, w, h);

    // 2. Grid
    this.drawGrid(ctx, w, h);

    // 3. Cells
    for (const cell of this.cells) {
        // Subtle drift
        cell.x += cell.vx;
        cell.y += cell.vy;
        
        // Wrap around
        if (cell.x < -20) cell.x = w + 20;
        if (cell.x > w + 20) cell.x = -20;
        if (cell.y < -20) cell.y = h + 20;
        if (cell.y > h + 20) cell.y = -20;

        this.drawCell(ctx, cell);
    }

    // 4. Heatmap Overlay
    if (this.heatmapEnabled()) {
        this.drawHeatmap(ctx);
    }
  }

  private drawHeatmap(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const cell of this.cells) {
          if (cell.status === 'abnormal' || cell.type === 'wbc') {
              const color = cell.type === 'wbc' ? 'rgba(147, 51, 234, 0.15)' : 'rgba(239, 68, 68, 0.2)';
              const gradient = ctx.createRadialGradient(cell.x, cell.y, 0, cell.x, cell.y, cell.r * 4);
              gradient.addColorStop(0, color);
              gradient.addColorStop(1, 'rgba(0,0,0,0)');
              ctx.fillStyle = gradient;
              ctx.fillRect(cell.x - cell.r * 4, cell.y - cell.r * 4, cell.r * 8, cell.r * 8);
          }
      }
      ctx.restore();
  }

  private drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.2)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      ctx.beginPath();
      for (let x = 0; x <= w; x += gridSize) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
      for (let y = 0; y <= h; y += gridSize) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
      ctx.stroke();
  }

  private drawCell(ctx: CanvasRenderingContext2D, cell: CellParticle) {
      const pulse = Math.sin(this.globalTime * 2 + cell.pulsePhase);
      const r = cell.r + pulse * 0.5;
      
      const morphology = this.visualData().morphology;
      
      ctx.save();
      ctx.translate(cell.x, cell.y);
      ctx.rotate(cell.rotation + this.globalTime * 0.1);

      if (this.show3DEffect()) {
          ctx.shadowColor = 'rgba(0,0,0,0.5)';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 3;
          ctx.shadowOffsetY = 3;
      }

      if (cell.type === 'rbc') {
          const color = cell.status === 'normal' ? '59, 130, 246' : '239, 68, 68';
          ctx.fillStyle = `rgba(${color}, 0.2)`;
          ctx.strokeStyle = `rgba(${color}, 0.7)`;
          ctx.lineWidth = 2;

          if (cell.status === 'normal') {
              this.drawNormalCell(ctx, r);
          } else {
              this.drawMorphology(ctx, r, morphology);
          }
      } else if (cell.type === 'wbc') {
          this.drawWBC(ctx, r);
      } else {
          this.drawPlatelet(ctx, r);
      }

      if (cell.hasMutation) {
          this.drawMutationMarker(ctx, r);
      }

      ctx.restore();
  }

  private drawMutationMarker(ctx: CanvasRenderingContext2D, r: number) {
      const mSize = r * 0.4;
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-mSize, -mSize); ctx.lineTo(mSize, mSize);
      ctx.moveTo(mSize, -mSize); ctx.lineTo(-mSize, mSize);
      ctx.stroke();
  }

  private drawNormalCell(ctx: CanvasRenderingContext2D, r: number) {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Biconcave center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
      ctx.fill();
  }

  private drawWBC(ctx: CanvasRenderingContext2D, r: number) {
      ctx.fillStyle = 'rgba(147, 51, 234, 0.2)';
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.8)';
      ctx.lineWidth = 2;
      
      // Irregular shape
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const dist = r * (0.9 + Math.random() * 0.2);
          const x = Math.cos(angle) * dist;
          const y = Math.sin(angle) * dist;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Granules/Nucleus
      ctx.fillStyle = 'rgba(88, 28, 135, 0.6)';
      ctx.beginPath();
      ctx.arc(-r*0.2, -r*0.1, r*0.4, 0, Math.PI*2);
      ctx.arc(r*0.3, r*0.2, r*0.3, 0, Math.PI*2);
      ctx.fill();
  }

  private drawPlatelet(ctx: CanvasRenderingContext2D, r: number) {
      ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.lineTo(0, -r);
      ctx.lineTo(r, 0);
      ctx.lineTo(0, r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
  }

  private drawMorphology(ctx: CanvasRenderingContext2D, r: number, morphology: string) {
      switch (morphology) {
          case 'sickle':
              ctx.beginPath();
              ctx.moveTo(-r*1.2, 0);
              ctx.quadraticCurveTo(0, -r * 1.8, r*1.2, 0);
              ctx.quadraticCurveTo(0, -r * 0.4, -r*1.2, 0);
              ctx.closePath();
              ctx.fill(); ctx.stroke();
              break;
          case 'blast':
          case 'leukemia':
              ctx.beginPath(); ctx.arc(0, 0, r * 1.3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              ctx.fillStyle = 'rgba(147, 51, 234, 0.4)';
              ctx.beginPath(); ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2); ctx.fill();
              break;
          case 'microcytic':
          case 'anemia':
              ctx.beginPath(); ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              ctx.fillStyle = ctx.strokeStyle as string;
              ctx.beginPath(); ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2); ctx.fill();
              break;
          case 'infected':
              ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              ctx.fillStyle = '#fbbf24';
              for (let i = 0; i < 3; i++) {
                  const a = (i/3)*Math.PI*2; const d = r*0.5;
                  ctx.beginPath(); ctx.arc(Math.cos(a)*d, Math.sin(a)*d, r*0.2, 0, Math.PI*2); ctx.fill();
              }
              break;
          case 'schistocyte':
              ctx.beginPath(); ctx.moveTo(-r, -r*0.5); ctx.lineTo(r, -r); ctx.lineTo(r*0.5, r); ctx.lineTo(-r*0.8, r*0.2); ctx.closePath();
              ctx.fill(); ctx.stroke();
              break;
          case 'elliptocyte':
              ctx.beginPath(); ctx.ellipse(0, 0, r * 1.6, r * 0.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              break;
          case 'stomatocyte':
              ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; ctx.lineWidth = 3;
              ctx.beginPath(); ctx.moveTo(-r * 0.6, 0); ctx.quadraticCurveTo(0, r * 0.4, r * 0.6, 0); ctx.stroke();
              break;
          case 'macrocytic':
              ctx.beginPath(); ctx.arc(0, 0, r * 1.4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              // Pale center
              ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
              ctx.beginPath(); ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2); ctx.fill();
              break;
          case 'rouleaux':
              // Stacked appearance
              for (let i = 0; i < 3; i++) {
                  ctx.beginPath(); ctx.arc(0, i * r * 0.4, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              }
              break;
          default:
              this.drawNormalCell(ctx, r);
      }
  }
}
