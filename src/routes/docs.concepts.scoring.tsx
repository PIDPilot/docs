import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/scoring")({
  head: () => ({
    meta: [
      { title: "How Final PIDF Is Chosen — PID Pilot" },
      {
        name: "description",
        content: "PID Pilot scores candidate PIDF sets with a real cost function and picks the best.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>How the Final PIDF Is Chosen</h1>
      <p>
        The final PIDF returned by PID Pilot is <strong>not</strong> the first set
        produced by Ziegler–Nichols. It's the best-scoring candidate found during the
        refinement loop.
      </p>

      <h2>The flow</h2>
      <ol>
        <li>The tuner finds an initial <code>F</code></li>
        <li>The tuner finds an initial <code>P</code>, <code>I</code>, <code>D</code></li>
        <li>The tuner repeatedly tests nearby PIDF candidates</li>
        <li>Each candidate is scored from measured behavior</li>
        <li>The candidate with the lowest cost becomes the current best set</li>
        <li>The search keeps shrinking its adjustment size until no better candidate is found or thresholds are met</li>
      </ol>

      <h2>The cost function</h2>
      <p>
        The base cost is computed from a real step response:
      </p>
      <CodeBlock
        language="text"
        code={`cost = wOvershoot * overshoot
     + wSettling  * settlingTime
     + wSsError   * steadyStateError`}
      />

      <p>
        In <code>MAINTAIN</code> mode, an extra disturbance cost is added:
      </p>
      <CodeBlock
        language="text"
        code={`disruptionCost = wDisruptionRecovery * recoveryMs
              + wDisruptionDip      * dropMagnitude

totalCost = cost + disruptionCost`}
      />

      <h2>Candidate generation</h2>
      <p>
        From the current best PIDF, the tuner produces nearby candidates by nudging each
        term up and down independently:
      </p>
      <ul>
        <li><code>P</code> ± nudge</li>
        <li><code>I</code> ± nudge</li>
        <li><code>D</code> ± nudge</li>
        <li><code>F</code> ± nudge</li>
      </ul>
      <p>
        If a candidate scores better, it becomes the new best. If a full pass finds
        nothing better, the nudge size shrinks and the loop continues until it hits{" "}
        <code>nudgeMin</code> or <code>maxIterations</code>.
      </p>

      <h2>Why this matters</h2>
      <p>
        The values reported on screen are <strong>measurements</strong> from the final
        selected candidate, not extrapolations or guesses. That's also why running the
        tuner twice on the same mechanism can land on slightly different PIDF sets — the
        cost surface near the optimum is shallow, and small physical noise can push the
        final candidate one nudge away.
      </p>
    </>
  );
}
