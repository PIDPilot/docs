import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/velocity/disruption")({
  head: () => ({
    meta: [
      { title: "Velocity Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How the velocity tuner measures disturbance recovery when MAINTAIN behavior matters more than raw spin-up.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Disruption Sampling</h1>
      <p>
        The velocity tuner includes a second state machine dedicated to measuring recovery after a
        real disturbance. This matters because a flywheel that looks good on a clean step response
        can still perform badly once game pieces start loading it.
      </p>

      <h2>Disruption stages</h2>
      <ul>
        <li>
          <code>WAITING</code>
        </li>
        <li>
          <code>ARMED</code>
        </li>
        <li>
          <code>DETECTING</code>
        </li>
        <li>
          <code>RECOVERING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <h2>What the phase measures</h2>
      <ol>
        <li>Wait for the mechanism to be stably near target.</li>
        <li>Detect or apply a disturbance depending on the configured workflow.</li>
        <li>Measure how far velocity drops.</li>
        <li>Measure how long it takes to recover into the ready band.</li>
        <li>Repeat until the requested number of samples is collected.</li>
      </ol>

      <h2>Configuration knobs</h2>
      <ul>
        <li>
          <code>runDisruptionPhase(boolean)</code>
        </li>
        <li>
          <code>disruptionSamples(int)</code>
        </li>
        <li>
          <code>disruptionReadyStableMs(long)</code>
        </li>
        <li>
          <code>disruptionDetectTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionRecoveryTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionReadyBandPct(double)</code>
        </li>
        <li>
          <code>disruptionDropThresholdPct(double)</code>
        </li>
      </ul>

      <h2>Why it belongs in MAINTAIN</h2>
      <p>
        <code>MAINTAIN</code> is the controller personality you care about once the mechanism is
        already near target and outside forces start pushing it around. Disruption telemetry is the
        framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole
        story.
      </p>

      <h2>What shows up in telemetry</h2>
      <ul>
        <li>Recovery timing</li>
        <li>Drop magnitude</li>
        <li>Sample counts and completion status</li>
        <li>Instructional notes about when the mechanism is ready for the next disturbance</li>
      </ul>

      <blockquote>
        If a shooter must survive repeated loading, a fast <code>REV_UP</code> result alone is not
        enough. Use disruption recovery to decide whether the hold-side gain family is the one you
        should ship.
      </blockquote>
    </>
  );
}
