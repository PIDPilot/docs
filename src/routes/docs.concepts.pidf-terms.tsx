import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/pidf-terms")({
  head: () => ({
    meta: [
      { title: "Shared Concepts — PID Pilot" },
      {
        name: "description",
        content:
          "Shared control concepts in PID Pilot: feedforward vs feedback, Dashboard-driven config, telemetry, and controller internals.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Shared Concepts</h1>
      <p>
        Before you dive into the individual tuners, it helps to understand the common ideas the
        framework is built around. These concepts explain why the package has the class structure it
        does and why the telemetry is so detailed.
      </p>

      <h2>Where P, I, D, and F fit</h2>
      <ul>
        <li>
          <strong>P</strong> reacts to current error and provides the immediate corrective push.
        </li>
        <li>
          <strong>I</strong> reacts to accumulated error over time and is most valuable when hold
          quality and steady-state accuracy matter.
        </li>
        <li>
          <strong>D</strong> damps the response and in PID Pilot is based on measurement change, not
          direct error difference.
        </li>
        <li>
          <strong>F</strong> is not one universal idea: in velocity it is a physical feedforward,
          while in position it is a static trim or friction-help term.
        </li>
      </ul>

      <h2>Feedforward vs feedback</h2>
      <p>
        The package works hard to keep these jobs distinct. Feedforward supplies the expected
        baseline effort. PID handles the leftover error. This matters because a team can only debug
        the controller rationally if it knows whether the mechanism is failing due to a missing
        baseline effort or due to bad feedback behavior.
      </p>

      <ul>
        <li>
          Velocity <code>kF</code> is motor power per <code>ticks/s</code> and is meant to be
          physically interpretable.
        </li>
        <li>
          Position <code>kF</code> is static trim. Gravity constant and cosine compensation are
          separate terms because they represent different physics.
        </li>
      </ul>

      <h2>Dashboard-driven configuration</h2>
      <p>
        PID Pilot is not based on static startup configuration only. The base OpMode calls{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code> every loop, so changes
        made in FTC Dashboard take effect immediately. That is why the tuners must reassert key
        hardware assumptions during refresh, such as velocity mode ownership.
      </p>

      <h2>Telemetry is a diagnostic surface</h2>
      <p>
        The framework exposes more than target, measurement, and error. It publishes controller
        terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries,
        warnings, and copyable gain summaries because teams need to know <em>why</em> the loop
        behaves the way it does.
      </p>

      <h2>Derivative on measurement</h2>
      <p>
        <code>PIDFController</code> computes derivative from the measurement rather than from direct
        error difference. That avoids derivative kick when the setpoint changes suddenly, which is
        common in FTC because many commands are step changes.
      </p>

      <h2>Controller state is intentionally exposed</h2>
      <p>
        The controller stores things like integral memory, measurement rate, filtered measurement
        rate, term contributions, last error, and last output. The tuners reuse that state directly
        for telemetry instead of re-deriving it elsewhere. This is part of why the framework can
        explain controller behavior so clearly.
      </p>

      <h2>Accumulator units matter</h2>
      <p>
        When integral is clamped, the controller clamps the stored accumulator rather than only the
        final <code>iTerm</code>. That keeps the cap tied to error history. The tuners can then
        derive that cap from actuator headroom while still reasoning about the stored state
        correctly.
      </p>
    </>
  );
}
