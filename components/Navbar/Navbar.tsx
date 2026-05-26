"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";

export function Navbar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsElevated(!entry.isIntersecting),
      { threshold: 1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header className={`${styles.header} ${isElevated ? styles.elevated : ""}`}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            <span className={styles.badge}>Re</span>
            <span className={styles.brandText}>ReCircle Product Hub</span>
          </Link>

          <Link href="/contact/" className={styles.helpLink}>
            Help &amp; Contact
          </Link>
        </div>
      </header>
    </>
  );
}
