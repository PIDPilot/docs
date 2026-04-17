import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/disruption")({
  head: () => ({
    meta: [
      { title: "Velocity Phase 4 — Disruption — PID Pilot" },
      { name: "description", content: "Disturbance recovery scoring in MAINTAIN mode." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 4 — Disruption</h1>
      <p>
        The disruption phase only runs when <strong>all three</strong> conditions are
        true:
      </p>
      <ul>
        <li><code>tuningMode = MAINTAIN</code></li>
        <li>You used <code>withRunUsingEncoderVelocityMotors(...)</code></li>
        <li><code>runDisruptionPhase</code> is <code>true</code> (default)</li>
      </ul>

      <h2>What it measures</h2>
      <ol>
        <li>Wait until velocity is stably near target (within{" "}
          <code>disruptionReadyBandPct</code> for{" "}
          <code>disruptionReadyStableMs</code>)</li>
        <li>Apply a short open-loop braking disturbance:{" "}
          <code>setPower(-maintainDisturbancePower)</code> for{" "}
          <code>maintainDisturbanceMs</code></li>
        <li>Restore closed-loop velocity control</li>
        <li>Measure the largest velocity drop and the time to recover into the ready band</li>
        <li>Repeat for <code>disruptionSamples</code> events (default 5)</li>
      </ol>

      <h2>The disruption cost</h2>
      <CodeBlock
        language="text"
        code={`disruptionCost = wDisruptionRecovery * avgRecoveryMs
              + wDisruptionDip      * avgDropPct

totalCost = stepCost + disruptionCost`}
      />

      <p>
        Defaults are <code>wDisruptionRecovery = 0.002</code> and{" "}
        <code>wDisruptionDip = 1.2</code>. The phase contributes to candidate scoring, so
        the final PIDF is chosen partly by how well it fights off a slowdown — not just by
        how fast it revs up.
      </p>

      <h2>Skipping</h2>
      <p>
        If the mechanism never enters the ready band within{" "}
        <code>disruptionDetectTimeoutMs</code>, the disruption phase marks itself{" "}
        <code>skipped</code> and the result reports{" "}
        <code>disruption=skipped</code>. That usually means the chosen target is too high
        to hold under your motor.
      </p>

      <h2>Worst-case metrics</h2>
      <p>
        The result also includes the <em>worst</em> recovery time and dip across all
        sampled disturbances, not just the average. That helps you spot mechanisms that
        recover well on average but occasionally take much longer.
      </p>
    </>
  );
}
