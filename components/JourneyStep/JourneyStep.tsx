import { type LucideIcon } from "lucide-react";

import styles from "./JourneyStep.module.css";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
  capturedLabel?: string;
  capturedItems?: string[];
  icon: LucideIcon;
  reversed?: boolean;
};

export function JourneyStep({
  number,
  title,
  description,
  capturedLabel = "What gets captured",
  capturedItems = [],
  icon: Icon,
  reversed = false
}: JourneyStepProps) {
  return (
    <article className={`${styles.step} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.textCol}>
        <div className={styles.number}>{number}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {capturedItems.length > 0 ? (
          <>
            <p className={styles.label}>{capturedLabel}</p>
            <div className={styles.items}>
              {capturedItems.map((item) => (
                <p key={item} className={styles.item}>
                  {item}
                </p>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={styles.visualCol}>
        <div className={styles.iconWrap}>
          <Icon size={48} />
        </div>
      </div>
    </article>
  );
}
