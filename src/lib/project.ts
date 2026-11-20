import type { ProjectStatus, ShapeId } from "@/content";

export const statusLabel: Record<ProjectStatus, string> = {
  concept: "Concept",
  "in-progress": "In progress",
  ongoing: "Ongoing",
  released: "Released",
  archived: "Archived",
};

// Each cover gets one of three geometric compositions, in rotation.
export const coverCompositions: ShapeId[][] = [
  ["circle", "square"],
  ["semicircle", "flower", "spark"],
  ["triangle", "circle", "square"],
];

export function projectHref(slug: string): string {
  return `/work/${slug}`;
}

export function coverTransitionName(slug: string): string {
  return `project-cover-${slug}`;
}
