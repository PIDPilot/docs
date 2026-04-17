import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/refinement")({
  head: () => ({
    meta: [
      { title: "Velocity Phase 3 — Step Refinement — PID Pilot" },
      { name: "description", content: "Score-driven candidate refinement for velocity PIDF." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 3 — Step Refinement</h1>
      <p>
        This is where the final PIDF is usually decided. The Ziegler–Nichols seed gives a
        usable starting point; refinement makes it good.
      </p>

      <h2>The step response</h2>
      <p>
        For each candidate PIDF, the tuner runs a full step from rest to target and
        records:
      </p>
      <ul>
        <li><strong>Overshoot %</strong> — how far past the target velocity went</li>
        <li><strong>Settling time</strong> — time to stay inside the band around target</li>
        <li><strong>Steady-state error</strong> — average error after settling</li>
      </ul>

      <h2>The cost</h2>
      <CodeBlock
        language="text"
        code={`cost = wOvershoot * overshootPct
     + wSettling  * settlingMs
     + wSsError   * ssError`}
      />

      <p>
        Defaults are <code>wOvershoot=1.5</code>, <code>wSettling=0.001</code>,{" "}
        <code>wSsError=3.0</code>. <code>MAINTAIN</code> mode shifts these to penalize
        steady-state error and settling more, and overshoot less.
      </p>

      <h2>The candidate loop</h2>
      <ol>
        <li>Score the current best PIDF</li>
        <li>For each of P, I, D, F: try <code>+ nudge</code> and <code>- nudge</code></li>
        <li>If any candidate scores better, adopt it as the new best</li>
        <li>If a full pass finds nothing better, halve the nudge size</li>
        <li>Stop when nudge ≤ <code>nudgeMin</code> or after <code>maxIterations</code></li>
      </ol>

      <p>
        Nudge starts at <code>nudgeStart = 0.12</code> (a 12% scaling) and floors at{" "}
        <code>nudgeMin = 0.004</code>. <code>I</code> exploration is more aggressive in{" "}
        <code>MAINTAIN</code> mode because integral correction is what holds speed under
        load.
      </p>

      <h2>Early termination</h2>
      <p>
        If the current best is already inside <code>thresholds(overshoot, ssErr)</code>,
        the tuner can stop early to save run time. Defaults are{" "}
        <code>overshootThreshold = 3.0%</code> and <code>ssErrorThreshold = 15</code>.
      </p>

      <h2>Telemetry</h2>
      <CodeBlock
        language="text"
        code={`step iter      4/14
candidate      P+ -> 0.005140  I 0.013200  D 0.000550  F 0.000431
overshoot      2.1%
settling       380 ms
ss error       2.8 ticks
cost           1.21  (best 1.18)`}
      />
    </>
  );
}
