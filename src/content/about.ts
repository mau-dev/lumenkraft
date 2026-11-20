import type { AboutPage } from "./types";

// Maria's story, in her own words. The path and skills sections are built from
// facts Maria shared and from her GitHub history.

export const aboutPage: AboutPage = {
  kicker: "Meet Maria — the creator behind LumenKraft",
  title: ["I build products,", "not just software."],
  lead: "I’m a product-minded software engineer with a multidisciplinary approach to building digital experiences. I combine technical thinking with creativity, curiosity and an interest in the bigger picture — from the initial idea and the problem worth solving to the experience, technology and strategy behind the finished product.",
  story:
    "My journey into software engineering came from a broader interest in creating things, solving problems and exploring ideas. Over the years, I’ve worked across different industries, technologies and roles, developing an ability to connect seemingly different disciplines and bring different perspectives into the way I approach a challenge.",
  beyondCode: {
    heading: "Beyond the code",
    paragraphs: [
      "I enjoy the entire process of building a product: questioning assumptions, exploring possibilities, understanding users, shaping ideas and translating them into thoughtful experiences. I move naturally between product thinking, UX, visual direction, business considerations and engineering, finding connections between them to create solutions that are both meaningful and technically sound.",
      "On the engineering side, I have experience across front-end and back-end development, full-stack applications and end-to-end website development. I care about well-structured architecture, reusable components, readable and maintainable code, and building foundations that can evolve as products grow.",
      "I’m particularly interested in AI and its potential to reshape how we interact with technology. Not simply as a development tool, but as a way to rethink products, create more intuitive experiences and solve problems that previously required entirely different approaches.",
    ],
    quote: "Not simply as a development tool, but as a way to rethink products.",
  },
  chapters: [
    {
      marker: "Early",
      title: "Music first",
      body: "I grew up as a musician.",
      shape: "circle",
    },
    {
      marker: "Then",
      title: "Many rooms",
      body: "I worked in various roles and industries, including marketing management and hospitality.",
      shape: "square",
    },
    {
      marker: "2016",
      title: "The switch",
      body: "I made the career switch into technology.",
      shape: "triangle",
    },
    {
      marker: "2019",
      title: "Learning to build",
      body: "I studied General Assembly’s Software Engineering Immersive and built full-stack apps — Carefoodies, Career Clinic and 8waves, a step sequencer where music and code met.",
      shape: "semicircle",
    },
    {
      marker: "Now",
      title: "LumenKraft",
      body: "I design and build with AI, and keep making beyond the screen: electronic music, DJing, ecstatic dance, movement and workshops.",
      shape: "spark",
    },
  ],
  skills: [
    {
      group: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Styled Components", "Responsive design"],
    },
    {
      group: "Backend & data",
      items: ["Node.js", "Express", "Ruby on Rails", "PostgreSQL", "SQL", "REST APIs", "Authentication"],
    },
    {
      group: "Product & design",
      items: ["Product thinking", "UX/UI", "Visual direction", "Wireframes", "User stories", "Accessibility (WCAG)"],
    },
    {
      group: "Engineering practice",
      items: ["Architecture", "Reusable components", "Maintainable code", "Design systems", "Git & GitHub", "Team projects"],
    },
    {
      group: "AI & creative code",
      items: ["AI-assisted development", "Coding agents", "Tone.js", "Web Audio", "Interactive music"],
    },
  ],
  exploring: {
    heading: "Always exploring",
    paragraphs: [
      "I’m naturally curious and driven by learning. I enjoy challenging established ways of thinking, experimenting with new technologies and continuously expanding the boundaries of what I can create. I believe the best products come from the intersection of different perspectives, and that strong collaboration between engineering, design and business is what takes an idea further.",
    ],
    quote: "The best products come from the intersection of different perspectives.",
  },
  outside: {
    heading: "Outside of work",
    body: "Outside of work, you’ll probably find me exploring electronic music, spending time in nature, cycling, experimenting in the kitchen, reading or discovering something that inspires a new idea. I’m drawn to art, design, human behaviour and the creative process in all its forms.",
    interests: [
      { label: "Electronic music", shape: "circle", accent: "orange" },
      { label: "Nature", shape: "flower", accent: "yellow" },
      { label: "Cycling", shape: "semicircle", accent: "blue" },
      { label: "Kitchen experiments", shape: "square", accent: "coral" },
      { label: "Reading", shape: "triangle", accent: "lavender" },
      { label: "Art & design", shape: "spark", accent: "yellow" },
    ],
  },
};
