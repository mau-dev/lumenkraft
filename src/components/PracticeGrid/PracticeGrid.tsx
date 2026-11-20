import type { Discipline, SectionCopy } from "@/content";
import { Shape } from "@/components/Shape/Shape";
import { accentVars } from "@/lib/accent";
import styles from "./PracticeGrid.module.css";

type PracticeGridProps = {
  copy: SectionCopy;
  disciplines: Discipline[];
};

/** The disciplines as a ruled, newspaper-like grid. Each has its own shape. */
export function PracticeGrid({ copy, disciplines }: PracticeGridProps) {
  return (
    <section id="practice" className={styles.practice} aria-labelledby="practice-title">
      <header className={styles.header}>
        <p className={styles.kicker}>
          <span aria-hidden="true">02 — </span>
          {copy.kicker}
        </p>
        <h2 id="practice-title" className={styles.heading}>
          {copy.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        {copy.intro && <p className={styles.intro}>{copy.intro}</p>}
      </header>

      <ul className={styles.grid}>
        {disciplines.map((discipline, index) => (
          <li key={discipline.id} className={styles.cell} style={accentVars(discipline.accent)}>
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={styles.shapeWrap}>
              <Shape shape={discipline.shape} className={styles.shape} />
            </div>
            <h3 className={styles.label}>{discipline.label}</h3>
            <p className={styles.description}>{discipline.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
