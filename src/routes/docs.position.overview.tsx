import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/overview")({
  head: () => ({
    meta: [
      { title: "Position Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of PositionPIDFTuner, including actuator families, normalized control, motion profiles, feedforward, and bounds.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Tuner</h1>
      <p>
        <code>PositionPIDFTuner</code> is broader than the velocity tuner because it supports
        multiple actuator families behind one consistent API. It covers DC motors, CR servos with
        feedback encoders, standard servos in open-loop mapping mode, and standard servos in
        closed-loop mode using external encoder or analog feedback.
      </p>

      <h2>What makes it different from the velocity tuner</h2>
      <ul>
        <li>It supports multiple actuator and feedback backends.</li>
        <li>It normalizes position internally by move scale.</li>
        <li>
          It can use trapezoidal motion profiles in <code>REV_UP</code>.
        </li>
        <li>It separates static trim, gravity constant, and cosine compensation.</li>
        <li>It can clamp targets and suppress outward command at hard stops.</li>
      </ul>

      <h2>Major subsystems</h2>
      <ol>
        <li>Actuator-family abstraction</li>
        <li>Feedback-source abstraction</li>
        <li>Position normalization</li>
        <li>Optional motion profiling</li>
        <li>Static, gravity, and cosine feedforward</li>
        <li>Hard position constraints</li>
        <li>At-target qualification</li>
        <li>Disruption testing</li>
      </ol>

      <h2>Why position is normalized</h2>
      <p>
        The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a
        tiny trim move and a long travel move would feel like unrelated controllers unless gains
        were changed constantly. The move scale keeps small moves from becoming twitchy while still
        preserving meaningful units elsewhere in the system.
      </p>

      <h2>What page to read next</h2>
      <ul>
        <li>
          <Link to="/docs/position/hold-f">Actuator &amp; Feedback Modes</Link> if you are choosing
          how the tuner should read and command the mechanism.
        </li>
        <li>
          <Link to="/docs/position/ku-search">Motion Profile &amp; Feedforward</Link> if your main
          question is how the position model is shaped.
        </li>
        <li>
          <Link to="/docs/position/refinement">Bounds &amp; Control Flow</Link> if you need to
          understand safety and loop behavior.
        </li>
      </ul>
    </>
  );
}
