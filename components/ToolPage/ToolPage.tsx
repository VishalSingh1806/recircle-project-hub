import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { JourneyStep } from "@/components/JourneyStep/JourneyStep";
import { LearnMoreStrip } from "@/components/LearnMoreStrip/LearnMoreStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { placeholderToolPages } from "@/lib/content";

import styles from "./ToolPage.module.css";

type PlaceholderPage = (typeof placeholderToolPages)[keyof typeof placeholderToolPages];

type ToolPageProps = {
  tool: PlaceholderPage;
};

export function ToolPage({ tool }: ToolPageProps) {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{tool.productEyebrow}</p>
          <h1 className={styles.title}>
            {tool.heroTitle.before}
            <span>{tool.heroTitle.highlight}</span>
            {tool.heroTitle.after}
          </h1>
          <p className={styles.body}>{tool.subheading}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={tool.primaryAction.href}>
              {tool.primaryAction.label}
            </a>
            {"secondaryAction" in tool && tool.secondaryAction ? (
              <a className={styles.ghostLink} href={tool.secondaryAction.href}>
                {tool.secondaryAction.label}
              </a>
            ) : null}
          </div>
          <p className={styles.accessNote}>{tool.accessNote}</p>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>{tool.rolesEyebrow}</p>
          <h2>{tool.rolesTitle}</h2>
        </div>
        <div className={styles.rolesGrid}>
          {tool.roles.map((role) => (
            <RoleCard key={role.name + role.description} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How to use it</p>
          <h2>How to use it, step by step</h2>
        </div>
        <div className={styles.stepsList}>
          {tool.steps.map((step, index) => (
            <JourneyStep key={step.number} {...step} reversed={index % 2 === 1} />
          ))}
        </div>
      </section>

      {"learnMore" in tool && tool.learnMore ? <LearnMoreStrip {...tool.learnMore} /> : null}

      <FooterStrip />
    </main>
  );
}
