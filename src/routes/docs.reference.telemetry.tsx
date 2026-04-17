import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/reference/telemetry")({
  head: () => ({
    meta: [
      { title: "Telemetry Output — PID Pilot" },
      { name: "description", content: "What every line of PID Pilot telemetry means." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Telemetry Output</h1>
      <p>
        PID Pilot streams to both the driver station and FTC Dashboard via{" "}
        <code>MultipleTelemetry</code>. Here's what each line means.
      </p>

      <h2>Phase headers</h2>
      <CodeBlock
        language="text"
        code={`phase 1 f sweep
phase 2 ku search
phase 3 step refinement
phase 4 disruption phase`}
      />

      <h2>Final result block</h2>
      <p>
        After tuning completes, <code>PIDFTunerOpMode</code> holds these values on screen
        until the op mode stops:
      </p>
      <CodeBlock
        language="text"
        code={`velocity tuning complete
mode               maintain
pidf values
p                  0.004570
i                  0.013200
d                  0.000550
f                  0.000431
overshoot          1.8%
settling           412 ms
ss error           3.2 ticks
disruption recovery 280 ms
disruption dip     4.1%
worst recovery     410 ms
worst dip          7.2%
copy these into the matching controller path`}
      />

      <h2>Field reference</h2>
      <table>
        <thead><tr><th>Field</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><code>mode</code></td><td>Tuning mode used (<code>rev_up</code> or <code>maintain</code>)</td></tr>
          <tr><td><code>p i d f</code></td><td>Final selected PIDF — copy these directly into your controller</td></tr>
          <tr><td><code>overshoot</code></td><td>Step-response overshoot (% for velocity, ticks for position)</td></tr>
          <tr><td><code>settling</code></td><td>Time to enter and stay inside the settling band</td></tr>
          <tr><td><code>ss error</code></td><td>Average residual error after settling</td></tr>
          <tr><td><code>disruption recovery</code></td><td>Average ms back to ready band after disturbance</td></tr>
          <tr><td><code>disruption dip</code></td><td>Average peak deviation during disturbance</td></tr>
          <tr><td><code>worst recovery</code></td><td>Slowest recovery seen across all disturbance samples</td></tr>
          <tr><td><code>worst dip</code></td><td>Largest deviation seen across all disturbance samples</td></tr>
          <tr><td><code>n/a</code></td><td>Phase not applicable for this mode</td></tr>
          <tr><td><code>skipped</code></td><td>Mechanism never reached the ready band before timeout</td></tr>
        </tbody>
      </table>

      <h2>Reading it on FTC Dashboard</h2>
      <p>
        Open <code>http://192.168.43.1:8080/dash</code> while connected to the robot's
        wifi. The same telemetry appears, plus a graph of velocity or position over time
        that's incredibly useful for spotting overshoot or oscillation patterns the raw
        numbers can hide.
      </p>
    </>
  );
}
