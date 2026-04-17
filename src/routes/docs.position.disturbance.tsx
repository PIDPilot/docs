import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/disturbance")({
  head: () => ({
    meta: [
      { title: "Position Phase 4 — Disturbance — PID Pilot" },
      { name: "description", content: "Disturbance recovery scoring for MAINTAIN position tuning." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 4 — Disturbance</h1>
      <p>
        The position tuner adds a disturbance test in <code>MAINTAIN</code> mode, just like
        the velocity tuner. It runs whenever <code>tuningMode = MAINTAIN</code> and{" "}
        <code>runDisruptionPhase = true</code>.
      </p>

      <h2>What it measures</h2>
      <ol>
        <li>Hold the mechanism near target until position is stable within{" "}
          <code>disruptionReadyBandTicks</code> for{" "}
          <code>disruptionReadyStableMs</code></li>
        <li>Apply a short open-loop disturbance: <code>setPower(maintainDisturbancePower)</code>{" "}
          in the opposite direction for <code>maintainDisturbanceMs</code></li>
        <li>Resume closed-loop position control</li>
        <li>Measure the largest position deviation (drop ticks)</li>
        <li>Measure recovery time back into the stable band</li>
      </ol>

      <h2>The disturbance cost</h2>
      <CodeBlock
        language="text"
        code={`disruptionCost = wDisruptionRecovery * recoveryMs
              + wDisruptionDip      * dropTicks

totalCost = stepCost + disruptionCost`}
      />

      <p>
        Defaults: <code>wDisruptionRecovery = 0.003</code>,{" "}
        <code>wDisruptionDip = 1.5</code>.
      </p>

      <h2>When this matters</h2>
      <p>
        For an arm or slide that holds a game element, this phase rewards PIDF sets that
        recover quickly when the mechanism gets bumped or when load suddenly changes (a
        sample dropped, a piece grabbed, contact with a wall).
      </p>

      <h2>Safety</h2>
      <p>
        The disturbance pulse is brief and bounded by <code>maintainDisturbancePower</code>{" "}
        (default 0.18) and <code>maintainDisturbanceMs</code> (default 180 ms). It still
        respects <code>positionLimits</code>, so the mechanism cannot be shoved past its
        configured range.
      </p>
    </>
  );
}
