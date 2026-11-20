"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

/**
 * The orange "light" disc. On devices with a fine pointer it drifts gently
 * towards the cursor; it stays still on touch screens and with reduced motion.
 */
export function HeroLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        element.style.setProperty("--drift-x", x.toFixed(3));
        element.style.setProperty("--drift-y", y.toFixed(3));
      });
    };

    const sync = () => {
      if (query.matches) {
        window.addEventListener("pointermove", onMove, { passive: true });
      } else {
        window.removeEventListener("pointermove", onMove);
        element.style.removeProperty("--drift-x");
        element.style.removeProperty("--drift-y");
      }
    };

    sync();
    query.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(frame);
      query.removeEventListener("change", sync);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className={styles.light} aria-hidden="true" />;
}
