import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PID Pilot" },
      { name: "description", content: "Common questions about PID Pilot." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>FAQ</h1>

      <h2>Why are my REV_UP and MAINTAIN gains different?</h2>
      <p>
        That's expected. The two modes optimize different cost functions.{" "}
        <code>REV_UP</code> rewards fast arrival; <code>MAINTAIN</code> rewards holding
        and disturbance recovery. Pick the mode that matches what the mechanism actually
        does.
      </p>

      <h2>The tuner ran but the mechanism barely moved</h2>
      <p>
        Most likely the target is too small. The Ku search needs the mechanism to actually
        oscillate around the target. If the target velocity is below the dead-zone of the
        motor, no <code>P</code> will ever produce oscillation. Pick a target inside the
        mechanism's normal operating range.
      </p>

      <h2>"disruption=skipped" in my result — what happened?</h2>
      <p>
        The mechanism never reached the ready band within{" "}
        <code>disruptionDetectTimeoutMs</code>. Usually that means your final PIDF can't
        actually hold the requested target — try a lower target, or bump{" "}
        <code>disruptionDetectTimeoutMs</code> if the mechanism just needs more time.
      </p>

      <h2>Can I run two tuner op modes back to back?</h2>
      <p>
        Yes. Each op mode is independent. Just remember every run physically exercises the
        mechanism, so let motors cool between aggressive runs.
      </p>

      <h2>Does PID Pilot work for <code>RUN_TO_POSITION</code>?</h2>
      <p>
        No — <code>PositionPIDFTuner</code> implements its own closed loop and writes raw
        power. Don't combine it with <code>RUN_TO_POSITION</code> mode. Set the motor to{" "}
        <code>RUN_USING_ENCODER</code> or <code>RUN_WITHOUT_ENCODER</code> and let the
        tuner's loop handle position control.
      </p>

      <h2>How long does a full tune take?</h2>
      <p>
        Typically 1–4 minutes. Velocity MAINTAIN with the disruption phase is the longest;
        position REV_UP with a small range is the shortest. Most of the time is spent in
        Phase 3 refinement.
      </p>

      <h2>What if my mechanism doesn't have a single "motor"?</h2>
      <p>
        Use the lambda configuration: <code>.sensor(() {">"} ...)</code> and{" "}
        <code>.actuator(power {"->"} ...)</code>. See the{" "}
        <a href="/docs/templates">Templates</a> page for averaged-motor and paired-slide
        examples.
      </p>

      <h2>The reported F looks suspiciously round</h2>
      <p>
        For position tuning, <code>F</code> is the smallest hold power that drifted less
        than <code>fHoldTolerance</code> over 200 ms. It's stepped in <code>0.01</code>{" "}
        increments, so values like <code>0.09</code> or <code>0.13</code> are normal.
        Refinement may push it to a non-round value afterward.
      </p>

      <h2>Why "0.33 * Ku" instead of classic Ziegler–Nichols?</h2>
      <p>
        Classic ZN uses <code>0.6 * Ku</code> for a PID controller. PID Pilot uses{" "}
        <code>0.33 * Ku</code> intentionally — a calmer seed gives refinement room to find
        an optimum without fighting the mechanism through dangerous overshoot on the very
        first step response.
      </p>
    </>
  );
}
