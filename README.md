# 🛡️ Sentinel-Forensics: AI-Augmented Digital Investigation Suite

A full-stack Digital Forensics Workstation designed for automated artifact extraction, 
geographic threat triage, and chain-of-custody documentation.

## 🚀 Key Features
* **Automated Triage Pipeline:** Python-based backend for SHA-256 integrity hashing and metadata extraction.
* **Persistent Evidence Vault:** Case management powered by Supabase (PostgreSQL) to maintain record persistence.
* **Geospatial Attribution:** Real-time mapping of simulated threat actors using React-Simple-Maps.
* **Interactive Forensic Assistant:** A Framer Motion-powered AI robot that guides users through forensic theory.
* **Official Reporting:** Client-side PDF generation with digital verification seals for legal compliance.

## 🛠️ Tech Stack
* **Frontend:** Next.js 15 (React 19), Tailwind CSS, Framer Motion.
* **Backend:** FastAPI (Python), Forensic-specific libraries (Hashlib).
* **Database:** Supabase (RLS enabled for investigator privacy).
* **Terminal:** Xterm.js for manual CLI triage.

## 🔬 Forensic Methodology
This project follows the **NIST SP 800-86** guidelines for digital forensic techniques:
1. **Collection:** Secure ingestion of files via the Automated Flow.
2. **Examination:** Automated hashing to ensure non-repudiation.
3. **Analysis:** Visualizing data points via the Triage Map.
4. **Reporting:** Generation of tamper-evident PDF reports.