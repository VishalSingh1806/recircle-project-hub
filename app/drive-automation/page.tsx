import {
  Bell,
  CheckCircle2,
  FileCheck2,
  FolderSync,
  Github,
  Mail,
  ShieldCheck,
  Sparkles,
  Upload,
  Users
} from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: Users,
    name: "HR Manager",
    description:
      "Keep employee documents organised without manually downloading, renaming, and resharing files"
  },
  {
    icon: Upload,
    name: "HR Admin",
    description:
      "Drop documents into one Drive folder and let the automation sort each file into the right place"
  },
  {
    icon: Bell,
    name: "Team Leads",
    description:
      "Receive file-ready notifications with direct Drive links when the documents they need are processed"
  }
] as const;

const capabilities = [
  {
    number: "01",
    title: "Drop files into the intake folder",
    description: "Upload employee documents to one configured Google Drive folder. The automation watches it continuously for new files.",
    icon: Upload
  },
  {
    number: "02",
    title: "Auto-classify document types",
    description: "The workflow reads the file name and metadata to identify payslips, contracts, ID proofs, policy docs, and other HR records.",
    icon: Sparkles
  },
  {
    number: "03",
    title: "Rename to standard format",
    description: "Every file is renamed into the agreed HR naming convention before it moves anywhere, keeping records consistent.",
    icon: FileCheck2
  },
  {
    number: "04",
    title: "Move to the correct folder",
    description: "Each file is routed to the right employee or document-category folder automatically — no manual drag and drop.",
    icon: FolderSync
  },
  {
    number: "05",
    title: "Email notification with direct link",
    description: "The right person gets an email with a direct Drive link as soon as the file lands in the correct location.",
    icon: Mail
  },
  {
    number: "06",
    title: "Track every processed file",
    description: "A timestamped log records what moved, when, and where — so HR always knows what has been processed.",
    icon: ShieldCheck
  }
];

const outcomes = [
  {
    icon: FileCheck2,
    title: "Cleaner HR records",
    description: "Files land in a predictable folder structure with consistent names."
  },
  {
    icon: ShieldCheck,
    title: "Fewer handoffs",
    description: "No manual download-transfer-upload loop between HR and team folders."
  },
  {
    icon: CheckCircle2,
    title: "Visible completion",
    description: "Processed files are tracked so HR knows what moved and when."
  }
] as const;

export default function DriveAutomationPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Product 07 | Drive Automation</p>
          <h1 className={styles.title}>
            HR files, sorted and <span>shared automatically.</span>
          </h1>
          <p>
            Drop documents into the configured Google Drive folder. The automation renames them,
            moves them into the right destination, notifies the right person, and keeps a processing
            log so HR does not have to chase files manually.
          </p>
          <a className={styles.githubButton} href="[INSERT GITHUB URL]" target="_blank" rel="noreferrer">
            <Github size={18} />
            View on GitHub
          </a>
          <p className={styles.accessNote}>
            Internal HR workflow | Google Drive based | Contact the tech team for folder access
          </p>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for the HR workflow</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>What you can do with Drive Automation</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap) => (
            <div key={cap.number} className={styles.capabilityCell}>
              <CapabilityBlock {...cap} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What changes</p>
          <h2>Less manual admin, more reliable records</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <article key={outcome.title} className={styles.outcomeTile}>
                <Icon size={20} />
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <FooterStrip />
    </main>
  );
}
