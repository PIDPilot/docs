import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/installation")({
  head: () => ({
    meta: [
      { title: "Installation — PID Pilot" },
      {
        name: "description",
        content:
          "Add PID Pilot to your FTC project as a JitPack Gradle dependency and prepare FTC Dashboard for live tuning.",
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
        PID Pilot ships as a Gradle dependency on JitPack — no copied source files. Add two
        repositories and two dependencies to the standard FTC project, sync, and the sample tuner
        OpModes appear on the Driver Station.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>The standard FTC SDK project (the FtcRobotController repo) in Android Studio.</li>
        <li>FTC Dashboard — strongly recommended; the tuner streams all its telemetry there.</li>
        <li>A mechanism with real feedback: motor velocity for the velocity tuner, or an encoder / analog sensor for the position tuner.</li>
        <li>Enough free physical range to run safe live tests.</li>
      </ul>

      <h2>1. Add the repositories</h2>
      <p>
        In your project&apos;s <code>build.dependencies.gradle</code> (repo root), add the FTC
        Dashboard maven repo and JitPack to the <code>repositories</code> block:
      </p>
      <CodeBlock
        language="groovy"
        filename="build.dependencies.gradle"
        code={`repositories {
    mavenCentral()
    google()
    maven { url = 'https://maven.brott.dev/' }   // FTC Dashboard
    maven { url = 'https://jitpack.io' }          // PID Pilot
}`}
      />

      <h2>2. Add the dependencies</h2>
      <p>
        In the same <code>dependencies</code> block, add PID Pilot and (recommended) FTC Dashboard:
      </p>
      <CodeBlock
        language="groovy"
        filename="build.dependencies.gradle"
        code={`dependencies {
    implementation 'com.github.PIDPilot:ftc:v1.0.4'
    implementation 'com.acmerobotics.dashboard:dashboard:0.6.0'
}`}
      />
      <p>
        Then <strong>Sync Gradle</strong>. Check the{" "}
        <a href="https://jitpack.io/#PIDPilot/ftc" target="_blank" rel="noreferrer">
          JitPack page
        </a>{" "}
        for the latest version tag.
      </p>

      <blockquote>
        Kotlin DSL project? The same coordinates work in <code>build.gradle.kts</code>:{" "}
        <code>implementation(&quot;com.github.PIDPilot:ftc:v1.0.4&quot;)</code>.
      </blockquote>

      <h2>3. Confirm it resolved</h2>
      <p>
        Everything lives under the <code>com.pidpilot.ftc</code> package. In any TeamCode file, this
        import should resolve with no red underline once the sync finishes:
      </p>
      <CodeBlock
        language="java"
        code={`import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;
import com.pidpilot.ftc.PositionPIDFTuner;`}
      />

      <h2>4. Set up FTC Dashboard</h2>
      <ul>
        <li>
          With the robot running, open <code>http://192.168.43.1:8080/dash</code> (RC phone) or{" "}
          <code>http://192.168.43.1:8080</code> (Control Hub) on a laptop on the robot&apos;s
          network.
        </li>
        <li>
          The tuner mirrors all telemetry there and exposes every tunable value as a live{" "}
          <code>@Config</code> field — this is where you watch auto-tune and refine gains.
        </li>
      </ul>

      <h2>5. Deploy and run</h2>
      <p>
        Build and install to the Robot Controller as usual. The sample tuners appear in the OpMode
        list under the <strong>Tuning</strong> group. Pick one, INIT, then START — and keep hands
        clear while auto-tune runs.
      </p>

      <h2>Compatibility</h2>
      <p>
        Built against FTC SDK <code>11.2.0</code> and FTC Dashboard <code>0.6.0</code>. The API it
        uses has been stable across seasons, so older SDKs generally work — but if you hit a{" "}
        <code>NoSuchMethodError</code>, match the library to your Robot Controller app&apos;s season.
      </p>

      <blockquote>
        Next: <Link to="/docs/quick-start">Quick Start</Link> wires your first tuning OpMode and
        walks through what to watch once auto-tune begins.
      </blockquote>
    </>
  );
}
