import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/config")({
  head: () => ({
    meta: [
      { title: "Velocity Config Reference — PID Pilot" },
      { name: "description", content: "Every option on VelocityPIDFTuner.Config." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Config Reference</h1>
      <p>
        Every option on <code>VelocityPIDFTuner.Config</code>. All setters return the
        config for chaining.
      </p>

      <h2>Required</h2>
      <table>
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>target(double)</code></td><td>Target velocity (ticks/sec)</td></tr>
          <tr><td><code>sensor(VelocitySupplier)</code></td><td>How to read current velocity</td></tr>
          <tr><td><code>actuator(ActuatorConsumer)</code></td><td>How to apply a command</td></tr>
        </tbody>
      </table>

      <h2>Motor binding shortcuts</h2>
      <table>
        <thead><tr><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>withMotor(DcMotorEx)</code></td>
            <td>Single-motor power mode. Sensor = <code>getVelocity</code>, actuator = <code>setPower</code>.</td>
          </tr>
          <tr>
            <td><code>withMotors(DcMotorEx...)</code></td>
            <td>Average velocity across multiple motors, set the same power on all.</td>
          </tr>
          <tr>
            <td><code>withRunUsingEncoderVelocityMotors(DcMotorEx...)</code></td>
            <td>Closed-loop velocity mode. Uses <code>setVelocity</code>. Enables disruption phase.</td>
          </tr>
        </tbody>
      </table>

      <h2>Mode &amp; control</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>tuningMode(PIDFTuningMode)</code></td><td><code>REV_UP</code></td></tr>
          <tr><td><code>telemetry(Telemetry)</code></td><td>—</td></tr>
          <tr><td><code>loopCheck(LoopCallback)</code></td><td>always continue</td></tr>
          <tr><td><code>skipCheck(SkipCallback)</code></td><td>never skip</td></tr>
        </tbody>
      </table>

      <h2>Phase 1 — F Sweep</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>fSweepSteps(int)</code></td><td>15</td></tr>
          <tr><td><code>fSweepSettleMs(long)</code></td><td>600</td></tr>
          <tr><td><code>fullPowerCharacterizeMs(long)</code></td><td>1200</td></tr>
          <tr><td><code>fullPowerSettleMs(long)</code></td><td>500</td></tr>
        </tbody>
      </table>

      <h2>Phase 2 — Ku Search</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>kuObserveMs(long)</code></td><td>1200</td></tr>
        </tbody>
      </table>

      <h2>Phase 3 — Refinement</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>stepObserveMs(long)</code></td><td>1500</td></tr>
          <tr><td><code>maxIterations(int)</code></td><td>14</td></tr>
          <tr><td><code>costWeights(o, s, e)</code></td><td>1.5, 0.001, 3.0</td></tr>
          <tr><td><code>thresholds(overshoot, ssErr)</code></td><td>3.0, 15.0</td></tr>
        </tbody>
      </table>

      <h2>Phase 4 — Disruption (MAINTAIN only)</h2>
      <table>
        <thead><tr><th>Method</th><th>Default</th></tr></thead>
        <tbody>
          <tr><td><code>runDisruptionPhase(boolean)</code></td><td>true</td></tr>
          <tr><td><code>disruptionSamples(int)</code></td><td>5</td></tr>
          <tr><td><code>disruptionReadyStableMs(long)</code></td><td>350</td></tr>
          <tr><td><code>disruptionDetectTimeoutMs(long)</code></td><td>5000</td></tr>
          <tr><td><code>disruptionRecoveryTimeoutMs(long)</code></td><td>2500</td></tr>
          <tr><td><code>disruptionReadyBandPct(double)</code></td><td>0.05</td></tr>
          <tr><td><code>disruptionDropThresholdPct(double)</code></td><td>0.08</td></tr>
          <tr><td><code>maintainDisturbanceMs(long)</code></td><td>180</td></tr>
          <tr><td><code>maintainDisturbancePower(double)</code></td><td>0.20</td></tr>
          <tr><td><code>disruptionCostWeights(recovery, dip)</code></td><td>0.002, 1.2</td></tr>
        </tbody>
      </table>

      <h2>Full example</h2>
      <CodeBlock
        code={`return new VelocityPIDFTuner.Config()
        .target(640)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withRunUsingEncoderVelocityMotors(left, right)
        .costWeights(1.0, 0.0015, 4.0)
        .thresholds(2.0, 8.0)
        .maxIterations(20)
        .runDisruptionPhase(true)
        .disruptionSamples(7)
        .maintainDisturbanceMs(220)
        .maintainDisturbancePower(0.25)
        .telemetry(telemetry);`}
      />
    </>
  );
}
