import type { SectionCopy } from "./types";

// Section headings and short copy for the homepage. Titles are split into
// lines on purpose: the line breaks are part of the typography.

export const workSection: SectionCopy = {
  kicker: "Selected work",
  title: ["Things in", "the making"],
  intro: "Products, tools and experiments — designed, built and still evolving.",
  hint: "Keep scrolling",
};

export const practiceSection: SectionCopy = {
  kicker: "Practice",
  title: ["Six ways", "of making"],
  intro: "Code, sound, movement and everything in between. Hover or tap a shape to see it change.",
};

export const aboutSection: SectionCopy = {
  kicker: "About",
  title: ["Light,", "made by hand"],
  hint: "Meet Maria, the creator",
};

export const contactSection: SectionCopy = {
  kicker: "Contact",
  title: ["Let’s make", "something"],
  intro: "Collaborations, ideas, music or just a hello.",
};
