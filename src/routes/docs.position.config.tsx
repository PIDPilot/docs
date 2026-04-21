import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/config")({
  head: () => ({
    meta: [
      { title: "Position Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for PositionPIDFTuner.Config, covering actuator families, feedback modes, motion profiles, feedforward, bounds, and validation.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Config Reference</h1>
      <p>
        <code>PositionPIDFTuner.Config</code> is the public builder for a position tuning session.
        It lets you select one actuator family, wire an optional feedback source, shape approach
        behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic.
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
            <td>Required target in the same units as the feedback source</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Required telemetry surface for Driver Station and Dashboard</td>
          </tr>
        </tbody>
      </table>

      <h2>Actuator family selection</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>DC motor position control</td>
          </tr>
          <tr>
            <td>
              <code>withServos(Servo...)</code>
            </td>
            <td>Standard servo control</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Single CR servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Multiple CR servos with encoder feedback</td>
          </tr>
        </tbody>
      </table>

      <h2>Standard servo feedback and mapping</h2>
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
              <code>withServoFeedback(DcMotorEx)</code>
            </td>
            <td>Closed-loop standard servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)</code>
            </td>
            <td>Closed-loop standard servo with analog feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoOpenLoopRange(double minTicks, double maxTicks)</code>
            </td>
            <td>Required target-to-servo mapping range for standard servo modes</td>
          </tr>
          <tr>
            <td>
              <code>servoOutputScale(double)</code>
            </td>
            <td>Scale final command for standard or CR servos</td>
          </tr>
        </tbody>
      </table>

      <h2>Mode, gains, and controller shaping</h2>
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
            <td>Select initial gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>REV_UP</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>MAINTAIN</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Cap integral contribution in output space</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering</td>
          </tr>
          <tr>
            <td>
              <code>positionToleranceTicks(double)</code>
            </td>
            <td>Define in-band tolerance for at-target checks</td>
          </tr>
        </tbody>
      </table>

      <h2>Motion profile and bounds</h2>
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
              <code>useMotionProfile(double maxVelocity, double maxAcceleration)</code>
            </td>
            <td>
              Enable trapezoidal approach shaping in <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>positionBounds(double minTicks, double maxTicks)</code>
            </td>
            <td>Enable hard mechanical limits</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward terms</h2>
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
              <code>feedforwardGravityConstant(double)</code>
            </td>
            <td>Constant gravity bias for vertical systems</td>
          </tr>
          <tr>
            <td>
              <code>feedforwardCosineConstant(double)</code>
            </td>
            <td>Angle-dependent gravity compensation</td>
          </tr>
          <tr>
            <td>
              <code>cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)</code>
            </td>
            <td>Encoder-angle mapping for cosine compensation</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption configuration</h2>
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
            <td>Number of recovery samples</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Required stable time before a sample is armed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits to detect a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits for recovery</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around target</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Drop threshold that counts as a disturbance</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>Exactly one actuator family must be selected.</li>
        <li>Telemetry must be present.</li>
        <li>Motion-profile limits must be valid when profiling is enabled.</li>
        <li>Position bounds must be valid when bounds are enabled.</li>
        <li>Servo output scale must be nonnegative.</li>
        <li>
          <code>kCos</code> requires a cosine reference.
        </li>
        <li>Standard-servo mapping range must be valid.</li>
        <li>Only one standard-servo feedback source may be chosen.</li>
        <li>Analog feedback scale must be nonzero when analog feedback is used.</li>
        <li>CR servo configurations need feedback encoders and valid counts.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .positionToleranceTicks(12.0)
        .runDisruptionPhase(true)
        .telemetry(telemetry);`}
      />
    </>
  );
}
