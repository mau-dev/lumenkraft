import type { Link, SectionCopy } from "@/content";
import { Shape } from "@/components/Shape/Shape";
import styles from "./Contact.module.css";

type ContactProps = {
  copy: SectionCopy;
  email?: string;
  socials: Link[];
  brand: string;
  principle: string;
};

export function Contact({ copy, email, socials, brand, principle }: ContactProps) {
  const links: (Link & { external: boolean })[] = [
    ...(email ? [{ label: "Email", href: `mailto:${email}`, external: false }] : []),
    ...socials.map((social) => ({ ...social, external: true })),
  ];

  return (
    <footer id="contact" className={styles.contact} aria-labelledby="contact-title">
      <p className={styles.kicker}>
        <span aria-hidden="true">04 — </span>
        {copy.kicker}
      </p>

      <h2 id="contact-title" className={styles.heading}>
        <span className="visually-hidden">{copy.title.join(" ")}</span>
        {copy.title.map((line, index) => (
          <span key={line} className={styles.line} aria-hidden="true">
            {line}
            {index === copy.title.length - 1 && <Shape shape="circle" className={styles.dot} />}
          </span>
        ))}
      </h2>

      {copy.intro && <p className={styles.intro}>{copy.intro}</p>}

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.link}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
              {link.external && <span className="visually-hidden"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <span>{brand}</span>
        <span className={styles.principle}>{principle}</span>
        <a href="#main" className={styles.top}>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
