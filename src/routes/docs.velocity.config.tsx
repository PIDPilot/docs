import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/config")({
  head: () => ({
    meta: [
      { title: "Velocity Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for VelocityPIDFTuner.Config, including feedforward sources, relay tuning, disruption settings, and validation rules.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Config Reference</h1>
      <p>
        <code>VelocityPIDFTuner.Config</code> is the public API for constructing a velocity tuning
        session. The builder is organized around target selection, motor binding, gain families,
        feedforward sourcing, relay behavior, and disruption measurement.
      </p>

      <h2>Required fields</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>target(double)</code>
            </td>
            <td>
              Required target velocity in <code>ticks/s</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>Bind one or more velocity motors controlled together</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Supply telemetry for Driver Station and Dashboard mirroring</td>
          </tr>
        </tbody>
      </table>

      <h2>Motor binding</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>Primary motor binding method for the tuner</td>
          </tr>
          <tr>
            <td>
              <code>withRunUsingEncoderVelocityMotors(DcMotorEx...)</code>
            </td>
            <td>Alias that documents operator intent only; the tuner still runs them externally</td>
          </tr>
        </tbody>
      </table>

      <h2>Mode and gain families</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>tuningMode(PIDFTuningMode)</code>
            </td>
            <td>Choose the initial active gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>MAINTAIN</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward and characterization</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipCharacterization(double manualKF)</code>
            </td>
            <td>
              Skip startup characterization and force a physical <code>kF</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Override anti-windup if you do not want headroom-derived limits</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering in the shared controller core</td>
          </tr>
          <tr>
            <td>
              <code>velocityRampTicksPerSecPerSec(double)</code>
            </td>
            <td>Slew-limit target changes during running control</td>
          </tr>
        </tbody>
      </table>

      <h2>Relay auto-tuning</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipRelayTuning()</code>
            </td>
            <td>Bypass relay auto-tuning completely</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Set relay strength</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Set relay deadband as a fraction of target</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale relay-computed gains conservatively</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption sampling</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>runDisruptionPhase(boolean)</code>
            </td>
            <td>Enable or disable disruption timing</td>
          </tr>
          <tr>
            <td>
              <code>disruptionSamples(int)</code>
            </td>
            <td>Number of recovery samples to collect</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Stable time required before arming a sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>Maximum wait before the sample is considered missed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>Maximum recovery wait per sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around the target velocity</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Velocity drop required to count as a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineIterations(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineSamples(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>At least one motor must be supplied.</li>
        <li>Telemetry must be present.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={`return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withRunUsingEncoderVelocityMotors(left, right)
        .relayAmplitude(0.12)
        .relayHysteresisBandPct(0.04)
        .velocityRampTicksPerSecPerSec(6000.0)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);`}
      />
    </>
  );
}
