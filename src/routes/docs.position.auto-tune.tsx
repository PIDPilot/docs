import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/auto-tune")({
  head: () => ({
    meta: [
      { title: "Position Auto-Tune — PID Pilot" },
      {
        name: "description",
        content:
          "How relay auto-tune finds kP/kI/kD for arms, elevators, and slides driven by motors or CR servos.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Auto-Tune (Relay)</h1>
      <p>
        The position tuner auto-tunes the same way the velocity tuner does: it drives the mechanism
        into a controlled oscillation around your target, measures it, and computes working{" "}
        <code>REV_UP</code> and <code>MAINTAIN</code> gains with Ziegler–Nichols formulas. It runs
        automatically on start for <strong>motors and CR servos</strong> — arms, elevators, slides,
        and turrets.
      </p>

      <h2>When it runs</h2>
      <p>Auto-tune runs on start unless you opt out. Concretely:</p>
      <ul>
        <li>
          <strong>Runs</strong> for <code>MOTOR</code> and <code>CR_SERVO</code> actuators when you
          have not supplied both gain sets.
        </li>
        <li>
          <strong>Skipped</strong> if you call <code>.skipRelayTuning()</code>, or if you supply{" "}
          <em>both</em> <code>.revUpGains(...)</code> and <code>.maintainGains(...)</code> manually.
        </li>
        <li>
          <strong>Not supported</strong> for standard servos (open-loop or with external feedback) —
          those are position-commanded, not power-driven, so tune them by hand. See{" "}
          <Link to="/docs/position/hold-f">Actuator &amp; Feedback Modes</Link>.
        </li>
      </ul>

      <h2>The minimal setup</h2>
      <p>
        No gains, no relay settings — just a target, the motor, and (for anything that fights
        gravity) a feedforward term to hold it in place while the relay works.
      </p>
      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(elevator)
        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay
        .telemetry(telemetry);`}
      />

      <h2>What happens on start</h2>
      <ol>
        <li>
          <strong>RELAY_TUNING</strong> — the tuner applies your feedforward plus a bang-bang relay
          signal (±<code>relayAmplitude</code>) based on position error. That both drives the
          mechanism to the target and forces it to oscillate around it. Unlike the velocity tuner,
          there is no separate &ldquo;approach&rdquo; phase — closing the relay on position error
          does both at once.
        </li>
        <li>
          <strong>Measure</strong> — it records the oscillation&apos;s amplitude and period across
          several cycles to compute the ultimate gain <code>Ku</code> and period <code>Pu</code>.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> — it holds briefly, shows the computed gains, then hands
          off to the normal closed loop.
        </li>
        <li>
          <strong>RUNNING</strong> — the computed gains take over and the mechanism holds the target
          under PID. Toggle <code>gamepad1.x</code> for REV_UP vs MAINTAIN.
        </li>
      </ol>

      <blockquote>
        Keep hands off the mechanism during RELAY_TUNING — a push during measurement corrupts the
        oscillation and the computed gains. Wait for the phase to read <code>RUNNING</code>.
      </blockquote>

      <h2>Reading the result</h2>
      <p>Watch these keys on FTC Dashboard:</p>
      <CodeBlock
        language="text"
        code={`Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING
RelayTune/cyclesCompleted      4/4
RelayTune/amplitudeTicks       23.4
RelayTune/periodSec            0.42
RelayTune/Ku / Pu              0.031 / 0.42
RelayTune/computedMaintainKP   0.61
RelayTune/computedMaintainKI   0.028
RelayTune/computedMaintainKD   0.041
RelayTune/computedRevUpKP      1.02
Diagnostics/relayTuneNote      Relay auto-tune complete.`}
      />

      <h2>Tuning the tuner</h2>
      <p>
        The defaults work for most mechanisms. If auto-tune struggles, three knobs adjust the
        <em>process</em> (not the mechanism gains):
      </p>
      <table>
        <thead>
          <tr>
            <th>Config</th>
            <th>Default</th>
            <th>Raise it when…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>relayAmplitude(a)</code>
            </td>
            <td>0.3</td>
            <td>
              The mechanism can&apos;t overcome friction/gravity to oscillate. Lower it if the swing
              is violent.
            </td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(p)</code>
            </td>
            <td>0.03</td>
            <td>Position noise causes chattering / false zero-crossings near the target.</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(f)</code>
            </td>
            <td>1.0</td>
            <td>
              You want a gentler (lower) or more aggressive (up to 2.0) result from the same
              measurement.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>If it can&apos;t establish an oscillation</h2>
      <p>
        If the mechanism never oscillates (too much friction/backlash, or <code>relayAmplitude</code>{" "}
        too low), the relay times out after ~15 seconds, leaves your Dashboard-default gains in
        place, and posts a note on <code>Diagnostics/relayTuneNote</code>. Raise{" "}
        <code>relayAmplitude</code>, check the mechanism, or tune by hand.
      </p>

      <h2>Opting out</h2>
      <CodeBlock
        language="java"
        code={`// Start from your own known-good gains, no auto-tune:
return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(arm)
        .revUpGains(0.9, 0.0, 0.12, 0.0)
        .maintainGains(0.6, 0.03, 0.08, 0.0)
        .telemetry(telemetry);

// ...or keep the Dashboard defaults and disable the relay entirely:
        .skipRelayTuning()`}
      />

      <blockquote>
        Next: <Link to="/docs/position/config">Config Reference</Link> for every builder method, or{" "}
        <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> for the relay theory shared by
        both tuners.
      </blockquote>
    </>
  );
}
