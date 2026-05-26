import { overviewTools } from "@/lib/content";
import { DirectoryClient } from "@/components/DirectoryClient/DirectoryClient";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";

import styles from "./page.module.css";

export default function HomePage() {
  const liveCount = overviewTools.filter((t) => t.statusTone === "live").length;
  const categoryCount = new Set(overviewTools.map((t) => t.category)).size;

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>RECIRCLE PRODUCT HUB</p>
          <h1 className={styles.heroTitle}>
            Your tools. <span>All in one</span> place.
          </h1>
          <p className={styles.heroBody}>
            Everything the ReCircle team needs to work smarter — built in-house, ready to use.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statChip}>
              <span className={styles.statValue}>{overviewTools.length}</span>
              <span>Tools</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statChip}>
              <span className={styles.statValue}>{liveCount}</span>
              <span>Live</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statChip}>
              <span className={styles.statValue}>{categoryCount}</span>
              <span>Categories</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.directoryArea}>
        <DirectoryClient />
      </div>

      <FooterStrip />
    </main>
  );
}
