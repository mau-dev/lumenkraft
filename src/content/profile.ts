import { placeholder } from "./placeholder";
import type { NavItem, Profile } from "./types";

export const profile: Profile = {
  brand: "LumenKraft",
  name: placeholder("Your name as it should appear on the site"),
  tagline: placeholder("One line on what LumenKraft is"),
  intro: placeholder(
    "Two or three sentences introducing you and how code, design, sound and movement connect in your work.",
  ),
  principle: "Create from the soul. Craft with intention.",
  email: undefined,
  socials: [{ label: "GitHub", href: "https://github.com/mau-dev" }],
};

export const navigation: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
