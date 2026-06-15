"use client";

import { Grip, LayoutGrid, List } from "lucide-react";

import styles from "./ViewToggle.module.css";

export type ViewType = "card" | "list" | "compact";

type Props = {
  value: ViewType;
  onChange: (v: ViewType) => void;
};

const options: { value: ViewType; Icon: typeof LayoutGrid; label: string }[] = [
  { value: "card", Icon: LayoutGrid, label: "Cards" },
  { value: "list", Icon: List, label: "List" },
  { value: "compact", Icon: Grip, label: "Compact" }
];

export function ViewToggle({ value, onChange }: Props) {
  return (
    <div className={styles.toggle} role="group" aria-label="View mode">
      {options.map(({ value: v, Icon, label }) => (
        <button
          key={v}
          type="button"
          className={`${styles.btn} ${value === v ? styles.active : ""}`}
          onClick={() => onChange(v)}
          aria-pressed={value === v}
          title={label}
        >
          <Icon size={15} />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  );
}
