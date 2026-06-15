"use client";

import { useMemo, useState, useEffect } from "react";

import { overviewTools } from "@/lib/content";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ToolCardGrid } from "@/components/ToolCardGrid/ToolCardGrid";
import { ToolCompactGrid } from "@/components/ToolCompactGrid/ToolCompactGrid";
import { ToolListView } from "@/components/ToolListView/ToolListView";
import { ViewToggle } from "@/components/ViewToggle/ViewToggle";
import type { ViewType } from "@/components/ViewToggle/ViewToggle";

import styles from "./DirectoryClient.module.css";

const STORAGE_KEY = "directoryView";
const VALID_VIEWS: ViewType[] = ["card", "list", "compact"];

export function DirectoryClient() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<ViewType>("card");

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY) as ViewType | null;
    if (saved && VALID_VIEWS.includes(saved)) {
      setView(saved);
    }
  }, []);

  function handleViewChange(v: ViewType) {
    setView(v);
    sessionStorage.setItem(STORAGE_KEY, v);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return overviewTools;
    return overviewTools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.status.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className={styles.section}>
      <div className={styles.controls}>
        <SearchBar value={query} onChange={setQuery} />
        <div className={styles.toggleWrap}>
          <ViewToggle value={view} onChange={handleViewChange} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🔍</div>
          <p className={styles.emptyTitle}>No tools match &ldquo;{query}&rdquo;</p>
          <p className={styles.emptyBody}>Try a different keyword or clear the search.</p>
          <button type="button" className={styles.resetBtn} onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      ) : (
        <div className={styles.results} key={view}>
          {view === "card" && <ToolCardGrid tools={filtered} />}
          {view === "list" && <ToolListView tools={filtered} />}
          {view === "compact" && <ToolCompactGrid tools={filtered} />}
        </div>
      )}
    </section>
  );
}
