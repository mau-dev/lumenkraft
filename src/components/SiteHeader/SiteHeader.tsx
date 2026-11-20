import Link from "next/link";
import type { NavItem } from "@/content";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  brand: string;
  items: NavItem[];
};

export function SiteHeader({ brand, items }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        {brand}
      </Link>
      <nav aria-label="Main">
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
