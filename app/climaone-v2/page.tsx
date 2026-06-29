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
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { OutcomeTile } from "@/components/OutcomeTile/OutcomeTile";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { climaOneV2Page } from "@/lib/content";

import styles from "./page.module.css";

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
    title: "Bag-Level Material Traceability",
    description: "From the moment raw material is transported from a collection partner to the moment recycled flakes leave the plant, ClimaOne records every stage in a verified digital trail you can follow.",
    icon: Truck
  },
  {
    number: "02",
    title: "Operational Inventory Insights",
    description: "Gain access to a live view of raw material, batches in process, and finished goods so you always know what is in stock and what is ready for dispatch.",
    icon: LayoutDashboard
  },
  {
    number: "03",
    title: "Integrated Quality Assurance",
    description: "Every production batch carries its own QC reports and technical specifications, allowing stakeholders to access verified quality records directly from the platform.",
    icon: CheckCircle2
  },
  {
    number: "04",
    title: "Supply Chain Movement Tracking",
    description: "Track plastic collected by partners as it reaches the plant, and monitor rPET flakes as they move from production lines to downstream buyers.",
    icon: Scale
  },
  {
    number: "05",
    title: "Operational Data & Compliance Reporting",
    description: "Transform your daily production activity into structured insights through dashboards and reports that help you monitor performance, verify traceability, and stay on top of compliance requirements.",
    icon: FileText
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
          </div>
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

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>{climaOneV2Page.rolesEyebrow}</p>
          <h2>{climaOneV2Page.rolesTitle}</h2>
          <p className={styles.journeyIntro}>ClimaOne equips every stakeholder in the recycling supply chain with a dedicated dashboard designed around their role.</p>
        </div>
        <div className={styles.rolesGrid}>
          {climaOneV2Page.roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How it works</p>
          <h2>8 steps. Every one tracked.</h2>
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
          <h2>One platform. Multiple optimisation capabilities.</h2>
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

      <FooterStrip />
    </main>
  );
}
