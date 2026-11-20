import { placeholder } from "./placeholder";
import type { NavItem, Profile } from "./types";

export const profile: Profile = {
  brand: "LumenKraft",
  name: "Maria",
  tagline: placeholder("One line on what LumenKraft is"),
  // Drawn from the project brief. Rewrite it in your own voice whenever you like.
  intro:
    "LumenKraft is the creative practice of a multidisciplinary creator working across software, design, electronic music, movement, workshops and independent experiments — driven by curiosity, and built with care.",
  principle: "Create from the soul. Craft with intention.",
  location: "Sydney — Northern Beaches",
  email: undefined,
  socials: [{ label: "GitHub", href: "https://github.com/mau-dev" }],
};

export const navigation: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
