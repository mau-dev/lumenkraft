import type { CSSProperties } from "react";
import type { AccentColour } from "@/content";

// Text colour for each accent surface, following the contrast rules in tokens.css.
const onAccent: Record<AccentColour, "--ink" | "--paper"> = {
  orange: "--ink",
  blue: "--paper",
  yellow: "--ink",
  lavender: "--ink",
  coral: "--ink",
};

/** Inline custom properties (--accent, --on-accent) for a component's CSS to use. */
export function accentVars(accent: AccentColour): CSSProperties {
  return {
    "--accent": `var(--${accent})`,
    "--on-accent": `var(${onAccent[accent]})`,
  } as CSSProperties;
}
