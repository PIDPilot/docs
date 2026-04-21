import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/refinement")({
  head: () => ({
    meta: [
      { title: "Position Bounds & Control Flow — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner applies bounds, qualifies at-target state, and executes its closed-loop update path.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Bounds &amp; Control Flow</h1>
      <p>
        The position tuner’s control loop includes more than PID and feedforward. It has to manage
        actuator-specific writes, target clamping, at-target qualification, and protection against
        continued outward drive at hard stops.
      </p>

      <h2>Closed-loop update flow</h2>
      <CodeBlock
        language="text"
        code={`handle SERVO_OPEN_LOOP separately if needed
read feedback position
update motion profile
apply active gains
normalize target and measurement
compute PID output
compute feedforward
apply actuator-specific output
update at-target counter
update disruption phase
push telemetry`}
      />

      <h2>Hard position constraints</h2>
      <p>
        <code>positionBounds(minTicks, maxTicks)</code> does two jobs. First, it clamps the
        requested target into a safe range. Second, if the mechanism is already at a hard limit, it
        suppresses any additional outward command so the controller does not keep pushing into the
        stop.
      </p>

      <h2>Why target clamping alone is not enough</h2>
      <p>
        If the actuator is already against a hard stop, a controller can still compute an outward
        command even when the requested target was clamped. The framework explicitly blocks that
        behavior because otherwise the mechanism can keep loading the stop and damage itself.
      </p>

      <h2>At-target qualification</h2>
      <p>
        The tuner does not declare victory from one lucky loop. It requires several consecutive
        in-band loops before <code>isAtTarget()</code> becomes true:
      </p>

      <CodeBlock language="text" code={`REQUIRED_AT_TARGET_LOOPS = 5`} />

      <p>
        This reduces false success caused by noise, backlash, or a transient crossing through the
        tolerance band.
      </p>

      <h2>Telemetry that matters here</h2>
      <ul>
        <li>Requested target versus clamped target</li>
        <li>Profiled target, velocity, and acceleration</li>
        <li>Measured position and actuator command</li>
        <li>Constraint status and current bound values</li>
        <li>At-target qualification state</li>
      </ul>

      <blockquote>
        When a position session looks unsafe, check bounds and actuator selection before you touch
        gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem.
      </blockquote>
    </>
  );
}
