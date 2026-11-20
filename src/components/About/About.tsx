import { ViewTransition, type CSSProperties } from "react";
import Link from "next/link";
import type { SectionCopy } from "@/content";
import { Shape } from "@/components/Shape/Shape";
import styles from "./About.module.css";

type AboutProps = {
  copy: SectionCopy;
  intro: string;
  principle: string;
};

export function About({ copy, intro, principle }: AboutProps) {
  const words = principle.split(" ");

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.sun} aria-hidden="true" />

      <header className={styles.header}>
        <p className={styles.kicker}>
          <span aria-hidden="true">03 — </span>
          {copy.kicker}
        </p>
        <h2 id="about-title" className={styles.heading}>
          {copy.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </header>

      <div className={styles.introBlock}>
        <p className={styles.intro}>
          <span className="visually-hidden">{intro}</span>
          <span aria-hidden="true">
            <span className={styles.dropCap}>{intro.charAt(0)}</span>
            {intro.slice(1)}
          </span>
        </p>

        {copy.hint && (
          <Link href="/about" className={styles.meet} transitionTypes={["nav-forward"]}>
            <ViewTransition name="meet-maria" share="morph" default="none">
              <span className={styles.meetDot} aria-hidden="true" />
            </ViewTransition>
            <span>{copy.hint}</span>
            <span className={styles.meetArrow} aria-hidden="true">
              →
            </span>
          </Link>
        )}
      </div>

      <p className={styles.principle}>
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className={styles.word} style={{ "--i": index } as CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </p>

      <Shape shape="spark" className={styles.spark} />
    </section>
  );
}
