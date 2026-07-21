import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/scoring")({
  head: () => ({
    meta: [
      { title: "How Auto-Tune Works — PID Pilot" },
      {
        name: "description",
        content:
          "The relay (Åström–Hägglund) method behind PID Pilot's auto-tune: how it measures a mechanism and turns that into PIDF gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>How Auto-Tune Works</h1>
      <p>
        Both tuners auto-tune with the same engine: the <strong>relay method</strong>{" "}
        (Åström–Hägglund). Instead of guessing gains and nudging them, it makes the mechanism reveal
        its own dynamics, measures them, and converts the measurement into PIDF gains with textbook
        formulas. This page explains what&apos;s happening under the hood.
      </p>

      <h2>The idea: make it oscillate on purpose</h2>
      <p>
        Drive a mechanism with a <em>relay</em> — full push when it&apos;s below target, full pull
        when it&apos;s above — and it settles into a steady oscillation around the target. That limit
        cycle is not noise; its size and speed are a fingerprint of the mechanism&apos;s dynamics.
      </p>
      <ul>
        <li>
          The <strong>amplitude</strong> of the oscillation, together with the relay strength, gives
          the <strong>ultimate gain</strong> <code>Ku</code> — how much proportional gain the system
          can take before it oscillates on its own.
        </li>
        <li>
          The <strong>period</strong> of the oscillation is the <strong>ultimate period</strong>{" "}
          <code>Pu</code> — how fast the system naturally cycles at that edge.
        </li>
      </ul>
      <p>
        A hysteresis band around the target keeps sensor noise from causing false switches, so the
        relay produces a clean oscillation instead of chatter.
      </p>

      <h2>From measurement to gains</h2>
      <p>
        Once <code>Ku</code> and <code>Pu</code> are known, Ziegler–Nichols-style formulas produce
        the gains. PID Pilot computes a calmer <code>MAINTAIN</code> set (good disturbance rejection)
        and a more aggressive <code>REV_UP</code> set (fast approach) from the same measurement, and
        a <em>detune</em> factor lets you scale how aggressive the result is.
      </p>
      <CodeBlock
        language="text"
        code={`Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)
Pu = oscillation period

MAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8
REV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20
           (each scaled by relayDetune)`}
      />

      <h2>The lifecycle</h2>
      <p>The two tuners run slightly different phase sequences on start:</p>
      <CodeBlock
        language="text"
        code={`Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING
Position:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING`}
      />
      <ul>
        <li>
          <strong>Velocity</strong> first runs a short full-power sweep (CHARACTERIZING) to estimate
          a physical feedforward <code>kF ≈ 1/maxVelocity</code>, settles, then relays. Feedforward
          gets the wheel near speed; the relay tunes the feedback around it.
        </li>
        <li>
          <strong>Position</strong> skips characterization — closing the relay on position error
          both drives the mechanism to the target and induces the oscillation in one motion. Gravity
          / cosine feedforward holds it in place while the relay works.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> briefly displays the result, then <strong>RUNNING</strong>{" "}
          hands off to normal closed-loop control with the computed gains.
        </li>
      </ul>

      <blockquote>
        Because auto-tune starts in the OpMode constructor (during INIT), the tuners re-baseline their
        phase clocks the moment you press start — so a long INIT wait never eats into the measurement
        window.
      </blockquote>

      <h2>When it can&apos;t measure</h2>
      <p>
        If the mechanism can&apos;t be made to oscillate — too much friction or backlash, or{" "}
        <code>relayAmplitude</code> set too low — the relay times out, leaves your default gains in
        place, and posts a note on the <code>relayTuneNote</code> telemetry key. Raise{" "}
        <code>relayAmplitude</code>, check the hardware, or tune by hand.
      </p>

      <h2>The architecture behind it</h2>
      <p>
        Auto-tune is one system inside a clean split: generic control math, mechanism-specific logic,
        and runtime orchestration each live in their own place.
      </p>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>PIDFController</code>
            </td>
            <td>Raw control math: derivative-on-measurement, anti-windup, term state, clamping</td>
          </tr>
          <tr>
            <td>
              <code>PIDFTunerOpMode</code>
            </td>
            <td>Runtime shell: loop timing, live config refresh, telemetry mirror, mode toggle</td>
          </tr>
          <tr>
            <td>
              <code>VelocityPIDFTuner</code>
            </td>
            <td>ticks/s control, characterization, relay auto-tune, disruption recovery</td>
          </tr>
          <tr>
            <td>
              <code>PositionPIDFTuner</code>
            </td>
            <td>Actuator / feedback abstraction, relay auto-tune, motion profiles, feedforward, bounds</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        Next: <Link to="/docs/velocity/ku-search">Velocity Auto-Tune</Link> or{" "}
        <Link to="/docs/position/auto-tune">Position Auto-Tune</Link> for the tuner-specific details,
        or <Link to="/docs/concepts/tuning-modes">REV_UP vs MAINTAIN</Link> for why there are two
        gain sets.
      </blockquote>
    </>
  );
}
