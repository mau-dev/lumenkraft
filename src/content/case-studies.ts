import type { CaseStudy } from "./types";

// Case study content, keyed by project slug.
// Facts come from each project's README and code. Images live in /public/images/projects/<slug>/.

export const caseStudies: Record<string, CaseStudy> = {
  lumenkraft: {
    lead: "LumenKraft is my creative home online — a portfolio designed and built from scratch, where code, sound and movement share one visual language.",
    showcase: {
      kind: "scroll",
      label: "lumenkraft — homepage",
      image: {
        src: "/images/projects/lumenkraft/home-full.jpg",
        alt: "The full LumenKraft homepage, from the hero down to the contact section.",
        width: 1440,
        height: 6154,
      },
    },
    sections: [
      {
        heading: "Direction",
        paragraphs: [
          "Experimental editorial meets a playful, expressive portfolio: big contrasting type, asymmetric ruled grids and a small geometric vocabulary — circle, square, triangle, half-circle, spark and flower — with one shape for each discipline.",
        ],
      },
      {
        heading: "System",
        list: [
          "Seven colours with contrast rules checked against WCAG, so colour never costs readability.",
          "Three typefaces: Fraunces for expressive display, Bricolage Grotesque for interface and body, JetBrains Mono for metadata.",
          "Design tokens as CSS variables, and all copy kept as typed data, separate from the layout.",
        ],
      },
      {
        heading: "Motion without the weight",
        paragraphs: [
          "The hero pulls apart, the work rail moves sideways and the principle grows bolder word by word — all with CSS scroll-driven animations rather than a JavaScript animation library. With reduced motion switched on, everything settles into a calm, fully usable layout.",
        ],
      },
      {
        heading: "Built with AI, directed by hand",
        paragraphs: [
          "I built LumenKraft with an AI coding agent as a collaborator: I set the direction and made the calls; the agent helped explore options, implement and verify each stage.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/lumenkraft/practice.jpg",
        alt: "The Practice section: a ruled grid with a geometric shape for each discipline.",
        width: 1440,
        height: 900,
        caption: "Practice — one shape per discipline, transformed on hover.",
        size: "wide",
      },
      {
        src: "/images/projects/lumenkraft/mobile.jpg",
        alt: "The LumenKraft hero on a phone.",
        width: 390,
        height: 844,
        caption: "Designed for phones, not shrunk for them.",
        size: "narrow",
      },
    ],
  },

  miora: {
    lead: "Miora is a private, modular, visual second brain. Capture everything first — text, pasted notes or voice — and organise it later, your way.",
    sections: [
      {
        heading: "Capture first",
        paragraphs: [
          "Anything can be captured in a second, and the original is never changed. Sorting creates new entries linked back to the capture, so nothing is ever lost on the way to being organised.",
        ],
      },
      {
        heading: "AI that suggests, never decides",
        list: [
          "Pasted notes are split into items and labelled — tasks, feelings, symptoms — with links turned into cards.",
          "Anything unclear is flagged with a question and a best guess, and waits for you.",
          "Without an AI key, or offline, sorting falls back to transparent on-device rules.",
          "Voice notes are recorded in the app and transcribed with ElevenLabs Scribe; the recording is always kept.",
        ],
      },
      {
        heading: "Three building blocks",
        paragraphs: [
          "Tabs, entries and cards. Each tab picks a layout — grid, tracker, list or organiser — and any feature, from streaks to search, can be switched on for any layout.",
        ],
      },
    ],
  },

  tezga: {
    lead: "Tezga — “market stall” in almost every Balkan language — is one marketplace for the whole Balkans: buy, sell, rent and swap across six countries, in seven languages.",
    sections: [
      {
        heading: "Six markets, one market place",
        paragraphs: [
          "A country lens sets local currency, cities, phone formats and an accent theme, while every country stays browsable. Serbian works in both Latin and Cyrillic, generated from one source.",
        ],
      },
      {
        heading: "What’s built",
        list: [
          "Search across nearby, my country, international or everywhere — with cross-script matching, typo tolerance and cross-currency price filters.",
          "Property and fashion front doors, with maps, viewings and seller storefronts.",
          "Listing pages with a delivery panel covering pickup, domestic and international shipping.",
          "Artists, services, homemade goods and business storefronts with bookings.",
        ],
      },
    ],
  },

  "8waves": {
    lead: "8waves is a music playground in the browser: an 8 × 16 step sequencer where each row is a drum sound and each column a step in the bar. Tap the cells to build a beat, press play, and save it as a jam.",
    showcase: {
      kind: "step-grid",
      label: "8waves — sequencer",
      rows: ["Kick", "Tom hi", "Tom low", "Snare", "Rim", "Perc", "Shaker", "Snare"],
      steps: 16,
      caption: "An illustration of the 8 × 16 grid, recreated from the app’s code — not a screenshot.",
    },
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Eight rows of drum samples — kick, toms, snare, rim, percussion and shaker — against sixteen steps. A playhead loops across the bar and triggers every active cell; Tone.js handles the sound and the timing.",
        ],
      },
      {
        heading: "Under the hood",
        list: [
          "A Ruby on Rails app serving a React front end through Webpacker.",
          "The sequencer — grid, cells, play and record buttons, tool panel — written as React components with Styled Components.",
          "Accounts, and jams saved to PostgreSQL as a title plus the pattern as JSON.",
        ],
      },
      {
        heading: "Where it was heading",
        paragraphs: [
          "A tool panel for tempo (60–300 BPM) and switching instruments was in progress when the project was put on pause.",
        ],
      },
    ],
  },

  carefoodies: {
    lead: "Carefoodies is a web app for sharing excess food and browsing free food in your neighbourhood — built to make it a little easier not to throw good food away.",
    showcase: {
      kind: "slides",
      label: "carefoodies — 2019",
      images: [
        {
          src: "/images/projects/carefoodies/landing.png",
          alt: "Carefoodies landing page: “Share Excess Food” with a registration form.",
          width: 2000,
          height: 1058,
        },
        {
          src: "/images/projects/carefoodies/welcome.png",
          alt: "Carefoodies welcome page: “Find Free Food” with a welcome-back card.",
          width: 2000,
          height: 1038,
        },
        {
          src: "/images/projects/carefoodies/post.jpg",
          alt: "A single food post: chicken, rice and veggies, with pickup details and a request button.",
          width: 2000,
          height: 1056,
        },
      ],
    },
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Food waste is one of the biggest problems the world faces. Between a third and a half of all food produced globally is never eaten — while people nearby could use it, and the waste is bad for the environment too.",
        ],
      },
      {
        heading: "Who it’s for",
        paragraphs: [
          "Three user stories shaped the product: someone who hates throwing leftovers away and wants to share them, a student on a tight budget missing home-cooked meals, and someone who uses technology to make their money and food go further.",
        ],
      },
      {
        heading: "Approach",
        list: [
          "Started with wireframes and an entity-relationship diagram.",
          "Built every page as JSX views, then organised them into reusable components.",
          "Added RESTful routes, forms, authentication and authorisation.",
          "Wrote the SQL queries to read and update the PostgreSQL database.",
          "Used cookies to make user-to-user requests work.",
        ],
      },
      {
        heading: "What I’d do next",
        list: [
          "Upload images from a file instead of a URL.",
          "Show post times relative to now.",
          "Update request buttons straight after a request is made.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/carefoodies/user-stories.png",
        alt: "User stories for Maria, Daniel and Ishwar.",
        width: 2000,
        height: 1422,
        caption: "User stories that shaped the product.",
        size: "wide",
      },
      {
        src: "/images/projects/carefoodies/wireframes.jpg",
        alt: "Wireframes of the main Carefoodies screens.",
        width: 2400,
        height: 1563,
        caption: "Wireframes, before any code.",
        size: "full",
      },
    ],
  },

  "career-clinic": {
    lead: "Career Clinic started from one belief: everyone deserves to find meaning in their work — and the best way to find it is to try different paths before committing to one.",
    sections: [
      {
        heading: "The idea",
        paragraphs: [
          "People who aren’t sure what they want to do — fresh graduates, for example — sign up as Explorers, register their interests and spend a set time working with a company to see if a role fits. Companies, in return, meet motivated people who want to explore their industry.",
        ],
      },
      {
        heading: "How it works",
        list: [
          "Explorers browse roles and search by industry, personality type and working environment, or with simple and advanced search.",
          "They register interest, and their dashboard shows which employers want to connect.",
          "Employers post listings describing the industry, personality and environment they’re looking for.",
          "Employers see who applied, then email them directly or press Connect.",
        ],
      },
      {
        heading: "Teamwork",
        paragraphs: [
          "Built in a team of three with Kelly and Daniel. We began with an ERD and wireframes, split the work clearly, and stayed in sync by committing and pulling often.",
        ],
      },
    ],
  },
};
