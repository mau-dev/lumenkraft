import type { Project } from "./types";

// Summaries are taken from each project's own README.
// Drafts stay hidden in production until you've reviewed them and set `draft: false`.

export const projects: Project[] = [
  {
    slug: "lumenkraft",
    title: "LumenKraft",
    year: "2026",
    status: "in-progress",
    disciplines: ["code", "design", "ai"],
    summary: "This site: a personal creative identity and portfolio, designed and built with AI-assisted development.",
    tools: ["Next.js", "React", "TypeScript", "CSS Modules"],
    links: [{ label: "Source", href: "https://github.com/mau-dev/lumenkraft" }],
    accent: "orange",
    featured: true,
    draft: false,
  },
  {
    slug: "miora",
    title: "Miora",
    year: "2026",
    status: "in-progress",
    disciplines: ["code", "design", "ai"],
    summary:
      "A private, modular, visual second brain. Capture everything first — text, pasted notes or voice — and organise it later, your way.",
    tools: ["React", "TypeScript", "Vite", "IndexedDB", "Claude API", "ElevenLabs Scribe"],
    links: [],
    accent: "lavender",
    featured: true,
    draft: true,
  },
  {
    // The README notes that "Tezga" is a working name until trademarks are checked.
    slug: "tezga",
    title: "Tezga",
    year: "2026",
    status: "in-progress",
    disciplines: ["code", "design"],
    summary:
      "One marketplace for the whole Balkans: buy, sell, rent and swap across six countries, in seven languages.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Hono", "PostgreSQL"],
    links: [],
    accent: "blue",
    featured: true,
    draft: true,
  },
];
