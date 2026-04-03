import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalysisService } from '../services/analysis.service';
import { AnalysisResult } from '../services/types';

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-none landscape-chat-compact">
      
      <!-- Chat Window -->
      @if (isOpen()) {
        <div class="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-80 md:w-96 mb-4 overflow-hidden flex flex-col pointer-events-auto animate-fade-in-up landscape-chat-window">
          <!-- Header -->
          <div class="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
             <div class="flex items-center gap-2">
               <div class="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse"></div>
               <h3 class="font-bold text-white text-base">Jake</h3>
             </div>
             <button (click)="toggle()" class="text-slate-400 hover:text-white text-lg">&times;</button>
          </div>
          
          <!-- Messages -->
          <div class="h-96 overflow-y-auto p-5 space-y-4 bg-slate-900/95 landscape-chat-messages">
             @for (msg of messages(); track $index) {
                <div [class]="msg.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-slate-800 text-slate-200'"
                     class="max-w-[85%] rounded-2xl px-5 py-3 text-base leading-relaxed shadow-sm">
                   {{ msg.text }}
                </div>
             }
             @if (isThinking()) {
                <div class="mr-auto bg-slate-800 text-slate-400 rounded-2xl px-5 py-2 text-sm italic animate-pulse">
                   Analyzing data...
                </div>
             }
          </div>

          <!-- Input -->
          <div class="p-4 bg-slate-800 border-t border-slate-700 flex gap-3">
             <input [(ngModel)]="currentInput" (keyup.enter)="sendMessage()" 
               placeholder="Ask about the results..."
               class="flex-1 bg-slate-950 border border-slate-600 rounded-full px-5 py-3 text-base text-white focus:border-neon-cyan outline-none" />
             <button (click)="sendMessage()" [disabled]="!currentInput || isThinking()"
                class="bg-neon-purple hover:bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 text-xl">
                &uarr;
             </button>
          </div>
        </div>
      }

      <!-- Toggle Button -->
      <button (click)="toggle()" class="pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-blue-600 shadow-lg hover:shadow-neon-purple/50 transition flex items-center justify-center text-white font-bold text-2xl landscape-chat-btn">
        Jake
      </button>

    </div>
  `,
  styles: [`
    .animate-fade-in-up { animation: fadeInUp 0.3s ease-out; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class ChatAssistantComponent {
  private analysisService = inject(AnalysisService);
  
  context = input<AnalysisResult | null>(null);
  isOpen = signal(false);
  isThinking = signal(false);
  messages = signal<ChatMessage[]>([
    { role: 'ai', text: 'Hello! I am Jake, your hematology assistant. Upload a sample or select a disease, then ask me anything about the results.' }
  ]);
  currentInput = '';

  toggle() {
    this.isOpen.update(v => !v);
  }

  async sendMessage() {
    if (!this.currentInput.trim()) return;
    
    const userMsg = this.currentInput;
    this.messages.update(msgs => [...msgs, { role: 'user', text: userMsg }]);
    this.currentInput = '';
    this.isThinking.set(true);

    try {
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes('accuracy test') || lowerMsg.includes('run test') || lowerMsg.includes('system accuracy')) {
        this.messages.update(msgs => [...msgs, { role: 'ai', text: 'Initiating system accuracy validation pass... Please wait while I analyze the clinical dataset.' }]);
        const result = await this.analysisService.runAccuracyTest();
        this.messages.update(msgs => [...msgs, { role: 'ai', text: result.details }]);
      } else {
        const response = await this.analysisService.getChatResponse(userMsg, this.context());
        this.messages.update(msgs => [...msgs, { role: 'ai', text: response }]);
      }
    } catch {
      this.messages.update(msgs => [...msgs, { role: 'ai', text: 'I encountered an error connecting to the lab database.' }]);
    } finally {
      this.isThinking.set(false);
    }
  }
}