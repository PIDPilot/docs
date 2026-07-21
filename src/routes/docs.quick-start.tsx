import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/quick-start")({
  head: () => ({
    meta: [
      { title: "Quick Start — PID Pilot" },
      {
        name: "description",
        content:
          "Get relay auto-tune running on an FTC mechanism in a few minutes: extend PIDFTunerOpMode, return a Config, press start.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Quick Start</h1>
      <p>
        This is the shortest path to a tuned mechanism. You&apos;ll write one small OpMode, press
        start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes
        you&apos;ve finished <Link to="/docs/installation">Installation</Link>.
      </p>

      <h2>1. Pick your tuner</h2>
      <ul>
        <li>
          <strong>Velocity</strong> — flywheels, shooters: anything whose target is a speed.
        </li>
        <li>
          <strong>Position</strong> — arms, elevators, slides, turrets: anything driven to a target
          position.
        </li>
      </ul>

      <h2>2. Write the OpMode</h2>
      <p>
        Extend <code>PIDFTunerOpMode</code> and override exactly one of{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code>, returning a{" "}
        <code>Config</code>. That&apos;s the whole setup — you don&apos;t supply gains; auto-tune
        finds them.
      </p>

      <CodeBlock
        filename="TuneFlywheel.java"
        language="java"
        code={`package org.firstinspires.ftc.teamcode;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;

@Config
@TeleOp(name = "Tune Flywheel", group = "Tuning")
public class TuneFlywheel extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 1800.0; // ticks/sec

    private DcMotorEx left, right;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        // configure*() runs every loop, so cache hardware the first time only.
        if (left == null) {
            left = hardwareMap.get(DcMotorEx.class, "outtakeL");
            right = hardwareMap.get(DcMotorEx.class, "outtakeR");
            left.setDirection(DcMotorSimple.Direction.REVERSE);
        }
        return new VelocityPIDFTuner.Config()
                .target(TARGET_VELOCITY)
                .withMotors(left, right)
                .averageAbsoluteVelocity(true) // wheels spin opposite by design
                .telemetry(telemetry);
    }
}`}
      />

      <blockquote>
        <code>configureVelocity()</code> / <code>configurePosition()</code> are called{" "}
        <strong>every control loop</strong> so Dashboard edits to <code>TARGET_VELOCITY</code> apply
        live. Always cache <code>hardwareMap.get(...)</code> in a field like above — don&apos;t
        re-fetch each call.
      </blockquote>

      <h2>3. Press start — auto-tune runs</h2>
      <ol>
        <li>Choose a target the mechanism can realistically reach.</li>
        <li>
          Select the OpMode under <strong>Tuning</strong>, press <strong>INIT</strong>, open FTC
          Dashboard, then press <strong>START</strong>.
        </li>
        <li>
          <strong>Hands clear.</strong> Velocity first does a short full-power sweep to estimate{" "}
          <code>kF</code>, then relay auto-tune oscillates the mechanism around the target and
          computes gains. Position goes straight to the relay.
        </li>
        <li>
          When it finishes it holds the target. Press <code>gamepad1.x</code> to flip between{" "}
          <code>REV_UP</code> and <code>MAINTAIN</code>.
        </li>
      </ol>

      <h2>4. Read the gains off Dashboard</h2>
      <p>
        The tuner streams the computed gains plus the full controller story. Copy the set that
        matches the behavior you need — a good <code>REV_UP</code> tune and a good{" "}
        <code>MAINTAIN</code> tune are legitimately different because they solve different problems.
      </p>
      <CodeBlock
        language="text"
        code={`RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING`}
      />

      <h2>5. Put them in your real subsystem</h2>
      <ol>
        <li>Drop the selected gains into the mechanism class you run in teleop / autonomous.</li>
        <li>Test under the real task, not just under the tuner OpMode.</li>
        <li>Re-run the tune if gearing, inertia, weight, or feedback changes.</li>
      </ol>

      <h2>Prefer to tune by hand?</h2>
      <p>
        Auto-tune is the default, not a requirement. Supply <code>.revUpGains(...)</code> and{" "}
        <code>.maintainGains(...)</code> to start from your own values, or call{" "}
        <code>.skipRelayTuning()</code> to disable it entirely and adjust every gain live in
        Dashboard. The <Link to="/docs/concepts/pidf-terms">Concepts</Link> and Advanced sections
        cover the manual workflow.
      </p>

      <blockquote>
        Next: grab a full working example from <Link to="/docs/templates">Sample OpModes</Link>, or
        read <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> to understand what just
        happened.
      </blockquote>
    </>
  );
}
