import { AutomationItem } from "@/components/AutomationItem/AutomationItem";
import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { LearnMoreStrip } from "@/components/LearnMoreStrip/LearnMoreStrip";
import { OutcomeTile } from "@/components/OutcomeTile/OutcomeTile";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { climaOneV1Page } from "@/lib/content";

import styles from "./page.module.css";

export default function ClimaOneV1Page() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{climaOneV1Page.productEyebrow}</p>
          <h1 className={styles.heroTitle}>
            {climaOneV1Page.heroTitle.before}
            <span>{climaOneV1Page.heroTitle.highlight}</span>
            {climaOneV1Page.heroTitle.after}
          </h1>
          <p>{climaOneV1Page.subheading}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={climaOneV1Page.primaryAction.href} target="_blank" rel="noreferrer">
              {climaOneV1Page.primaryAction.label}
            </a>
            <a className={styles.ghostLink} href={climaOneV1Page.secondaryAction?.href} target="_blank" rel="noreferrer">
              {climaOneV1Page.secondaryAction?.label}
            </a>
          </div>
          <p className={styles.accessNote}>{climaOneV1Page.accessNote}</p>
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
                ["142", "Active POs"],
                ["38", "Certificates"],
                ["94%", "Fulfilment"],
                ["26", "Active vehicles"]
              ].map(([value, label]) => (
                <div key={label} className={styles.heroTile}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroRows}>
              {[
                [styles.rowGreen, "Issued"],
                [styles.rowAmber, "In progress"],
                [styles.rowGray, "Pending"]
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
        <p className={styles.sectionEyebrow}>The problem we solved</p>
        <p className={styles.quote}>
          Before ClimaOne<sup>®</sup> V1, EPR compliance lived across WhatsApp groups, spreadsheets, and phone calls.
          The entire lifecycle is now in one platform.
        </p>
        <div className={styles.problemGrid}>
          {climaOneV1Page.problemTiles.map((tile) => (
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
          <h2>5 steps. Every one tracked.</h2>
          <p className={styles.journeyIntro}>{climaOneV1Page.journeyIntro}</p>
        </div>
        <div className={styles.journeyList}>
          {climaOneV1Page.journey.map((step, index) => (
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/screenshots/climaone-v1/step-0${parseInt(step.number)}.png`}
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
          <p className={styles.sectionEyebrow}>{climaOneV1Page.rolesEyebrow}</p>
          <h2>{climaOneV1Page.rolesTitle}</h2>
        </div>
        <div className={styles.rolesGrid}>
          {climaOneV1Page.roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>What you can do inside ClimaOne<sup>®</sup> V1</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {climaOneV1Page.capabilities.map((cap) => (
            <div key={cap.number} className={styles.capabilityCell}>
              <CapabilityBlock {...cap} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.automationSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Built-in automation</p>
          <h2>Five automated workflows, zero manual triggers</h2>
        </div>
        <div className={styles.automationList}>
          {climaOneV1Page.automation.map((item) => (
            <AutomationItem key={item.number} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>The outcome</p>
          <h2>What the team gains with ClimaOne<sup>®</sup></h2>
        </div>
        <div className={styles.outcomeGrid}>
          {climaOneV1Page.outcomes.map((item) => (
            <OutcomeTile key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.dashboardSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Compliance</p>
          <h2>Everything a compliance manager needs to see</h2>
        </div>
        <p className={styles.dashboardNote}>{climaOneV1Page.dashboardNote}</p>
      </section>

      <LearnMoreStrip {...climaOneV1Page.learnMore} />

      <FooterStrip />
    </main>
  );
}
