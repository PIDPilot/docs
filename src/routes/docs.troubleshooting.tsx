import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — PID Pilot" },
      {
        name: "description",
        content:
          "Troubleshoot common PID Pilot issues in velocity and position sessions using the framework’s real diagnostics and caveats.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Troubleshooting</h1>
      <p>
        When a PID Pilot session goes wrong, the fastest path forward is usually to identify which
        framework assumption is being violated. This page maps common symptoms to the most likely
        setup or control-model problem and points you to the next page worth reading.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
        <SymptomCard
          title="Velocity cannot reach target or warnings mention headroom"
          desc="The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output."
          causes={[
            "Target speed is unrealistic for the current mechanism and battery state.",
            "The physical kF source is wrong or never established cleanly.",
            "The loop is spending too much output on proportional correction because the baseline effort was never covered.",
          ]}
          links={[
            { label: "Velocity Overview", to: "/docs/velocity/overview" },
            { label: "Characterization", to: "/docs/velocity/f-sweep" },
            { label: "Running Control", to: "/docs/velocity/refinement" },
          ]}
        />

        <SymptomCard
          title="Velocity behavior looks like two controllers are fighting"
          desc="Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story."
          causes={[
            "Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.",
            "User code is reasserting a conflicting hardware mode inside configureVelocity().",
            "The tuner is not being allowed to own raw power control.",
          ]}
          links={[
            { label: "Setup Rules", to: "/docs/reference/setup-rules" },
            { label: "Velocity Overview", to: "/docs/velocity/overview" },
            { label: "Telemetry", to: "/docs/reference/telemetry" },
          ]}
        />

        <SymptomCard
          title="Position mechanism reaches target once but holds badly"
          desc="An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load."
          causes={[
            "Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.",
            "You are reading the wrong feedback source or using inconsistent units.",
            "The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP.",
          ]}
          links={[
            { label: "Position Overview", to: "/docs/position/overview" },
            { label: "Motion & Feedforward", to: "/docs/position/ku-search" },
            { label: "Disruption", to: "/docs/position/disturbance" },
          ]}
        />

        <SymptomCard
          title="Position mechanism pushes into a stop or clamps unexpectedly"
          desc="The requested target and measured motion do not agree, or the controller appears to fight a hard limit."
          causes={[
            "Bounds are missing, wrong, or defined in inconsistent units.",
            "The actuator family or servo mapping range is incorrect.",
            "Constraint status is telling you something real that you are not reading yet.",
          ]}
          links={[
            { label: "Bounds & Control Flow", to: "/docs/position/refinement" },
            { label: "Setup Rules", to: "/docs/reference/setup-rules" },
            { label: "Telemetry", to: "/docs/reference/telemetry" },
          ]}
        />
      </div>

      <h2>First checks before changing gains</h2>
      <ul>
        <li>
          Confirm the mechanism is physically healthy and can move safely through the intended
          range.
        </li>
        <li>
          Verify hardware names, motor directions, encoder directions, and target sign conventions.
        </li>
        <li>Choose a target the mechanism can realistically reach and hold.</li>
        <li>Read the telemetry notes and warnings instead of only the final gain values.</li>
        <li>Confirm that the selected control family matches the actual mechanism job.</li>
      </ul>

      <h2>When to stop the session immediately</h2>
      <ul>
        <li>The mechanism is driving into a hard stop.</li>
        <li>The velocity loop is clearly fighting a motor-mode conflict.</li>
        <li>The feedback signal is obviously wrong or discontinuous.</li>
        <li>The mechanism is outside a safe physical range for live testing.</li>
      </ul>

      <h2>Best next pages</h2>
      <ul>
        <li>
          <Link to="/docs/reference/telemetry">Telemetry &amp; Final Summary</Link> when the raw
          numbers need interpretation.
        </li>
        <li>
          <Link to="/docs/reference/practical-notes">Workflows &amp; Caveats</Link> when the session
          looks “legal” but still not useful.
        </li>
        <li>
          <Link to="/docs/reference/faq">FAQ</Link> when the issue is really about the framework’s
          intended semantics.
        </li>
      </ul>

      <blockquote>
        If the telemetry story and the mechanism physics disagree, trust the physics first and use
        the telemetry to figure out which framework assumption broke.
      </blockquote>
    </>
  );
}

function SymptomCard({
  title,
  desc,
  causes,
  links,
}: {
  title: string;
  desc: string;
  causes: string[];
  links: { label: string; to: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Likely Causes
      </p>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {causes.map((cause) => (
          <li key={cause}>{cause}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
