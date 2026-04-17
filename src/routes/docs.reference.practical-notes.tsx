import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/practical-notes")({
  head: () => ({
    meta: [
      { title: "Practical Notes — PID Pilot" },
      { name: "description", content: "Real-world tuning rules of thumb for FTC mechanisms." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Practical Notes</h1>
      <p>
        Rules of thumb that apply regardless of which tuner you're running.
      </p>

      <h2>The job of each term</h2>
      <ul>
        <li><strong>F</strong> should handle most of the constant load.</li>
        <li><strong>P</strong> should correct immediate error.</li>
        <li><strong>I</strong> usually helps most with maintain behavior and long-term error.</li>
        <li>Too much <strong>I</strong> can make recovery slower or cause oscillation.</li>
        <li>Too much <strong>D</strong> can make the mechanism noisy or unstable.</li>
      </ul>

      <h2>Pick MAINTAIN if real load is involved</h2>
      <p>
        If your mechanism experiences real game-piece hits, contact with field elements,
        or otherwise changing load, <code>MAINTAIN</code> is the better mode to test
        first. The disturbance phase scoring will steer you toward gains that actually
        survive contact.
      </p>

      <h2>Run twice, compare</h2>
      <p>
        The cost surface near the optimum is shallow. Running the tuner twice on the same
        mechanism may land on slightly different PIDF sets. If two runs land in the same
        ballpark, you're in a stable region. If they're wildly different, something is
        physically inconsistent — usually loose hardware or a sensor issue.
      </p>

      <h2>Start conservative</h2>
      <p>
        For your first run, pick a target velocity or position that's well inside what
        the mechanism can handle. Once the tuner behaves correctly at a safe target, raise
        it.
      </p>

      <h2>Watch the F estimate</h2>
      <p>
        For position tuning, if the reported <code>F</code> is at the fallback value
        (<code>maxPower * 0.3</code>), the hold-F search ran out of attempts. Increase{" "}
        <code>maxPower</code>, raise <code>fHoldTolerance</code>, or check that the
        mechanism really can hold position at the search range.
      </p>

      <h2>Use FTC Dashboard graphs</h2>
      <p>
        Numbers tell you the score; graphs tell you why. A fast settling time with a
        wiggle on the graph means you have low-amplitude oscillation that the cost
        function isn't catching. Tighten <code>settlingBand</code> or raise{" "}
        <code>wSsError</code>.
      </p>

      <h2>Different mechanisms, different gain magnitudes</h2>
      <p>
        Don't be alarmed if velocity gains are tiny (1e-3 range) and position gains are
        much smaller still. They're operating in different unit systems — velocity uses
        the SDK's internal 32767 scale via <code>setVelocity</code>, while position uses
        raw <code>setPower</code> on a clamped error.
      </p>

      <h2>Re-tune when hardware changes</h2>
      <p>
        New motor, new belt, swapped flywheel wheel, repaired arm — re-tune. PIDF values
        are physical fits. Anything that changes inertia, friction, or gearing changes
        the optimal gains.
      </p>
    </>
  );
}
