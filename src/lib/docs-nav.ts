export type DocLink = { title: string; to: string };
export type DocSection = { title: string; links: DocLink[] };

export const docsNav: DocSection[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", to: "/docs" },
      { title: "Installation", to: "/docs/installation" },
      { title: "Quick Start", to: "/docs/quick-start" },
    ],
  },
  {
    title: "Concepts",
    links: [
      { title: "PIDF Terms", to: "/docs/concepts/pidf-terms" },
      { title: "Tuning Modes", to: "/docs/concepts/tuning-modes" },
      { title: "How Final PIDF Is Chosen", to: "/docs/concepts/scoring" },
    ],
  },
  {
    title: "Velocity Tuner",
    links: [
      { title: "Overview", to: "/docs/velocity/overview" },
      { title: "Phase 1 — F Sweep", to: "/docs/velocity/f-sweep" },
      { title: "Phase 2 — Ku Search", to: "/docs/velocity/ku-search" },
      { title: "Phase 3 — Step Refinement", to: "/docs/velocity/refinement" },
      { title: "Phase 4 — Disruption", to: "/docs/velocity/disruption" },
      { title: "Config Reference", to: "/docs/velocity/config" },
    ],
  },
  {
    title: "Position Tuner",
    links: [
      { title: "Overview", to: "/docs/position/overview" },
      { title: "Phase 1 — Hold F Search", to: "/docs/position/hold-f" },
      { title: "Phase 2 — Ku Search", to: "/docs/position/ku-search" },
      { title: "Phase 3 — Step Refinement", to: "/docs/position/refinement" },
      { title: "Phase 4 — Disturbance", to: "/docs/position/disturbance" },
      { title: "Config Reference", to: "/docs/position/config" },
    ],
  },
  {
    title: "Templates",
    links: [
      { title: "All Templates", to: "/docs/templates" },
    ],
  },
  {
    title: "Reference",
    links: [
      { title: "Telemetry Output", to: "/docs/reference/telemetry" },
      { title: "Practical Notes", to: "/docs/reference/practical-notes" },
      { title: "Setup Rules", to: "/docs/reference/setup-rules" },
      { title: "FAQ", to: "/docs/reference/faq" },
    ],
  },
];

export const flatDocs: (DocLink & { section: string })[] = docsNav.flatMap((s) =>
  s.links.map((l) => ({ ...l, section: s.title })),
);
