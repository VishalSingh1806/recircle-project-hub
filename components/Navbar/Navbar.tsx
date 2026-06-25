"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";

export function Navbar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isElevated, setIsElevated] = useState(false);
  const pathname = usePathname();
  const isContact = pathname === "/contact" || pathname === "/contact/";

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
            <img src="/recircle-logo.svg" alt="ReCircle" className={styles.logo} />
            <span className={styles.brandText}>Product Hub</span>
          </Link>

          {isContact ? (
            <Link href="/" className={styles.helpLink}>
              ← Home
            </Link>
          ) : (
            <Link href="/contact/" className={styles.helpLink}>
              Help &amp; Contact
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
