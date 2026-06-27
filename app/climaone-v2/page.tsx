import {
  Award,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Scale,
  Truck
} from "lucide-react";

import { AutomationItem } from "@/components/AutomationItem/AutomationItem";
import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { LearnMoreStrip } from "@/components/LearnMoreStrip/LearnMoreStrip";
import { OutcomeTile } from "@/components/OutcomeTile/OutcomeTile";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { climaOneV2Page } from "@/lib/content";

import styles from "./page.module.css";

const capabilities = [
  {
    number: "01",
    title: "Track every vehicle movement",
    description: "Log vehicle check-ins and check-outs at each facility. Every trip is recorded with timestamps, weight, and driver details.",
    icon: Truck
  },
  {
    number: "02",
    title: "Create and manage purchase orders",
    description: "Raise POs for raw material collection, set target weights, assign partners, and track fulfilment against each order.",
    icon: FileText
  },
  {
    number: "03",
    title: "Record weight at every stage",
    description: "Capture weigh-in and weigh-out readings at intake, processing, and dispatch, building an unbroken weight audit trail.",
    icon: Scale
  },
  {
    number: "04",
    title: "Run quality control checks",
    description: "Conduct QC at processing stages, flag rejections, and record the outcome before material moves to the next step.",
    icon: CheckCircle2
  },
  {
    number: "05",
    title: "Issue EPR certificates",
    description: "Generate compliance certificates once fulfilment conditions are met. Certificates are downloadable and linked to the underlying PO data.",
    icon: Award
  },
  {
    number: "06",
    title: "Producer compliance dashboard",
    description: "Give producers a real-time view of their fulfilment status, certificate inventory, and upcoming obligations in one place.",
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
          <a className={styles.primaryButton} href={climaOneV2Page.primaryAction.href} target="_blank" rel="noreferrer">
            {climaOneV2Page.primaryAction.label}
          </a>
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
                ["05", "Finished goods ready"],
                ["24", "Open PO weight"]
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
        <p className={styles.quote}>
          Material was moving. But proving where it came from, who touched it, and whether the
          evidence was complete - that took days. Now it takes minutes.
        </p>
        <div className={styles.problemGrid}>
          {climaOneV2Page.problemTiles.map((tile) => (
            <article key={tile.title} className={styles.problemTile}>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How it works</p>
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

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>{climaOneV2Page.rolesEyebrow}</p>
          <h2>{climaOneV2Page.rolesTitle}</h2>
        </div>
        <div className={styles.rolesGrid}>
          {climaOneV2Page.roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>What you can do inside ClimaOne<sup>®</sup> V2</h2>
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
          <p className={styles.sectionEyebrow}>Built-in automation</p>
          <h2>Five things that happen without anyone touching them</h2>
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
          <h2>What changes when this is fully live</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {climaOneV2Page.outcomes.map((item) => (
            <OutcomeTile key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.dashboardSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Compliance</p>
          <h2>Everything a producer needs to see</h2>
        </div>
        <p className={styles.dashboardNote}>{climaOneV2Page.dashboardNote}</p>
      </section>

      <LearnMoreStrip {...climaOneV2Page.learnMore} />

      <FooterStrip />
    </main>
  );
}
