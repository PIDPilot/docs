import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/tuning-modes")({
  head: () => ({
    meta: [
      { title: "Tuning Modes — PID Pilot" },
      { name: "description", content: "REV_UP vs MAINTAIN tuning modes in PID Pilot." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Tuning Modes</h1>
      <p>
        Both tuners support two tuning modes selected via <code>PIDFTuningMode</code>.
        Mode changes the cost-function weights and decides whether the disturbance phase
        runs.
      </p>

      <h2>REV_UP</h2>
      <p>
        Favors getting to the target quickly. Keeps more weight on fast response and
        overshoot control.
      </p>
      <ul>
        <li>Higher overshoot weight</li>
        <li>Lower steady-state error weight</li>
        <li>No disturbance phase</li>
        <li>May accept more overshoot if it gets there faster</li>
      </ul>

      <h2>MAINTAIN</h2>
      <p>
        Favors staying at the target and recovering well from disturbances. Reduces the
        importance of overshoot and increases the penalty on settling time and
        steady-state error. Adds a disturbance-recovery test into scoring.
      </p>
      <ul>
        <li>Higher steady-state error weight</li>
        <li>Higher settling weight</li>
        <li>Adds disturbance recovery and dip into the cost</li>
        <li>Explores <code>I</code> more aggressively (long-term error matters more)</li>
      </ul>

      <h2>Choosing</h2>
      <table>
        <thead>
          <tr>
            <th>Use case</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Flywheel that fires while spinning</td><td><code>MAINTAIN</code></td></tr>
          <tr><td>One-shot launcher, no continuous load</td><td><code>REV_UP</code></td></tr>
          <tr><td>Arm that holds against gravity</td><td><code>MAINTAIN</code></td></tr>
          <tr><td>Slide that snaps to a target then locks</td><td><code>MAINTAIN</code></td></tr>
          <tr><td>Quick reposition without external load</td><td><code>REV_UP</code></td></tr>
        </tbody>
      </table>

      <p>
        If your mechanism's real job is to <em>resist changing load</em>, use{" "}
        <code>MAINTAIN</code>. If it's to <em>get up to speed or position as fast as
        possible</em> and hold quality matters less, use <code>REV_UP</code>.
      </p>

      <h2>Why the same mechanism gives different gains per mode</h2>
      <p>
        <code>REV_UP</code> and <code>MAINTAIN</code> can legitimately produce different
        PIDF values for the same mechanism. That's expected — they're optimizing different
        things.
      </p>
    </>
  );
}
