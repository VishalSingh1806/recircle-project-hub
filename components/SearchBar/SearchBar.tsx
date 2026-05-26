"use client";

import { Search, X } from "lucide-react";

import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <Search className={styles.searchIcon} size={18} aria-hidden="true" />
      <input
        className={styles.input}
        type="search"
        placeholder="Search by name, category, or description…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search tools"
      />
      {value && (
        <button
          type="button"
          className={styles.clear}
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
