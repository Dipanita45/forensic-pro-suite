import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateForensicReport = (data: any) => {
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text('Forensic Analysis Report', 10, 10);
  
  doc.setFontSize(12);
  doc.text(`Case Name: ${data.caseName || 'N/A'}`, 10, 25);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 35);
  
  if (data.findings && Array.isArray(data.findings)) {
    const columns = ['Finding', 'Details', 'Severity'];
    const rows = data.findings.map((f: any) => [f.finding, f.details, f.severity]);
    
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 45,
    });
  }
  
  doc.save(`forensic_report_${Date.now()}.pdf`);
};
