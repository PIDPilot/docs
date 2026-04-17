import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/installation")({
  head: () => ({
    meta: [
      { title: "Installation — PID Pilot" },
      { name: "description", content: "Add PID Pilot to your FTC TeamCode module." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        PID Pilot is distributed as a small set of Java source files. There is no Gradle
        artifact — you copy the files into your <code>TeamCode</code> module.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>FTC SDK 9.0 or newer</li>
        <li><code>FtcDashboard</code> (already included in modern SDK builds)</li>
        <li>Motors that expose <code>DcMotorEx</code> (almost all FTC-legal motors do)</li>
      </ul>

      <h2>1. Create the package</h2>
      <p>
        Inside <code>TeamCode/src/main/java/org/firstinspires/ftc/teamcode/</code>, create
        a folder structure like this:
      </p>
      <CodeBlock
        language="bash"
        code={`teamcode/
└── diagnostics/
    └── pidfTuners/
        ├── PIDFTuningMode.java
        ├── PIDFTunerOpMode.java
        ├── VelocityPIDFTuner.java
        ├── PositionPIDFTuner.java
        └── TuneFlywheel.java`}
      />

      <h2>2. Drop in the files</h2>
      <p>
        Copy the five Java files into the <code>pidfTuners</code> folder. The package
        declaration at the top of each file should match its location:
      </p>
      <CodeBlock
        code={`package org.firstinspires.ftc.teamcode.diagnostics.pidfTuners;`}
      />

      <h2>3. Verify imports</h2>
      <p>
        After Android Studio re-indexes, open <code>TuneFlywheel.java</code>. There should
        be no red imports. If you see missing symbols, confirm <code>FtcDashboard</code>{" "}
        is on your classpath.
      </p>

      <h2>4. Deploy</h2>
      <p>
        Build and deploy as you would any other op mode. After install, the new tuning op
        modes appear under the <strong>Tuning</strong> group on the driver station.
      </p>

      <blockquote>
        Next: head to <a href="/docs/quick-start">Quick Start</a> to run your first tune.
      </blockquote>
    </>
  );
}
