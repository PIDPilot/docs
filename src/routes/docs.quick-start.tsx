import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/quick-start")({
  head: () => ({
    meta: [
      { title: "Daily Workflow — PID Pilot" },
      {
        name: "description",
        content:
          "Wire a first PID Pilot OpMode, tune live with FTC Dashboard, and copy values back with the right telemetry context.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Daily Workflow</h1>
      <p>
        This page is the shortest practical route through PID Pilot. The goal is not to memorize
        every method in the framework. The goal is to stand up a tuning OpMode, run a safe live
        session, and understand what telemetry to trust when you copy values back into your robot.
      </p>

      <h2>1. Pick the control family</h2>
      <ul>
        <li>
          Use velocity tuning for flywheels, shooters, and any mechanism whose target is speed.
        </li>
        <li>
          Use position tuning for arms, elevators, slides, turrets, or servo-driven axes whose
          target is position.
        </li>
      </ul>

      <h2>2. Extend the base OpMode</h2>
      <p>
        Create a class that extends <code>PIDFTunerOpMode</code> and override exactly one of{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code>. The base runner will
        re-call that method every loop so Dashboard edits take effect immediately.
      </p>

      <CodeBlock
        filename="TuneFlywheelNew.java"
        language="java"
        code={`@Config
@TeleOp(name = "Tune Flywheel New", group = "Tuning")
public class TuneFlywheelNew extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 1800.0;
    public static PIDFTuningMode TUNING_MODE = PIDFTuningMode.MAINTAIN;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx left = hardwareMap.get(DcMotorEx.class, "outtakeLeft");
        DcMotorEx right = hardwareMap.get(DcMotorEx.class, "outtakeRight");

        left.setDirection(DcMotorSimple.Direction.REVERSE);
        right.setDirection(DcMotorSimple.Direction.FORWARD);

        return new VelocityPIDFTuner.Config()
                .target(TARGET_VELOCITY)
                .tuningMode(TUNING_MODE)
                .withRunUsingEncoderVelocityMotors(left, right)
                .runDisruptionPhase(true)
                .disruptionSamples(5)
                .telemetry(telemetry);
    }
}`}
      />

      <p>
        A position OpMode looks the same structurally: return a fresh config each loop, bind one
        actuator family, and expose the values you want to edit in Dashboard.
      </p>

      <h2>3. Press play and watch the correct things</h2>
      <ol>
        <li>Start conservatively with a target the mechanism can really hit.</li>
        <li>
          Press <strong>INIT</strong>, open FTC Dashboard, then press <strong>PLAY</strong>.
        </li>
        <li>
          Use <code>gamepad1.x</code> to toggle between <code>REV_UP</code> and{" "}
          <code>MAINTAIN</code> while the OpMode is running.
        </li>
        <li>
          Watch the telemetry story, not only the final gain values: terms, feedforward breakdown,
          warnings, and disturbance behavior matter.
        </li>
      </ol>

      <h2>4. Read the live session like an engineer</h2>
      <p>
        The framework is designed to tell you whether a problem is bad feedforward, not enough
        damping, integral windup, motor-mode conflict, or an unsafe target. That is why the
        telemetry surface includes controller internals and tuner-specific status instead of only a
        target and a measurement.
      </p>

      <ul>
        <li>
          Velocity tuning should show characterization, relay metrics when enabled, and headroom
          warnings when output is unrealistic.
        </li>
        <li>
          Position tuning should show requested vs clamped target, actuator and feedback mode,
          feedforward pieces, and constraint status.
        </li>
        <li>
          If the mechanism is already misbehaving in the first moments, stop and use{" "}
          <Link to="/docs/troubleshooting">Troubleshooting</Link> before you keep “tuning.”
        </li>
      </ul>

      <h2>5. Copy gains back with context</h2>
      <p>
        Once the session is complete, copy the values that match the behavior you actually need. A
        good <code>REV_UP</code> tune and a good <code>MAINTAIN</code> tune can legitimately be
        different for the same mechanism because they are solving different control problems.
      </p>

      <CodeBlock
        language="text"
        code={`mode                 MAINTAIN
pTerm / iTerm / dTerm / fTerm
active gains         revUp or maintain
characterized kF     ...
relay Ku / Pu        ...
disruption recovery  ...
warnings             ...`}
      />

      <h2>6. Take the result back to the real robot workflow</h2>
      <ol>
        <li>
          Copy the selected gains into the mechanism class that will run in teleop or autonomous.
        </li>
        <li>Test the mechanism under the real task, not only under the tuner OpMode.</li>
        <li>If hardware, gearing, inertia, or feedback changes, re-run the tune.</li>
      </ol>

      <blockquote>
        After your first clean session, go to <Link to="/docs/templates">Sample OpModes</Link> for
        the three reference examples or jump into the velocity or position sections to understand
        the exact tuner internals you just watched.
      </blockquote>
    </>
  );
}
