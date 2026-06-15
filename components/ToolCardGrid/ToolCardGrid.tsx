import Link from "next/link";

import type { OverviewTool } from "@/lib/content";

import styles from "./ToolCardGrid.module.css";

type Props = {
  tools: OverviewTool[];
};

export function ToolCardGrid({ tools }: Props) {
  return (
    <div className={styles.grid}>
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Link key={tool.number} href={tool.href} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <Icon size={20} />
              </div>
              <span className={`${styles.badge} ${styles[tool.statusTone]}`}>
                {tool.status}
              </span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.name}>{tool.name}</h3>
              <p className={styles.desc}>{tool.tagline}</p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.category}>{tool.category}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
