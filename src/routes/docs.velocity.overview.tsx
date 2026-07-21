import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/velocity/overview")({
  head: () => ({
    meta: [
      { title: "Velocity Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of VelocityPIDFTuner, its raw ticks-per-second model, lifecycle phases, and operational responsibilities.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Tuner</h1>
      <p>
        <code>VelocityPIDFTuner</code> tunes speed-controlled mechanisms — flywheels and shooters. On
        start it estimates a physical <code>kF</code>, then{" "}
        <Link to="/docs/velocity/ku-search">relay auto-tunes</Link> kP/kI/kD for you. Beyond that it
        handles feedforward, phase routing, disruption measurement, and telemetry rich enough to
        explain why the controller behaves the way it does.
      </p>

      <blockquote>
        New here? The fastest path is <Link to="/docs/quick-start">Quick Start</Link> — bind your
        motors, set a target, press start, and read the gains off Dashboard. The pages below explain
        each phase in depth.
      </blockquote>

      <h2>Raw units are deliberate</h2>
      <p>
        The velocity tuner works in raw <code>ticks/s</code>. That means the gain values often look
        numerically small, but the numbers are honest: <code>kP</code>, <code>kI</code>,{" "}
        <code>kD</code>, and <code>kF</code> all correspond to real physical units instead of a
        hidden normalization scheme.
      </p>

      <h2>Lifecycle phases</h2>
      <ul>
        <li>
          <strong>CHARACTERIZING</strong> estimates a physical <code>kF</code> from max velocity.
        </li>
        <li>
          <strong>SETTLING</strong> pauses output and clears controller memory before the next step.
        </li>
        <li>
          <strong>RELAY_TUNING</strong> creates a controlled oscillation to estimate usable gains.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> briefly surfaces relay results before normal control takes
          over.
        </li>
        <li>
          <strong>RUNNING</strong> performs normal closed-loop control with active gains.
        </li>
        <li>
          <strong>DISRUPTION</strong> measures recovery after a real disturbance when hold quality
          matters.
        </li>
        <li>
          <strong>COMPLETE</strong> exposes final summary lines and copyable values.
        </li>
      </ul>

      <h2>Main responsibilities inside the class</h2>
      <ol>
        <li>Manage active gain families and mode switching.</li>
        <li>Resolve the physical feedforward source.</li>
        <li>Characterize startup behavior when needed.</li>
        <li>Run relay auto-tuning when enabled.</li>
        <li>Apply normal closed-loop control in raw power space.</li>
        <li>
          Measure disruption recovery in <code>MAINTAIN</code>.
        </li>
        <li>Render operational telemetry and warnings.</li>
      </ol>

      <h2>Why motor mode enforcement matters</h2>
      <p>
        The tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Because the surrounding OpMode refreshes config every
        loop, user code might accidentally reassert another run mode. If that happened and the tuner
        did not push back, the SDK’s inner loop could start fighting the tuner's outer loop.
      </p>

      <h2>Important next pages</h2>
      <ul>
        <li>
          <Link to="/docs/velocity/f-sweep">Characterization &amp; Feedforward</Link> explains how
          physical <code>kF</code> is sourced.
        </li>
        <li>
          <Link to="/docs/velocity/ku-search">Relay Auto-Tuning</Link> explains how the tuner
          derives conservative starting gains.
        </li>
        <li>
          <Link to="/docs/velocity/refinement">Running Control &amp; Headroom</Link> explains the
          normal update loop, ramping, and gain sanity warnings.
        </li>
      </ul>
    </>
  );
}
