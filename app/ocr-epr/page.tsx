import { Download, Edit2, FileCheck, FileSearch, FolderOpen, Github, Scale, Sparkles, Truck } from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { ExploreMore } from "@/components/ExploreMore/ExploreMore";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: FileCheck,
    name: "EPR / Compliance team",
    description:
      "Process shipment document packs and extract transaction data for EPR reporting"
  },
  {
    icon: Truck,
    name: "Logistics / Operations",
    description:
      "Turn vehicle dispatch documents into structured records without manual data entry"
  },
  {
    icon: FolderOpen,
    name: "Anyone handling dispatch docs",
    description:
      "If you receive folders of mixed shipment documents and need the data in a spreadsheet - this is for you"
  }
] as const;

const extractTiles = [
  {
    title: "Weighbridge",
    fields: "Date | Vehicle No | Weighbridge Name | Net Weight (Tons)"
  },
  {
    title: "Tax Invoice",
    fields: "Vehicle Number | Date | Invoice No | Material Name | Net Weight (Tons)"
  },
  {
    title: "E-Way Bill",
    fields:
      "Generated Date | Bill No | Net Weight | Valid Upto | From State | To State | Plastic Categorisation"
  },
  {
    title: "LR Copy",
    fields:
      "Vehicle Number | Date | LR No | Transporter Name | Net Weight | Consignee | Consignor | From/To State"
  },
  {
    title: "Delivery Challan",
    fields:
      "Vehicle Number | Date | Challan No | Transporter Name | Net Weight | Consignee | Consignor | From/To State"
  },
  {
    title: "RC Document",
    fields:
      "Registration Number | Date of Registration | Chassis Number | Engine Number"
  }
] as const;

const capabilities = [
  {
    number: "01",
    title: "Auto-classify six document types",
    description: "The system identifies Weighbridge slips, Tax Invoices, E-Way Bills, LR Copies, Delivery Challans, and RC documents automatically,no labelling required.",
    icon: Sparkles
  },
  {
    number: "02",
    title: "Extract key fields per document",
    description: "Each document type has its own field set extracted,vehicle number, date, weight, invoice number, state details, and more,mapped to the right columns.",
    icon: FileSearch
  },
  {
    number: "03",
    title: "Auto-pair weighbridge slips",
    description: "Loading and unloading weighbridge slips for the same transaction are automatically paired and presented as a single record with net weight calculated.",
    icon: Scale
  },
  {
    number: "04",
    title: "Batch process up to 150 folders",
    description: "Upload a parent folder with up to 150 subfolders,each subfolder is one transaction. The system processes them all in one go with live progress on screen.",
    icon: FolderOpen
  },
  {
    number: "05",
    title: "Edit any field before export",
    description: "Review extracted data in the browser and correct any value inline. Edits are reflected in your CSV and PDF exports before you download.",
    icon: Edit2
  },
  {
    number: "06",
    title: "Export to Excel, CSV, or PDF",
    description: "Download structured results in three formats. Each transaction subfolder becomes one row. Session persists until you upload a new folder.",
    icon: Download
  }
];

const notes = [
  {
    title: "Upload folders, not files",
    description:
      "The tool is designed for folder upload. Each subfolder = one transaction. Root-level loose files must be PDFs."
  },
  {
    title: "Session persists until new files are added",
    description:
      "Extracted data stays in your session until you upload a new folder. Export any time before starting a fresh batch."
  },
  {
    title: "Edits stay in the browser",
    description:
      "If you correct a field in the UI, that correction shows in CSV and PDF exports - but not in the server Excel download. Use CSV or PDF if you have made corrections."
  },
  {
    title: "Unrecognised documents are flagged",
    description:
      'If the system cannot identify a document type, it will show "Image Category not Recognised." Check the scan quality and retry.'
  }
] as const;

