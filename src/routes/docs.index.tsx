import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Introduction — PID Pilot" },
      {
        name: "description",
        content:
          "PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode,
        and its relay auto-tune measures the mechanism and computes working gains for you — live on
        FTC Dashboard, with no controls background required.
      </p>

      <p>
        It covers the two control problems most FTC mechanisms fall into: <strong>velocity</strong>{" "}
        (flywheels and shooters) and <strong>position</strong> (arms, elevators, slides, turrets, and
        servo-driven axes). Both share the same controller core and the same auto-tune engine, but
        each speaks its own mechanism&apos;s language.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
        <IntroCard
          title="Quick Start"
          desc="Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains."
          to="/docs/quick-start"
          label="Start here"
        />
        <IntroCard
          title="Velocity Tuner"
          desc="Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec."
          to="/docs/velocity/overview"
          label="Velocity docs"
        />
        <IntroCard
          title="Position Tuner"
          desc="Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds."
          to="/docs/position/overview"
          label="Position docs"
        />
      </div>

      <h2>What auto-tune actually does</h2>
      <p>
        Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the{" "}
        <strong>relay method</strong>: it drives the mechanism into a controlled oscillation around
        your target, measures the oscillation (its ultimate gain <code>Ku</code> and period{" "}
        <code>Pu</code>), and applies Ziegler–Nichols formulas to produce working{" "}
        <code>REV_UP</code> and <code>MAINTAIN</code> gains. It runs automatically the first time you
        start the OpMode, for motors and CR servos, on both tuners.
      </p>
      <p>
        You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain,
        band, and timeout live from FTC Dashboard while the mechanism runs.
      </p>

      <h2>How it runs</h2>
      <ol>
        <li>
          Your OpMode extends <code>PIDFTunerOpMode</code> and returns a <code>Config</code> from{" "}
          <code>configureVelocity()</code> or <code>configurePosition()</code>.
        </li>
        <li>
          The runner instantiates the matching tuner and drives the live loop — reading sensors,
          computing control, applying output, and mirroring rich telemetry to the Driver Station and
          Dashboard.
        </li>
        <li>
          On start it auto-tunes (unless you skipped it), then holds the target so you can watch and
          refine.
        </li>
        <li>
          <code>gamepad1.x</code> toggles between <code>REV_UP</code> (fast approach) and{" "}
          <code>MAINTAIN</code> (steady-state hold) live.
        </li>
      </ol>

      <h2>What&apos;s in the library</h2>
      <ul>
        <li>
          <code>PIDFController</code> — the shared control math: derivative-on-measurement,
          anti-windup, and fully exposed term state.
        </li>
        <li>
          <code>PIDFTunerOpMode</code> — the live runner: config refresh every loop, telemetry
          mirroring, and the mode toggle.
        </li>
        <li>
          <code>VelocityPIDFTuner</code> — raw <code>ticks/s</code> control, feedforward
          characterization, relay auto-tune, and disruption recovery.
        </li>
        <li>
          <code>PositionPIDFTuner</code> — motors, CR servos, and standard servos, with relay
          auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds.
        </li>
        <li>
          Ready-to-copy sample OpModes: <code>TuneFlywheelNew</code>, <code>TuneArm</code>, and{" "}
          <code>TuneElevator</code>.
        </li>
      </ul>

      <h2>Suggested reading order</h2>
      <ol>
        <li>
          <Link to="/docs/installation">Installation</Link> then{" "}
          <Link to="/docs/quick-start">Quick Start</Link> to get auto-tune running.
        </li>
        <li>
          <Link to="/docs/concepts/pidf-terms">PIDF Terms</Link> and{" "}
          <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> to understand what the numbers
          mean.
        </li>
        <li>The velocity or position section that matches your mechanism.</li>
        <li>
          <Link to="/docs/reference/telemetry">Telemetry</Link> and{" "}
          <Link to="/docs/troubleshooting">Troubleshooting</Link> when you need to decode real
          behavior.
        </li>
      </ol>

      <blockquote>
        PID Pilot reasons about control; it does not hide bad hardware. It works best when the
        mechanism is already mechanically healthy, with a safe range of motion and consistent
        sensors.
      </blockquote>
    </>
  );
}

function IntroCard({
  title,
  desc,
  to,
  label,
}: {
  title: string;
  desc: string;
  to: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <Link
        to={to}
        className="mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
      >
        {label}
      </Link>
    </div>
  );
}
