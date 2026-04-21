import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/scoring")({
  head: () => ({
    meta: [
      { title: "High-Level Architecture — PID Pilot" },
      {
        name: "description",
        content:
          "How PIDFController, PIDFTunerOpMode, the velocity tuner, the position tuner, and sample OpModes fit together.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>High-Level Architecture</h1>
      <p>
        The framework is organized so control math, mechanism-specific logic, and runtime
        orchestration stay separate. That separation is what makes the package teachable and
        extensible rather than becoming one large opaque OpMode.
      </p>

      <h2>The loop in one view</h2>
      <CodeBlock
        language="text"
        code={`sample OpMode returns Config
        ↓
PIDFTunerOpMode refreshes config every loop
        ↓
tuner reads sensors
        ↓
PIDFController computes terms
        ↓
tuner adds mechanism-specific feedforward and safety logic
        ↓
hardware command is applied
        ↓
rich telemetry is pushed to Driver Station and Dashboard`}
      />

      <h2>Class responsibilities</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Main responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>PIDFController</code>
            </td>
            <td>
              Raw control math, derivative filtering, term storage, clamping, and reset behavior
            </td>
          </tr>
          <tr>
            <td>
              <code>PIDFTunerOpMode</code>
            </td>
            <td>
              Runtime shell, loop timing, live config refresh, telemetry mirror, and mode toggle
              handling
            </td>
          </tr>
          <tr>
            <td>
              <code>VelocityPIDFTuner</code>
            </td>
            <td>
              Raw ticks-per-second control, feedforward source selection, relay auto-tuning,
              disruption recovery, and warnings
            </td>
          </tr>
          <tr>
            <td>
              <code>PositionPIDFTuner</code>
            </td>
            <td>
              Actuator abstraction, feedback abstraction, normalization, motion profiles,
              feedforward layers, constraints, and hold behavior
            </td>
          </tr>
          <tr>
            <td>Sample OpModes</td>
            <td>
              Bind the generic systems to real robot hardware and expose Dashboard-facing fields
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Why config is refreshed every loop</h2>
      <p>
        This is one of the most important design choices in the framework. Because the OpMode
        re-calls the config builder every cycle, Dashboard edits become live behavior immediately.
        That makes PID Pilot a real tuning surface, but it also means the tuners must reassert any
        hardware assumptions that user code might accidentally change during config refresh.
      </p>

      <h2>Why the tuners own mechanism logic</h2>
      <p>
        <code>PIDFController</code> deliberately does not know about motors, servos, relay tuning,
        characterization, motion profiling, or disruption tests. Those belong to the tuners because
        they are mechanism semantics, not generic PID math.
      </p>

      <h2>What the sample OpModes are for</h2>
      <p>
        The sample classes are not a second framework layered on top. They are examples of how to
        return a config, bind hardware, expose targets, and let the live runner do its job. Once you
        understand <code>PIDFController</code>, <code>PIDFTunerOpMode</code>, and the relevant
        tuner, the sample OpModes become straightforward.
      </p>

      <blockquote>
        If you need the runtime behavior next, read the velocity or position overview page that
        matches your mechanism. If you need the engineering assumptions next, read Shared Concepts
        and Setup Rules.
      </blockquote>
    </>
  );
}
