import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/quick-start")({
  head: () => ({
    meta: [
      { title: "Quick Start — PID Pilot" },
      { name: "description", content: "Tune a flywheel in under five minutes with PID Pilot." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Quick Start</h1>
      <p>
        Get a flywheel tuned end-to-end. This walk-through assumes you've finished{" "}
        <a href="/docs/installation">Installation</a> and have a two-motor flywheel wired
        as <code>outtakeL</code> and <code>outtakeR</code>.
      </p>

      <h2>1. Create a tuner op mode</h2>
      <p>
        Extend <code>PIDFTunerOpMode</code> and override <code>configureVelocity()</code>.
        Only override one of <code>configureVelocity()</code> or{" "}
        <code>configurePosition()</code> per op mode.
      </p>

      <CodeBlock
        filename="TuneFlywheel.java"
        code={`package org.firstinspires.ftc.teamcode.diagnostics.pidfTuners;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;

@Config
@TeleOp(name = "Tune Flywheel", group = "Tuning")
public class TuneFlywheel extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 640;
    public static PIDFTuningMode TUNING_MODE = PIDFTuningMode.MAINTAIN;

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
                .tuningMode(TUNING_MODE)
                .withRunUsingEncoderVelocityMotors(left, right)
                .telemetry(telemetry);
    }
}`}
      />

      <h2>2. Run it</h2>
      <ol>
        <li>Pick <strong>Tune Flywheel</strong> from the Tuning group on the driver station.</li>
        <li>Press <strong>INIT</strong>, then <strong>PLAY</strong>.</li>
        <li>The flywheel will rev through F-sweep, Ku search, and step refinement.</li>
        <li>If <code>MAINTAIN</code> is selected, a disruption phase follows.</li>
      </ol>

      <p>
        Press <kbd>X</kbd> on gamepad 1 at any time to skip the current phase if the
        mechanism is misbehaving.
      </p>

      <h2>3. Read the result</h2>
      <p>
        When tuning finishes, the driver station and FTC Dashboard hold the final values
        on screen until the op mode is stopped:
      </p>
      <CodeBlock
        language="text"
        code={`velocity tuning complete
mode               maintain
p                  0.004570
i                  0.013200
d                  0.000550
f                  0.000431
overshoot          1.8%
settling           412 ms
ss error           3.2 ticks
disruption recovery 280 ms
disruption dip     4.1%
copy these into the matching controller path`}
      />

      <h2>4. Wire the gains into your controller</h2>
      <p>
        Copy the <code>P</code>, <code>I</code>, <code>D</code>, and <code>F</code> values
        into your real velocity controller. For <code>RUN_USING_ENCODER</code>, that
        usually means <code>setPIDFCoefficients(...)</code> on each motor.
      </p>

      <CodeBlock
        code={`PIDFCoefficients pidf = new PIDFCoefficients(
        0.004570, 0.013200, 0.000550, 0.000431);
left.setPIDFCoefficients(DcMotor.RunMode.RUN_USING_ENCODER, pidf);
right.setPIDFCoefficients(DcMotor.RunMode.RUN_USING_ENCODER, pidf);`}
      />

      <blockquote>
        That's it. To understand <em>why</em> the tuner picked those values, head to{" "}
        <a href="/docs/concepts/scoring">How Final PIDF Is Chosen</a>.
      </blockquote>
    </>
  );
}
