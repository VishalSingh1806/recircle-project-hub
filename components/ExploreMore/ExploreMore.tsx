import Link from "next/link";

import styles from "./ExploreMore.module.css";

type ExploreItem = {
  href: string;
  category: string;
  name: string;
  description: string;
};

type ExploreMoreProps = {
  items: ExploreItem[];
};

export function ExploreMore({ items }: ExploreMoreProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Explore more</p>
        <h2 className={styles.heading}>You might also need</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.href} className={styles.card}>
              <span className={styles.badge}>{item.category}</span>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <Link href={item.href} className={styles.cta}>Open Tool →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
