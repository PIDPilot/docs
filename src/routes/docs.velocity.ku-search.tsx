import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/ku-search")({
  head: () => ({
    meta: [
      { title: "Velocity Relay Auto-Tuning — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner uses a hysteretic relay to estimate Ku, Pu, and conservative starting gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Relay Auto-Tuning</h1>
      <p>
        The velocity tuner’s automatic gain discovery is built around a hysteretic relay rather than
        a hand-wavy default gain. This is the framework’s answer to the reality that a single
        starting <code>kP</code> cannot fit both a fast flywheel and a slow high-inertia mechanism.
      </p>

      <h2>What the relay phase does</h2>
      <ol>
        <li>The tuner effectively zeros traditional PID gains.</li>
        <li>It runs feedforward plus a relay signal around the target.</li>
        <li>The relay forces a stable oscillation instead of relying on chance instability.</li>
        <li>Oscillation amplitude and period are measured.</li>
        <li>
          The tuner estimates <code>Ku</code> and <code>Pu</code>, then computes conservative{" "}
          <code>REV_UP</code> and <code>MAINTAIN</code> gain sets.
        </li>
      </ol>

      <h2>Relay subsystem states</h2>
      <ul>
        <li>
          <code>WAITING_FOR_TARGET</code>
        </li>
        <li>
          <code>OSCILLATING</code>
        </li>
        <li>
          <code>COMPUTING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <p>
        It also tracks which side of the target the signal is on so it can detect clean zero
        crossings and compute the oscillation period honestly.
      </p>

      <h2>Why hysteresis is essential</h2>
      <p>
        Encoder noise near target would make a zero-hysteresis relay chatter constantly. The
        hysteresis band prevents false switching so the tuner measures a real oscillation instead of
        noise around the setpoint.
      </p>

      <h2>Operator-facing knobs</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>skipRelayTuning()</code>
            </td>
            <td>Bypass relay auto-tuning entirely</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Control how strong the relay push is</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Control how wide the deadband is near target</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale the computed gains conservatively after estimation</td>
          </tr>
        </tbody>
      </table>

      <h2>Methods worth knowing</h2>
      <ul>
        <li>
          <code>runRelayTuningLoop(...)</code> executes the active relay behavior.
        </li>
        <li>
          <code>applyRelayComputedGains()</code> loads the calculated gain families.
        </li>
        <li>
          <code>applyRelayHeadroomGuard(...)</code> keeps the results physically reasonable.
        </li>
        <li>
          <code>appendRelayTuneNote(...)</code> surfaces what happened in telemetry.
        </li>
      </ul>

      <h2>What comes out of the phase</h2>
      <CodeBlock
        language="text"
        code={`oscillation amplitude
oscillation period
Ku
Pu
computed MAINTAIN gains
computed REV_UP gains`}
      />

      <blockquote>
        Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a
        license to ignore telemetry, headroom warnings, or impossible targets.
      </blockquote>
    </>
  );
}
