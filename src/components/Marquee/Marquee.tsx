import type { Discipline } from "@/content";
import { Shape } from "@/components/Shape/Shape";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  disciplines: Discipline[];
};

function Tape({ disciplines, variant }: MarqueeProps & { variant: "ink" | "yellow" }) {
  // Two identical halves make a seamless loop when the row slides by -50%.
  const items = [...disciplines, ...disciplines];
  return (
    <div className={`${styles.tape} ${styles[variant]}`}>
      <div className={styles.row}>
        {[0, 1].map((half) => (
          <ul key={half} className={styles.half}>
            {items.map((discipline, index) => (
              <li key={`${discipline.id}-${index}`} className={styles.item}>
                <span className={index % 2 ? styles.italic : styles.caps}>{discipline.label}</span>
                <Shape shape={discipline.shape} className={styles.shape} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Two crossing tapes of discipline names. Purely decorative: the same content appears elsewhere. */
export function Marquee({ disciplines }: MarqueeProps) {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <Tape disciplines={disciplines} variant="yellow" />
      <Tape disciplines={[...disciplines].reverse()} variant="ink" />
    </div>
  );
}
