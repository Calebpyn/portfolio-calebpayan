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
    { label: "Education", value: "B.S. SWE · MBA in progress" },
  ],
};

export type Shot = { src: string; alt: string };

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
  liveLabel?: string;
  code?: string;
  /** Screenshots in /public/projects. The first one is the card cover. */
  shots: Shot[];
  /** Background gradient behind the cover screenshot. */
  tint: [string, string];
};

export const projects: Project[] = [
  {
    id: "open-pos",
    num: "01",
    eyebrow: "Open source · Used daily",
    title: "Open POS",
    tagline:
      "An offline-first point of sale I built for my own café — now free and open source for other small businesses.",
    stack: ["Go", "SQLite", "HTMX", "Alpine.js", "Swift"],
    built:
      "Editable floor plan, order taking with per-guest checks and modifiers, kitchen and bar tickets by production area, an Expo monitor with per-dish timing, split payments, tips, blind cash counts and an admin panel with sales reports. iPads and phones join over the café Wi-Fi as waiter terminals.",
    decisions:
      "One Go binary with templates, CSS, JS and SQL migrations embedded — no cloud or CDNs, so it keeps selling when the internet drops. SQLite in WAL mode through a pure-Go driver. ESC/POS rendered server-side and sent to cheap thermal printers over CUPS or TCP. Roles enforced on the server; remote admin over Tailscale.",
    results:
      "Runs service every day at my café. Released under AGPL-3.0 with a macOS installer and CI, and shared with small-business owners on Reddit.",
    live: "https://github.com/Calebpyn/open-pos/releases",
    liveLabel: "Download",
    code: "https://github.com/Calebpyn/open-pos",
    shots: [
      { src: "/projects/openpos-order.png", alt: "Open POS order screen: floor plan, menu and a table ticket split by guest" },
      { src: "/projects/openpos-checkout.png", alt: "Open POS checkout with per-guest filters, discounts, tip and mixed payments" },
      { src: "/projects/openpos-expo.png", alt: "Open POS Expo monitor with per-dish timers" },
    ],
    tint: ["#E7F6EF", "#BFE6D3"],
  },
  {
    id: "bibliotrack",
    num: "02",
    eyebrow: "CETYS Ensenada library · Desktop app",
    title: "BiblioTrack",
    tagline:
      "Check-in kiosk and analytics dashboard the CETYS Ensenada library asked me to build to track attendance for accreditation.",
    stack: ["Electron", "React", "SQLite", "Express", "Recharts"],
    built:
      "A touch-first check-in screen for students — numeric keypad, personal greeting and targeted announcements — plus a seven-tab admin dashboard: live counts, entries by hour, day and program, CSV roster import, kiosk customization and printable PDF reports.",
    decisions:
      "Dual-window Electron app over a contextBridge IPC layer. A unified API lets the same dashboard run locally over IPC or from any browser on the campus LAN over REST and Server-Sent Events, with admin approval for new devices. SQLite tuned with WAL, mmap and index-friendly range queries; idempotent schema migrations.",
    results:
      "Built at the library's request to report attendance for accreditation. 117 automated tests across 8 suites; Windows installer built with electron-builder in GitHub Actions.",
    code: "https://github.com/Calebpyn/bibliotrack",
    shots: [
      { src: "/projects/bibliotrack-dashboard.png", alt: "BiblioTrack dashboard with monthly entries by day and by program (demo data)" },
      { src: "/projects/bibliotrack-checkin.png", alt: "BiblioTrack check-in kiosk with numeric keypad" },
      { src: "/projects/bibliotrack-welcome.png", alt: "BiblioTrack welcome screen after a student checks in (demo data)" },
    ],
    tint: ["#E4E8F7", "#B9C3EE"],
  },
  {
    id: "greenblnk",
    num: "03",
    eyebrow: "INESU · UI GreenMetric · Team lead",
    title: "GreenBlnk",
    tagline:
      "The platform CETYS campuses use to collect the sustainability data they submit to the UI GreenMetric World University Rankings.",
    stack: ["React", "TypeScript", "MUI", "Azure Functions", "Azure SQL", "Power BI"],
    built:
      "Led the development team for INESU. The web app covers a catalog of categories and variables, reporting cycles, Excel templates generated per cycle, file upload with preview and validation, manual entry, a values explorer across the Mexicali, Tijuana and Ensenada campuses, and evidence photo uploads.",
    decisions:
      "Serverless API on Azure Functions over Azure SQL, modeled as fact and dimension tables that Power BI reads directly for insights. Evidence images live in Azure Blob Storage behind short-lived SAS URLs. Deployed to Azure Static Web Apps with GitHub Actions CI/CD.",
    results:
      "Live at greenblnk.com, replacing scattered spreadsheets with one source of truth for GreenMetric data across three campuses.",
    live: "https://greenblnk.com",
    shots: [
      { src: "/projects/greenblnk-overview.png", alt: "GreenBlnk overview with record counts and upload history" },
      { src: "/projects/greenblnk-values.png", alt: "GreenBlnk values table by variable and campus" },
    ],
    tint: ["#E3EFE8", "#B7D3C2"],
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
  backend: ["Node.js", "Go", "Python", "Supabase", "Azure SQL"],
  automation: ["Azure", "Electron", "n8n", "Power BI"],
};

export const education = [
  {
    detail: "B.S. Software Engineering, ",
    school: "CETYS Universidad",
    after: " — Medal of Honor",
  },
  { detail: "Exchange semester, ", school: "Korea University", after: ", Seoul" },
  { detail: "", school: "MBA", after: " — in progress" },
];
