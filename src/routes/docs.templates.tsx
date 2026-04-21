import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/templates")({
  head: () => ({
    meta: [
      { title: "Sample OpModes — PID Pilot" },
      {
        name: "description",
        content:
          "Reference OpModes for velocity, arm, and elevator tuning in the PID Pilot framework.",
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
        The package includes three reference OpModes that demonstrate how the framework is meant to
        be used on real FTC hardware. They are intentionally concrete: each one exposes live config
        fields, binds actual hardware, and highlights the feedforward or motion model that matters
        for that mechanism family.
      </p>

      <h2>TuneFlywheelNew</h2>
      <p>
        This is the main velocity example. It is meant for a two-motor shooter or flywheel and
        demonstrates how to expose target speed and tuning mode live while enabling disruption
        sampling for hold robustness.
      </p>

      <CodeBlock
        filename="TuneFlywheelNew.java"
        language="java"
        code={`return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(TUNING_MODE)
        .withRunUsingEncoderVelocityMotors(left, right)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);`}
      />

      <h2>TuneArm</h2>
      <p>
        This is the main angle-dependent position example. It shows an arm tuned in{" "}
        <code>REV_UP</code> by default, with motion profiling enabled and cosine feedforward
        configured from an encoder-angle reference.
      </p>

      <CodeBlock
        filename="TuneArm.java"
        language="java"
        code={`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.REV_UP)
        .withMotors(arm)
        .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
        .feedforwardCosineConstant(K_COS)
        .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .telemetry(telemetry);`}
      />

      <h2>TuneElevator</h2>
      <p>
        This is the simplest vertical load-holding example. It uses position tuning in{" "}
        <code>MAINTAIN</code> mode and demonstrates constant gravity compensation without the extra
        geometry required by cosine feedforward.
      </p>

      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .runDisruptionPhase(true)
        .telemetry(telemetry);`}
      />

      <h2>What the samples are teaching</h2>
      <ul>
        <li>Each OpMode returns a fresh config object every loop.</li>
        <li>
          Hardware binding is explicit, so a team can see where motor direction, actuator family,
          bounds, and feedforward are declared.
        </li>
        <li>
          Dashboard-facing fields such as target and tuning mode are intentionally exposed so live
          editing becomes part of the workflow.
        </li>
        <li>
          The examples are not “magic defaults”; they are starting points for a real mechanism.
        </li>
      </ul>

      <h2>How to adapt them</h2>
      <ol>
        <li>
          Start from the sample that matches the mechanism physics, not merely the motor count.
        </li>
        <li>Replace hardware names and direction settings first.</li>
        <li>
          Add bounds, gravity constants, cosine mapping, or disruption settings before you chase
          gains.
        </li>
        <li>
          Keep the structure of the OpMode intact so the live runner continues to work as designed.
        </li>
      </ol>

      <blockquote>
        If you need the builder surface behind these examples, use the velocity and position config
        reference pages next rather than guessing method names from old versions of the framework.
      </blockquote>
    </>
  );
}
