import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/templates")({
  head: () => ({
    meta: [
      { title: "Sample OpModes — PID Pilot" },
      {
        name: "description",
        content:
          "Ready-to-copy velocity, arm, and elevator tuning OpModes for PID Pilot, using relay auto-tune by default.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Sample OpModes</h1>
      <p>
        The library ships three reference OpModes you can copy into TeamCode and adapt. None of them
        supply gains — each one relies on relay auto-tune, so the pattern to copy is &ldquo;bind
        hardware, set a target, press start.&rdquo; Change the hardware names and targets to match
        your robot.
      </p>

      <h2>TuneFlywheel — velocity</h2>
      <p>
        A two-motor shooter. Note two things: hardware is cached on the first{" "}
        <code>configureVelocity()</code> call (the method runs every loop), and the feeder motors are
        only powered <strong>after</strong> <code>isStarted()</code> — never during INIT.{" "}
        <code>averageAbsoluteVelocity(true)</code> handles wheels that spin in opposite directions.
      </p>
      <CodeBlock
        filename="TuneFlywheel.java"
        language="java"
        code={`private DcMotorEx intake, transfer, left, right;
private boolean feederStarted;

@Override
protected VelocityPIDFTuner.Config configureVelocity() {
    if (left == null) {
        intake   = hardwareMap.get(DcMotorEx.class, "intake");
        transfer = hardwareMap.get(DcMotorEx.class, "transfer");
        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);
    }
    // Only spin the feeder once the match has actually started.
    if (!feederStarted && isStarted()) {
        intake.setPower(1);
        transfer.setPower(1);
        feederStarted = true;
    }
    return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .withMotors(left, right)
            .averageAbsoluteVelocity(true)
            .runDisruptionPhase(true)
            .disruptionSamples(5)
            .telemetry(telemetry);
}`}
      />

      <h2>TuneArm — position with cosine feedforward</h2>
      <p>
        An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from
        an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while
        it does. Motion profiling smooths large REV_UP moves.
      </p>
      <CodeBlock
        filename="TuneArm.java"
        language="java"
        code={`private DcMotorEx arm;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (arm == null) {
        arm = hardwareMap.get(DcMotorEx.class, "arm");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotors(arm)
            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)
            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
            .telemetry(telemetry);
}`}
      />

      <h2>TuneElevator — position with constant gravity</h2>
      <p>
        A vertical lift needs the same hold force at every height, so it uses a single constant
        gravity feedforward instead of the arm&apos;s cosine geometry. This is the simplest position
        example.
      </p>
      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={`private DcMotorEx elevator;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (elevator == null) {
        elevator = hardwareMap.get(DcMotorEx.class, "elevator");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotors(elevator)
            .feedforwardGravityConstant(ELEVATOR_KG)
            .telemetry(telemetry);
}`}
      />

      <h2>What the samples teach</h2>
      <ul>
        <li>Cache hardware once — <code>configure*()</code> runs every loop.</li>
        <li>Never power auxiliary motors during INIT; gate them on <code>isStarted()</code>.</li>
        <li>
          Pick the sample by mechanism <em>physics</em> (constant vs angle-dependent gravity), not
          just motor count.
        </li>
        <li>
          Feedforward (<code>kG</code>, <code>kCos</code>) is your job; kP/kI/kD are auto-tune&apos;s
          job.
        </li>
      </ul>

      <h2>Adapting them</h2>
      <ol>
        <li>Replace hardware names and motor directions first.</li>
        <li>Set a safe, reachable target.</li>
        <li>
          Add feedforward and, for fragile mechanisms, <code>positionBounds(min, max)</code> before
          you run.
        </li>
        <li>Keep the OpMode structure intact so the live runner works as designed.</li>
      </ol>

      <blockquote>
        For the full builder surface, use the{" "}
        <Link to="/docs/velocity/config">Velocity</Link> and{" "}
        <Link to="/docs/position/config">Position</Link> config references rather than guessing
        method names.
      </blockquote>
    </>
  );
}
