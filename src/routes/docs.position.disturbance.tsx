import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/disturbance")({
  head: () => ({
    meta: [
      { title: "Position Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner measures hold robustness after a push or load change and when disruption logic is unavailable.",
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
        The position tuner also includes a disruption measurement system. Its purpose is to quantify
        how quickly the mechanism recovers after it is pushed away from target or after a load
        change makes holding harder than the original approach move.
      </p>

      <h2>When the phase is unavailable</h2>
      <p>
        In <code>SERVO_OPEN_LOOP</code>, there is no real feedback controller, so disruption
        sampling is not meaningful and the framework disables it.
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

      <h2>What it measures</h2>
      <ol>
        <li>Hold the mechanism near target until position is stably in band.</li>
        <li>Detect a meaningful deviation or load event.</li>
        <li>Measure the peak drop away from target.</li>
        <li>Measure recovery time back into the ready band.</li>
        <li>Repeat until the configured number of samples is collected.</li>
      </ol>

      <h2>Why it matters</h2>
      <p>
        Arms, elevators, and slides often fail the real game task not because they cannot reach the
        target once, but because they cannot stay there cleanly under changing load. Disruption
        telemetry lets the team quantify that instead of relying on intuition.
      </p>

      <h2>Key configuration methods</h2>
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
    </>
  );
}
