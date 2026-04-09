import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateForensicReport = (data: {
  case_id: string;
  filename: string;
  hash_value: string;
  investigator: string;
  status: string;
  created_at?: string;
}) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.setTextColor(16, 185, 129);
  doc.text('SENTINEL-FORENSICS', 10, 15);

  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text('Chain-of-Custody Report', 10, 22);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 10, 29);

  doc.setDrawColor(16, 185, 129);
  doc.line(10, 33, 200, 33);

  autoTable(doc, {
    startY: 38,
    head: [['Field', 'Value']],
    body: [
      ['Case ID', data.case_id],
      ['Filename', data.filename],
      ['SHA-256 Hash', data.hash_value],
      ['Investigator', data.investigator],
      ['Status', data.status],
      ['Timestamp', data.created_at ? new Date(data.created_at).toLocaleString() : new Date().toLocaleString()],
    ],
    headStyles: { fillColor: [15, 23, 42], textColor: [16, 185, 129] },
    alternateRowStyles: { fillColor: [241, 245, 249] },
  });

  doc.save(`forensic_report_${data.case_id}.pdf`);
};
