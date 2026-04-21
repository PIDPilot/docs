import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Introduction — PID Pilot" },
      {
        name: "description",
        content:
          "Introduction to PID Pilot’s self-contained FTC PIDF tuning framework, package layout, and control philosophy.",
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
        PID Pilot is a self-contained PIDF tuning framework for FTC mechanisms. It is designed to
        help a team stand up a tuning OpMode quickly, expose the right controls in FTC Dashboard,
        and get telemetry that explains what the controller is doing rather than only whether the
        mechanism “works.”
      </p>

      <p>
        The package supports two control families: velocity tuning for flywheels and shooters, and
        position tuning for arms, elevators, slides, turrets, and servo-driven axes. Both families
        share the same overall philosophy, but they are allowed to behave differently where the
        physics are different.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
        <IntroCard
          title="Daily Workflow"
          desc="See the shortest path from package install to a useful PIDF session with live Dashboard edits."
          to="/docs/quick-start"
          label="Open Workflow"
        />
        <IntroCard
          title="Velocity Tuner"
          desc="Learn how characterization, relay auto-tuning, running control, and disruption sampling fit together."
          to="/docs/velocity/overview"
          label="Open Velocity Docs"
        />
        <IntroCard
          title="Position Tuner"
          desc="Learn how actuator families, motion profiling, feedforward layers, and hard bounds are organized."
          to="/docs/position/overview"
          label="Open Position Docs"
        />
      </div>

      <h2>What ships in the package</h2>
      <ul>
        <li>
          <code>PIDFController.java</code> for the shared control math and exposed controller
          internals.
        </li>
        <li>
          <code>PIDFTunerOpMode.java</code> for the live runner, config refresh, telemetry mirror,
          and tuning-mode toggle behavior.
        </li>
        <li>
          <code>PIDFTuningMode.java</code> with the shared <code>REV_UP</code> and{" "}
          <code>MAINTAIN</code> language.
        </li>
        <li>
          <code>VelocityPIDFTuner.java</code> for raw <code>ticks/s</code> control,
          characterization, relay auto-tuning, and disruption recovery.
        </li>
        <li>
          <code>PositionPIDFTuner.java</code> for motors, CR servos, standard servos, motion
          profiles, feedforward layers, and hard bounds.
        </li>
        <li>
          Sample OpModes such as <code>TuneFlywheelNew</code>, <code>TuneArm</code>, and{" "}
          <code>TuneElevator</code>.
        </li>
      </ul>

      <h2>Design goals</h2>
      <ul>
        <li>The tuners own the outer control loop themselves.</li>
        <li>FTC Dashboard is treated as a live tuning surface, not only a logging sink.</li>
        <li>
          <code>REV_UP</code> and <code>MAINTAIN</code> are separate behaviors with separate gain
          sets.
        </li>
        <li>
          Telemetry is detailed enough to diagnose controller behavior, not only show a target.
        </li>
        <li>
          Feedforward and feedback stay separated clearly enough for teams to reason about them.
        </li>
        <li>Velocity and position are documented as different engineering workflows.</li>
      </ul>

      <h2>How the framework runs</h2>
      <ol>
        <li>A concrete OpMode returns a fresh velocity or position config object.</li>
        <li>
          <code>PIDFTunerOpMode</code> instantiates the matching tuner and enters the main loop.
        </li>
        <li>
          Every cycle the OpMode re-reads config, refreshes the tuner, reads sensors, updates
          control, and publishes telemetry.
        </li>
        <li>
          The driver can toggle between <code>REV_UP</code> and <code>MAINTAIN</code> using{" "}
          <code>gamepad1.x</code>.
        </li>
      </ol>

      <h2>Why teams use it every day</h2>
      <p>
        PID Pilot is useful when a team needs more than a bag of gains. The framework helps them
        build one repeatable live-tuning surface across mechanisms, preserve the meaning of terms
        like feedforward and headroom, and teach the next student what a stable loop looked like in
        telemetry rather than only what number got copied.
      </p>

      <h2>Suggested reading order</h2>
      <ol>
        <li>
          Read <Link to="/docs/installation">Installation</Link> and{" "}
          <Link to="/docs/quick-start">Daily Workflow</Link> if you are adopting the package now.
        </li>
        <li>
          Read <Link to="/docs/concepts/scoring">High-Level Architecture</Link> if you need to
          understand how the classes fit together.
        </li>
        <li>Go to the velocity or position section that matches your mechanism.</li>
        <li>
          Use <Link to="/docs/reference/telemetry">Telemetry &amp; Final Summary</Link> and{" "}
          <Link to="/docs/troubleshooting">Troubleshooting</Link> when the robot behavior is the
          thing you need to decode.
        </li>
      </ol>

      <blockquote>
        PID Pilot works best when the mechanism is already physically healthy. It helps teams reason
        about control; it does not hide bad hardware, unsafe ranges, or inconsistent sensors.
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
