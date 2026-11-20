import type { Project } from "./types";

// Summaries are taken from each project's own README.
// Drafts stay hidden in production until you've reviewed them and set `draft: false`.

export const projects: Project[] = [
  {
    slug: "lumenkraft",
    title: "LumenKraft",
    year: "2026",
    status: "in-progress",
    disciplines: ["code", "design"],
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
    disciplines: ["code", "design"],
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
  {
    // The repo README is empty; the summary is based on the repo description and code.
    slug: "8waves",
    title: "8waves",
    year: "2019",
    status: "archived",
    disciplines: ["code", "sound"],
    summary:
      "A music playground in the browser: build beats on a step-sequencer grid of drum samples, play them back and save them as jams.",
    tools: ["Ruby on Rails", "React", "Tone.js", "Styled Components", "PostgreSQL"],
    links: [{ label: "Source", href: "https://github.com/mau-dev/8waves" }],
    accent: "yellow",
    featured: true,
    draft: false,
  },
  {
    slug: "carefoodies",
    title: "Carefoodies",
    year: "2019",
    status: "archived",
    disciplines: ["code", "design"],
    summary:
      "A full-stack web app for sharing excess food with people nearby who want it — a small answer to food waste. My first full-stack app.",
    tools: ["Node.js", "Express", "React", "PostgreSQL", "Bootstrap"],
    links: [{ label: "Source", href: "https://github.com/mau-dev/Carefoodies" }],
    accent: "coral",
    featured: true,
    draft: false,
  },
  {
    slug: "career-clinic",
    title: "Career Clinic",
    year: "2019",
    status: "archived",
    disciplines: ["code"],
    summary:
      "A platform for trying out career paths: explorers register interest in short-term roles, and employers post listings and connect with them.",
    role: "Built in a team of three with Kelly and Daniel.",
    tools: ["Ruby on Rails", "JavaScript", "jQuery", "PostgreSQL"],
    links: [{ label: "Source", href: "https://github.com/mau-dev/SEI-Project-3-Career-Clinic" }],
    accent: "orange",
    featured: true,
    draft: false,
  },
];
