import type { Metadata } from "next";
import styles from "./styleguide.module.css";

export const metadata: Metadata = {
  title: "Styleguide — LumenKraft",
  robots: { index: false, follow: false },
};

type Swatch = {
  name: string;
  token: string;
  onToken: "--ink" | "--paper";
  contrast: string;
  usage: string;
};

const swatches: Swatch[] = [
  { name: "Paper", token: "--paper", onToken: "--ink", contrast: "15.4", usage: "Default background" },
  { name: "Ink", token: "--ink", onToken: "--paper", contrast: "15.4", usage: "Text, rules, dark sections" },
  { name: "Orange", token: "--orange", onToken: "--ink", contrast: "5.2", usage: "Surface only — never text on paper" },
  { name: "Electric Blue", token: "--blue", onToken: "--paper", contrast: "5.4", usage: "Surface, links, focus" },
  { name: "Acid Yellow", token: "--yellow", onToken: "--ink", contrast: "14.2", usage: "Highlights, selection" },
  { name: "Lavender", token: "--lavender", onToken: "--ink", contrast: "7.9", usage: "Surface only" },
  { name: "Coral", token: "--coral", onToken: "--ink", contrast: "7.2", usage: "Surface only" },
];

const typeScale = ["--text-mega", "--text-display", "--text-3xl", "--text-2xl", "--text-xl", "--text-lg", "--text-base", "--text-sm", "--text-mono"];

const spaceScale = ["--space-3xs", "--space-2xs", "--space-xs", "--space-s", "--space-m", "--space-l", "--space-xl", "--space-2xl", "--space-3xl"];

export default function StyleguidePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.meta}>Design system / v0.1 / internal</p>
        <h1 className={styles.title}>
          Lumen<em>Kraft</em>
        </h1>
      </header>

      <section className={styles.section} aria-labelledby="sg-colour">
        <h2 id="sg-colour" className={styles.sectionTitle}>Colour</h2>
        <ul className={styles.swatches}>
          {swatches.map((s) => (
            <li
              key={s.token}
              className={styles.swatch}
              style={{ background: `var(${s.token})`, color: `var(${s.onToken})` }}
            >
              <span className={styles.swatchName}>{s.name}</span>
              <span className={styles.meta}>
                {s.token} · text {s.onToken} {s.contrast}:1
              </span>
              <span className={styles.meta}>{s.usage}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="sg-type">
        <h2 id="sg-type" className={styles.sectionTitle}>Typography</h2>

        <div className={styles.specimens}>
          <div>
            <p className={styles.meta}>Display — Fraunces · SOFT / WONK / opsz / wght</p>
            <p className={styles.displayHeavy}>Sound, code &amp; motion</p>
            <p className={styles.displayItalic}>craft with intention</p>
          </div>
          <div>
            <p className={styles.meta}>Sans — Bricolage Grotesque · opsz / wdth / wght</p>
            <p className={styles.sansLarge}>Experiments in rhythm and interface</p>
            <p className={styles.body}>
              Body copy sits on paper in ink at a comfortable measure. The quick brown fox jumps over the lazy dog — 0123456789.
              Diacritics: ć č š ž đ é ü ø.
            </p>
          </div>
          <div>
            <p className={styles.meta}>Mono — JetBrains Mono</p>
            <p className={styles.mono}>BPM 124 · 2026 · NEXT.JS / TYPESCRIPT</p>
          </div>
        </div>

        <ol className={styles.scale}>
          {typeScale.map((token) => (
            <li key={token} className={styles.scaleRow}>
              <span className={styles.meta}>{token}</span>
              <span className={styles.scaleSample} style={{ fontSize: `var(${token})` }}>
                Lumen
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="sg-space">
        <h2 id="sg-space" className={styles.sectionTitle}>Space</h2>
        <ol className={styles.spaces}>
          {spaceScale.map((token) => (
            <li key={token} className={styles.spaceRow}>
              <span className={styles.meta}>{token}</span>
              <span className={styles.spaceBar} style={{ width: `var(${token})` }} />
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="sg-focus">
        <h2 id="sg-focus" className={styles.sectionTitle}>Focus</h2>
        <p className={styles.body}>
          Press Tab to see the focus ring: <a href="#sg-colour">a link</a> and{" "}
          <button type="button" className={styles.button}>a button</button>
        </p>
      </section>
    </main>
  );
}
