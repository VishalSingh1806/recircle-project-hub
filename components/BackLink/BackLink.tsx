import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import styles from "./BackLink.module.css";

export function BackLink() {
  return (
    <div className={styles.wrap}>
      <Link href="/" className={styles.link}>
        <ChevronLeft size={14} />
        All tools
      </Link>
    </div>
  );
}
