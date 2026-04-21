import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/setup-rules")({
  head: () => ({
    meta: [
      { title: "Setup Rules — PID Pilot" },
      {
        name: "description",
        content:
          "Hard setup rules for using PID Pilot safely and in ways that match the framework’s control model.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Setup Rules</h1>
      <p>
        These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad
        session for reasons that look like tuning trouble but are really setup trouble.
      </p>

      <h2>Override only one configure method</h2>
      <p>
        A tuning OpMode must override exactly one of <code>configureVelocity()</code> or{" "}
        <code>configurePosition()</code>. The base runner expects a single active control family.
      </p>

      <h2>Remember that config refreshes every loop</h2>
      <p>
        Any hardware assumptions you make inside the configure method need to remain compatible with
        the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the
        OpMode is not a one-time constructor.
      </p>

      <h2>Let the velocity tuner own motor mode</h2>
      <p>
        The velocity tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Do not rely on the SDK’s internal velocity mode to “help”
        it. That produces two loops fighting the same mechanism.
      </p>

      <h2>Choose exactly one position actuator family</h2>
      <p>
        For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed
        or ambiguous actuator selection is a configuration error, not an advanced feature.
      </p>

      <h2>Use meaningful units and safe bounds</h2>
      <ul>
        <li>Targets should be in the same units as the feedback source.</li>
        <li>
          Position mechanisms with hard stops should use <code>positionBounds(...)</code>.
        </li>
        <li>Standard servo modes need a valid open-loop mapping range.</li>
      </ul>

      <h2>Do not treat position kF like velocity kF</h2>
      <p>
        Velocity <code>kF</code> is physical feedforward. Position <code>kF</code> is static trim.
        If you use one concept as though it were the other, the rest of the tuning session becomes
        hard to interpret.
      </p>

      <h2>Supply telemetry and watch it live</h2>
      <p>
        Always pass <code>telemetry(telemetry)</code>. PID Pilot is designed around rich telemetry
        surfaces. Running blind removes one of the framework’s strongest advantages.
      </p>

      <h2>Use conservative first targets</h2>
      <p>
        The first run should prove the control path, not challenge the mechanism at its absolute
        limit. Ask for targets the mechanism can really reach and hold before you start raising
        ambition.
      </p>
    </>
  );
}
