import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/ku-search")({
  head: () => ({
    meta: [
      { title: "Position Phase 2 — Ku Search — PID Pilot" },
      { name: "description", content: "Ziegler-Nichols ultimate gain search for position tuning." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 2 — Ku Search</h1>
      <p>
        The position tuner looks for a proportional gain that makes the mechanism
        <strong> oscillate around the target</strong>, then converts that into seed PID
        values.
      </p>

      <h2>Detecting oscillation</h2>
      <p>
        At each test gain, the tuner runs a closed loop with only <code>P</code> and{" "}
        <code>F</code> (no I, no D) for <code>kuObserveMs</code>. It counts how many times
        position crosses the target. If crossings ≥ 4, the gain is "oscillating".
      </p>
      <CodeBlock
        language="text"
        code={`power = clamp((P * (target - position)) + F, -maxPower, maxPower)`}
      />

      <h2>Algorithm</h2>
      <ol>
        <li>Start with <code>hi = kuInitialHi</code> (default <code>0.002</code>)</li>
        <li>Double <code>hi</code> until oscillation detected (up to 8 doublings)</li>
        <li>Binary-search <code>[lo, hi]</code> for 12 iterations</li>
        <li>At <code>Ku</code>, record crossing times to compute period <code>Tu</code></li>
        <li>Return between iterations to keep tests consistent</li>
      </ol>

      <h2>Mapping to PID</h2>
      <CodeBlock
        language="text"
        code={`P = 0.33 * Ku
I = (Tu > 0) ? P / (Tu / 2) : 0
D = P * (Tu / 3)`}
      />

      <p>
        Identical to the velocity tuner — a relaxed Ziegler–Nichols mapping that gives
        refinement room to find a calmer optimum.
      </p>

      <h2>Safety during Ku search</h2>
      <p>
        Every commanded power passes through <code>safeActuate</code>, which forces the
        mechanism to slow or stop if it approaches <code>minPosition</code> or{" "}
        <code>maxPosition</code>. This is why setting accurate position limits is{" "}
        <strong>essential</strong> for position tuning.
      </p>
    </>
  );
}
