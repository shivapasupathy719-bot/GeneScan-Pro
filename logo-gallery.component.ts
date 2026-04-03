import { Component, output } from '@angular/core';

@Component({
  selector: 'app-logo-gallery',
  standalone: true,
  template: `
    <div class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-auto animate-fade-in">
      <div class="max-w-7xl w-full">
        <!-- Header -->
        <div class="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 class="text-4xl font-bold text-white tracking-tight">Brand Identity Concepts</h2>
            <p class="text-slate-400 text-base mt-2">Vector candidates for GeneScan Pro v2.0</p>
          </div>
          <button (click)="closeGallery.emit()" class="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2 text-base font-medium">
            <span>&times;</span> Close Gallery
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            <!-- Logo 1: The Helix Shield -->
            <div class="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/20 transition-all group aspect-square cursor-pointer">
                <div class="w-24 h-24 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                   <!-- SVG: Stylized Shield with DNA -->
                   <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" stroke="currentColor" fill="rgba(59, 130, 246, 0.1)"/>
                      <path d="M35 30 Q50 40 65 30" opacity="0.8" />
                      <path d="M35 50 Q50 60 65 50" opacity="0.8" />
                      <path d="M35 70 Q50 80 65 70" opacity="0.8" />
                      <path d="M50 20 V80" stroke-width="4" stroke="currentColor" />
                   </svg>
                </div>
                <h3 class="text-white font-bold text-xl mb-1">Helix Shield</h3>
                <span class="text-sm text-slate-500 uppercase tracking-wider">Security & Bio</span>
            </div>

            <!-- Logo 2: Molecular Connection -->
            <div class="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-neon-purple hover:shadow-2xl hover:shadow-purple-900/20 transition-all group aspect-square cursor-pointer">
                <div class="w-24 h-24 text-neon-purple mb-6 group-hover:scale-110 transition-transform duration-500">
                   <!-- SVG: Connected Dots -->
                   <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round">
                      <circle cx="30" cy="30" r="10" fill="currentColor" stroke="none"/>
                      <circle cx="70" cy="30" r="8" fill="currentColor" stroke="none" opacity="0.6"/>
                      <circle cx="50" cy="70" r="12" fill="currentColor" stroke="none"/>
                      <line x1="30" y1="30" x2="50" y2="70" opacity="0.5"/>
                      <line x1="70" y1="30" x2="50" y2="70" opacity="0.5"/>
                      <line x1="30" y1="30" x2="70" y2="30" opacity="0.5"/>
                   </svg>
                </div>
                <h3 class="text-white font-bold text-xl mb-1">Neural Node</h3>
                <span class="text-sm text-slate-500 uppercase tracking-wider">AI & Genetics</span>
            </div>

            <!-- Logo 3: Precision Scan -->
            <div class="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-neon-green hover:shadow-2xl hover:shadow-green-900/20 transition-all group aspect-square cursor-pointer">
                <div class="w-24 h-24 text-neon-green mb-6 group-hover:scale-110 transition-transform duration-500">
                   <!-- SVG: Scope/Target -->
                   <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
                      <circle cx="50" cy="50" r="30" stroke-dasharray="20 10" opacity="0.8"/>
                      <circle cx="50" cy="50" r="40" stroke-width="2" opacity="0.3"/>
                      <rect x="45" y="5" width="10" height="20" fill="currentColor" stroke="none"/>
                      <rect x="45" y="75" width="10" height="20" fill="currentColor" stroke="none"/>
                      <rect x="5" y="45" width="20" height="10" fill="currentColor" stroke="none"/>
                      <rect x="75" y="45" width="20" height="10" fill="currentColor" stroke="none"/>
                      <circle cx="50" cy="50" r="8" fill="currentColor"/>
                   </svg>
                </div>
                <h3 class="text-white font-bold text-xl mb-1">Bio-Scope</h3>
                <span class="text-sm text-slate-500 uppercase tracking-wider">Detection</span>
            </div>

            <!-- Logo 4: Abstract Gene Typo -->
            <div class="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white hover:shadow-2xl transition-all group aspect-square cursor-pointer">
                <div class="w-24 h-24 text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                   <!-- SVG: Monogram GS -->
                   <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M80 20 H50 A30 30 0 0 0 20 50 A30 30 0 0 0 50 80 H80 V60 H50 A10 10 0 0 1 50 40 H80 V20 Z" />
                      <circle cx="70" cy="70" r="8" fill="#3b82f6"/>
                   </svg>
                </div>
                <h3 class="text-white font-bold text-xl mb-1">G-Loop</h3>
                <span class="text-sm text-slate-500 uppercase tracking-wider">Modern Minimal</span>
            </div>

            <!-- Logo 5: Data Drop -->
            <div class="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-red-500 hover:shadow-2xl hover:shadow-red-900/20 transition-all group aspect-square cursor-pointer">
                <div class="w-24 h-24 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                   <!-- SVG: Pixelated Blood Drop -->
                   <svg viewBox="0 0 100 100" fill="currentColor">
                      <rect x="40" y="20" width="20" height="20" opacity="0.4"/>
                      <rect x="30" y="40" width="40" height="20" opacity="0.7"/>
                      <rect x="20" y="60" width="60" height="20"/>
                      <rect x="30" y="80" width="40" height="10"/>
                   </svg>
                </div>
                <h3 class="text-white font-bold text-xl mb-1">Hemo-Bit</h3>
                <span class="text-sm text-slate-500 uppercase tracking-wider">Digital Hematology</span>
            </div>

        </div>

        <div class="mt-12 bg-white/5 rounded-lg p-6 text-center border border-white/10">
            <p class="text-slate-400 font-mono text-base">All logos are rendered as pure SVG paths for maximum scalability and performance.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in { animation: fadeIn 0.3s ease-out; }
    @keyframes fadeIn { from { opacity: 0; scale: 0.95; } to { opacity: 1; scale: 1; } }
  `]
})
export class LogoGalleryComponent {
  closeGallery = output();
}