import {
  Award,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Package,
  Scale,
  Truck
} from "lucide-react";

import { AutomationItem } from "@/components/AutomationItem/AutomationItem";
import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { ExploreMore } from "@/components/ExploreMore/ExploreMore";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { OutcomeTile } from "@/components/OutcomeTile/OutcomeTile";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { climaOneV2Page } from "@/lib/content";

import styles from "./page.module.css";

const problemCards = [
  {
    title: "No chain of custody",
    description: "Material changed hands across CPs, plants, and converters with no unified record.",
  },
  {
    title: "Evidence gaps everywhere",
    description: "Documents, weights, and photos lived in WhatsApp, email, and spreadsheets.",
  },
  {
    title: "Compliance was hard to prove",
    description: "Demonstrating material provenance was a manual, slow, and incomplete process.",
  },
];

const exploreItems = [
  {
    href: "/climaone-v1/",
    category: "EPR Compliance",
    name: "ClimaOne V1",
    description: "Manage your EPR compliance lifecycle end to end.",
  },
  {
    href: "/chatbot/",
    category: "AI Assistant",
    name: "EPR Chatbot",
    description: "Instant answers to any EPR compliance question.",
  },
];

const deliverables = [
  {
    number: "01",
    title: "Bag-Level Material Traceability",
    description: "Every stage from collection to flakes is recorded in a verified digital trail — traceable back to its origin.",
    icon: Truck
  },
  {
    number: "02",
    title: "Operational Inventory Insights",
    description: "Live view of raw material, batches in process, and finished goods so you always know what is in stock.",
    icon: LayoutDashboard
  },
  {
    number: "03",
    title: "Integrated Quality Assurance",
    description: "Every production batch carries its own QC reports, accessible directly from the platform by any stakeholder.",
    icon: CheckCircle2
  },
  {
    number: "04",
    title: "Supply Chain Movement Tracking",
    description: "Track plastic from collection partners to the plant, and monitor rPET flakes as they move to downstream buyers.",
    icon: Scale
  }
];

const capabilities = [
  {
    number: "01",
    title: "Track every vehicle movement",
    description: "Log check-ins and check-outs at each facility. Every trip records timestamps, weight, and driver details.",
    icon: Truck
  },
  {
    number: "02",
    title: "Create and manage purchase orders",
    description: "Raise POs, set target weights, assign partners, and track fulfilment against each order.",
    icon: FileText
  },
  {
    number: "03",
    title: "Record weight at every stage",
    description: "Capture weigh-in and weigh-out readings at intake, processing, and dispatch. Build an unbroken weight audit trail.",
    icon: Scale
  },
  {
    number: "04",
    title: "Run quality control checks",
    description: "Conduct QC at processing stages, flag rejections, and record outcomes before material moves forward.",
    icon: CheckCircle2
  },
  {
    number: "05",
    title: "Issue EPR certificates",
    description: "Generate compliance certificates once fulfilment conditions are met. Downloadable and linked to the underlying PO.",
    icon: Award
  },
  {
    number: "06",
    title: "Producer compliance dashboard",
    description: "Give producers a real-time view of fulfilment status, certificate inventory, and upcoming obligations.",
    icon: LayoutDashboard
  }
];

export default function ClimaOneV2Page() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{climaOneV2Page.productEyebrow}</p>
          <h1 className={styles.heroTitle}>
            {climaOneV2Page.heroTitle.before}
            <span>{climaOneV2Page.heroTitle.highlight}</span>
          </h1>
          <p>{climaOneV2Page.subheading}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={climaOneV2Page.primaryAction.href} target="_blank" rel="noreferrer">
              {climaOneV2Page.primaryAction.label}
            </a>
            {climaOneV2Page.secondaryAction && (
              <a className={styles.ghostLink} href={climaOneV2Page.secondaryAction.href}>
                {climaOneV2Page.secondaryAction.label}
              </a>
            )}
          </div>
          <p className={styles.accessNote}>{climaOneV2Page.accessNote}</p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.heroStats}>
              {[
                ["12", "Pending vehicle actions"],
                ["07", "Pending QC"],
                ["18", "Raw material stock"],
                ["05", "Finished goods ready"]
              ].map(([value, label]) => (
                <div key={label} className={styles.heroTile}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroRows}>
              {[
                [styles.rowAmber, "Pending"],
                [styles.rowAmber, "In progress"],
                [styles.rowGreen, "Approved"]
              ].map(([tone, label], index) => (
                <div key={`${label}-${index}`} className={styles.heroRow}>
                  <span className={`${styles.rowDot} ${tone}`} />
                  <div className={styles.rowLines}>
                    <span className={styles.lineLong} />
                    <span className={styles.lineShort} />
                  </div>
                  <span className={styles.miniBadge}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Before ClimaOne® V2</p>
          <h2>What the supply chain was missing</h2>
        </div>
        <div className={styles.problemGrid}>
          {problemCards.map((card) => (
            <article key={card.title} className={styles.problemCard}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>{climaOneV2Page.rolesEyebrow}</p>
          <h2>{climaOneV2Page.rolesTitle}</h2>
          <p className={styles.journeyIntro}>ClimaOne® V2 gives every stakeholder in the recycling supply chain a dedicated view built around their responsibilities.</p>
        </div>
        <div className={styles.rolesGrid}>
          {climaOneV2Page.roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section id="how-it-works" className={styles.journeySection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How It Works</p>
          <h2>7 steps. Every one tracked.</h2>
          <p className={styles.journeyIntro}>{climaOneV2Page.journeyIntro}</p>
        </div>
        <div className={styles.journeyList}>
          {climaOneV2Page.journey.map((step, index) => (
            <article
              key={step.number}
              className={`${styles.journeyStep} ${index % 2 === 1 ? styles.reversed : ""}`}
            >
              <div className={styles.stepText}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                <img
                  src={`/screenshots/climaone-v2/step-${step.number}.png`}
                  alt={step.title}
                  className={styles.stepImage}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>One platform. Every stage tracked.</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap) => (
            <div key={cap.number} className={styles.capabilityCell}>
              <CapabilityBlock {...cap} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.automationSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Built-in Automation</p>
          <h2>Five things that run without anyone touching them</h2>
        </div>
        <div className={styles.automationList}>
          {climaOneV2Page.automation.map((item) => (
            <AutomationItem key={item.number} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>The outcome</p>
          <h2>What changes with ClimaOne® live</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {climaOneV2Page.outcomes.map((item) => (
            <div key={item.title} className={styles.outcomeCell}>
              <OutcomeTile {...item} />
            </div>
          ))}
        </div>
      </section>

      <ExploreMore items={exploreItems} />

      <FooterStrip />
    </main>
  );
}
