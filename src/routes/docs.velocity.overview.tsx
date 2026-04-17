import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/velocity/overview")({
  head: () => ({
    meta: [
      { title: "Velocity Tuner Overview — PID Pilot" },
      {
        name: "description",
        content: "VelocityPIDFTuner tunes flywheels and shooters automatically.",
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
        <code>VelocityPIDFTuner</code> is for mechanisms where the target is a{" "}
        <strong>speed</strong> — flywheels, shooters, intake rollers running at a fixed
        RPM.
      </p>

      <h2>Two control paths</h2>
      <p>
        The velocity tuner works in two distinct modes depending on how you wire the
        motors:
      </p>

      <table>
        <thead>
          <tr><th>Setup</th><th>What the tuner does</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>RUN_USING_ENCODER</code> via{" "}
              <code>withRunUsingEncoderVelocityMotors(...)</code></td>
            <td>
              Estimates F from full-power max velocity. Drives the motor with{" "}
              <code>setVelocity(...)</code>. Enables disturbance phase in MAINTAIN.
            </td>
          </tr>
          <tr>
            <td>Power mode via <code>withMotor(...)</code> in{" "}
              <code>RUN_WITHOUT_ENCODER</code></td>
            <td>
              Sweeps motor power upward, fits a power-vs-velocity slope, drives with{" "}
              <code>setPower(...)</code>.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>The four phases</h2>
      <ol>
        <li><a href="/docs/velocity/f-sweep">F Sweep</a> — find a feedforward estimate</li>
        <li><a href="/docs/velocity/ku-search">Ku Search</a> — find rough P, I, D via Ziegler–Nichols</li>
        <li><a href="/docs/velocity/refinement">Step Refinement</a> — score candidate PIDFs</li>
        <li><a href="/docs/velocity/disruption">Disruption</a> — MAINTAIN-only recovery test</li>
      </ol>

      <h2>What you get back</h2>
      <p>
        The tuner returns a <code>VelocityPIDFTuner.Result</code> containing the final
        PIDF, the measured step metrics, and (in MAINTAIN) the measured disturbance
        recovery metrics. The <code>PIDFTunerOpMode</code> wrapper holds these on screen
        until you stop the op mode.
      </p>
    </>
  );
}
