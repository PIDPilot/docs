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
        <code>PositionPIDFTuner</code> tunes anything driven to a target position — arms, elevators,
        slides, and turrets. For motors and CR servos it{" "}
        <Link to="/docs/position/auto-tune">auto-tunes on start</Link> via the relay method, the same
        one-button flow as the velocity tuner. It also supports standard servos (open-loop, or
        closed-loop with external encoder / analog feedback), which are tuned by hand.
      </p>

      <blockquote>
        New here? Go straight to <Link to="/docs/position/auto-tune">Position Auto-Tune</Link> —
        bind a motor, set a target, press start. Everything below is the machinery behind it.
      </blockquote>

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
          <Link to="/docs/position/auto-tune">Auto-Tune (Relay)</Link> to let it find your gains —
          the fastest path to a working mechanism.
        </li>
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
