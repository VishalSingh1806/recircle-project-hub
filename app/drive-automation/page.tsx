import {
  BarChart2,
  FileSearch,
  FolderSync,
  RefreshCw,
  Share2,
  ShieldCheck,
  Users
} from "lucide-react";
import Link from "next/link";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { ExploreMore } from "@/components/ExploreMore/ExploreMore";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: ShieldCheck,
    name: "IT / Admin team",
    description:
      "Audit who has access to what, transfer ownership when people leave, and clean up shared permissions across the org"
  },
  {
    icon: Users,
    name: "HR & Operations",
    description:
      "Reassign file and folder ownership during team changes without losing access to any documents"
  },
  {
    icon: BarChart2,
    name: "Managers",
    description:
      "Get a full report of which files an employee can access before offboarding or role changes"
  }
] as const;

const capabilities = [
  {
    number: "01",
    title: "User File Audit",
    description: "Generate a full CSV report of every file a user has access to — excluding files they own. Run for a single user or across all users at once.",
    icon: FileSearch
  },
  {
    number: "02",
    title: "Folder Transfer",
    description: "Transfer ownership of all folders from one user to another in a single operation. Useful when someone leaves or changes roles.",
    icon: FolderSync
  },
  {
    number: "03",
    title: "Single File Transfer",
    description: "Transfer ownership of specific files or folders individually. Useful when you need to move select items rather than everything.",
    icon: Share2
  },
  {
    number: "04",
    title: "Replace Shared Access",
    description: "Replace one user's access with another across all shared files. Swap permissions org-wide without touching each file manually.",
    icon: RefreshCw
  }
];

const outcomes = [
  {
    icon: FileSearch,
    title: "Full access visibility",
    description: "Know exactly which files every user can see, before and after any org change."
  },
  {
    icon: FolderSync,
    title: "Clean ownership handoffs",
    description: "Transfer files and folders in bulk when people leave or move roles — no files left behind."
  },
  {
    icon: ShieldCheck,
    title: "Tighter access control",
    description: "Replace stale shared access across all files in one step, keeping permissions accurate."
  }
] as const;

const exploreItems = [
  {
    href: "/ocr-bizcard/",
    category: "Document OCR",
    name: "OCR for Business Cards",
    description: "Turn a stack of business cards into a contact list.",
  },
  {
    href: "/route-optimizer/",
    category: "Logistics",
    name: "Route Optimizer",
    description: "Plan smarter collection routes without manual ordering.",
  },
];

export default function DriveAutomationPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Google Drive Admin</p>
          <h1 className={styles.title}>
            Audit, transfer, and manage <span>Drive access. In one place.</span>
          </h1>
          <p>
            A Google Sheets sidebar tool for Drive admins. Audit who has access to what, transfer
            folder and file ownership in bulk, and replace shared permissions across the org —
            without touching each file manually.
          </p>
          <Link className={styles.githubButton} href="/contact/">
            Available by request
          </Link>
          <p className={styles.accessNote}>
            Google Workspace admin access required | Contact the tech team to activate
          </p>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for Drive admins and ops teams</h2>
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
          <h2>Four tools. Full Drive control.</h2>
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
          <h2>Less manual admin, tighter access control</h2>
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

      <ExploreMore items={exploreItems} />

      <FooterStrip />
    </main>
  );
}
