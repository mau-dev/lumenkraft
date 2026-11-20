import type { Discipline } from "@/content";
import { accentVars } from "@/lib/accent";
import { HeroLight } from "./HeroLight";
import styles from "./Hero.module.css";

type HeroProps = {
  brand: string;
  principle: string;
  disciplines: Discipline[];
};

/** Splits "LumenKraft" into its two words for the stacked wordmark. */
function splitBrand(brand: string): [string, string] {
  const match = brand.match(/^(.+?)([A-Z].*)$/);
  return match ? [match[1], match[2]] : [brand, ""];
}

/** Puts each sentence on its own line. */
function splitSentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]*/g)?.map((s) => s.trim()) ?? [text];
}

export function Hero({ brand, principle, disciplines }: HeroProps) {
  const [first, second] = splitBrand(brand);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.kicker}>
        <span>Creative practice</span>
        <span aria-hidden="true">Scroll ↓</span>
      </p>

      <div className={styles.stage}>
        <HeroLight />

        <h1 id="hero-title" className={styles.wordmark}>
          <span className="visually-hidden">{brand}</span>
          <span className={styles.first} aria-hidden="true">
            {first}
          </span>
          <span className={styles.second} aria-hidden="true">
            {second}
          </span>
        </h1>

        <ul className={styles.stickers} aria-label="Disciplines">
          {disciplines.map((discipline) => (
            <li key={discipline.id} className={styles.sticker} style={accentVars(discipline.accent)}>
              {discipline.label}
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.principle}>
        {splitSentences(principle).map((sentence) => (
          <span key={sentence} className={styles.line}>
            {sentence}{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
