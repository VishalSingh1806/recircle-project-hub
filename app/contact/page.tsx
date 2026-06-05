import { AccentBar } from "@/components/AccentBar/AccentBar";
import { Accordion } from "@/components/Accordion/Accordion";
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { contactDetails, faqItems } from "@/lib/content";

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main>
      <AccentBar />

      <section className={styles.hero}>
        <h1>We&apos;re here to help.</h1>
        <p className={styles.intro}>
          Have a question about any of the tools? Can&apos;t access something? Want to suggest a new
          feature? Reach out - we&apos;re happy to help.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>General contact</p>
          <h2>Start with the ReCircle Tech team</h2>
        </div>
        <ContactCard {...contactDetails} />
      </section>

<section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2>Common questions</h2>
        </div>
        <Accordion items={faqItems} />
      </section>
    </main>
  );
}
