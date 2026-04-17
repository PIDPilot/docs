import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/overview")({
  head: () => ({
    meta: [
      { title: "Position Tuner Overview — PID Pilot" },
      { name: "description", content: "PositionPIDFTuner tunes arms, slides and lifts." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Tuner</h1>
      <p>
        <code>PositionPIDFTuner</code> is for mechanisms where the target is an{" "}
        <strong>encoder position</strong> — arms, linear slides, vertical lifts, anything
        with a fixed setpoint in ticks.
      </p>

      <h2>The four phases</h2>
      <ol>
        <li><a href="/docs/position/hold-f">Hold-F Search</a> — find the power needed to hold position</li>
        <li><a href="/docs/position/ku-search">Ku Search</a> — Ziegler–Nichols seed</li>
        <li><a href="/docs/position/refinement">Step Refinement</a> — score candidate PIDFs</li>
        <li><a href="/docs/position/disturbance">Disturbance</a> — MAINTAIN-only push test</li>
      </ol>

      <h2>Always set position limits</h2>
      <p>
        Position tuning physically drives the mechanism between zero and the target
        repeatedly. Always provide <code>positionLimits(min, max)</code> so the tuner
        clamps power if the mechanism approaches the end of its range. The default range
        is 0–3000 ticks, which is rarely correct for your hardware.
      </p>

      <h2>Return to zero</h2>
      <p>
        Between candidate tests, the tuner uses an internal <code>returnToZero()</code>{" "}
        helper to bring the mechanism back near the starting position. This isn't part of
        the final PIDF calculation — it just ensures every candidate is tested from a
        consistent initial condition, which makes scoring fair.
      </p>
    </>
  );
}
