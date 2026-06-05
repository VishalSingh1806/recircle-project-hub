import { Mail, Phone } from "lucide-react";

import styles from "./ContactCard.module.css";

type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export function ContactCard({ name, role, email, phone }: ContactCardProps) {
  const initials = name.startsWith("[")
    ? "RC"
    : name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

  return (
    <article className={styles.card}>
      <div className={styles.avatar}>{initials}</div>
      <div className={styles.meta}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
      <div className={styles.detailRow}>
        <Mail size={16} />
        <span>{email}</span>
      </div>
      <div className={styles.detailRow}>
        <Phone size={16} />
        <span>{phone}</span>
      </div>
<p className={styles.note}>You can also reach us on WhatsApp or drop by the tech desk.</p>
    </article>
  );
}
