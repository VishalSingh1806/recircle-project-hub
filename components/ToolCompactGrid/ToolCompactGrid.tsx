import Link from "next/link";

import type { OverviewTool } from "@/lib/content";

import styles from "./ToolCompactGrid.module.css";

type Props = {
  tools: OverviewTool[];
};

export function ToolCompactGrid({ tools }: Props) {
  return (
    <div className={styles.grid}>
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Link key={tool.number} href={tool.href} className={styles.tile}>
            <div className={styles.tileTop}>
              <div className={styles.iconWrap}>
                <Icon size={16} />
              </div>
              <span className={`${styles.dot} ${styles[tool.statusTone]}`} title={tool.status} />
            </div>
            <span className={styles.name}>{tool.name}</span>
            <span className={styles.category}>{tool.category}</span>
          </Link>
        );
      })}
    </div>
  );
}
