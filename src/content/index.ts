import { disciplines } from "./disciplines";
import { projects } from "./projects";
import type { Discipline, DisciplineId, Project } from "./types";

export { profile, navigation } from "./profile";
export { disciplines } from "./disciplines";
export { isPlaceholder } from "./placeholder";
export type * from "./types";

const showDrafts = process.env.NODE_ENV !== "production";

export function getProjects(): Project[] {
  return projects.filter((project) => showDrafts || !project.draft);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getDiscipline(id: DisciplineId): Discipline {
  const discipline = disciplines.find((d) => d.id === id);
  if (!discipline) throw new Error(`Unknown discipline: ${id}`);
  return discipline;
}
