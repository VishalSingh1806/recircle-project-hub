import Link from "next/link";

import styles from "./FooterStrip.module.css";

export function FooterStrip() {
  return (
    <footer className={styles.footer}>
      <div className={styles.stripWrap}>
        <div className={styles.strip}>
          <div>
<h2 className={styles.title}>
              Can&apos;t find what you need? <span>Talk to us.</span>
            </h2>
          </div>
          <Link className={styles.button} href="/contact/">
            Go to Help &amp; Contact
          </Link>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          Built by ReCircle Tech &nbsp;·&nbsp; Internal tools for the team
        </div>
      </div>
    </footer>
  );
}
