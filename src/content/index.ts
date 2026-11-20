import { caseStudies } from "./case-studies";
import { disciplines } from "./disciplines";
import { projects } from "./projects";
import type { Discipline, DisciplineId, Project } from "./types";

export { profile, navigation } from "./profile";
export { disciplines } from "./disciplines";
export { isPlaceholder } from "./placeholder";
export { aboutSection, contactSection, practiceSection, workSection } from "./home";
export { aboutPage } from "./about";
export type * from "./types";

const showDrafts = process.env.NODE_ENV !== "production";

export function getProjects(): Project[] {
  return projects
    .filter((project) => showDrafts || !project.draft)
    .map((project) => ({ ...project, caseStudy: project.caseStudy ?? caseStudies[project.slug] }));
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

/** The project after this one in the list, wrapping around to the first. */
export function getNextProject(slug: string): Project | undefined {
  const list = getProjects();
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1 || list.length < 2) return undefined;
  return list[(index + 1) % list.length];
}

export function getDiscipline(id: DisciplineId): Discipline {
  const discipline = disciplines.find((d) => d.id === id);
  if (!discipline) throw new Error(`Unknown discipline: ${id}`);
  return discipline;
}
