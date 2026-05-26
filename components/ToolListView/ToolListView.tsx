import Link from "next/link";

import type { OverviewTool } from "@/lib/content";

import styles from "./ToolListView.module.css";

type Props = {
  tools: OverviewTool[];
};

export function ToolListView({ tools }: Props) {
  return (
    <div className={styles.list}>
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Link key={tool.number} href={tool.href} className={styles.row}>
            <div className={styles.iconWrap}>
              <Icon size={18} />
            </div>

            <div className={styles.info}>
              <div className={styles.nameRow}>
                <span className={styles.name}>{tool.name}</span>
                <span className={`${styles.badge} ${styles[tool.statusTone]}`}>
                  {tool.status}
                </span>
              </div>
              <p className={styles.desc}>{tool.tagline}</p>
            </div>

            <span className={styles.category}>{tool.category}</span>

          </Link>
        );
      })}
    </div>
  );
}
