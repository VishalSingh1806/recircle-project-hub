import {
  Activity,
  BarChart2,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  FileText,
  FolderSync,
  Package,
  UserCircle
} from "lucide-react";
import Link from "next/link";

import { FooterStrip } from "@/components/FooterStrip/FooterStrip";

import styles from "./page.module.css";

const quickLinks = [
  { href: "/climaone-v1/",      label: "ClimaOne V1",       icon: LayoutDashboard },
  { href: "/climaone-v2/",      label: "ClimaOne V2",       icon: Package },
  { href: "/ocr-epr/",          label: "OCR for EPR",       icon: FileText },
  { href: "/chatbot/",          label: "EPR Chatbot",       icon: MessageCircle },
  { href: "/route-optimizer/",  label: "Route Optimizer",   icon: MapPin },
  { href: "/ocr-bizcard/",      label: "Biz Card OCR",      icon: UserCircle },
  { href: "/drive-automation/", label: "Drive Automation",  icon: FolderSync },
];

const categories = [
  {
    label: "EPR Compliance",
    tools: [
      {
        href: "/climaone-v1/",
        category: "EPR Compliance",
        name: "ClimaOne V1",
        description: "Manage your full EPR compliance cycle in one place. From purchase orders to certificates.",
      },
      {
        href: "/chatbot/",
        category: "EPR Compliance",
        name: "EPR Chatbot",
        description: "Instant answers to any EPR compliance question. No waiting. Just ask.",
      },
    ],
  },
  {
    label: "Document Tools",
    tools: [
      {
        href: "/ocr-epr/",
        category: "Document OCR",
        name: "OCR for EPR",
        description: "Upload a folder of shipment documents. Get structured data out. No manual entry.",
      },
      {
        href: "/ocr-bizcard/",
        category: "Document OCR",
        name: "OCR for Business Cards",
        description: "Turn a stack of business cards into a clean, exportable contact list in seconds.",
      },
    ],
  },
  {
    label: "Operations",
    tools: [
      {
        href: "/climaone-v2/",
        category: "Recycling Operations",
        name: "ClimaOne V2",
        description: "Digitise the entire recycling process. Full material traceability from collection to converter.",
      },
      {
        href: "/route-optimizer/",
        category: "Logistics",
        name: "Route Optimizer",
        description: "Upload your pickup list. Get optimized routes, area clusters, and the best day to run each.",
      },
      {
        href: "/drive-automation/",
        category: "Google Drive Admin",
        name: "Drive Automation",
        description: "Audit Drive access, transfer file and folder ownership in bulk, and replace shared permissions across the org.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.chip}>Internal Platform</span>
          <h1 className={styles.heroTitle}>Everything you need to work smarter.</h1>
          <p className={styles.heroBody}>Built by the ReCircle tech team. Ready to use.</p>
          <div className={styles.heroActions}>
            <a href="#tools" className={styles.primaryBtn}>Browse All Tools</a>
            <Link href="/contact/" className={styles.ghostBtn}>Help &amp; Contact</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <div className={styles.quickBar}>
        <div className={styles.quickInner}>
          {quickLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={styles.quickItem}>
              <span className={styles.quickIcon}><Icon size={16} /></span>
              <span className={styles.quickLabel}>{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tool Grid */}
      <div id="tools" className={styles.toolsWrap}>
        {categories.map((cat) => (
          <div key={cat.label} className={styles.categoryBlock}>
            <div className={styles.categoryInner}>
              <p className={styles.categoryLabel}>{cat.label}</p>
              <div className={styles.toolGrid}>
                {cat.tools.map((tool) => (
                  <article key={tool.href} className={styles.toolCard}>
                    <span className={styles.cardBadge}>{tool.category}</span>
                    <h3 className={styles.cardName}>{tool.name}</h3>
                    <p className={styles.cardDesc}>{tool.description}</p>
                    <Link href={tool.href} className={styles.cardCta}>Open Tool →</Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterStrip />
    </main>
  );
}
