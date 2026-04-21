import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/f-sweep")({
  head: () => ({
    meta: [
      { title: "Velocity Characterization & Feedforward — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner characterizes max velocity, computes physical kF, and chooses a feedforward source.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Characterization &amp; Feedforward</h1>
      <p>
        The velocity tuner begins by trying to establish a believable physical feedforward. This is
        one of the most important design choices in the framework because good velocity control gets
        dramatically easier once the loop stops asking PID to supply the entire baseline effort.
      </p>

      <h2>Startup characterization</h2>
      <p>
        During <strong>CHARACTERIZING</strong>, the tuner drives the mechanism at full power,
        samples the final portion of the run, estimates max steady-state velocity, and computes:
      </p>

      <CodeBlock language="text" code={`kF = 1 / maxVelocity`} />

      <p>
        In this framework, that is a real physical feedforward in motor power per{" "}
        <code>ticks/s</code>. The point is to tell the controller how much output the mechanism
        usually needs just to maintain a target speed.
      </p>

      <h2>Why the tuner pauses after characterization</h2>
      <p>
        The <strong>SETTLING</strong> phase immediately follows characterization. Output is driven
        to zero, controller memory is cleared, and the tuner pauses briefly so the next phase starts
        from a clean state instead of inheriting momentum and stale integrator history from full
        power operation.
      </p>

      <h2>Feedforward can come from multiple sources</h2>
      <ul>
        <li>
          A newly characterized physical <code>kF</code>.
        </li>
        <li>
          A manual value provided through <code>skipCharacterization(manualKF)</code>.
        </li>
        <li>
          A nonzero <code>kF</code> embedded directly in the active gain set.
        </li>
      </ul>

      <p>
        The tuner treats feedforward selection and phase routing as related but not identical. Once
        relay tuning or running control is already active, changing which feedforward source is
        available should not destroy the current state machine.
      </p>

      <h2>Methods behind the routing</h2>
      <ul>
        <li>
          <code>resolveActivePhysicalKf()</code> chooses the current physical source.
        </li>
        <li>
          <code>resolveModePhysicalKf(...)</code> checks the gain family currently in use.
        </li>
        <li>
          <code>usesManualKf()</code> and <code>usesConfiguredGainKf()</code> explain why a source
          won.
        </li>
        <li>
          <code>syncFeedforwardMode()</code> keeps phase logic coherent while sources change.
        </li>
      </ul>

      <h2>What to watch in telemetry</h2>
      <ul>
        <li>
          The estimated max velocity and characterized <code>kF</code>.
        </li>
        <li>
          Whether the tuner says it is using a manual or configured gain-set <code>kF</code>.
        </li>
        <li>Any warning that feedforward already consumes too much output headroom.</li>
      </ul>

      <blockquote>
        If the characterized <code>kF</code> looks physically unreasonable, stop there. Do not try
        to “save” the session by adding more P or I on top of a bad baseline effort estimate.
      </blockquote>
    </>
  );
}
