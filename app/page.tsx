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
<h1 className={styles.heroTitle}>
            Tools that power impact<br /><span>at ReCircle.</span>
          </h1>
          <p className={styles.heroBody}>
            Internal tools that simplify work, save time and drive circularity.
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
                          alt="ClimaOne® V1 dashboard"
                          className={styles.screenshotImg}
                        />
                      )}

                      {/* ClimaOne V2 */}
                      {tool.mockup === "v2" && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/screenshots/climaone-v2/hero.png"
                          alt="ClimaOne® V2 dashboard"
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
                          <div className={styles.routeCardHead}>
                            <span className={styles.routeCardLabel}>Today · 4 stops</span>
                            <span className={styles.routeOptBadge}>Optimised</span>
                          </div>
                          <div className={styles.routeTrack}>
                            {[
                              { pin: "A", place: "Andheri East",  time: "9:00 AM" },
                              { pin: "B", place: "Kurla West",    time: "9:28 AM" },
                              { pin: "C", place: "Dharavi",       time: "9:51 AM" },
                              { pin: "D", place: "Chembur",       time: "10:22 AM" },
                            ].map((s, i, arr) => (
                              <div key={s.pin} className={styles.routeRow}>
                                <div className={styles.routePinCol}>
                                  <span className={styles.routePin}>{s.pin}</span>
                                  {i < arr.length - 1 && <span className={styles.routeConnector} />}
                                </div>
                                <div className={styles.routeRowInfo}>
                                  <span className={styles.routePlace}>{s.place}</span>
                                  <span className={styles.routeStopTime}>{s.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className={styles.routeSummary}>
                            <span>4 stops</span>
                            <span className={styles.routeDot} />
                            <span>13.1 km</span>
                            <span className={styles.routeDot} />
                            <span>82 min</span>
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
                  <h2 className={styles.featureName}>
                    {tool.name.includes('®')
                      ? <>{tool.name.split('®')[0]}<sup>®</sup>{tool.name.split('®')[1]}</>
                      : tool.name}
                  </h2>
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
