import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/refinement")({
  head: () => ({
    meta: [
      { title: "Position Phase 3 — Step Refinement — PID Pilot" },
      { name: "description", content: "Score-driven candidate refinement for position PIDF." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 3 — Step Refinement</h1>
      <p>
        The tuner runs a step from zero toward the target with each candidate PIDF and
        records:
      </p>
      <ul>
        <li><strong>Overshoot ticks</strong> — peak position past the target</li>
        <li><strong>Settling time</strong> — time to stay inside the settling band</li>
        <li><strong>Steady-state error</strong> — average error after settling</li>
      </ul>

      <h2>The cost</h2>
      <CodeBlock
        language="text"
        code={`cost = wOvershoot * overshootTicks
     + wSettling  * settlingMs
     + wSsError   * ssError`}
      />

      <p>
        Defaults are <code>wOvershoot=2.0</code>, <code>wSettling=0.002</code>,{" "}
        <code>wSsError=3.0</code>. <code>MAINTAIN</code> mode increases settling and
        ss-error weights and softens overshoot weight.
      </p>

      <h2>Settling band</h2>
      <p>
        Position is "settled" when it stays within <code>settlingBandTicks</code> of the
        target. Default is 25 ticks — tighten this for precision mechanisms.
      </p>

      <h2>The candidate loop</h2>
      <ol>
        <li>Score the current best PIDF with a step response</li>
        <li>For each of P, I, D, F: try <code>+ nudge</code> and <code>- nudge</code></li>
        <li>Return to zero between candidates so tests are fair</li>
        <li>Adopt any candidate that scores better</li>
        <li>If a full pass found nothing, halve the nudge size</li>
        <li>Stop when nudge ≤ <code>nudgeMin</code> or after <code>maxIterations</code></li>
      </ol>

      <p>
        Default nudge starts at <code>0.12</code> and floors at <code>0.004</code>.
        Maximum iterations defaults to 14.
      </p>

      <h2>Early termination</h2>
      <p>
        If overshoot ≤ <code>overshootThreshold</code> (30 ticks) <em>and</em>{" "}
        steady-state error ≤ <code>ssErrorThreshold</code> (15 ticks), the tuner can exit
        the refinement loop early.
      </p>
    </>
  );
}
