export type DocLink = { title: string; to: string };
export type DocLinkGroup = { title: string; links: DocLink[] };
export type DocNavItem = DocLink | DocLinkGroup;
export type DocSection = { title: string; links: DocNavItem[] };

export function isDocLinkGroup(item: DocNavItem): item is DocLinkGroup {
  return "links" in item;
}

export const docsNav: DocSection[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", to: "/docs" },
      { title: "Installation", to: "/docs/installation" },
      { title: "Daily Workflow", to: "/docs/quick-start" },
      { title: "Sample OpModes", to: "/docs/templates" },
    ],
  },
  {
    title: "Architecture",
    links: [
      { title: "Shared Concepts", to: "/docs/concepts/pidf-terms" },
      { title: "Tuning Modes", to: "/docs/concepts/tuning-modes" },
      { title: "High-Level Architecture", to: "/docs/concepts/scoring" },
    ],
  },
  {
    title: "Velocity Tuner",
    links: [
      { title: "Overview", to: "/docs/velocity/overview" },
      {
        title: "Systems",
        links: [
          { title: "Characterization & Feedforward", to: "/docs/velocity/f-sweep" },
          { title: "Relay Auto-Tuning", to: "/docs/velocity/ku-search" },
          { title: "Running Control & Headroom", to: "/docs/velocity/refinement" },
          { title: "Disruption Sampling", to: "/docs/velocity/disruption" },
        ],
      },
      { title: "Config Reference", to: "/docs/velocity/config" },
    ],
  },
  {
    title: "Position Tuner",
    links: [
      { title: "Overview", to: "/docs/position/overview" },
      {
        title: "Systems",
        links: [
          { title: "Actuator & Feedback Modes", to: "/docs/position/hold-f" },
          { title: "Motion Profile & Feedforward", to: "/docs/position/ku-search" },
          { title: "Bounds & Control Flow", to: "/docs/position/refinement" },
          { title: "Disruption Sampling", to: "/docs/position/disturbance" },
        ],
      },
      { title: "Config Reference", to: "/docs/position/config" },
    ],
  },
  {
    title: "Reference",
    links: [
      { title: "Troubleshooting", to: "/docs/troubleshooting" },
      { title: "Telemetry & Final Summary", to: "/docs/reference/telemetry" },
      { title: "Workflows & Caveats", to: "/docs/reference/practical-notes" },
      { title: "Setup Rules", to: "/docs/reference/setup-rules" },
      { title: "FAQ", to: "/docs/reference/faq" },
    ],
  },
];

export const flatDocs: (DocLink & { section: string })[] = docsNav.flatMap((s) =>
  s.links.flatMap((item) =>
    isDocLinkGroup(item)
      ? item.links.map((link) => ({ ...link, section: `${s.title} / ${item.title}` }))
      : [{ ...item, section: s.title }],
  ),
);
