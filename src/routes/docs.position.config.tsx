import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/config")({
  head: () => ({
    meta: [
      { title: "Position Config Reference — PID Pilot" },
      { name: "description", content: "Every option on PositionPIDFTuner.Config." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Config Reference</h1>
      <p>
        Every option on <code>PositionPIDFTuner.Config</code>. All setters return the
        config for chaining.
      </p>

      <h2>Required</h2>
      <table>
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>target(double)</code></td><td>Target position (ticks)</td></tr>
          <tr><td><code>sensor(PositionSupplier)</code></td><td>How to read current position</td></tr>
          <tr><td><code>actuator(ActuatorConsumer)</code></td><td>How to apply power</td></tr>
          <tr><td><code>positionLimits(min, max)</code></td><td><strong>Always set this</strong></td></tr>
        </tbody>
      </table>

      <h2>Motor binding shortcut</h2>
      <table>
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>withMotor(DcMotorEx)</code></td>
            <td>Sensor = <code>getCurrentPosition</code>, actuator = <code>setPower</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Mode &amp; control</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>tuningMode(PIDFTuningMode)</code></td><td><code>REV_UP</code></td></tr>
          <tr><td><code>maxPower(double)</code></td><td>0.7</td></tr>
          <tr><td><code>telemetry(Telemetry)</code></td><td>—</td></tr>
          <tr><td><code>loopCheck(LoopCallback)</code></td><td>always continue</td></tr>
          <tr><td><code>skipCheck(SkipCallback)</code></td><td>never skip</td></tr>
        </tbody>
      </table>

      <h2>Phase 1 — Hold F</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td>Internal: <code>fHoldPower</code></td><td>0.05</td></tr>
          <tr><td>Internal: <code>fHoldTolerance</code></td><td>20 ticks</td></tr>
          <tr><td>Internal: <code>fHoldSettleMs</code></td><td>600 ms</td></tr>
        </tbody>
      </table>

      <h2>Phase 2 — Ku Search</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td>Internal: <code>kuObserveMs</code></td><td>2000 ms</td></tr>
          <tr><td>Internal: <code>kuInitialHi</code></td><td>0.002</td></tr>
        </tbody>
      </table>

      <h2>Phase 3 — Refinement</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>stepObserveMs(long)</code></td><td>2500</td></tr>
          <tr><td><code>returnTimeMs(long)</code></td><td>1500</td></tr>
          <tr><td><code>maxIterations(int)</code></td><td>14</td></tr>
          <tr><td><code>settlingBand(double)</code></td><td>25 ticks</td></tr>
          <tr><td><code>costWeights(o, s, e)</code></td><td>2.0, 0.002, 3.0</td></tr>
          <tr><td><code>thresholds(overshoot, ssErr)</code></td><td>30, 15 ticks</td></tr>
        </tbody>
      </table>

      <h2>Phase 4 — Disturbance (MAINTAIN only)</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>runDisruptionPhase(boolean)</code></td><td>true</td></tr>
          <tr><td><code>maintainDisturbanceMs(long)</code></td><td>180</td></tr>
          <tr><td><code>maintainDisturbancePower(double)</code></td><td>0.18</td></tr>
          <tr><td><code>disruptionReadyStableMs(long)</code></td><td>300</td></tr>
          <tr><td><code>disruptionRecoveryTimeoutMs(long)</code></td><td>1500</td></tr>
          <tr><td><code>disruptionReadyBandTicks(double)</code></td><td>20</td></tr>
          <tr><td><code>disruptionDropThresholdTicks(double)</code></td><td>50</td></tr>
          <tr><td><code>disruptionCostWeights(recovery, dip)</code></td><td>0.003, 1.5</td></tr>
        </tbody>
      </table>

      <h2>Full example</h2>
      <CodeBlock
        code={`return new PositionPIDFTuner.Config()
        .target(1200)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotor(arm)
        .positionLimits(0, 2200)
        .maxPower(0.6)
        .settlingBand(15)
        .costWeights(1.5, 0.003, 4.0)
        .thresholds(20, 8)
        .telemetry(telemetry);`}
      />
    </>
  );
}
