import Link from "next/link";

import { overviewTools } from "@/lib/content";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";

import styles from "./page.module.css";

export default function HomePage() {
  const liveCount = overviewTools.filter((t) => t.statusTone === "live").length;
  const categoryCount = new Set(overviewTools.map((t) => t.category)).size;

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>RECIRCLE PRODUCT HUB</p>
          <h1 className={styles.heroTitle}>
            Hi, welcome to your <span>tools.</span>
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
                        <div className={styles.routeMockup}>
                          <div className={styles.routeTrack}>
                            {["01","02","03","04"].map((n, i) => (
                              <div key={n} className={styles.routeStop}>
                                <span className={styles.routePin}>{n}</span>
                                {i < 3 && <span className={styles.routeConnector} />}
                              </div>
                            ))}
                          </div>
                          <div className={styles.routeSummary}>
                            <span>4 stops</span>
                            <span className={styles.routeDot} />
                            <span>12.4 km</span>
                            <span className={styles.routeDot} />
                            <span>Best: Tuesday</span>
                          </div>
                        </div>
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
                    <span className={`${styles.featureStatusBadge} ${styles[tool.statusTone]}`}>
                      {tool.status}
                    </span>
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
