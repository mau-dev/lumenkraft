import { ViewTransition, type ReactNode } from "react";
import { Shape } from "@/components/Shape/Shape";
import { coverCompositions, coverTransitionName } from "@/lib/project";
import styles from "./ProjectCover.module.css";

type ProjectCoverProps = {
  slug: string;
  /** Position in the project list; picks the composition and the number. */
  index: number;
  size: "panel" | "hero";
  /** The title element (a heading, or a heading containing a link). */
  children: ReactNode;
};

/**
 * The geometric colour cover of a project. It shares a view-transition name
 * between the homepage panel and the case-study hero, so it morphs between them.
 * Colours come from --accent / --on-accent set by a parent.
 */
export function ProjectCover({ slug, index, size, children }: ProjectCoverProps) {
  const variant = index % coverCompositions.length;

  return (
    <ViewTransition name={coverTransitionName(slug)} share="morph" default="none">
      <div className={`${styles.cover} ${styles[size]} ${styles[`v${variant}`]}`}>
        {coverCompositions[variant].map((shape, i) => (
          <Shape key={shape} shape={shape} className={`${styles.shape} ${styles[`s${i}`]}`} />
        ))}
        <span className={styles.number} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className={styles.title}>{children}</div>
      </div>
    </ViewTransition>
  );
}
