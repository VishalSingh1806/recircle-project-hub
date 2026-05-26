import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { LearnMoreStrip } from "@/components/LearnMoreStrip/LearnMoreStrip";
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
          <h1 className={styles.title}>
            {climaOneV1Page.heroTitle.before}
            <span>{climaOneV1Page.heroTitle.highlight}</span>
            {climaOneV1Page.heroTitle.after}
          </h1>
          <p className={styles.body}>{climaOneV1Page.subheading}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={climaOneV1Page.primaryAction.href} target="_blank" rel="noreferrer">
              {climaOneV1Page.primaryAction.label}
            </a>
            <a
              className={styles.ghostLink}
              href={climaOneV1Page.secondaryAction?.href}
              target="_blank"
              rel="noreferrer"
            >
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
            <div className={styles.statsGrid}>
              {[
                ["142", "Active POs"],
                ["38", "Certificates"],
                ["94%", "Fulfilment"],
              ].map(([value, label]) => (
                <div key={label} className={styles.statTile}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.statusList}>
              {[
                [styles.statusGreen, "Issued"],
                [styles.statusAmber, "In progress"],
                [styles.statusGray, "Pending"],
                [styles.statusGreen, "Issued"],
              ].map(([tone, label], index) => (
                <div key={`${label}-${index}`} className={styles.statusRow}>
                  <span className={`${styles.statusDot} ${tone}`} />
                  <div className={styles.statusLines}>
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
          <h2>What you can do inside ClimaOne V1</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {climaOneV1Page.capabilities.map((capability) => (
            <div key={capability.number} className={styles.capabilityCell}>
              <CapabilityBlock {...capability} />
            </div>
          ))}
        </div>
      </section>

      <LearnMoreStrip {...climaOneV1Page.learnMore} />

      <FooterStrip />
    </main>
  );
}
