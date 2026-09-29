// Everything the site says lives here. Edit this file to update the portfolio.
// Anything still in [brackets] is a placeholder to replace before publishing.

export const profile = {
  name: "Caleb Payán",
  fullName: "Caleb Payán Inzunza",
  role: "Fullstack Engineer",
  email: "calebpayan75@gmail.com",
  location: "Culiacán, MX · UTC−7",
  availability: "Open to remote roles",
  // Optional: drop a square photo in /public and set e.g. "/caleb.jpg".
  photo: null as string | null,
  // Drop your CV at /public/cv.pdf.
  cv: "/cv.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/[your-handle]",
    github: "https://github.com/[your-handle]",
  },
  facts: [
    { label: "Based in", value: "Culiacán, MX · UTC−7" },
    { label: "Focus", value: "Fullstack · AI products" },
    { label: "Core", value: "React · Next.js · TS · Node" },
    { label: "Education", value: "CETYS · Honor Medal" },
  ],
};

export type Project = {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  tagline: string;
  stack: string[];
  built: string;
  decisions: string;
  results: string;
  live?: string;
  code?: string;
  /** Screenshot in /public. Without one, a drawn mockup is shown. */
  image?: string;
  mockup: "pos" | "generic";
};

export const projects: Project[] = [
  {
    id: "pos",
    num: "01",
    eyebrow: "Point of sale · In production",
    title: "Café POS",
    tagline:
      "A point-of-sale system that runs daily service at a real café in Culiacán.",
    stack: ["[Frontend]", "[Backend]", "[Database]"],
    built:
      "[What you built end to end — e.g. order flow, product catalog, daily cash-out reports.]",
    decisions:
      "[Key technical decisions and why — e.g. data model, offline handling, hardware integration.]",
    results:
      "In daily use at a working café. [Add a metric: orders per day, time saved per shift.]",
    mockup: "pos",
  },
  {
    id: "p2",
    num: "02",
    eyebrow: "[Category]",
    title: "[Project 2]",
    tagline: "[One line on the problem it solves and for whom.]",
    stack: ["[Stack]", "[Stack]", "[Stack]"],
    built: "[What you built specifically.]",
    decisions: "[Technical decisions and trade-offs.]",
    results: "[Outcome, users or metric.]",
    mockup: "generic",
  },
  {
    id: "p3",
    num: "03",
    eyebrow: "[Category]",
    title: "[Project 3]",
    tagline: "[One line on the problem it solves and for whom.]",
    stack: ["[Stack]", "[Stack]", "[Stack]"],
    built: "[What you built specifically.]",
    decisions: "[Technical decisions and trade-offs.]",
    results: "[Outcome, users or metric.]",
    mockup: "generic",
  },
];

export const experience = [
  {
    period: "4+ years — Present",
    role: "Fullstack Developer",
    company: "Founder, blancspace — web agency",
    summary:
      "Design, build and ship websites and web apps end to end for clients across legal, real estate, hospitality and religious organizations.",
    tags: ["Legal", "Real estate", "Hospitality", "Religious orgs"],
  },
  {
    period: "May — Oct 2024",
    role: "Frontend Developer",
    company: "Sperantus — logistics SaaS",
    summary:
      "Built interface features in Vue.js for Pack & Trace, a logistics tracking platform. [Add one concrete outcome.]",
    tags: ["Vue.js", "SaaS"],
  },
];

export const stack = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "Python", "Supabase", "Azure SQL"],
  automation: ["n8n", "Power BI"],
};

export const education = [
  {
    detail: "B.S. Software Engineering, ",
    school: "CETYS Universidad",
    after: " — Medal of Honor",
  },
  { detail: "Exchange semester, ", school: "Korea University", after: ", Seoul" },
];
