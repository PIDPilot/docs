import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/hold-f")({
  head: () => ({
    meta: [
      { title: "Position Phase 1 — Hold F Search — PID Pilot" },
      { name: "description", content: "How PID Pilot finds the holding feedforward for position tuning." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 1 — Hold F Search</h1>
      <p>
        For position-controlled mechanisms, <code>F</code> represents the feedforward
        power needed to <strong>hold</strong> the mechanism at the target — typically the
        constant power needed to fight gravity on an arm or slide.
      </p>

      <h2>Algorithm</h2>
      <ol>
        <li>Drive to the target with a moderate power (<code>0.4</code>)</li>
        <li>Apply a small initial hold power (<code>fHoldPower = 0.05</code>)</li>
        <li>Wait <code>fHoldSettleMs</code> (600 ms)</li>
        <li>Sample position before, wait 200 ms, sample position after</li>
        <li>If drift &lt; <code>fHoldTolerance</code> (20 ticks), accept this hold power as F</li>
        <li>Otherwise, increase hold power by 0.01 and retry</li>
      </ol>

      <p>
        The loop runs up to 20 attempts. If it never finds a hold power below{" "}
        <code>maxPower</code>, it falls back to <code>maxPower * 0.3</code> as a safe
        default.
      </p>

      <h2>Telemetry during this phase</h2>
      <CodeBlock
        language="text"
        code={`f search power      0.0800
position drift      36.4 ticks
f search power      0.0900
position drift      18.2 ticks    <- accepted, F = 0.0900`}
      />

      <h2>Why this matters</h2>
      <p>
        Without a holding F, the integral term has to slowly accumulate enough output to
        fight gravity, which causes a slow steady-state error and a sluggish hold. With a
        good F, P and I only need to handle <em>deviations</em> from the target — they
        start the work already mostly done.
      </p>

      <h2>Tunable knobs</h2>
      <table>
        <thead><tr><th>Config</th><th>Default</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><code>fHoldPower</code></td><td>0.05</td><td>Starting hold power</td></tr>
          <tr><td><code>fHoldTolerance</code></td><td>20 ticks</td><td>Acceptable drift over 200 ms</td></tr>
          <tr><td><code>fHoldSettleMs</code></td><td>600 ms</td><td>Settle before measuring drift</td></tr>
          <tr><td><code>maxPower</code></td><td>0.7</td><td>Cap on any commanded output</td></tr>
        </tbody>
      </table>
    </>
  );
}
