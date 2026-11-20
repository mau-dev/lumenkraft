import type { CSSProperties } from "react";
import styles from "./StepGrid.module.css";

type StepGridProps = {
  rows: string[];
  steps: number;
};

// A fixed, hand-picked beat so the illustration looks the same on every render.
function isActive(row: number, step: number): boolean {
  switch (row) {
    case 0: return step % 4 === 0 || step === 10; // kick
    case 1: return step === 13;
    case 2: return step === 14 || step === 15;
    case 3: return step % 8 === 4; // snare on 2 and 4
    case 4: return step === 7 || step === 11;
    case 5: return step % 6 === 3;
    case 6: return step % 2 === 1; // shaker off-beats
    case 7: return step === 12;
    default: return false;
  }
}

/** Animated illustration of a step sequencer: a playhead sweeps the grid and lights the active cells. */
export function StepGrid({ rows, steps }: StepGridProps) {
  return (
    <div className={styles.machine} style={{ "--steps": steps } as CSSProperties} aria-hidden="true">
      <div className={styles.grid}>
        {rows.map((row, r) => (
          <div key={`${row}-${r}`} className={styles.row}>
            <span className={styles.label}>{row}</span>
            {Array.from({ length: steps }, (_, s) => (
              <span
                key={s}
                className={styles.cell}
                data-active={isActive(r, s)}
                data-beat={s % 4 === 0}
                style={{ "--step": s } as CSSProperties}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
