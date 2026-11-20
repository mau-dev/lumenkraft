"use client";

import { Children, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import styles from "./BrowserFrame.module.css";

type SlidesProps = {
  /** Accessible names for the slide buttons, in order. */
  labels: string[];
  children: ReactNode;
};

const INTERVAL = 4200;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );
}

/**
 * Pages through screenshots on its own, like someone clicking around the app.
 * Pauses on hover or focus, and never auto-advances with reduced motion.
 */
export function Slides({ labels, children }: SlidesProps) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion, slides.length]);

  return (
    <div
      className={styles.slides}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          data-active={index === active}
          aria-hidden={index !== active}
        >
          {slide}
        </div>
      ))}

      {slides.length > 1 && (
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={styles.dot}
              aria-label={`Show screenshot ${index + 1}: ${labels[index] ?? ""}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