const exploreItems = [
  {
    href: "/ocr-bizcard/",
    category: "Document OCR",
    name: "OCR for Business Cards",
    description: "Turn a stack of business cards into a contact list in seconds.",
  },
  {
    href: "/climaone-v1/",
    category: "EPR Compliance",
    name: "ClimaOne V1",
    description: "Manage your full EPR compliance cycle end to end.",
  },
];

export default function OcrEprPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Document OCR</p>
          <h1 className={styles.title}>
            Upload a folder of shipment documents. <span>Get structured data in seconds.</span>
          </h1>
          <p>
            The system reads invoices, e-way bills, weighbridge slips, and LR copies, classifies
            each document, extracts the key fields, and groups everything into a clean, exportable
            table.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.githubButton} href="https://github.com/VishalSingh1806/OCR" target="_blank" rel="noreferrer">
              <Github size={18} />
              View on GitHub
            </a>
          </div>
          <p className={styles.accessNote}>
            Works on Chrome and Edge | Desktop only | Upload folders, not individual files
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.uploadArea}>
              <span className={styles.uploadIcon}>+</span>
              <span className={styles.uploadLabel}>Upload folder here</span>
            </div>
            <div className={styles.greenRows}>
              {["Weighbridge", "Tax Invoice", "E-Way Bill"].map((label) => (
                <div key={label} className={styles.greenRow}>
                  <span className={styles.rowLabel}>{label}</span>
                  <div className={styles.rowValue}>
                    <span className={styles.lineLong} />
                    <span className={styles.lineShort} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for teams processing shipment paperwork</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How it works</p>
          <h2>Four steps from upload to export</h2>
          <p className={styles.subtext}>
            Upload a folder of shipment documents and the tool handles the rest,classification,
            extraction, grouping, and export,without any manual data entry.
          </p>
        </div>
        <div className={styles.stepsList}>
          {[
            {
              number: "01",
              title: "Upload your folder",
              description:
                "Drag and drop a folder of shipment documents,invoices, e-way bills, weighbridge slips, LR copies,or click to browse. Each subfolder is treated as one transaction."
            },
            {
              number: "02",
              title: "System classifies and extracts",
              description:
                "The OCR engine reads each document, identifies its type automatically, and extracts the specific fields for that document,vehicle number, date, weight, invoice number, and more."
            },
            {
              number: "03",
              title: "Review and correct inline",
              description:
                "Extracted data is shown in the browser grouped by transaction. Check each field against the original and correct any misread value with a single click,takes seconds per row."
            },
            {
              number: "04",
              title: "Export your structured data",
              description:
                "Download as Excel, CSV, or PDF. Every transaction subfolder becomes one clean row. Session persists until you upload a new folder."
            }
          ].map((step, index) => (
            <article
              key={step.number}
              className={`${styles.step} ${index % 2 === 1 ? styles.reversed : ""}`}
            >
              <div className={styles.stepText}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/screenshots/ocr-epr/step-0${parseInt(step.number)}.png`}
                  alt={step.title}
                  className={styles.stepImage}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.extractSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What gets extracted</p>
          <h2>Six document types. Every key field. Automatically.</h2>
          <p className={styles.subtext}>
            The system automatically identifies which type of document it is looking at - you
            don&apos;t need to label anything. It then extracts the specific fields relevant to that
            document type.
          </p>
        </div>
        <div className={styles.grid3}>
          {extractTiles.map((tile) => (
            <article key={tile.title} className={styles.extractTile}>
              <h3>{tile.title}</h3>
              <p className={styles.fieldList}>{tile.fields}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>What you can do with OCR for EPR</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap) => (
            <div key={cap.number} className={styles.capabilityCell}>
              <CapabilityBlock {...cap} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.notesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Good to know</p>
          <h2>A few things before you start</h2>
        </div>
        <div className={styles.notesGrid}>
          {notes.map((note) => (
            <article key={note.title} className={styles.noteTile}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ExploreMore items={exploreItems} />

      <FooterStrip />
    </main>
  );
}
