import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/installation")({
  head: () => ({
    meta: [
      { title: "Installation — PID Pilot" },
      {
        name: "description",
        content:
          "Copy the PID Pilot framework into TeamCode and prepare FTC Dashboard for live PIDF tuning.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        PID Pilot is distributed as Java source files you place directly inside your FTC project.
        There is no Gradle artifact to install. You copy the package into <code>TeamCode</code>,
        verify imports, and then run the sample OpModes or your own tuner OpModes from the driver
        station.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>An FTC SDK project using Android Studio.</li>
        <li>Access to FTC Dashboard during testing.</li>
        <li>
          Velocity mechanisms that expose motor velocity, or position mechanisms with meaningful
          motor/servo feedback.
        </li>
        <li>Enough free physical range to run safe live tests.</li>
      </ul>

      <h2>Create a package location</h2>
      <p>
        Inside <code>TeamCode/src/main/java/org/firstinspires/ftc/teamcode/</code>, create a package
        dedicated to tuning or diagnostics. The exact package name is your choice; the important
        part is that all copied files agree on the package declaration.
      </p>

      <CodeBlock
        language="bash"
        code={`TeamCode/
└── src/main/java/org/firstinspires/ftc/teamcode/
    └── diagnostics/pidpilot/
        ├── PIDFController.java
        ├── PIDFTunerOpMode.java
        ├── PIDFTuningMode.java
        ├── VelocityPIDFTuner.java
        ├── PositionPIDFTuner.java
        ├── TuneFlywheelNew.java
        ├── TuneArm.java
        └── TuneElevator.java`}
      />

      <h2>Copy the framework files</h2>
      <p>
        Move the package contents from the README into that directory and make sure the package
        declaration at the top of each file matches your chosen path.
      </p>

      <CodeBlock
        language="java"
        code={`package org.firstinspires.ftc.teamcode.diagnostics.pidpilot;`}
      />

      <h2>Verify Dashboard and imports</h2>
      <ul>
        <li>Open one of the sample OpModes and confirm there are no red imports.</li>
        <li>
          Make sure FTC Dashboard is reachable so live config refresh and mirrored telemetry will be
          useful once you deploy.
        </li>
        <li>
          If you use the sample velocity OpMode, verify the mechanism hardware names match your
          robot configuration before running anything.
        </li>
      </ul>

      <h2>Deploy and confirm the OpModes appear</h2>
      <p>
        Build and deploy as you would any other FTC code. The sample tuners should appear in the
        driver station op mode list, typically under a tuning or diagnostics group depending on how
        the OpModes are annotated in your project.
      </p>

      <h2>Why installation is intentionally simple</h2>
      <p>
        The package is designed to be editable by the team using it. That matters because most
        extensions happen in the Java source: extra telemetry keys, new sample OpModes, tighter
        safety rules, or helper methods that export tuned gains back into production mechanism
        classes.
      </p>

      <blockquote>
        Next: go to <Link to="/docs/quick-start">Daily Workflow</Link> to wire a first live tuning
        OpMode and understand what to watch once the loop starts running.
      </blockquote>
    </>
  );
}
