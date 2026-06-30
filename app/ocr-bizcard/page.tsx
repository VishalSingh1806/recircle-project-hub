import {
  Briefcase,
  Building2,
  FileCheck,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Settings,
  User,
  Users
} from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { ExploreMore } from "@/components/ExploreMore/ExploreMore";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: Users,
    name: "All staff",
    description:
      "Anyone who collects business cards at events, meetings, or field visits"
  },
  {
    icon: FileCheck,
    name: "EPR team",
    description: "Save producer and partner contacts without manual data entry"
  },
  {
    icon: Handshake,
    name: "Grants & BD",
    description:
      "Turn a stack of cards from a conference into a clean, exportable contact list"
  },
  {
    icon: Settings,
    name: "Tech / Admin",
    description: "Manage and organise contacts across departments from one place"
  }
] as const;

const fields = [
  {
    icon: User,
    title: "Name",
    description: "Full name as printed on the card"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mobile and landline numbers - extraction is optimised for accuracy"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Primary email address"
  },
  {
    icon: Building2,
    title: "Company",
    description: "Organisation or company name"
  },
  {
    icon: Briefcase,
    title: "Designation",
    description: "Job title or role"
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Office or mailing address if present"
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Tell the system who you are",
    description:
      "Before uploading, enter your name, team, and the event or context where you collected the cards. This helps organise saved contacts by department and occasion."
  },
  {
    number: "02",
    title: "Upload images or a folder",
    description:
      "Upload individual card images (JPG, PNG, JPEG) or PDFs, or select an entire folder at once. The system supports up to 300 files per batch with a total size limit of 20MB. PDFs are converted page by page before processing."
  },
  {
    number: "03",
    title: "Check and edit the extracted data",
    description:
      "All extracted contacts appear in an editable table. Click any cell to correct a value before saving. Important - make all your corrections before saving for the first time. Once a contact is saved, re-saving the same row may be skipped due to duplicate prevention."
  },
  {
    number: "04",
    title: "Save to the database",
    description:
      "Hit save to store your contacts. They are saved to the ReCircle contacts database, organised by your name, team, and event. Contacts are searchable by department - Tech, EPR, Grants, Textile, Recycling, Marketing, Accounts."
  },
  {
    number: "05",
    title: "Export as CSV or send bulk email",
    description:
      "Download all extracted contacts as a CSV file for use in spreadsheets or other tools. Or go to the email page to send a bulk outreach email directly from your contact list. There is no automatic CRM sync - export is the current path to Bitrix24 or other tools."
  }
] as const;

const notes = [
  {
    title: "Edit before you save",
    description:
      "Corrections made after saving may not update existing records due to duplicate prevention. Always review and correct the table before hitting save for the first time."
  },
  {
    title: "300 files | 20MB total",
    description:
      "The system handles up to 300 cards per batch at a maximum of 20MB total. Split large collections into multiple batches."
  },
  {
    title: "Multiple cards per image",
    description:
      "If a single image contains more than one business card, the system will try to return a separate contact row for each card."
  },
  {
    title: "No CRM sync yet",
    description:
      "Contacts are saved to the ReCircle database and exportable as CSV. There is no automatic sync to Bitrix24 or other tools - use the CSV export to import manually."
  }
] as const;

const exploreItems = [
  {
    href: "/ocr-epr/",
    category: "Document OCR",
    name: "OCR for EPR",
    description: "Extract data from shipment documents automatically.",
  },
  {
    href: "/chatbot/",
    category: "AI Assistant",
    name: "EPR Chatbot",
    description: "Get instant answers on EPR compliance questions.",
  },
];

export default function OcrBizCardPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Document OCR</p>
          <h1 className={styles.title}>
            A stack of cards. <span>A clean contact list. Done in seconds.</span>
          </h1>
          <p>
            Upload a folder of business card images or PDFs. The system reads every card, extracts
            contact details, and gives you an editable table ready to save, export, or use for
            outreach.
          </p>
          <a className={styles.primaryButton} href="https://ocr.recircle.in/" target="_blank" rel="noreferrer">
            Open Business Card OCR
          </a>
          <p className={styles.accessNote}>
            Works on Chrome and Edge | Desktop | Up to 300 cards per batch
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.cardVisual}>
              <span className={styles.cardBrand} />
              <span className={styles.cardLineLong} />
              <span className={styles.cardLineShort} />
            </div>
            <div className={styles.contactTable}>
              <div className={styles.tableHead}>
                <span>Name</span>
                <span>Company</span>
                <span>Phone</span>
                <span>Email</span>
              </div>
              {[0, 1, 2].map((row) => (
                <div key={row} className={styles.tableRow}>
                  {[0, 1, 2, 3].map((cell) => (
                    <span key={cell} className={styles.tableCell}>
                      <span className={styles.tableLineLong} />
                      <span className={styles.tableLineShort} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>For everyone who collects contacts</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.extractSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What gets extracted</p>
          <h2>Six fields. Every card. Automatically.</h2>
          <p className={styles.subtext}>
            The system reads each business card and pulls out the key contact fields. It even tries
            to detect multiple cards in a single image - returning one contact row per card.
            English and regional language cards are both supported.
          </p>
        </div>
        <div className={styles.grid3}>
          {fields.map((field) => {
            const Icon = field.icon;
            return (
              <article key={field.title} className={styles.fieldTile}>
                <div className={styles.fieldHead}>
                  <Icon size={18} />
                  <h3 className={styles.fieldTitle}>{field.title}</h3>
                </div>
                <p className={styles.fieldDescription}>{field.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How to use it</p>
          <h2>Step by step</h2>
        </div>
        <div className={styles.stepsList}>
          {steps.map((step, index) => (
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
                <img
                  src={`/screenshots/ocr-bizcard/step-${step.number}.png`}
                  alt={step.title}
                  className={styles.stepImage}
                />
              </div>
            </article>
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
