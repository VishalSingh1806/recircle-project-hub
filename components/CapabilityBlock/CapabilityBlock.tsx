import { type LucideIcon } from "lucide-react";

import styles from "./CapabilityBlock.module.css";

type CapabilityBlockProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function CapabilityBlock({
  number,
  title,
  description,
  icon: Icon
}: CapabilityBlockProps) {
  return (
    <article className={styles.block}>
      <div className={styles.iconWrap}>
        <Icon size={18} />
      </div>
      <p className={styles.number}>{number}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
