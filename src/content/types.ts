/** Palette colours that can be used as a surface (with ink or paper text on top). */
export type AccentColour = "orange" | "blue" | "yellow" | "lavender" | "coral";

export type DisciplineId = "code" | "design" | "workshops" | "sound" | "movement" | "experiments";

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

/** Geometric shapes used across the site as the visual language. */
export type ShapeId = "circle" | "square" | "triangle" | "semicircle" | "spark" | "flower";

export type Discipline = {
  id: DisciplineId;
  label: string;
  description: string;
  accent: AccentColour;
  shape: ShapeId;
};

export type SectionCopy = {
  kicker: string;
  /** Each item is rendered on its own line. */
  title: string[];
  intro?: string;
  hint?: string;
};

export type ProjectStatus = "concept" | "in-progress" | "ongoing" | "released" | "archived";

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
  caseStudy?: CaseStudy;
  accent: AccentColour;
  /** Show on the homepage. */
  featured: boolean;
  /** Drafts appear in development only, never in the production build. */
  draft: boolean;
};

export type GalleryImage = ContentImage & {
  caption?: string;
  /** How much room the image takes in the gallery grid. */
  size?: "full" | "wide" | "half" | "narrow";
};

/**
 * The animated centrepiece of a case study, shown in a browser frame.
 * - scroll: one tall screenshot that slowly scrolls, like someone browsing
 * - slides: several screenshots that page through on their own
 * - video: a screen recording (muted, looping)
 * - step-grid: an animated illustration of a step sequencer
 */
export type Showcase =
  | { kind: "scroll"; label: string; image: ContentImage }
  | { kind: "slides"; label: string; images: ContentImage[] }
  | { kind: "video"; label: string; src: string; poster?: string }
  | { kind: "step-grid"; label: string; rows: string[]; steps: number; caption: string };

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type CaseStudy = {
  /** Opening paragraph, shown large. */
  lead: string;
  showcase?: Showcase;
  sections: CaseStudySection[];
  gallery?: GalleryImage[];
};

export type AboutChapter = {
  /** Short label for the timeline: a year, or a word like "Now". */
  marker: string;
  title: string;
  body: string;
  shape: ShapeId;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type AboutSection = {
  heading: string;
  paragraphs: string[];
  /** A line from the paragraphs, pulled out large. */
  quote?: string;
};

export type Interest = {
  label: string;
  shape: ShapeId;
  accent: AccentColour;
};

export type AboutPage = {
  kicker: string;
  /** Each item is rendered on its own line. */
  title: string[];
  lead: string;
  story: string;
  beyondCode: AboutSection;
  chapters: AboutChapter[];
  skills: SkillGroup[];
  exploring: AboutSection;
  outside: {
    heading: string;
    body: string;
    interests: Interest[];
  };
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
