import {
  ArrowRight,
  FileText,
  FolderSync,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Package,
  Sparkles,
  UserCircle
} from "lucide-react";
import Link from "next/link";

import { FooterStrip } from "@/components/FooterStrip/FooterStrip";

import styles from "./page.module.css";

const quickLinks = [
  { href: "/climaone-v1/", label: "ClimaOne V1", icon: LayoutDashboard },
  { href: "/climaone-v2/", label: "ClimaOne V2", icon: Package },
  { href: "/ocr-epr/", label: "OCR for EPR", icon: FileText },
  { href: "/chatbot/", label: "EPR Chatbot", icon: MessageCircle },
  { href: "/route-optimizer/", label: "Route Optimizer", icon: MapPin },
  { href: "/ocr-bizcard/", label: "Biz Card OCR", icon: UserCircle },
  { href: "/drive-automation/", label: "Drive Automation", icon: FolderSync },
];

const categories = [
  {
    label: "EPR Compliance",
    kicker: "Control room",
    description:
      "For teams tracking obligations, certificates, partner queries, and regulatory decisions.",
    metric: "2 core tools",
    tools: [
      {
        href: "/climaone-v1/",
        category: "EPR Compliance",
        name: "ClimaOne V1",
        description:
          "Manage your full EPR compliance cycle in one place. From purchase orders to certificates.",
        icon: LayoutDashboard,
      },
      {
        href: "/chatbot/",
        category: "EPR Compliance",
        name: "EPR Chatbot",
        description: "Instant answers to any EPR compliance question. No waiting. Just ask.",
        icon: MessageCircle,
      },
    ],
  },
  {
    label: "Document Tools",
    kicker: "Fast capture",
    description: "Turn messy paperwork and field contacts into structured, searchable records.",
    metric: "OCR ready",
    tools: [
      {
        href: "/ocr-epr/",
        category: "Document OCR",
        name: "OCR for EPR",
        description: "Upload a folder of shipment documents. Get structured data out. No manual entry.",
        icon: FileText,
      },
      {
        href: "/ocr-bizcard/",
        category: "Document OCR",
        name: "OCR for Business Cards",
        description: "Turn a stack of business cards into a clean, exportable contact list in seconds.",
        icon: UserCircle,
      },
    ],
  },
  {
    label: "Operations",
    kicker: "Movement layer",
    description:
      "Coordinate recycling workflows, routing, and workspace administration without hopping between trackers.",
    metric: "3 workflows",
    tools: [
      {
        href: "/climaone-v2/",
        category: "Recycling Operations",
        name: "ClimaOne V2",
        description:
          "Digitise the entire recycling process. Full material traceability from collection to converter.",
        icon: Package,
      },
      {
        href: "/route-optimizer/",
        category: "Logistics",
        name: "Route Optimizer",
        description:
          "Upload your pickup list. Get optimized routes, area clusters, and the best day to run each.",
        icon: MapPin,
      },
      {
        href: "/drive-automation/",
        category: "Google Drive Admin",
        name: "Drive Automation",
        description:
          "Audit Drive access, transfer file and folder ownership in bulk, and replace shared permissions across the org.",
        icon: FolderSync,
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.chip}>
            <Sparkles size={14} />
            Internal Lab
          </span>
          <h1 className={styles.heroTitle}>
            The fastest way into ReCircle&apos;s operating tools.
          </h1>
          <p className={styles.heroBody}>
            Compliance, OCR, routing, and operational workflows in one focused workspace.
          </p>
          <div className={styles.heroActions}>
            <a href="#tools" className={styles.primaryBtn}>
              Browse tools
              <ArrowRight size={18} />
            </a>
            <Link href="/contact/" className={styles.ghostBtn}>
              Help &amp; Contact
            </Link>
          </div>
        </div>
      </section>

      <nav className={styles.quickBar} aria-label="Quick access">
        <div className={styles.quickInner}>
          <span className={styles.quickTitle}>Jump in</span>
          {quickLinks.map(({ href, label, icon: Icon }, index) => (
            <Link key={href} href={href} className={styles.quickItem}>
              <span className={styles.quickIcon} data-tone={index % 4}>
                <Icon size={16} />
              </span>
              <span className={styles.quickLabel}>{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div id="tools" className={styles.toolsWrap}>
        <div className={styles.toolsHeader}>
          <p className={styles.sectionLabel}>Tool directory</p>
          <h2>Choose the workflow, then open the tool.</h2>
          <p>
            The homepage groups tools by the job people are trying to finish, so teams can scan
            quickly without reading every card.
          </p>
        </div>

        {categories.map((cat, index) => {
          const alignmentClass =
            index % 2 === 1 ? styles.categoryBlockRight : styles.categoryBlockLeft;

          return (
            <div key={cat.label} className={`${styles.categoryBlock} ${alignmentClass}`}>
              <div className={styles.categoryInner}>
                <div className={styles.categoryIntro}>
                  <p className={styles.categoryKicker}>{cat.kicker}</p>
                  <h2>{cat.label}</h2>
                  <p>{cat.description}</p>
                  <span>{cat.metric}</span>
                </div>
                <div className={styles.toolGrid}>
                  {cat.tools.map((tool) => (
                    <Link key={tool.href} href={tool.href} className={styles.toolCard}>
                      <div className={styles.cardTop}>
                        <span className={styles.cardIcon}>
                          <tool.icon size={20} />
                        </span>
                        <span className={styles.cardBadge}>{tool.category}</span>
                      </div>
                      <h3 className={styles.cardName}>{tool.name}</h3>
                      <p className={styles.cardDesc}>{tool.description}</p>
                      <span className={styles.cardCta}>
                        Open tool
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <FooterStrip />
    </main>
  );
}
