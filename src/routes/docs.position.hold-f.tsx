import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/hold-f")({
  head: () => ({
    meta: [
      { title: "Position Actuator & Feedback Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner supports motors, CR servos, standard servos, and multiple feedback sources.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Actuator &amp; Feedback Modes</h1>
      <p>
        The position tuner is effectively a multi-backend position-control framework. The actuator
        family determines how commands are written, how measurements are read, and whether a true
        closed-loop position controller exists at all.
      </p>

      <h2>Actuator modes</h2>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>MOTOR</code>
            </td>
            <td>DC motor position control using encoder feedback and power output</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_OPEN_LOOP</code>
            </td>
            <td>Direct target-to-servo-position mapping with no PID correction</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_WITH_EXTERNAL_ENCODER</code>
            </td>
            <td>Standard servo with external feedback and PID correction layered on top</td>
          </tr>
          <tr>
            <td>
              <code>CR_SERVO</code>
            </td>
            <td>Continuous-rotation servo driven from encoder feedback and scaled power output</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedback modes for standard servos</h2>
      <ul>
        <li>
          <code>NONE</code> for open-loop mapping only
        </li>
        <li>
          <code>MOTOR_ENCODER</code> when an external encoder motor supplies position
        </li>
        <li>
          <code>ANALOG_INPUT</code> when an analog sensor provides the feedback signal
        </li>
      </ul>

      <h2>Standard servo open-loop behavior</h2>
      <p>
        Open-loop standard servo mode is intentionally simple. There is no PID correction and no
        disruption logic. The target is mapped directly into servo position space, and the tuner
        forces <code>isAtTarget()</code> to report true because there is no real feedback loop to
        qualify.
      </p>

      <h2>Standard servo closed-loop behavior</h2>
      <p>
        Closed-loop standard servo mode blends a direct servo-position mapping with an external PID
        correction. The tuner maps the requested target to a base servo position, computes a
        correction in normalized position space, adds feedforward, and clamps the final command back
        into <code>[0.0, 1.0]</code>.
      </p>

      <h2>CR servo behavior</h2>
      <p>
        CR servos behave more like motors: the tuner uses encoder feedback to estimate position and
        writes scaled power through <code>servoOutputScale</code>. This lets the framework keep one
        consistent tuning model while still respecting how the actuator is commanded physically.
      </p>

      <h2>Why this abstraction matters</h2>
      <p>
        Teams do not need separate tuning frameworks for every actuator family. They need one
        framework that changes its hardware semantics without changing its overall workflow:
        configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the
        right reasons.
      </p>
    </>
  );
}
