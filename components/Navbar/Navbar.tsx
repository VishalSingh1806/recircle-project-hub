"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";

const toolLinks = [
  { href: "/climaone-v1/", label: "ClimaOne® V1" },
  { href: "/climaone-v2/", label: "ClimaOne® V2" },
  { href: "/ocr-epr/", label: "OCR for EPR" },
  { href: "/ocr-bizcard/", label: "OCR Biz Cards" },
  { href: "/route-optimizer/", label: "Route Optimizer" },
  { href: "/chatbot/", label: "EPR Chatbot" },
  { href: "/drive-automation/", label: "Drive Automation" },
];

export function Navbar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isElevated, setIsElevated] = useState(false);
  const pathname = usePathname();
  const isContact = pathname === "/contact" || pathname === "/contact/";
  const isHome = pathname === "/" || pathname === "";

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
          </Link>

          {isContact ? (
            <Link href="/" className={styles.helpLink}>
              ← Home
            </Link>
          ) : (
            <Link href="/contact/" className={styles.helpLink}>
              Help &amp; Contact <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {!isHome && !isContact && (
          <nav className={styles.toolNav} aria-label="All tools">
            <div className={styles.toolNavInner}>
              {toolLinks.map((tool) => {
                const isActive =
                  pathname === tool.href || pathname === tool.href.slice(0, -1);
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`${styles.toolNavLink} ${isActive ? styles.toolNavActive : ""}`}
                  >
                    {tool.label.includes("®") ? (
                      <>
                        {tool.label.split("®")[0]}
                        <sup>®</sup>
                        {tool.label.split("®")[1]}
                      </>
                    ) : (
                      tool.label
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
