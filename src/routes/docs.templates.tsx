import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/templates")({
  head: () => ({
    meta: [
      { title: "Op Mode Templates — PID Pilot" },
      { name: "description", content: "Drop-in tuner op modes for common FTC mechanisms." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Op Mode Templates</h1>
      <p>
        Each template extends <code>PIDFTunerOpMode</code> and overrides exactly one of{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code>. Drop them
        straight into <code>diagnostics/pidfTuners</code>.
      </p>

      <h2>1. Velocity — MAINTAIN (recommended for shooters)</h2>
      <p>For mechanisms that hold speed under load, like a shooter feeding game pieces.</p>
      <CodeBlock
        filename="TuneFlywheelMaintain.java"
        code={`@Config
@TeleOp(name = "Tune Flywheel Maintain", group = "Tuning")
public class TuneFlywheelMaintain extends PIDFTunerOpMode {
    public static double TARGET_VELOCITY = 640;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx left  = hardwareMap.get(DcMotorEx.class, "outtakeL");
        DcMotorEx right = hardwareMap.get(DcMotorEx.class, "outtakeR");

        left.setDirection(DcMotorSimple.Direction.REVERSE);
        right.setDirection(DcMotorSimple.Direction.FORWARD);
        left.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        right.setMode(DcMotor.RunMode.RUN_USING_ENCODER);

        return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withRunUsingEncoderVelocityMotors(left, right)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>2. Velocity — REV_UP</h2>
      <p>When getting to target speed quickly matters more than holding under load.</p>
      <CodeBlock
        filename="TuneFlywheelRevUp.java"
        code={`@Config
@TeleOp(name = "Tune Flywheel Rev Up", group = "Tuning")
public class TuneFlywheelRevUp extends PIDFTunerOpMode {
    public static double TARGET_VELOCITY = 640;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx left  = hardwareMap.get(DcMotorEx.class, "outtakeL");
        DcMotorEx right = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        right.setMode(DcMotor.RunMode.RUN_USING_ENCODER);

        return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withRunUsingEncoderVelocityMotors(left, right)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>3. Position — MAINTAIN (arm holding under gravity)</h2>
      <CodeBlock
        filename="TuneArmMaintain.java"
        code={`@Config
@TeleOp(name = "Tune Arm Maintain", group = "Tuning")
public class TuneArmMaintain extends PIDFTunerOpMode {
    public static double TARGET_POSITION = 1200;
    public static double MIN_POSITION = 0;
    public static double MAX_POSITION = 2200;

    @Override
    protected PositionPIDFTuner.Config configurePosition() {
        DcMotorEx arm = hardwareMap.get(DcMotorEx.class, "arm");

        return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotor(arm)
            .positionLimits(MIN_POSITION, MAX_POSITION)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>4. Position — REV_UP</h2>
      <CodeBlock
        filename="TuneArmRevUp.java"
        code={`@Config
@TeleOp(name = "Tune Arm Rev Up", group = "Tuning")
public class TuneArmRevUp extends PIDFTunerOpMode {
    public static double TARGET_POSITION = 1200;

    @Override
    protected PositionPIDFTuner.Config configurePosition() {
        DcMotorEx arm = hardwareMap.get(DcMotorEx.class, "arm");

        return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotor(arm)
            .positionLimits(0, 2200)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>5. Custom velocity (multi-motor lambda)</h2>
      <p>Use this when sensing or actuation needs custom logic — averaged velocity, scaled command, multi-device control.</p>
      <CodeBlock
        filename="TuneCustomVelocity.java"
        code={`@TeleOp(name = "Tune Custom Velocity", group = "Tuning")
public class TuneCustomVelocity extends PIDFTunerOpMode {
    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx top    = hardwareMap.get(DcMotorEx.class, "topShooter");
        DcMotorEx bottom = hardwareMap.get(DcMotorEx.class, "bottomShooter");

        return new VelocityPIDFTuner.Config()
            .target(900)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .sensor(() -> (top.getVelocity() + bottom.getVelocity()) / 2.0)
            .actuator(targetVelocity -> {
                top.setVelocity(targetVelocity);
                bottom.setVelocity(targetVelocity);
            })
            .telemetry(telemetry);
    }
}`}
      />

      <h2>6. Custom position (paired slides)</h2>
      <CodeBlock
        filename="TuneCustomPosition.java"
        code={`@TeleOp(name = "Tune Custom Position", group = "Tuning")
public class TuneCustomPosition extends PIDFTunerOpMode {
    @Override
    protected PositionPIDFTuner.Config configurePosition() {
        DcMotorEx leftSlide  = hardwareMap.get(DcMotorEx.class, "leftSlide");
        DcMotorEx rightSlide = hardwareMap.get(DcMotorEx.class, "rightSlide");

        return new PositionPIDFTuner.Config()
            .target(1500)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .sensor(() -> (leftSlide.getCurrentPosition() + rightSlide.getCurrentPosition()) / 2.0)
            .actuator(power -> {
                leftSlide.setPower(power);
                rightSlide.setPower(power);
            })
            .positionLimits(0, 2000)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>7. Power-mode velocity</h2>
      <p>
        For when you explicitly want raw <code>setPower</code> control instead of{" "}
        <code>setVelocity</code>. The tuner reads velocity, drives with power, and fits F
        from the power sweep.
      </p>
      <CodeBlock
        filename="TunePowerVelocity.java"
        code={`@TeleOp(name = "Tune Power Velocity", group = "Tuning")
public class TunePowerVelocity extends PIDFTunerOpMode {
    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx flywheel = hardwareMap.get(DcMotorEx.class, "flywheel");
        flywheel.setMode(DcMotor.RunMode.RUN_WITHOUT_ENCODER);

        return new VelocityPIDFTuner.Config()
            .target(1200)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotor(flywheel)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>8. Aggressive maintain knobs</h2>
      <p>Expose extra disturbance settings when defaults aren't punishing enough.</p>
      <CodeBlock
        filename="TuneFlywheelMaintainAdvanced.java"
        code={`@Config
@TeleOp(name = "Tune Flywheel Maintain Advanced", group = "Tuning")
public class TuneFlywheelMaintainAdvanced extends PIDFTunerOpMode {
    public static double TARGET_VELOCITY = 640;
    public static long   DISTURBANCE_MS = 220;
    public static double DISTURBANCE_POWER = 0.25;
    public static long   RECOVERY_TIMEOUT_MS = 3000;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        DcMotorEx left  = hardwareMap.get(DcMotorEx.class, "outtakeL");
        DcMotorEx right = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        right.setMode(DcMotor.RunMode.RUN_USING_ENCODER);

        return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withRunUsingEncoderVelocityMotors(left, right)
            .maintainDisturbanceMs(DISTURBANCE_MS)
            .maintainDisturbancePower(DISTURBANCE_POWER)
            .disruptionRecoveryTimeoutMs(RECOVERY_TIMEOUT_MS)
            .telemetry(telemetry);
    }
}`}
      />

      <h2>How to choose</h2>
      <ul>
        <li>Velocity templates → flywheels, shooters, anything with a speed target</li>
        <li>Position templates → arms, slides, lifts</li>
        <li><code>REV_UP</code> when fast arrival matters most</li>
        <li><code>MAINTAIN</code> when resisting slowdown matters most</li>
        <li><code>withMotor(...)</code> for single-motor setups</li>
        <li>Lambda-based <code>sensor</code>/<code>actuator</code> for averaging or multi-device control</li>
        <li><code>withRunUsingEncoderVelocityMotors(...)</code> for FTC closed-loop velocity mode</li>
      </ul>
    </>
  );
}
