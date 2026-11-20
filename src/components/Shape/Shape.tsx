import type { ReactNode } from "react";
import type { ShapeId } from "@/content";

/** A scalloped "flower" outline, computed once: r(θ) = 40 + 8·cos(8θ). */
const flowerPath = (() => {
  const points: string[] = [];
  const steps = 96;
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const radius = 40 + 8 * Math.cos(8 * angle);
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `${points.join(" ")}Z`;
})();

const geometry: Record<ShapeId, ReactNode> = {
  circle: <circle cx="50" cy="50" r="47" />,
  square: <rect x="4" y="4" width="92" height="92" />,
  triangle: <polygon points="50,5 96,93 4,93" />,
  semicircle: <path d="M3 72 A47 47 0 0 1 97 72 Z" />,
  spark: <path d="M50 2 C54 38 62 46 98 50 C62 54 54 62 50 98 C46 62 38 54 2 50 C38 46 46 38 50 2 Z" />,
  flower: <path d={flowerPath} />,
};

type ShapeProps = {
  shape: ShapeId;
  className?: string;
};

/** Decorative geometric shape. Colour it with CSS `fill` / `stroke`. */
export function Shape({ shape, className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      data-shape={shape}
      aria-hidden="true"
      focusable="false"
    >
      {geometry[shape]}
    </svg>
  );
}
