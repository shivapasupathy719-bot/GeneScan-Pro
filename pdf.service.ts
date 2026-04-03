import { Injectable } from '@angular/core';
import { AnalysisResult } from './types';

declare const jspdf: { jsPDF: new () => { 
  internal: { pageSize: { getWidth: () => number; getHeight: () => number } };
  addPage: () => void;
  setFillColor: (r: number, g: number, b: number) => void;
  setDrawColor: (r: number, g: number, b: number) => void;
  setTextColor: (r: number, g: number, b: number) => void;
  rect: (x: number, y: number, w: number, h: number, style: string) => void;
  roundedRect: (x: number, y: number, w: number, h: number, rx: number, ry: number, style: string) => void;
  line: (x1: number, y1: number, x2: number, y2: number) => void;
  text: (text: string | string[], x: number, y: number) => void;
  setFont: (font: string, style: string) => void;
  setFontSize: (size: number) => void;
  getTextWidth: (text: string) => number;
  splitTextToSize: (text: string, width: number) => string[];
  save: (filename: string) => void;
} };

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  generateReport(data: AnalysisResult, patientName: string, age: number, sex: string) {
    const { jsPDF } = jspdf;
    const doc = new jsPDF();
    
    // Page Config
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    let yCursor = 20;

    // Helper: Background Color
    const drawBackground = () => {
      doc.setFillColor(5, 10, 30); // Dark Slate Theme
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
    };

    // Helper: Check Page Break
    // Returns true if a page break occurred
    const checkPageBreak = (neededHeight: number) => {
      if (yCursor + neededHeight > pageHeight - 20) {
        doc.addPage();
        drawBackground();
        yCursor = 20;
        return true;
      }
      return false;
    };

    // --- Start Page 1 ---
    drawBackground();

    // 1. HEADER
    doc.setTextColor(100, 149, 237); // Cornflower Blue
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("GENESCAN PRO LAB REPORT", margin, yCursor);
    
    if (data.scanName) {
      yCursor += 10;
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      doc.text(`SCAN: ${data.scanName.toUpperCase()}`, margin, yCursor);
    }
    
    yCursor += 6;
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 160);
    doc.text("SIMULATED BIOMEDICAL ANALYSIS ENGINE", margin, yCursor);

    // Timestamp (Right aligned)
    const dateStr = new Date().toLocaleString();
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    const dateWidth = doc.getTextWidth(dateStr);
    doc.text(dateStr, pageWidth - margin - dateWidth, yCursor - 6);
    doc.setTextColor(150, 150, 160);
    doc.text("GENERATED ON", pageWidth - margin - dateWidth, yCursor - 12);

    yCursor += 15;

    // 2. PATIENT INFO & CLINICAL NOTES (Dynamic Height)
    // We need to measure the text for Clinical Notes to size the box correctly.
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    
    const notesX = 90;
    const maxNotesWidth = pageWidth - notesX - margin;
    const splitNotes = doc.splitTextToSize(data.clinicalNotes, maxNotesWidth);
    const notesBlockHeight = (splitNotes.length * 5) + 10; // 5 units per line approx
    
    // Min height for the metadata section (3 lines * 6 units + padding)
    const metaBlockHeight = 40; 
    const sectionHeight = Math.max(metaBlockHeight, notesBlockHeight + 10);

    // Draw Section Background
    doc.setDrawColor(40, 50, 80);
    doc.setFillColor(15, 23, 42);
    doc.roundedRect(margin, yCursor, pageWidth - (margin * 2), sectionHeight, 3, 3, 'FD');

    // Labels
    const contentY = yCursor + 8;
    doc.setFontSize(9);
    doc.setTextColor(100, 110, 130);
    doc.setFont("helvetica", "bold");
    doc.text("PATIENT METADATA", margin + 6, contentY);
    doc.text("CLINICAL NOTES", notesX, contentY);

    // Metadata Content
    let metaY = contentY + 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(`Name: ${patientName}`, margin + 6, metaY); metaY += 6;
    doc.text(`Age: ${age} years`, margin + 6, metaY); metaY += 6;
    doc.text(`Sex: ${sex}`, margin + 6, metaY);

    // Clinical Notes Content
    doc.setFont("helvetica", "italic");
    doc.setTextColor(200, 200, 200);
    doc.text(splitNotes, notesX, contentY + 8);

    yCursor += sectionHeight + 15;

    // 3. PARAMETERS TABLE
    // Header
    const drawTableHeader = () => {
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(100, 110, 130);
        doc.text("PARAMETER", margin + 6, yCursor);
        doc.text("RESULT", 90, yCursor);
        doc.text("NORMAL RANGE", 120, yCursor);
        doc.text("STATUS", 170, yCursor);
        
        yCursor += 4;
        doc.setDrawColor(40, 50, 80);
        doc.line(margin, yCursor, pageWidth - margin, yCursor);
        yCursor += 8;
    };

    if (checkPageBreak(30)) {
        // if we broke page just for header, reset y is handled, but we need to redraw title? 
        // usually checkPageBreak resets Y to 20.
    }
    drawTableHeader();

    // Rows
    data.parameters.forEach(p => {
      // Check if row fits
      if (checkPageBreak(15)) {
          yCursor += 10; // Top padding
          drawTableHeader();
      }

      // Name & Unit
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.text(p.name, margin + 6, yCursor);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 160);
      doc.text(p.unit, margin + 6, yCursor + 4);

      // Value
      doc.setFontSize(10);
      doc.setTextColor(100, 149, 237);
      doc.setFont("helvetica", "bold");
      doc.text(p.value.toString(), 90, yCursor);

      // Range
      doc.setTextColor(180, 180, 180);
      doc.setFont("helvetica", "normal");
      doc.text(p.range, 120, yCursor);

      // Status Badge
      const statusColor = p.status === 'NORMAL' ? [16, 185, 129] : [234, 179, 8]; // Green or Yellow
      if (p.status === 'CRITICAL') { statusColor[0] = 239; statusColor[1] = 68; statusColor[2] = 68; } // Red

      doc.setFillColor(15, 23, 42); 
      doc.setDrawColor(statusColor[0], statusColor[1], statusColor[2]);
      doc.roundedRect(168, yCursor - 4, 25, 6, 2, 2, 'FD');
      
      doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
      doc.setFontSize(7);
      doc.setFont("helvetica", "bold");
      doc.text(p.status, 172, yCursor);

      yCursor += 12;
      doc.setDrawColor(30, 40, 60);
      doc.line(margin, yCursor - 4, pageWidth - margin, yCursor - 4);
      yCursor += 4;
    });

    yCursor += 10;

    // 4. SUMMARY BLOCKS
    const colWidth = (pageWidth - (margin * 3)) / 2; 
    const leftX = margin;
    const rightX = margin + colWidth + margin;

    // Calculate heights for both columns
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const morphText = doc.splitTextToSize(data.morphologySummary, colWidth - 16);
    const morphHeight = (morphText.length * 5) + 30; // Text + header/padding

    // Genetics Height
    const markersHeight = (data.geneticMarkers.length * 12) + 30; // Each marker tag + header/padding
    
    const blockHeight = Math.max(80, morphHeight, markersHeight);

    if (checkPageBreak(blockHeight)) {
        yCursor += 10;
    }

    // -- Morphology Block (Left) --
    doc.setFillColor(15, 23, 42);
    doc.setDrawColor(40, 50, 80);
    doc.roundedRect(leftX, yCursor, colWidth, blockHeight, 3, 3, 'FD');
    doc.setFillColor(60, 70, 200);
    doc.rect(leftX, yCursor+6, 2, 12, 'F'); // Blue Accent

    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("MORPHOLOGY SUMMARY", leftX + 8, yCursor + 12);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(200, 200, 200);
    doc.text(morphText, leftX + 8, yCursor + 22);

    // -- Genetics Block (Right) --
    doc.setFillColor(15, 23, 42);
    doc.setDrawColor(40, 50, 80);
    doc.roundedRect(rightX, yCursor, colWidth, blockHeight, 3, 3, 'FD');
    doc.setFillColor(188, 19, 254);
    doc.rect(rightX, yCursor+6, 2, 12, 'F'); // Purple Accent

    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("GENETIC MARKERS", rightX + 8, yCursor + 12);

    let markerY = yCursor + 22;
    data.geneticMarkers.forEach(marker => {
        doc.setFillColor(40, 20, 60);
        doc.setDrawColor(188, 19, 254);
        doc.roundedRect(rightX + 8, markerY - 4, colWidth - 16, 8, 2, 2, 'FD');
        
        doc.setTextColor(220, 180, 255);
        doc.setFontSize(8);
        doc.text(marker.toUpperCase(), rightX + 12, markerY + 1.5);
        markerY += 12;
    });

    yCursor += blockHeight + 20;

    // 5. FOOTER
    // Check if footer fits, else new page
    if (yCursor > pageHeight - 20) {
        doc.addPage();
        drawBackground();
        yCursor = pageHeight - 20;
    } else {
        // Place at bottom of current page
        yCursor = pageHeight - 20;
    }
    
    doc.setFontSize(8);
    doc.setTextColor(80, 90, 110);
    doc.text("AI MODEL: HemaYOLO-v2.0-Pro (Simulated)", margin, yCursor);
    doc.text("GeneScan Pro Verified", pageWidth - margin - 35, yCursor);

    doc.save(`GeneScan_Report_${patientName.replace(/\s/g, '_')}.pdf`);
  }
}