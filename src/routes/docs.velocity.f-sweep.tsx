import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/f-sweep")({
  head: () => ({
    meta: [
      { title: "Velocity Phase 1 — F Sweep — PID Pilot" },
      { name: "description", content: "How PID Pilot estimates the F term for velocity tuning." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 1 — F Sweep</h1>
      <p>
        First, the tuner estimates a feedforward <code>F</code> that already puts the
        mechanism close to the target. That reduces how much <code>P</code> and{" "}
        <code>I</code> need to do during refinement.
      </p>

      <h2>RUN_USING_ENCODER path</h2>
      <p>
        When you configured the tuner with{" "}
        <code>withRunUsingEncoderVelocityMotors(...)</code>:
      </p>
      <ol>
        <li>Switches motors to <code>RUN_WITHOUT_ENCODER</code></li>
        <li>Drives at <code>setPower(1.0)</code></li>
        <li>Lets the mechanism settle for <code>fullPowerSettleMs</code></li>
        <li>Averages velocity samples for <code>fullPowerCharacterizeMs</code></li>
        <li>Restores <code>RUN_USING_ENCODER</code></li>
      </ol>

      <p>
        F is then estimated as:
      </p>
      <CodeBlock language="text" code={`F = 32767 / averageMaxVelocity`} />

      <p>
        <code>32767</code> is the SDK's full-scale internal velocity command, so this
        gives the feedforward needed to ask for full speed.
      </p>

      <h2>Power-mode path</h2>
      <p>
        When you configured with <code>withMotor(...)</code> on a motor in{" "}
        <code>RUN_WITHOUT_ENCODER</code>, the tuner sweeps power upward in{" "}
        <code>fSweepSteps</code> increments. At each step it waits{" "}
        <code>fSweepSettleMs</code>, then samples velocity.
      </p>
      <p>
        It then fits a best-fit feedforward slope from the (power, velocity) pairs:
      </p>
      <CodeBlock
        language="text"
        code={`F = sum(power * velocity) / sum(velocity * velocity)`}
      />
      <p>
        Samples below 50 ticks/sec are dropped to avoid contaminating the fit with the
        low-power dead zone. If no samples make it through, F falls back to{" "}
        <code>0.00017</code>.
      </p>

      <h2>Telemetry during this phase</h2>
      <CodeBlock
        language="text"
        code={`f sweep        7/15
power          0.47
velocity       1284.3`}
      />

      <h2>Tunable knobs</h2>
      <table>
        <thead><tr><th>Config</th><th>Default</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><code>fSweepSteps</code></td><td>15</td><td>How many power increments in power-mode</td></tr>
          <tr><td><code>fSweepSettleMs</code></td><td>600 ms</td><td>Settle time per step</td></tr>
          <tr><td><code>fullPowerCharacterizeMs</code></td><td>1200 ms</td><td>Sampling window in encoder mode</td></tr>
          <tr><td><code>fullPowerSettleMs</code></td><td>500 ms</td><td>Pre-sample settle in encoder mode</td></tr>
        </tbody>
      </table>
    </>
  );
}
