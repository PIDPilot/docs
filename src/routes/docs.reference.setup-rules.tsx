import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/setup-rules")({
  head: () => ({
    meta: [
      { title: "Setup Rules — PID Pilot" },
      { name: "description", content: "Hard rules to follow when configuring PID Pilot tuners." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Setup Rules</h1>
      <p>
        Things that <strong>will</strong> bite you if you ignore them.
      </p>

      <h2>One configure method per op mode</h2>
      <p>
        Override exactly one of <code>configureVelocity()</code> or{" "}
        <code>configurePosition()</code> in any single op mode. Overriding both throws an{" "}
        <code>IllegalStateException</code> at start. Overriding neither also throws.
      </p>

      <h2>Always set position limits</h2>
      <p>
        For position tuning, always call{" "}
        <code>positionLimits(min, max)</code>. The tuner will repeatedly drive the
        mechanism through its range during refinement. Without correct limits the safety
        clamp can't protect your hardware.
      </p>

      <h2>Use RUN_USING_ENCODER for velocity MAINTAIN</h2>
      <p>
        The disruption phase only runs when you used{" "}
        <code>withRunUsingEncoderVelocityMotors(...)</code>. If you bind via{" "}
        <code>withMotor(...)</code> in <code>RUN_WITHOUT_ENCODER</code>, the tuner will
        complete but the disruption phase won't fire and your <code>MAINTAIN</code> result
        won't include recovery scoring.
      </p>

      <h2>Verify the mechanism can move freely</h2>
      <p>
        Before pressing PLAY, manually drive the mechanism through the full range you
        configured. The tuner does <em>not</em> ramp into motion gently — when refinement
        starts, it commands real step responses immediately.
      </p>

      <h2>Start conservative on targets</h2>
      <p>
        First run: pick a target you know the mechanism can hit. Once the tuner completes
        cleanly at a safe target, raise it. Asking for an impossible target will burn run
        time looking for oscillation that can't happen.
      </p>

      <h2>Required Config fields</h2>
      <p>
        The constructor throws <code>IllegalStateException</code> unless both{" "}
        <code>sensor</code> and <code>actuator</code> are set. The <code>withMotor</code>{" "}
        family of helpers sets both, so you usually don't have to think about this.
      </p>

      <h2>Set telemetry</h2>
      <p>
        Always pass <code>.telemetry(telemetry)</code>. PID Pilot will still attach to FTC
        Dashboard without it, but the driver station won't show progress, which makes
        debugging from the field much harder.
      </p>

      <h2>Skip with X if needed</h2>
      <p>
        Gamepad 1's <code>X</code> button skips the current phase. Useful if a phase is
        clearly stuck — but a skipped phase contributes no measurements, so the final
        result quality drops.
      </p>
    </>
  );
}
