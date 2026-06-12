import Link from "next/link";

import { overviewTools } from "@/lib/content";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>RECIRCLE PRODUCT HUB</p>
          <h1 className={styles.heroTitle}>
            Welcome to Recircle <span>tools.</span>
          </h1>
          <p className={styles.heroBody}>
            Everything the ReCircle team needs to work smarter — built in-house, ready to use.
          </p>
        </div>
      </section>

      {/* ── Tool feature rows ─────────────────────────────── */}
      <div className={styles.featuresWrap}>
        {overviewTools.map((tool, index) => {
          const Icon = tool.icon;
          const isReversed = index % 2 === 1;

          return (
            <section
              key={tool.number}
              className={`${styles.featureRow} ${isReversed ? styles.reversed : ""}`}
            >
              <div className={styles.featureInner}>

                {/* ── Visual mockup ── */}
                <div className={styles.featureVisual}>
                  <div className={styles.frame}>
                    <div className={styles.frameBar}>
                      <span className={`${styles.dot} ${styles.dotRed}`} />
                      <span className={`${styles.dot} ${styles.dotYellow}`} />
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                    </div>
                    <div className={styles.frameBody}>

                      {/* ClimaOne V1 */}
                      {tool.mockup === "v1" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/climaone-v1/hero.png"
                          alt="ClimaOne V1 dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* ClimaOne V2 */}
                      {tool.mockup === "v2" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/climaone-v2/hero.png"
                          alt="ClimaOne V2 dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* OCR for EPR */}
                      {tool.mockup === "ocrEpr" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/ocr-epr/hero.png"
                          alt="OCR for EPR dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* OCR for Business Cards */}
                      {tool.mockup === "ocrBiz" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/ocr-bizcard/step-01.png"
                          alt="OCR for Business Cards dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* Route Optimizer */}
                      {tool.mockup === "route" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/route-optimzer/hero.png"
                          alt="Route Optimizer dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* EPR Chatbot */}
                      {tool.mockup === "chat" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/chatbot/hero.png"
                          alt="EPR Chatbot"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* Drive Automation */}
                      {tool.mockup === "drive" && (
                        <div className={styles.driveMockup}>
                          <div className={styles.driveHeader}>
                            <span className={styles.driveFolderIcon} />
                            <span className={styles.driveFolderLabel}>Intake folder</span>
                          </div>
                          <div className={styles.driveFiles}>
                            {[
                              "payslip_Q3.pdf",
                              "contract_v2.pdf",
                              "id_proof.pdf",
                            ].map((name) => (
                              <div key={name} className={styles.driveFile}>
                                <span className={styles.driveFileName}>{name}</span>
                                <span className={styles.driveBadge}>Sorted</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

                {/* ── Text content ── */}
                <div className={styles.featureContent}>
                  <p className={styles.featureNumber}>{tool.number}</p>
                  <div className={styles.featureMeta}>
                    <span className={styles.featureIconWrap}><Icon size={16} /></span>
                    <span className={styles.featureCategory}>{tool.category}</span>
                  </div>
                  <h2 className={styles.featureName}>{tool.name}</h2>
                  <p className={styles.featureTagline}>{tool.tagline}</p>
                  <div className={styles.featureActions}>
                    <Link href={tool.href} className={styles.featureCta}>
                      Explore tool →
                    </Link>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      <FooterStrip />
    </main>
  );
}
