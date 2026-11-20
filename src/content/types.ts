/** Palette colours that can be used as a surface (with ink or paper text on top). */
export type AccentColour = "orange" | "blue" | "yellow" | "lavender" | "coral";

export type DisciplineId = "code" | "design" | "ai" | "sound" | "movement" | "experiments";

export type Link = {
  label: string;
  href: string;
};

export type ContentImage = {
  /** Path inside /public, e.g. "/images/projects/miora/cover.jpg". */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Discipline = {
  id: DisciplineId;
  label: string;
  description: string;
  accent: AccentColour;
};

export type ProjectStatus = "concept" | "in-progress" | "ongoing" | "released";

export type Project = {
  /** URL-safe identifier, also used for future project pages. */
  slug: string;
  title: string;
  /** A single year, or a range such as "2025–2026". */
  year: string;
  status: ProjectStatus;
  disciplines: DisciplineId[];
  /** One or two sentences for cards and the work explorer. */
  summary: string;
  /** What you did on the project, in your own words. */
  role?: string;
  tools: string[];
  links: Link[];
  cover?: ContentImage;
  accent: AccentColour;
  /** Show on the homepage. */
  featured: boolean;
  /** Drafts appear in development only, never in the production build. */
  draft: boolean;
};

export type NavItem = {
  label: string;
  /** In-page anchor ("#work") or route ("/about"). */
  href: string;
};

export type Profile = {
  brand: string;
  name: string;
  /** Short line shown with the brand. */
  tagline: string;
  /** A few sentences introducing you and your practice. */
  intro: string;
  principle: string;
  location?: string;
  email?: string;
  socials: Link[];
};
