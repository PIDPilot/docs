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
      { title: "Quick Start", to: "/docs/quick-start" },
      { title: "Sample OpModes", to: "/docs/templates" },
    ],
  },
  {
    title: "Concepts",
    links: [
      { title: "PIDF Terms", to: "/docs/concepts/pidf-terms" },
      { title: "REV_UP vs MAINTAIN", to: "/docs/concepts/tuning-modes" },
      { title: "How Auto-Tune Works", to: "/docs/concepts/scoring" },
    ],
  },
  {
    title: "Velocity — Flywheels",
    links: [
      { title: "Overview", to: "/docs/velocity/overview" },
      { title: "Auto-Tune (Relay)", to: "/docs/velocity/ku-search" },
      { title: "Config Reference", to: "/docs/velocity/config" },
      {
        title: "Advanced",
        links: [
          { title: "Feedforward Characterization", to: "/docs/velocity/f-sweep" },
          { title: "Running Control & Headroom", to: "/docs/velocity/refinement" },
          { title: "Disruption Sampling", to: "/docs/velocity/disruption" },
        ],
      },
    ],
  },
  {
    title: "Position — Arms & Slides",
    links: [
      { title: "Overview", to: "/docs/position/overview" },
      { title: "Auto-Tune (Relay)", to: "/docs/position/auto-tune" },
      { title: "Config Reference", to: "/docs/position/config" },
      {
        title: "Advanced",
        links: [
          { title: "Actuator & Feedback Modes", to: "/docs/position/hold-f" },
          { title: "Motion Profile & Feedforward", to: "/docs/position/ku-search" },
          { title: "Bounds & Control Flow", to: "/docs/position/refinement" },
          { title: "Disruption Sampling", to: "/docs/position/disturbance" },
        ],
      },
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
