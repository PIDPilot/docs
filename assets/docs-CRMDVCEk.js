import{u as Ge,r as v,a as He,b as $e,j as u,L as M,O as Ke}from"./index-Dnl3SSpd.js";import{l as Ye}from"./pidpilot-logo-transparent-ByPRmtFM.js";import{u as Qe,a as re,T as Je,S as Ze}from"./ThemeToggle-B_PdMPQc.js";import{c as D}from"./createLucideIcon-Db5ZVXfR.js";import{a as Xe,P as ie,d as en,b as nn,e as tn,u as on,c as rn}from"./index-DSQkbnFB.js";function sn(t){const e=Ge(),n=v.useRef(void 0);return He(e.stores.location,r=>{const o=r;if(e.options.defaultStructuralSharing){const i=$e(n.current,o);return n.current=i,i}return o})}const an=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],cn=D("arrow-up-right",an);const ln=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dn=D("chevron-down",ln);const un=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ge=D("chevron-right",un);const hn=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],pn=D("corner-down-right",hn);const mn=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],gn=D("file-text",mn);const fn=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],yn=D("hash",fn);const bn=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],vn=D("menu",bn);const kn=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fe=D("search",kn);const wn=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Re=D("x",wn);function Ae(t){return"links"in t}const De=[{title:"Getting Started",links:[{title:"Introduction",to:"/docs"},{title:"Installation",to:"/docs/installation"},{title:"Quick Start",to:"/docs/quick-start"},{title:"Sample OpModes",to:"/docs/templates"}]},{title:"Concepts",links:[{title:"PIDF Terms",to:"/docs/concepts/pidf-terms"},{title:"REV_UP vs MAINTAIN",to:"/docs/concepts/tuning-modes"},{title:"How Auto-Tune Works",to:"/docs/concepts/scoring"}]},{title:"Velocity — Flywheels",links:[{title:"Overview",to:"/docs/velocity/overview"},{title:"Auto-Tune (Relay)",to:"/docs/velocity/ku-search"},{title:"Config Reference",to:"/docs/velocity/config"},{title:"Advanced",links:[{title:"Feedforward Characterization",to:"/docs/velocity/f-sweep"},{title:"Running Control & Headroom",to:"/docs/velocity/refinement"},{title:"Disruption Sampling",to:"/docs/velocity/disruption"}]}]},{title:"Position — Arms & Slides",links:[{title:"Overview",to:"/docs/position/overview"},{title:"Auto-Tune (Relay)",to:"/docs/position/auto-tune"},{title:"Config Reference",to:"/docs/position/config"},{title:"Advanced",links:[{title:"Actuator & Feedback Modes",to:"/docs/position/hold-f"},{title:"Motion Profile & Feedforward",to:"/docs/position/ku-search"},{title:"Bounds & Control Flow",to:"/docs/position/refinement"},{title:"Disruption Sampling",to:"/docs/position/disturbance"}]}]},{title:"Reference",links:[{title:"Troubleshooting",to:"/docs/troubleshooting"},{title:"Telemetry & Final Summary",to:"/docs/reference/telemetry"},{title:"Workflows & Caveats",to:"/docs/reference/practical-notes"},{title:"Setup Rules",to:"/docs/reference/setup-rules"},{title:"FAQ",to:"/docs/reference/faq"}]}],L=De.flatMap(t=>t.links.flatMap(e=>Ae(e)?e.links.map(n=>({...n,section:`${t.title} / ${e.title}`})):[{...e,section:t.title}])),xn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/pidf-terms")({
  head: () => ({
    meta: [
      { title: "Shared Concepts — PID Pilot" },
      {
        name: "description",
        content:
          "Shared control concepts in PID Pilot: feedforward vs feedback, Dashboard-driven config, telemetry, and controller internals.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Shared Concepts</h1>
      <p>
        Before you dive into the individual tuners, it helps to understand the common ideas the
        framework is built around. These concepts explain why the package has the class structure it
        does and why the telemetry is so detailed.
      </p>

      <h2>Where P, I, D, and F fit</h2>
      <ul>
        <li>
          <strong>P</strong> reacts to current error and provides the immediate corrective push.
        </li>
        <li>
          <strong>I</strong> reacts to accumulated error over time and is most valuable when hold
          quality and steady-state accuracy matter.
        </li>
        <li>
          <strong>D</strong> damps the response and in PID Pilot is based on measurement change, not
          direct error difference.
        </li>
        <li>
          <strong>F</strong> is not one universal idea: in velocity it is a physical feedforward,
          while in position it is a static trim or friction-help term.
        </li>
      </ul>

      <h2>Feedforward vs feedback</h2>
      <p>
        The package works hard to keep these jobs distinct. Feedforward supplies the expected
        baseline effort. PID handles the leftover error. This matters because a team can only debug
        the controller rationally if it knows whether the mechanism is failing due to a missing
        baseline effort or due to bad feedback behavior.
      </p>

      <ul>
        <li>
          Velocity <code>kF</code> is motor power per <code>ticks/s</code> and is meant to be
          physically interpretable.
        </li>
        <li>
          Position <code>kF</code> is static trim. Gravity constant and cosine compensation are
          separate terms because they represent different physics.
        </li>
      </ul>

      <h2>Dashboard-driven configuration</h2>
      <p>
        PID Pilot is not based on static startup configuration only. The base OpMode calls{" "}
        <code>configureVelocity()</code> or <code>configurePosition()</code> every loop, so changes
        made in FTC Dashboard take effect immediately. That is why the tuners must reassert key
        hardware assumptions during refresh, such as velocity mode ownership.
      </p>

      <h2>Telemetry is a diagnostic surface</h2>
      <p>
        The framework exposes more than target, measurement, and error. It publishes controller
        terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries,
        warnings, and copyable gain summaries because teams need to know <em>why</em> the loop
        behaves the way it does.
      </p>

      <h2>Derivative on measurement</h2>
      <p>
        <code>PIDFController</code> computes derivative from the measurement rather than from direct
        error difference. That avoids derivative kick when the setpoint changes suddenly, which is
        common in FTC because many commands are step changes.
      </p>

      <h2>Controller state is intentionally exposed</h2>
      <p>
        The controller stores things like integral memory, measurement rate, filtered measurement
        rate, term contributions, last error, and last output. The tuners reuse that state directly
        for telemetry instead of re-deriving it elsewhere. This is part of why the framework can
        explain controller behavior so clearly.
      </p>

      <h2>Accumulator units matter</h2>
      <p>
        When integral is clamped, the controller clamps the stored accumulator rather than only the
        final <code>iTerm</code>. That keeps the cap tied to error history. The tuners can then
        derive that cap from actuator headroom while still reasoning about the stored state
        correctly.
      </p>
    </>
  );
}
`,Tn=`import { createFileRoute, Link } from "@tanstack/react-router";
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
        code={\`Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)
Pu = oscillation period

MAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8
REV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20
           (each scaled by relayDetune)\`}
      />

      <h2>The lifecycle</h2>
      <p>The two tuners run slightly different phase sequences on start:</p>
      <CodeBlock
        language="text"
        code={\`Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING
Position:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING\`}
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
`,Pn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/tuning-modes")({
  head: () => ({
    meta: [
      { title: "Tuning Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses REV_UP and MAINTAIN as separate controller personalities with separate gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Tuning Modes</h1>
      <p>
        <code>PIDFTuningMode</code> is a small enum with a large role in the framework. It gives the
        entire package a shared language for two different controller personalities: one focused on
        getting there quickly and one focused on holding accurately under disturbances.
      </p>

      <h2>REV_UP</h2>
      <ul>
        <li>Prioritizes fast approach to the target.</li>
        <li>Often uses little or no integral.</li>
        <li>May use motion profiling in the position tuner.</li>
        <li>Can accept some overshoot if that buys better approach speed.</li>
      </ul>

      <h2>MAINTAIN</h2>
      <ul>
        <li>Prioritizes low steady-state error and disturbance rejection.</li>
        <li>Commonly benefits from integral action.</li>
        <li>Is the mode used for disruption sampling.</li>
        <li>
          Represents the controller personality you care about once the mechanism is near target.
        </li>
      </ul>

      <h2>Why the framework keeps two gain sets</h2>
      <p>
        The package does not pretend that approach behavior and hold behavior are the same control
        problem. Both tuners keep separate gain sets so a team can tune the personality it actually
        needs instead of forcing one compromise set to cover everything.
      </p>

      <h2>How teams switch modes live</h2>
      <p>
        The base runner handles mode toggling with <code>gamepad1.x</code>. When the mode changes,
        the active tuner swaps gain families and resets state where stale controller memory would be
        misleading.
      </p>

      <h2>Where the effect differs by tuner</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>REV_UP emphasis</th>
            <th>MAINTAIN emphasis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Velocity tuner</td>
            <td>Fast approach and cleaner rev-up behavior</td>
            <td>Robust speed hold and disruption recovery</td>
          </tr>
          <tr>
            <td>Position tuner</td>
            <td>Approach behavior, often with motion profiling</td>
            <td>Holding behavior and load rejection near target</td>
          </tr>
          <tr>
            <td>Integral usage</td>
            <td>Often low or zero</td>
            <td>Commonly more useful</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical guidance</h2>
      <ul>
        <li>
          Use <code>REV_UP</code> when arrival speed is the main job.
        </li>
        <li>
          Use <code>MAINTAIN</code> when resisting changing load is the main job.
        </li>
        <li>
          Expect the same mechanism to produce different valid gains in each mode. That is normal,
          not a bug.
        </li>
      </ul>
    </>
  );
}
`,In=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Introduction — PID Pilot" },
      {
        name: "description",
        content:
          "PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode,
        and its relay auto-tune measures the mechanism and computes working gains for you — live on
        FTC Dashboard, with no controls background required.
      </p>

      <p>
        It covers the two control problems most FTC mechanisms fall into: <strong>velocity</strong>{" "}
        (flywheels and shooters) and <strong>position</strong> (arms, elevators, slides, turrets, and
        servo-driven axes). Both share the same controller core and the same auto-tune engine, but
        each speaks its own mechanism&apos;s language.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
        <IntroCard
          title="Quick Start"
          desc="Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains."
          to="/docs/quick-start"
          label="Start here"
        />
        <IntroCard
          title="Velocity Tuner"
          desc="Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec."
          to="/docs/velocity/overview"
          label="Velocity docs"
        />
        <IntroCard
          title="Position Tuner"
          desc="Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds."
          to="/docs/position/overview"
          label="Position docs"
        />
      </div>

      <h2>What auto-tune actually does</h2>
      <p>
        Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the{" "}
        <strong>relay method</strong>: it drives the mechanism into a controlled oscillation around
        your target, measures the oscillation (its ultimate gain <code>Ku</code> and period{" "}
        <code>Pu</code>), and applies Ziegler–Nichols formulas to produce working{" "}
        <code>REV_UP</code> and <code>MAINTAIN</code> gains. It runs automatically the first time you
        start the OpMode, for motors and CR servos, on both tuners.
      </p>
      <p>
        You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain,
        band, and timeout live from FTC Dashboard while the mechanism runs.
      </p>

      <h2>How it runs</h2>
      <ol>
        <li>
          Your OpMode extends <code>PIDFTunerOpMode</code> and returns a <code>Config</code> from{" "}
          <code>configureVelocity()</code> or <code>configurePosition()</code>.
        </li>
        <li>
          The runner instantiates the matching tuner and drives the live loop — reading sensors,
          computing control, applying output, and mirroring rich telemetry to the Driver Station and
          Dashboard.
        </li>
        <li>
          On start it auto-tunes (unless you skipped it), then holds the target so you can watch and
          refine.
        </li>
        <li>
          <code>gamepad1.x</code> toggles between <code>REV_UP</code> (fast approach) and{" "}
          <code>MAINTAIN</code> (steady-state hold) live.
        </li>
      </ol>

      <h2>What&apos;s in the library</h2>
      <ul>
        <li>
          <code>PIDFController</code> — the shared control math: derivative-on-measurement,
          anti-windup, and fully exposed term state.
        </li>
        <li>
          <code>PIDFTunerOpMode</code> — the live runner: config refresh every loop, telemetry
          mirroring, and the mode toggle.
        </li>
        <li>
          <code>VelocityPIDFTuner</code> — raw <code>ticks/s</code> control, feedforward
          characterization, relay auto-tune, and disruption recovery.
        </li>
        <li>
          <code>PositionPIDFTuner</code> — motors, CR servos, and standard servos, with relay
          auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds.
        </li>
        <li>
          Ready-to-copy sample OpModes: <code>TuneFlywheelNew</code>, <code>TuneArm</code>, and{" "}
          <code>TuneElevator</code>.
        </li>
      </ul>

      <h2>Suggested reading order</h2>
      <ol>
        <li>
          <Link to="/docs/installation">Installation</Link> then{" "}
          <Link to="/docs/quick-start">Quick Start</Link> to get auto-tune running.
        </li>
        <li>
          <Link to="/docs/concepts/pidf-terms">PIDF Terms</Link> and{" "}
          <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> to understand what the numbers
          mean.
        </li>
        <li>The velocity or position section that matches your mechanism.</li>
        <li>
          <Link to="/docs/reference/telemetry">Telemetry</Link> and{" "}
          <Link to="/docs/troubleshooting">Troubleshooting</Link> when you need to decode real
          behavior.
        </li>
      </ol>

      <blockquote>
        PID Pilot reasons about control; it does not hide bad hardware. It works best when the
        mechanism is already mechanically healthy, with a safe range of motion and consistent
        sensors.
      </blockquote>
    </>
  );
}

function IntroCard({
  title,
  desc,
  to,
  label,
}: {
  title: string;
  desc: string;
  to: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <Link
        to={to}
        className="mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
      >
        {label}
      </Link>
    </div>
  );
}
`,Cn=`import { createFileRoute, Link } from "@tanstack/react-router";
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
        code={\`repositories {
    mavenCentral()
    google()
    maven { url = 'https://maven.brott.dev/' }   // FTC Dashboard
    maven { url = 'https://jitpack.io' }          // PID Pilot
}\`}
      />

      <h2>2. Add the dependencies</h2>
      <p>
        In the same <code>dependencies</code> block, add PID Pilot and (recommended) FTC Dashboard:
      </p>
      <CodeBlock
        language="groovy"
        filename="build.dependencies.gradle"
        code={\`dependencies {
    implementation 'com.github.PIDPilot:ftc:v1.0.4'
    implementation 'com.acmerobotics.dashboard:dashboard:0.6.0'
}\`}
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
        code={\`import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;
import com.pidpilot.ftc.PositionPIDFTuner;\`}
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
`,Rn=`import { createFileRoute, Link } from "@tanstack/react-router";
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
        code={\`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(elevator)
        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay
        .telemetry(telemetry);\`}
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
        code={\`Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING
RelayTune/cyclesCompleted      4/4
RelayTune/amplitudeTicks       23.4
RelayTune/periodSec            0.42
RelayTune/Ku / Pu              0.031 / 0.42
RelayTune/computedMaintainKP   0.61
RelayTune/computedMaintainKI   0.028
RelayTune/computedMaintainKD   0.041
RelayTune/computedRevUpKP      1.02
Diagnostics/relayTuneNote      Relay auto-tune complete.\`}
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
        code={\`// Start from your own known-good gains, no auto-tune:
return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(arm)
        .revUpGains(0.9, 0.0, 0.12, 0.0)
        .maintainGains(0.6, 0.03, 0.08, 0.0)
        .telemetry(telemetry);

// ...or keep the Dashboard defaults and disable the relay entirely:
        .skipRelayTuning()\`}
      />

      <blockquote>
        Next: <Link to="/docs/position/config">Config Reference</Link> for every builder method, or{" "}
        <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> for the relay theory shared by
        both tuners.
      </blockquote>
    </>
  );
}
`,An=`import { Link, createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/config")({
  head: () => ({
    meta: [
      { title: "Position Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for PositionPIDFTuner.Config, covering actuator families, feedback modes, motion profiles, feedforward, bounds, and validation.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Config Reference</h1>
      <p>
        <code>PositionPIDFTuner.Config</code> is the public builder for a position tuning session.
        It lets you select one actuator family, wire an optional feedback source, shape approach
        behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic.
      </p>

      <h2>Required fields</h2>
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
              <code>target(double)</code>
            </td>
            <td>Required target in the same units as the feedback source</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Required telemetry surface for Driver Station and Dashboard</td>
          </tr>
        </tbody>
      </table>

      <h2>Actuator family selection</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>DC motor position control</td>
          </tr>
          <tr>
            <td>
              <code>withServos(Servo...)</code>
            </td>
            <td>Standard servo control</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Single CR servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)</code>
            </td>
            <td>Multiple CR servos with encoder feedback</td>
          </tr>
        </tbody>
      </table>

      <h2>Standard servo feedback and mapping</h2>
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
              <code>withServoFeedback(DcMotorEx)</code>
            </td>
            <td>Closed-loop standard servo with encoder feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)</code>
            </td>
            <td>Closed-loop standard servo with analog feedback</td>
          </tr>
          <tr>
            <td>
              <code>withServoOpenLoopRange(double minTicks, double maxTicks)</code>
            </td>
            <td>Required target-to-servo mapping range for standard servo modes</td>
          </tr>
          <tr>
            <td>
              <code>servoOutputScale(double)</code>
            </td>
            <td>Scale final command for standard or CR servos</td>
          </tr>
        </tbody>
      </table>

      <h2>Mode, gains, and controller shaping</h2>
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
              <code>tuningMode(PIDFTuningMode)</code>
            </td>
            <td>Select initial gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>REV_UP</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Manual <code>MAINTAIN</code> gains
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Cap integral contribution in output space</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering</td>
          </tr>
          <tr>
            <td>
              <code>positionToleranceTicks(double)</code>
            </td>
            <td>Define in-band tolerance for at-target checks</td>
          </tr>
        </tbody>
      </table>

      <h2>Relay auto-tuning</h2>
      <p>
        For <code>MOTOR</code> and <code>CR_SERVO</code> actuators, relay auto-tune runs on start and
        computes both gain sets unless you supply both manually or call <code>skipRelayTuning()</code>.
        See <Link to="/docs/position/auto-tune">Position Auto-Tune</Link>.
      </p>
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
            <td>Disable relay auto-tune and start from the supplied / Dashboard-default gains</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Bang-bang power used to induce the oscillation (default 0.3)</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Switching band as a fraction of |target| (default 0.03)</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale the relay-computed gains — lower is gentler, up to 2.0 (default 1.0)</td>
          </tr>
        </tbody>
      </table>

      <h2>Motion profile and bounds</h2>
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
              <code>useMotionProfile(double maxVelocity, double maxAcceleration)</code>
            </td>
            <td>
              Enable trapezoidal approach shaping in <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>positionBounds(double minTicks, double maxTicks)</code>
            </td>
            <td>Enable hard mechanical limits</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward terms</h2>
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
              <code>feedforwardGravityConstant(double)</code>
            </td>
            <td>Constant gravity bias for vertical systems</td>
          </tr>
          <tr>
            <td>
              <code>feedforwardCosineConstant(double)</code>
            </td>
            <td>Angle-dependent gravity compensation</td>
          </tr>
          <tr>
            <td>
              <code>cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)</code>
            </td>
            <td>Encoder-angle mapping for cosine compensation</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption configuration</h2>
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
              <code>runDisruptionPhase(boolean)</code>
            </td>
            <td>Enable or disable disruption timing</td>
          </tr>
          <tr>
            <td>
              <code>disruptionSamples(int)</code>
            </td>
            <td>Number of recovery samples</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Required stable time before a sample is armed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits to detect a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>How long the tuner waits for recovery</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around target</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Drop threshold that counts as a disturbance</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>Exactly one actuator family must be selected.</li>
        <li>Telemetry must be present.</li>
        <li>Motion-profile limits must be valid when profiling is enabled.</li>
        <li>Position bounds must be valid when bounds are enabled.</li>
        <li>Servo output scale must be nonnegative.</li>
        <li>
          <code>kCos</code> requires a cosine reference.
        </li>
        <li>Standard-servo mapping range must be valid.</li>
        <li>Only one standard-servo feedback source may be chosen.</li>
        <li>Analog feedback scale must be nonzero when analog feedback is used.</li>
        <li>CR servo configurations need feedback encoders and valid counts.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={\`return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .positionToleranceTicks(12.0)
        .runDisruptionPhase(true)
        .telemetry(telemetry);\`}
      />
    </>
  );
}
`,Dn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/disturbance")({
  head: () => ({
    meta: [
      { title: "Position Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner measures hold robustness after a push or load change and when disruption logic is unavailable.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Disruption Sampling</h1>
      <p>
        The position tuner also includes a disruption measurement system. Its purpose is to quantify
        how quickly the mechanism recovers after it is pushed away from target or after a load
        change makes holding harder than the original approach move.
      </p>

      <h2>When the phase is unavailable</h2>
      <p>
        In <code>SERVO_OPEN_LOOP</code>, there is no real feedback controller, so disruption
        sampling is not meaningful and the framework disables it.
      </p>

      <h2>Disruption stages</h2>
      <ul>
        <li>
          <code>WAITING</code>
        </li>
        <li>
          <code>ARMED</code>
        </li>
        <li>
          <code>DETECTING</code>
        </li>
        <li>
          <code>RECOVERING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <h2>What it measures</h2>
      <ol>
        <li>Hold the mechanism near target until position is stably in band.</li>
        <li>Detect a meaningful deviation or load event.</li>
        <li>Measure the peak drop away from target.</li>
        <li>Measure recovery time back into the ready band.</li>
        <li>Repeat until the configured number of samples is collected.</li>
      </ol>

      <h2>Why it matters</h2>
      <p>
        Arms, elevators, and slides often fail the real game task not because they cannot reach the
        target once, but because they cannot stay there cleanly under changing load. Disruption
        telemetry lets the team quantify that instead of relying on intuition.
      </p>

      <h2>Key configuration methods</h2>
      <ul>
        <li>
          <code>runDisruptionPhase(boolean)</code>
        </li>
        <li>
          <code>disruptionSamples(int)</code>
        </li>
        <li>
          <code>disruptionReadyStableMs(long)</code>
        </li>
        <li>
          <code>disruptionDetectTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionRecoveryTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionReadyBandPct(double)</code>
        </li>
        <li>
          <code>disruptionDropThresholdPct(double)</code>
        </li>
      </ul>
    </>
  );
}
`,Mn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/hold-f")({
  head: () => ({
    meta: [
      { title: "Position Actuator & Feedback Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner supports motors, CR servos, standard servos, and multiple feedback sources.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Actuator &amp; Feedback Modes</h1>
      <p>
        The position tuner is effectively a multi-backend position-control framework. The actuator
        family determines how commands are written, how measurements are read, and whether a true
        closed-loop position controller exists at all.
      </p>

      <h2>Actuator modes</h2>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>MOTOR</code>
            </td>
            <td>DC motor position control using encoder feedback and power output</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_OPEN_LOOP</code>
            </td>
            <td>Direct target-to-servo-position mapping with no PID correction</td>
          </tr>
          <tr>
            <td>
              <code>SERVO_WITH_EXTERNAL_ENCODER</code>
            </td>
            <td>Standard servo with external feedback and PID correction layered on top</td>
          </tr>
          <tr>
            <td>
              <code>CR_SERVO</code>
            </td>
            <td>Continuous-rotation servo driven from encoder feedback and scaled power output</td>
          </tr>
        </tbody>
      </table>

      <h2>Feedback modes for standard servos</h2>
      <ul>
        <li>
          <code>NONE</code> for open-loop mapping only
        </li>
        <li>
          <code>MOTOR_ENCODER</code> when an external encoder motor supplies position
        </li>
        <li>
          <code>ANALOG_INPUT</code> when an analog sensor provides the feedback signal
        </li>
      </ul>

      <h2>Standard servo open-loop behavior</h2>
      <p>
        Open-loop standard servo mode is intentionally simple. There is no PID correction and no
        disruption logic. The target is mapped directly into servo position space, and the tuner
        forces <code>isAtTarget()</code> to report true because there is no real feedback loop to
        qualify.
      </p>

      <h2>Standard servo closed-loop behavior</h2>
      <p>
        Closed-loop standard servo mode blends a direct servo-position mapping with an external PID
        correction. The tuner maps the requested target to a base servo position, computes a
        correction in normalized position space, adds feedforward, and clamps the final command back
        into <code>[0.0, 1.0]</code>.
      </p>

      <h2>CR servo behavior</h2>
      <p>
        CR servos behave more like motors: the tuner uses encoder feedback to estimate position and
        writes scaled power through <code>servoOutputScale</code>. This lets the framework keep one
        consistent tuning model while still respecting how the actuator is commanded physically.
      </p>

      <h2>Why this abstraction matters</h2>
      <p>
        Teams do not need separate tuning frameworks for every actuator family. They need one
        framework that changes its hardware semantics without changing its overall workflow:
        configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the
        right reasons.
      </p>
    </>
  );
}
`,_n=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/ku-search")({
  head: () => ({
    meta: [
      { title: "Position Motion Profile & Feedforward — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner uses move normalization, optional trapezoidal motion profiles, and layered feedforward terms.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Motion Profile &amp; Feedforward</h1>
      <p>
        Position tuning is not only “PID plus position.” The framework shapes approach behavior with
        optional trapezoidal profiling and separates different baseline-effort terms so the operator
        can reason about them honestly.
      </p>

      <h2>Move normalization</h2>
      <p>
        The tuner scales target and measurement by <code>moveScaleTicks</code>, which is based on
        actual move distance together with a tolerance floor. This keeps small moves from feeling
        hyper-aggressive while still letting long moves use the same overall gain family.
      </p>

      <h2>Motion profiling</h2>
      <p>
        In <code>REV_UP</code>, the tuner can replace an instantaneous step with a trapezoidal
        profile. That is enabled through:
      </p>

      <CodeBlock language="java" code={\`useMotionProfile(maxVelocity, maxAcceleration)\`} />

      <p>
        If profiling is disabled, the profiled target simply equals the requested target. If it is
        enabled, the tuner computes a position, velocity, and acceleration trajectory each loop.
      </p>

      <h2>Feedforward pieces</h2>
      <ul>
        <li>
          <strong>
            Static trim from <code>kF</code>
          </strong>{" "}
          helps break friction or stiction.
        </li>
        <li>
          <strong>
            Constant gravity term from <code>kG</code>
          </strong>{" "}
          helps elevators and vertical slides.
        </li>
        <li>
          <strong>
            Cosine compensation from <code>kCos</code>
          </strong>{" "}
          helps arms or joints with changing gravity torque.
        </li>
      </ul>

      <h2>Static trim is not velocity feedforward</h2>
      <p>
        In the position tuner, <code>kF</code> is applied as a sign-aware static trim term. It is
        intentionally not the same concept as the velocity tuner’s physical feedforward. Treating
        them as interchangeable is one of the fastest ways to confuse a tuning session.
      </p>

      <h2>Cosine compensation</h2>
      <p>Cosine feedforward uses an encoder-angle mapping and computes:</p>

      <CodeBlock language="text" code={\`kCos * cos((position - zeroTicks) / ticksPerRadian)\`} />

      <p>
        That is why <code>cosineFeedforwardReference(zeroTicks, ticksPerRadian)</code> is required
        whenever <code>kCos</code> is nonzero.
      </p>

      <h2>When each term is most useful</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Typical mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>kF</code>
            </td>
            <td>Any mechanism with noticeable static friction or breakaway effort</td>
          </tr>
          <tr>
            <td>
              <code>kG</code>
            </td>
            <td>Elevators and vertical slides</td>
          </tr>
          <tr>
            <td>
              <code>kCos</code>
            </td>
            <td>Arms, joints, or mechanisms with angle-dependent gravity torque</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
`,Fn=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/position/overview")({
  head: () => ({
    meta: [
      { title: "Position Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of PositionPIDFTuner, including actuator families, normalized control, motion profiles, feedforward, and bounds.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Position Tuner</h1>
      <p>
        <code>PositionPIDFTuner</code> tunes anything driven to a target position — arms, elevators,
        slides, and turrets. For motors and CR servos it{" "}
        <Link to="/docs/position/auto-tune">auto-tunes on start</Link> via the relay method, the same
        one-button flow as the velocity tuner. It also supports standard servos (open-loop, or
        closed-loop with external encoder / analog feedback), which are tuned by hand.
      </p>

      <blockquote>
        New here? Go straight to <Link to="/docs/position/auto-tune">Position Auto-Tune</Link> —
        bind a motor, set a target, press start. Everything below is the machinery behind it.
      </blockquote>

      <h2>What makes it different from the velocity tuner</h2>
      <ul>
        <li>It supports multiple actuator and feedback backends.</li>
        <li>It normalizes position internally by move scale.</li>
        <li>
          It can use trapezoidal motion profiles in <code>REV_UP</code>.
        </li>
        <li>It separates static trim, gravity constant, and cosine compensation.</li>
        <li>It can clamp targets and suppress outward command at hard stops.</li>
      </ul>

      <h2>Major subsystems</h2>
      <ol>
        <li>Actuator-family abstraction</li>
        <li>Feedback-source abstraction</li>
        <li>Position normalization</li>
        <li>Optional motion profiling</li>
        <li>Static, gravity, and cosine feedforward</li>
        <li>Hard position constraints</li>
        <li>At-target qualification</li>
        <li>Disruption testing</li>
      </ol>

      <h2>Why position is normalized</h2>
      <p>
        The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a
        tiny trim move and a long travel move would feel like unrelated controllers unless gains
        were changed constantly. The move scale keeps small moves from becoming twitchy while still
        preserving meaningful units elsewhere in the system.
      </p>

      <h2>What page to read next</h2>
      <ul>
        <li>
          <Link to="/docs/position/auto-tune">Auto-Tune (Relay)</Link> to let it find your gains —
          the fastest path to a working mechanism.
        </li>
        <li>
          <Link to="/docs/position/hold-f">Actuator &amp; Feedback Modes</Link> if you are choosing
          how the tuner should read and command the mechanism.
        </li>
        <li>
          <Link to="/docs/position/ku-search">Motion Profile &amp; Feedforward</Link> if your main
          question is how the position model is shaped.
        </li>
        <li>
          <Link to="/docs/position/refinement">Bounds &amp; Control Flow</Link> if you need to
          understand safety and loop behavior.
        </li>
      </ul>
    </>
  );
}
`,Nn=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/refinement")({
  head: () => ({
    meta: [
      { title: "Position Bounds & Control Flow — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner applies bounds, qualifies at-target state, and executes its closed-loop update path.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Bounds &amp; Control Flow</h1>
      <p>
        The position tuner’s control loop includes more than PID and feedforward. It has to manage
        actuator-specific writes, target clamping, at-target qualification, and protection against
        continued outward drive at hard stops.
      </p>

      <h2>Closed-loop update flow</h2>
      <CodeBlock
        language="text"
        code={\`handle SERVO_OPEN_LOOP separately if needed
read feedback position
update motion profile
apply active gains
normalize target and measurement
compute PID output
compute feedforward
apply actuator-specific output
update at-target counter
update disruption phase
push telemetry\`}
      />

      <h2>Hard position constraints</h2>
      <p>
        <code>positionBounds(minTicks, maxTicks)</code> does two jobs. First, it clamps the
        requested target into a safe range. Second, if the mechanism is already at a hard limit, it
        suppresses any additional outward command so the controller does not keep pushing into the
        stop.
      </p>

      <h2>Why target clamping alone is not enough</h2>
      <p>
        If the actuator is already against a hard stop, a controller can still compute an outward
        command even when the requested target was clamped. The framework explicitly blocks that
        behavior because otherwise the mechanism can keep loading the stop and damage itself.
      </p>

      <h2>At-target qualification</h2>
      <p>
        The tuner does not declare victory from one lucky loop. It requires several consecutive
        in-band loops before <code>isAtTarget()</code> becomes true:
      </p>

      <CodeBlock language="text" code={\`REQUIRED_AT_TARGET_LOOPS = 5\`} />

      <p>
        This reduces false success caused by noise, backlash, or a transient crossing through the
        tolerance band.
      </p>

      <h2>Telemetry that matters here</h2>
      <ul>
        <li>Requested target versus clamped target</li>
        <li>Profiled target, velocity, and acceleration</li>
        <li>Measured position and actuator command</li>
        <li>Constraint status and current bound values</li>
        <li>At-target qualification state</li>
      </ul>

      <blockquote>
        When a position session looks unsafe, check bounds and actuator selection before you touch
        gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem.
      </blockquote>
    </>
  );
}
`,En=`import { createFileRoute, Link } from "@tanstack/react-router";
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
        code={\`package org.firstinspires.ftc.teamcode;

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
}\`}
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
        code={\`RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING\`}
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
`,Sn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PID Pilot" },
      {
        name: "description",
        content:
          "Frequently asked questions about PID Pilot’s tuning modes, feedforward semantics, motor ownership, and supported actuator workflows.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>FAQ</h1>

      <h2>Why are my REV_UP and MAINTAIN gains different?</h2>
      <p>
        Because the framework treats them as different controller personalities. <code>REV_UP</code>{" "}
        prioritizes getting there quickly. <code>MAINTAIN</code> prioritizes holding near target and
        recovering from disturbance. Different valid gains for the same mechanism are expected.
      </p>

      <h2>Why does the velocity tuner use raw ticks per second?</h2>
      <p>
        So gain values and feedforward stay physically interpretable. The numbers may look small,
        but they describe real units rather than a hidden normalization scheme.
      </p>

      <h2>Why does position kF feel different from velocity kF?</h2>
      <p>
        Because they are different concepts. Velocity <code>kF</code> is baseline effort per{" "}
        <code>ticks/s</code>. Position <code>kF</code> is a static trim or friction-help term.
      </p>

      <h2>Why does the tuner keep forcing RUN_WITHOUT_ENCODER?</h2>
      <p>
        To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner
        must own motor power control if its math is going to mean what the telemetry says it means.
      </p>

      <h2>Can I skip characterization or relay tuning?</h2>
      <p>
        Yes. Use <code>skipCharacterization(manualKF)</code> when you already trust a physical
        feedforward, and <code>skipRelayTuning()</code> when you are supplying manual gain families
        or want to bypass automatic gain estimation.
      </p>

      <h2>Why is disruption unavailable in some position sessions?</h2>
      <p>
        Because disruption logic is only meaningful when there is real feedback control. In standard
        servo open-loop mode, the tuner is only mapping target to servo position, so there is no
        closed-loop hold behavior to evaluate.
      </p>

      <h2>Do I always need position bounds?</h2>
      <p>
        If the mechanism has hard end stops, yes. Bounds are not only for clamping requested
        targets; they also prevent the controller from continuing to push outward once the mechanism
        is already at a limit.
      </p>

      <h2>Can I use PID Pilot with custom hardware arrangements?</h2>
      <p>
        Usually yes, as long as you can represent the mechanism with one supported actuator family
        and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied
        blindly.
      </p>

      <h2>When should I re-run a tune?</h2>
      <p>
        Re-run when the physics change: different gearing, repaired mechanism, new motor, changed
        wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to
        the actual mechanism, not to the codebase in the abstract.
      </p>
    </>
  );
}
`,On=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/practical-notes")({
  head: () => ({
    meta: [
      { title: "Workflows & Caveats — PID Pilot" },
      {
        name: "description",
        content:
          "Practical engineering workflows, tuner differences, extension points, and real-world caveats for PID Pilot.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Workflows &amp; Caveats</h1>
      <p>
        This page condenses the practical parts of the README that matter once the framework is
        already installed: how teams typically use each tuner, how the two tuners differ, where the
        framework is meant to be extended, and what assumptions still need engineering judgment.
      </p>

      <h2>Typical velocity workflow</h2>
      <ol>
        <li>
          Start from <code>TuneFlywheelNew</code> or an equivalent velocity OpMode.
        </li>
        <li>Set a believable target speed.</li>
        <li>
          Let characterization compute a physical <code>kF</code> unless you already trust one.
        </li>
        <li>Let relay auto-tuning derive starting gain families when appropriate.</li>
        <li>
          Compare <code>REV_UP</code> and <code>MAINTAIN</code> against the mechanism’s real job.
        </li>
        <li>Use disruption sampling if the wheel must survive repeated load events.</li>
      </ol>

      <h2>Typical position workflow</h2>
      <ol>
        <li>Pick the correct actuator family and feedback source first.</li>
        <li>Make sure target units are meaningful and consistent.</li>
        <li>Set tolerance and hard bounds early.</li>
        <li>Add gravity or cosine compensation if the mechanism physics need it.</li>
        <li>Enable motion profiling if instantaneous steps are too violent.</li>
        <li>
          Tune approach behavior with <code>REV_UP</code> and hold behavior with{" "}
          <code>MAINTAIN</code>.
        </li>
      </ol>

      <h2>Important differences between the tuners</h2>
      <ul>
        <li>
          Velocity uses raw <code>ticks/s</code>; position uses normalized move scaling internally.
        </li>
        <li>
          Velocity has characterization and relay auto-tuning; position focuses on actuator and
          feedforward modeling.
        </li>
        <li>
          Velocity <code>kF</code> is physical feedforward; position <code>kF</code> is static trim.
        </li>
        <li>Position supports motors and servos; velocity is motor-oriented.</li>
        <li>
          Position can enforce hard bounds; velocity focuses more on motor-mode ownership and
          headroom sanity.
        </li>
      </ul>

      <h2>Common extension points</h2>
      <ul>
        <li>Config builder surfaces</li>
        <li>Telemetry keys and status blocks</li>
        <li>Sample OpModes</li>
        <li>Relay formulas or acceptance logic</li>
        <li>Motion-profile shape</li>
        <li>Final summary formatting or export helpers</li>
      </ul>

      <h2>Practical caveats</h2>
      <ul>
        <li>The velocity tuner expects to own motor power control completely.</li>
        <li>
          The velocity tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>.
        </li>
        <li>
          A nonzero position <code>kF</code> is not the same concept as velocity <code>kF</code>.
        </li>
        <li>
          Standard-servo closed-loop quality depends heavily on the quality of external feedback.
        </li>
        <li>
          Motion profiling only affects <code>REV_UP</code> in the position tuner.
        </li>
        <li>Disruption phases are meaningful only when real feedback exists.</li>
        <li>Dashboard defaults are starting points, not guarantees.</li>
      </ul>

      <blockquote>
        PID Pilot makes live control work easier to reason about. It does not replace mechanical
        quality, safe targets, or the need to compare tuner behavior against the real match task.
      </blockquote>
    </>
  );
}
`,Ln=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/setup-rules")({
  head: () => ({
    meta: [
      { title: "Setup Rules — PID Pilot" },
      {
        name: "description",
        content:
          "Hard setup rules for using PID Pilot safely and in ways that match the framework’s control model.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Setup Rules</h1>
      <p>
        These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad
        session for reasons that look like tuning trouble but are really setup trouble.
      </p>

      <h2>Override only one configure method</h2>
      <p>
        A tuning OpMode must override exactly one of <code>configureVelocity()</code> or{" "}
        <code>configurePosition()</code>. The base runner expects a single active control family.
      </p>

      <h2>Remember that config refreshes every loop</h2>
      <p>
        Any hardware assumptions you make inside the configure method need to remain compatible with
        the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the
        OpMode is not a one-time constructor.
      </p>

      <h2>Let the velocity tuner own motor mode</h2>
      <p>
        The velocity tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Do not rely on the SDK’s internal velocity mode to “help”
        it. That produces two loops fighting the same mechanism.
      </p>

      <h2>Choose exactly one position actuator family</h2>
      <p>
        For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed
        or ambiguous actuator selection is a configuration error, not an advanced feature.
      </p>

      <h2>Use meaningful units and safe bounds</h2>
      <ul>
        <li>Targets should be in the same units as the feedback source.</li>
        <li>
          Position mechanisms with hard stops should use <code>positionBounds(...)</code>.
        </li>
        <li>Standard servo modes need a valid open-loop mapping range.</li>
      </ul>

      <h2>Do not treat position kF like velocity kF</h2>
      <p>
        Velocity <code>kF</code> is physical feedforward. Position <code>kF</code> is static trim.
        If you use one concept as though it were the other, the rest of the tuning session becomes
        hard to interpret.
      </p>

      <h2>Supply telemetry and watch it live</h2>
      <p>
        Always pass <code>telemetry(telemetry)</code>. PID Pilot is designed around rich telemetry
        surfaces. Running blind removes one of the framework’s strongest advantages.
      </p>

      <h2>Use conservative first targets</h2>
      <p>
        The first run should prove the control path, not challenge the mechanism at its absolute
        limit. Ask for targets the mechanism can really reach and hold before you start raising
        ambition.
      </p>
    </>
  );
}
`,Bn=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/reference/telemetry")({
  head: () => ({
    meta: [
      { title: "Telemetry & Final Summary — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses telemetry as a diagnostic surface across the base runner, controller core, velocity tuner, and position tuner.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Telemetry &amp; Final Summary</h1>
      <p>
        Telemetry is one of the central design features of PID Pilot. The framework mirrors output
        to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough
        internal state that a team can tell whether it is looking at bad feedforward, bad damping,
        integral windup, poor bounds, or a mechanism limitation.
      </p>

      <h2>Base runner behavior</h2>
      <p>
        <code>PIDFTunerOpMode</code> mirrors telemetry to both surfaces and uses reflection to avoid
        a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is
        unavailable, but the richer live workflow remains available when it is connected.
      </p>

      <h2>Controller-core internals</h2>
      <p>
        Because <code>PIDFController</code> stores term contributions and measurement derivatives
        directly, the tuners can publish controller internals without duplicating the math.
      </p>

      <ul>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, <code>fTerm</code>
        </li>
        <li>Raw and filtered measurement-rate estimates</li>
        <li>Last output, error, and error rate</li>
      </ul>

      <h2>Velocity tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={\`mode                 MAINTAIN
phase                RUNNING
target velocity      ...
measured velocity    ...
error                ...
pTerm / iTerm / dTerm / fTerm
characterized kF     ...
relay Ku / Pu        ...
warnings             ...
disruption recovery  ...\`}
      />

      <p>
        Velocity sessions can also expose characterization data, relay auto-tune metrics,
        feedforward routing notes, disruption timing, and copyable final gains.
      </p>

      <h2>Position tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={\`mode                 REV_UP
requested target     ...
clamped target       ...
profiled target      ...
profile velocity     ...
measured position    ...
actuator mode        ...
feedback mode        ...
pTerm / iTerm / dTerm / fTerm
gravity / cosine ff  ...
constraint status    ...
disruption stage     ...\`}
      />

      <p>
        Position sessions add actuator-family and feedback-mode context, target clamping state,
        profile state, and feedforward breakdown because those things are often as important as the
        gains themselves.
      </p>

      <h2>Final summary</h2>
      <p>
        At the end of a session, the tuner keeps a copyable summary on screen. The exact contents
        depend on the control family, but the summary is supposed to capture both the values you
        might copy and the reason those values were trustworthy.
      </p>

      <ul>
        <li>Active tuning mode and gain family</li>
        <li>Final gain values</li>
        <li>Characterized or resolved feedforward notes</li>
        <li>Relay results if relay tuning ran</li>
        <li>Disruption summary if disruption sampling ran</li>
      </ul>

      <blockquote>
        The best use of telemetry is comparative: if you change a feedforward term, a bound, or a
        target and the trace suddenly makes more physical sense, you learned something about the
        mechanism before you ever copied a new number.
      </blockquote>
    </>
  );
}
`,jn=`import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/templates")({
  head: () => ({
    meta: [
      { title: "Sample OpModes — PID Pilot" },
      {
        name: "description",
        content:
          "Ready-to-copy velocity, arm, and elevator tuning OpModes for PID Pilot, using relay auto-tune by default.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Sample OpModes</h1>
      <p>
        The library ships three reference OpModes you can copy into TeamCode and adapt. None of them
        supply gains — each one relies on relay auto-tune, so the pattern to copy is &ldquo;bind
        hardware, set a target, press start.&rdquo; Change the hardware names and targets to match
        your robot.
      </p>

      <h2>TuneFlywheel — velocity</h2>
      <p>
        A two-motor shooter. Note two things: hardware is cached on the first{" "}
        <code>configureVelocity()</code> call (the method runs every loop), and the feeder motors are
        only powered <strong>after</strong> <code>isStarted()</code> — never during INIT.{" "}
        <code>averageAbsoluteVelocity(true)</code> handles wheels that spin in opposite directions.
      </p>
      <CodeBlock
        filename="TuneFlywheel.java"
        language="java"
        code={\`private DcMotorEx intake, transfer, left, right;
private boolean feederStarted;

@Override
protected VelocityPIDFTuner.Config configureVelocity() {
    if (left == null) {
        intake   = hardwareMap.get(DcMotorEx.class, "intake");
        transfer = hardwareMap.get(DcMotorEx.class, "transfer");
        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);
    }
    // Only spin the feeder once the match has actually started.
    if (!feederStarted && isStarted()) {
        intake.setPower(1);
        transfer.setPower(1);
        feederStarted = true;
    }
    return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .withMotors(left, right)
            .averageAbsoluteVelocity(true)
            .runDisruptionPhase(true)
            .disruptionSamples(5)
            .telemetry(telemetry);
}\`}
      />

      <h2>TuneArm — position with cosine feedforward</h2>
      <p>
        An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from
        an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while
        it does. Motion profiling smooths large REV_UP moves.
      </p>
      <CodeBlock
        filename="TuneArm.java"
        language="java"
        code={\`private DcMotorEx arm;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (arm == null) {
        arm = hardwareMap.get(DcMotorEx.class, "arm");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotors(arm)
            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)
            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
            .telemetry(telemetry);
}\`}
      />

      <h2>TuneElevator — position with constant gravity</h2>
      <p>
        A vertical lift needs the same hold force at every height, so it uses a single constant
        gravity feedforward instead of the arm&apos;s cosine geometry. This is the simplest position
        example.
      </p>
      <CodeBlock
        filename="TuneElevator.java"
        language="java"
        code={\`private DcMotorEx elevator;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (elevator == null) {
        elevator = hardwareMap.get(DcMotorEx.class, "elevator");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotors(elevator)
            .feedforwardGravityConstant(ELEVATOR_KG)
            .telemetry(telemetry);
}\`}
      />

      <h2>What the samples teach</h2>
      <ul>
        <li>Cache hardware once — <code>configure*()</code> runs every loop.</li>
        <li>Never power auxiliary motors during INIT; gate them on <code>isStarted()</code>.</li>
        <li>
          Pick the sample by mechanism <em>physics</em> (constant vs angle-dependent gravity), not
          just motor count.
        </li>
        <li>
          Feedforward (<code>kG</code>, <code>kCos</code>) is your job; kP/kI/kD are auto-tune&apos;s
          job.
        </li>
      </ul>

      <h2>Adapting them</h2>
      <ol>
        <li>Replace hardware names and motor directions first.</li>
        <li>Set a safe, reachable target.</li>
        <li>
          Add feedforward and, for fragile mechanisms, <code>positionBounds(min, max)</code> before
          you run.
        </li>
        <li>Keep the OpMode structure intact so the live runner works as designed.</li>
      </ol>

      <blockquote>
        For the full builder surface, use the{" "}
        <Link to="/docs/velocity/config">Velocity</Link> and{" "}
        <Link to="/docs/position/config">Position</Link> config references rather than guessing
        method names.
      </blockquote>
    </>
  );
}
`,Vn=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — PID Pilot" },
      {
        name: "description",
        content:
          "Troubleshoot common PID Pilot issues in velocity and position sessions using the framework’s real diagnostics and caveats.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Troubleshooting</h1>
      <p>
        When a PID Pilot session goes wrong, the fastest path forward is usually to identify which
        framework assumption is being violated. This page maps common symptoms to the most likely
        setup or control-model problem and points you to the next page worth reading.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
        <SymptomCard
          title="Velocity cannot reach target or warnings mention headroom"
          desc="The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output."
          causes={[
            "Target speed is unrealistic for the current mechanism and battery state.",
            "The physical kF source is wrong or never established cleanly.",
            "The loop is spending too much output on proportional correction because the baseline effort was never covered.",
          ]}
          links={[
            { label: "Velocity Overview", to: "/docs/velocity/overview" },
            { label: "Characterization", to: "/docs/velocity/f-sweep" },
            { label: "Running Control", to: "/docs/velocity/refinement" },
          ]}
        />

        <SymptomCard
          title="Velocity behavior looks like two controllers are fighting"
          desc="Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story."
          causes={[
            "Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.",
            "User code is reasserting a conflicting hardware mode inside configureVelocity().",
            "The tuner is not being allowed to own raw power control.",
          ]}
          links={[
            { label: "Setup Rules", to: "/docs/reference/setup-rules" },
            { label: "Velocity Overview", to: "/docs/velocity/overview" },
            { label: "Telemetry", to: "/docs/reference/telemetry" },
          ]}
        />

        <SymptomCard
          title="Position mechanism reaches target once but holds badly"
          desc="An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load."
          causes={[
            "Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.",
            "You are reading the wrong feedback source or using inconsistent units.",
            "The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP.",
          ]}
          links={[
            { label: "Position Overview", to: "/docs/position/overview" },
            { label: "Motion & Feedforward", to: "/docs/position/ku-search" },
            { label: "Disruption", to: "/docs/position/disturbance" },
          ]}
        />

        <SymptomCard
          title="Position mechanism pushes into a stop or clamps unexpectedly"
          desc="The requested target and measured motion do not agree, or the controller appears to fight a hard limit."
          causes={[
            "Bounds are missing, wrong, or defined in inconsistent units.",
            "The actuator family or servo mapping range is incorrect.",
            "Constraint status is telling you something real that you are not reading yet.",
          ]}
          links={[
            { label: "Bounds & Control Flow", to: "/docs/position/refinement" },
            { label: "Setup Rules", to: "/docs/reference/setup-rules" },
            { label: "Telemetry", to: "/docs/reference/telemetry" },
          ]}
        />
      </div>

      <h2>First checks before changing gains</h2>
      <ul>
        <li>
          Confirm the mechanism is physically healthy and can move safely through the intended
          range.
        </li>
        <li>
          Verify hardware names, motor directions, encoder directions, and target sign conventions.
        </li>
        <li>Choose a target the mechanism can realistically reach and hold.</li>
        <li>Read the telemetry notes and warnings instead of only the final gain values.</li>
        <li>Confirm that the selected control family matches the actual mechanism job.</li>
      </ul>

      <h2>When to stop the session immediately</h2>
      <ul>
        <li>The mechanism is driving into a hard stop.</li>
        <li>The velocity loop is clearly fighting a motor-mode conflict.</li>
        <li>The feedback signal is obviously wrong or discontinuous.</li>
        <li>The mechanism is outside a safe physical range for live testing.</li>
      </ul>

      <h2>Best next pages</h2>
      <ul>
        <li>
          <Link to="/docs/reference/telemetry">Telemetry &amp; Final Summary</Link> when the raw
          numbers need interpretation.
        </li>
        <li>
          <Link to="/docs/reference/practical-notes">Workflows &amp; Caveats</Link> when the session
          looks “legal” but still not useful.
        </li>
        <li>
          <Link to="/docs/reference/faq">FAQ</Link> when the issue is really about the framework’s
          intended semantics.
        </li>
      </ul>

      <blockquote>
        If the telemetry story and the mechanism physics disagree, trust the physics first and use
        the telemetry to figure out which framework assumption broke.
      </blockquote>
    </>
  );
}

function SymptomCard({
  title,
  desc,
  causes,
  links,
}: {
  title: string;
  desc: string;
  causes: string[];
  links: { label: string; to: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Likely Causes
      </p>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {causes.map((cause) => (
          <li key={cause}>{cause}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
`,qn=`import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/DocsLayout";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});
`,zn=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/config")({
  head: () => ({
    meta: [
      { title: "Velocity Config Reference — PID Pilot" },
      {
        name: "description",
        content:
          "Reference for VelocityPIDFTuner.Config, including feedforward sources, relay tuning, disruption settings, and validation rules.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Config Reference</h1>
      <p>
        <code>VelocityPIDFTuner.Config</code> is the public API for constructing a velocity tuning
        session. The builder is organized around target selection, motor binding, gain families,
        feedforward sourcing, relay behavior, and disruption measurement.
      </p>

      <h2>Required fields</h2>
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
              <code>target(double)</code>
            </td>
            <td>
              Required target velocity in <code>ticks/s</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>Bind one or more velocity motors controlled together</td>
          </tr>
          <tr>
            <td>
              <code>telemetry(Telemetry)</code>
            </td>
            <td>Supply telemetry for Driver Station and Dashboard mirroring</td>
          </tr>
        </tbody>
      </table>

      <h2>Motor binding</h2>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>withMotors(DcMotorEx...)</code>
            </td>
            <td>
              Bind one or more motors driven together. The tuner forces{" "}
              <code>RUN_WITHOUT_ENCODER</code> so its outer loop owns control.
            </td>
          </tr>
          <tr>
            <td>
              <code>averageAbsoluteVelocity(boolean)</code>
            </td>
            <td>
              Average <code>|velocity|</code> instead of signed velocity — use when paired wheels
              spin in opposite directions.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mode and gain families</h2>
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
              <code>tuningMode(PIDFTuningMode)</code>
            </td>
            <td>Choose the initial active gain family</td>
          </tr>
          <tr>
            <td>
              <code>revUpGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>REV_UP</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>maintainGains(kP, kI, kD, kF)</code>
            </td>
            <td>
              Provide manual gains for <code>MAINTAIN</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Feedforward and characterization</h2>
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
              <code>skipCharacterization(double manualKF)</code>
            </td>
            <td>
              Skip startup characterization and force a physical <code>kF</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>integralSumMax(double)</code>
            </td>
            <td>Override anti-windup if you do not want headroom-derived limits</td>
          </tr>
          <tr>
            <td>
              <code>derivativeAlpha(double)</code>
            </td>
            <td>Tune derivative filtering in the shared controller core</td>
          </tr>
          <tr>
            <td>
              <code>velocityRampTicksPerSecPerSec(double)</code>
            </td>
            <td>Slew-limit target changes during running control</td>
          </tr>
        </tbody>
      </table>

      <h2>Relay auto-tuning</h2>
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
            <td>Bypass relay auto-tuning completely</td>
          </tr>
          <tr>
            <td>
              <code>relayAmplitude(double)</code>
            </td>
            <td>Set relay strength</td>
          </tr>
          <tr>
            <td>
              <code>relayHysteresisBandPct(double)</code>
            </td>
            <td>Set relay deadband as a fraction of target</td>
          </tr>
          <tr>
            <td>
              <code>relayDetune(double)</code>
            </td>
            <td>Scale relay-computed gains conservatively</td>
          </tr>
        </tbody>
      </table>

      <h2>Disruption sampling</h2>
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
              <code>runDisruptionPhase(boolean)</code>
            </td>
            <td>Enable or disable disruption timing</td>
          </tr>
          <tr>
            <td>
              <code>disruptionSamples(int)</code>
            </td>
            <td>Number of recovery samples to collect</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyStableMs(long)</code>
            </td>
            <td>Stable time required before arming a sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDetectTimeoutMs(long)</code>
            </td>
            <td>Maximum wait before the sample is considered missed</td>
          </tr>
          <tr>
            <td>
              <code>disruptionRecoveryTimeoutMs(long)</code>
            </td>
            <td>Maximum recovery wait per sample</td>
          </tr>
          <tr>
            <td>
              <code>disruptionReadyBandPct(double)</code>
            </td>
            <td>Ready band around the target velocity</td>
          </tr>
          <tr>
            <td>
              <code>disruptionDropThresholdPct(double)</code>
            </td>
            <td>Velocity drop required to count as a disturbance</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineIterations(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
          <tr>
            <td>
              <code>realDisruptionRefineSamples(int)</code>
            </td>
            <td>Reserved placeholder for future expansion</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation rules</h2>
      <ul>
        <li>Target must be present.</li>
        <li>At least one motor must be supplied.</li>
        <li>Telemetry must be present.</li>
      </ul>

      <h2>Example session</h2>
      <CodeBlock
        language="java"
        code={\`return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(left, right)
        .averageAbsoluteVelocity(true)
        .relayAmplitude(0.12)
        .relayHysteresisBandPct(0.04)
        .velocityRampTicksPerSecPerSec(6000.0)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);\`}
      />
    </>
  );
}
`,Wn=`import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/velocity/disruption")({
  head: () => ({
    meta: [
      { title: "Velocity Disruption Sampling — PID Pilot" },
      {
        name: "description",
        content:
          "How the velocity tuner measures disturbance recovery when MAINTAIN behavior matters more than raw spin-up.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Disruption Sampling</h1>
      <p>
        The velocity tuner includes a second state machine dedicated to measuring recovery after a
        real disturbance. This matters because a flywheel that looks good on a clean step response
        can still perform badly once game pieces start loading it.
      </p>

      <h2>Disruption stages</h2>
      <ul>
        <li>
          <code>WAITING</code>
        </li>
        <li>
          <code>ARMED</code>
        </li>
        <li>
          <code>DETECTING</code>
        </li>
        <li>
          <code>RECOVERING</code>
        </li>
        <li>
          <code>COMPLETE</code>
        </li>
      </ul>

      <h2>What the phase measures</h2>
      <ol>
        <li>Wait for the mechanism to be stably near target.</li>
        <li>Detect or apply a disturbance depending on the configured workflow.</li>
        <li>Measure how far velocity drops.</li>
        <li>Measure how long it takes to recover into the ready band.</li>
        <li>Repeat until the requested number of samples is collected.</li>
      </ol>

      <h2>Configuration knobs</h2>
      <ul>
        <li>
          <code>runDisruptionPhase(boolean)</code>
        </li>
        <li>
          <code>disruptionSamples(int)</code>
        </li>
        <li>
          <code>disruptionReadyStableMs(long)</code>
        </li>
        <li>
          <code>disruptionDetectTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionRecoveryTimeoutMs(long)</code>
        </li>
        <li>
          <code>disruptionReadyBandPct(double)</code>
        </li>
        <li>
          <code>disruptionDropThresholdPct(double)</code>
        </li>
      </ul>

      <h2>Why it belongs in MAINTAIN</h2>
      <p>
        <code>MAINTAIN</code> is the controller personality you care about once the mechanism is
        already near target and outside forces start pushing it around. Disruption telemetry is the
        framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole
        story.
      </p>

      <h2>What shows up in telemetry</h2>
      <ul>
        <li>Recovery timing</li>
        <li>Drop magnitude</li>
        <li>Sample counts and completion status</li>
        <li>Instructional notes about when the mechanism is ready for the next disturbance</li>
      </ul>

      <blockquote>
        If a shooter must survive repeated loading, a fast <code>REV_UP</code> result alone is not
        enough. Use disruption recovery to decide whether the hold-side gain family is the one you
        should ship.
      </blockquote>
    </>
  );
}
`,Un=`import { createFileRoute } from "@tanstack/react-router";
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

      <CodeBlock language="text" code={\`kF = 1 / maxVelocity\`} />

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
`,Gn=`import { createFileRoute } from "@tanstack/react-router";
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
        code={\`oscillation amplitude
oscillation period
Ku
Pu
computed MAINTAIN gains
computed REV_UP gains\`}
      />

      <blockquote>
        Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a
        license to ignore telemetry, headroom warnings, or impossible targets.
      </blockquote>
    </>
  );
}
`,Hn=`import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/velocity/overview")({
  head: () => ({
    meta: [
      { title: "Velocity Tuner Overview — PID Pilot" },
      {
        name: "description",
        content:
          "Overview of VelocityPIDFTuner, its raw ticks-per-second model, lifecycle phases, and operational responsibilities.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Velocity Tuner</h1>
      <p>
        <code>VelocityPIDFTuner</code> tunes speed-controlled mechanisms — flywheels and shooters. On
        start it estimates a physical <code>kF</code>, then{" "}
        <Link to="/docs/velocity/ku-search">relay auto-tunes</Link> kP/kI/kD for you. Beyond that it
        handles feedforward, phase routing, disruption measurement, and telemetry rich enough to
        explain why the controller behaves the way it does.
      </p>

      <blockquote>
        New here? The fastest path is <Link to="/docs/quick-start">Quick Start</Link> — bind your
        motors, set a target, press start, and read the gains off Dashboard. The pages below explain
        each phase in depth.
      </blockquote>

      <h2>Raw units are deliberate</h2>
      <p>
        The velocity tuner works in raw <code>ticks/s</code>. That means the gain values often look
        numerically small, but the numbers are honest: <code>kP</code>, <code>kI</code>,{" "}
        <code>kD</code>, and <code>kF</code> all correspond to real physical units instead of a
        hidden normalization scheme.
      </p>

      <h2>Lifecycle phases</h2>
      <ul>
        <li>
          <strong>CHARACTERIZING</strong> estimates a physical <code>kF</code> from max velocity.
        </li>
        <li>
          <strong>SETTLING</strong> pauses output and clears controller memory before the next step.
        </li>
        <li>
          <strong>RELAY_TUNING</strong> creates a controlled oscillation to estimate usable gains.
        </li>
        <li>
          <strong>RELAY_COMPLETE</strong> briefly surfaces relay results before normal control takes
          over.
        </li>
        <li>
          <strong>RUNNING</strong> performs normal closed-loop control with active gains.
        </li>
        <li>
          <strong>DISRUPTION</strong> measures recovery after a real disturbance when hold quality
          matters.
        </li>
        <li>
          <strong>COMPLETE</strong> exposes final summary lines and copyable values.
        </li>
      </ul>

      <h2>Main responsibilities inside the class</h2>
      <ol>
        <li>Manage active gain families and mode switching.</li>
        <li>Resolve the physical feedforward source.</li>
        <li>Characterize startup behavior when needed.</li>
        <li>Run relay auto-tuning when enabled.</li>
        <li>Apply normal closed-loop control in raw power space.</li>
        <li>
          Measure disruption recovery in <code>MAINTAIN</code>.
        </li>
        <li>Render operational telemetry and warnings.</li>
      </ol>

      <h2>Why motor mode enforcement matters</h2>
      <p>
        The tuner is an external power controller and must keep motors in{" "}
        <code>RUN_WITHOUT_ENCODER</code>. Because the surrounding OpMode refreshes config every
        loop, user code might accidentally reassert another run mode. If that happened and the tuner
        did not push back, the SDK’s inner loop could start fighting the tuner's outer loop.
      </p>

      <h2>Important next pages</h2>
      <ul>
        <li>
          <Link to="/docs/velocity/f-sweep">Characterization &amp; Feedforward</Link> explains how
          physical <code>kF</code> is sourced.
        </li>
        <li>
          <Link to="/docs/velocity/ku-search">Relay Auto-Tuning</Link> explains how the tuner
          derives conservative starting gains.
        </li>
        <li>
          <Link to="/docs/velocity/refinement">Running Control &amp; Headroom</Link> explains the
          normal update loop, ramping, and gain sanity warnings.
        </li>
      </ul>
    </>
  );
}
`,$n=`import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/refinement")({
  head: () => ({
    meta: [
      { title: "Velocity Running Control & Headroom — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner runs closed-loop control, enforces motor mode, manages target ramping, and warns about unrealistic gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Running Control &amp; Headroom</h1>
      <p>
        Once the velocity tuner reaches <strong>RUNNING</strong>, it becomes a normal external
        closed-loop controller. What makes the framework valuable here is not only the control law,
        but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator
        headroom, and warnings when the requested operating point is physically dubious.
      </p>

      <h2>Main running loop</h2>
      <ol>
        <li>Read average mechanism velocity.</li>
        <li>Resolve the active target, including optional ramping.</li>
        <li>
          Apply the active gain family for <code>REV_UP</code> or <code>MAINTAIN</code>.
        </li>
        <li>
          Compute PID output through <code>PIDFController</code>.
        </li>
        <li>Add the resolved feedforward term.</li>
        <li>Write raw power to the hardware.</li>
        <li>Publish telemetry and warnings.</li>
      </ol>

      <h2>Optional target ramping</h2>
      <p>
        <code>velocityRampTicksPerSecPerSec(double)</code> lets the tuner slew the active target
        instead of commanding an instantaneous step. This matters when the mechanism or power system
        needs a smoother approach before full closed-loop behavior takes over.
      </p>

      <h2>Why ensureMotorMode exists</h2>
      <p>
        The tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>. If another mode slipped in
        during live config refresh, <code>setPower()</code> could stop meaning raw power and the SDK
        inner loop could start interpreting the command differently. <code>ensureMotorMode()</code>
        prevents that nondeterminism.
      </p>

      <h2>Derived gain sanity logic</h2>
      <p>
        <code>updateDerivedGainState()</code> turns controller math into practical warnings. It can
        derive <code>integralSumMax</code> from remaining output headroom and tell the operator when
        either feedforward or proportional action is already consuming more output than the
        mechanism can realistically provide.
      </p>

      <CodeBlock
        language="text"
        code={\`warn if kF consumes all headroom
warn if kP * target is much larger than remaining headroom
derive integralSumMax from available output when not overridden\`}
      />

      <h2>Telemetry categories during running control</h2>
      <ul>
        <li>Setpoint, measured velocity, error, and active tuning mode</li>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, and <code>fTerm</code>
        </li>
        <li>Filtered derivative information from the controller core</li>
        <li>Active gains, feedforward source notes, and warnings</li>
        <li>Relay or characterization results that remain relevant to the session</li>
      </ul>

      <blockquote>
        When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward
        baseline or a motor-mode conflict will make every gain discussion less honest.
      </blockquote>
    </>
  );
}
`,Kn=Object.assign({"../routes/docs.concepts.pidf-terms.tsx":xn,"../routes/docs.concepts.scoring.tsx":Tn,"../routes/docs.concepts.tuning-modes.tsx":Pn,"../routes/docs.index.tsx":In,"../routes/docs.installation.tsx":Cn,"../routes/docs.position.auto-tune.tsx":Rn,"../routes/docs.position.config.tsx":An,"../routes/docs.position.disturbance.tsx":Dn,"../routes/docs.position.hold-f.tsx":Mn,"../routes/docs.position.ku-search.tsx":_n,"../routes/docs.position.overview.tsx":Fn,"../routes/docs.position.refinement.tsx":Nn,"../routes/docs.quick-start.tsx":En,"../routes/docs.reference.faq.tsx":Sn,"../routes/docs.reference.practical-notes.tsx":On,"../routes/docs.reference.setup-rules.tsx":Ln,"../routes/docs.reference.telemetry.tsx":Bn,"../routes/docs.templates.tsx":jn,"../routes/docs.troubleshooting.tsx":Vn,"../routes/docs.tsx":qn,"../routes/docs.velocity.config.tsx":zn,"../routes/docs.velocity.disruption.tsx":Wn,"../routes/docs.velocity.f-sweep.tsx":Un,"../routes/docs.velocity.ku-search.tsx":Gn,"../routes/docs.velocity.overview.tsx":Hn,"../routes/docs.velocity.refinement.tsx":$n});function Yn(t){return t==="/docs"?"../routes/docs.index.tsx":`../routes/docs.${t.replace(/^\/docs\//,"").replaceAll("/",".")}.tsx`}function Qn(t){return t.match(/function Page\(\)\s*\{[\s\S]*?return\s*\(([\s\S]*?)\);\s*\}/)?.[1]??t}function Jn(t){return t.replace(/\s+/g," ").trim()}function Y(t){return Jn(t.replace(/<CodeBlock[\s\S]*?code=\{`([\s\S]*?)`\}[\s\S]*?\/>/g," $1 ").replace(/\{\s*" "\s*\}/g," ").replace(/\{\s*' '\s*\}/g," ").replace(/\{"([^"]*?)"\}/g," $1 ").replace(/\{'([^']*?)'\}/g," $1 ").replace(/\{\/\*[\s\S]*?\*\/\}/g," ").replace(/\{[\s\S]*?\}/g," ").replace(/<[^>]+>/g," "))}function Me(t){return t.toLowerCase().replace(/&amp;/g,"and").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function Zn(t,e){const n=Me(t)||"section",r=e.get(n)??0;return e.set(n,r+1),r===0?n:`${n}-${r+1}`}function Xn(t){const e=[...t.matchAll(/<(h[1-3])>([\s\S]*?)<\/\1>/g)].map(r=>({end:(r.index??0)+r[0].length,index:r.index??0,level:Number(r[1].slice(1)),title:Y(r[2])})),n=new Map;return e.filter(r=>!!r.title).map((r,o,i)=>{const s=i[o+1],a=Y(t.slice(r.end,s?.index??t.length));return{...r,anchor:Zn(r.title,n),content:a}})}function et(t){return[...t.matchAll(/<CodeBlock\b/g)].length}function nt(t){const e=Kn[Yn(t.to)]??"",n=Qn(e),o=Xn(n).flatMap(({anchor:i,content:s,level:a,title:c})=>a===2||a===3?[{anchor:i,content:s,level:a,title:c}]:[]);return{...t,content:Y(n),codeSnippetCount:et(n),headings:o}}const se=L.map(nt),tt=se.flatMap(t=>[{content:t.content,id:`${t.to}#page`,section:t.section,title:t.title,to:t.to},...t.headings.map(e=>({anchor:e.anchor,content:e.content,heading:e.title,headingLevel:e.level,id:`${t.to}#${e.anchor}`,section:t.section,title:t.title,to:t.to}))]);function _(t){return Array.isArray?Array.isArray(t):Fe(t)==="[object Array]"}function ot(t){if(typeof t=="string")return t;if(typeof t=="bigint")return t.toString();const e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Q(t){return t==null?"":ot(t)}function x(t){return typeof t=="string"}function W(t){return typeof t=="number"}function rt(t){return t===!0||t===!1||it(t)&&Fe(t)=="[object Boolean]"}function _e(t){return typeof t=="object"}function it(t){return _e(t)&&t!==null}function P(t){return t!=null}function z(t){return!t.trim().length}function Fe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const st="Incorrect 'index' type",at=t=>`Invalid value for key ${t}`,ct=t=>`Pattern length exceeds max of ${t}.`,lt=t=>`Missing ${t} property in key`,dt=t=>`Property 'weight' in key '${t}' must be a positive integer`,ye=Object.prototype.hasOwnProperty;class ut{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{const o=Ne(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ne(t){let e=null,n=null,r=null,o=1,i=null;if(x(t)||_(t))r=t,e=be(t),n=J(t);else{if(!ye.call(t,"name"))throw new Error(lt("name"));const s=t.name;if(r=s,ye.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(dt(s));e=be(s),n=J(s),i=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:i}}function be(t){return _(t)?t:t.split(".")}function J(t){return _(t)?t.join("."):t}function ht(t,e){const n=[];let r=!1;const o=(i,s,a,c)=>{if(P(i))if(!s[a])n.push(c!==void 0?{v:i,i:c}:i);else{const d=s[a],l=i[d];if(!P(l))return;if(a===s.length-1&&(x(l)||W(l)||rt(l)||typeof l=="bigint"))n.push(c!==void 0?{v:Q(l),i:c}:Q(l));else if(_(l)){r=!0;for(let p=0,m=l.length;p<m;p+=1)o(l[p],s,a+1,p)}else s.length&&o(l,s,a+1,c)}};return o(t,x(e)?e.split("."):e,0),r?n:n[0]}const pt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},mt={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},gt={location:0,threshold:.6,distance:100},ft={useExtendedSearch:!1,useTokenSearch:!1,getFn:ht,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},g=Object.freeze({...mt,...pt,...gt,...ft}),yt=/[^ ]+/g;function bt(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const i=o.match(yt).length;if(n.has(i))return n.get(i);const s=1/Math.pow(i,.5*t),a=parseFloat(Math.round(s*r)/r);return n.set(i,a),a},clear(){n.clear()}}}class ae{constructor({getFn:e=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){this.norm=bt(n,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,x(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();x(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}removeAll(e){for(let n=e.length-1;n>=0;n-=1)this.records.splice(e[n],1);for(let n=0,r=this.records.length;n<r;n+=1)this.records[n].i=n}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!P(e)||z(e))return;const r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){const r={i:n,$:{}};this.keys.forEach((o,i)=>{const s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(P(s)){if(_(s)){const a=[];for(let c=0,d=s.length;c<d;c+=1){const l=s[c];if(P(l)){if(x(l)){if(!z(l)){const p={v:l,i:c,n:this.norm.get(l)};a.push(p)}}else if(P(l.v)){const p=x(l.v)?l.v:Q(l.v);if(!z(p)){const m={v:p,i:l.i,n:this.norm.get(p)};a.push(m)}}}}r.$[i]=a}else if(x(s)&&!z(s)){const a={v:s,n:this.norm.get(s)};r.$[i]=a}}}),this.records.push(r)}toJSON(){return{keys:this.keys.map(({getFn:e,...n})=>n),records:this.records}}}function Ee(t,e,{getFn:n=g.getFn,fieldNormWeight:r=g.fieldNormWeight}={}){const o=new ae({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(Ne)),o.setSources(e),o.create(),o}function vt(t,{getFn:e=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const{keys:r,records:o}=t,i=new ae({getFn:e,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(o),i}function kt(t=[],e=g.minMatchCharLength){const n=[];let r=-1,o=-1,i=0;for(let s=t.length;i<s;i+=1){const a=t[i];a&&r===-1?r=i:!a&&r!==-1&&(o=i-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[i-1]&&i-r>=e&&n.push([r,i-1]),n}const S=32;function wt(t,e,n,{location:r=g.location,distance:o=g.distance,threshold:i=g.threshold,findAllMatches:s=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:c=g.includeMatches,ignoreLocation:d=g.ignoreLocation}={}){if(e.length>S)throw new Error(ct(S));const l=e.length,p=t.length,m=Math.max(0,Math.min(r,p));let h=i,y=m;const f=(T,A)=>{const C=T/l;if(d)return C;const B=Math.abs(m-A);return o?C+B/o:B?1:C},b=a>1||c,w=b?Array(p):[];let k;for(;(k=t.indexOf(e,y))>-1;){const T=f(0,k);if(h=Math.min(T,h),y=k+l,b){let A=0;for(;A<l;)w[k+A]=1,A+=1}}y=-1;let I=[],E=1,V=l+p;const Ue=1<<l-1;for(let T=0;T<l;T+=1){let A=0,C=V;for(;A<C;)f(T,m+C)<=h?A=C:V=C,C=Math.floor((V-A)/2+A);V=C;let B=Math.max(1,m-C+1);const K=s?p:Math.min(m+C,p)+l,O=Array(K+2);O[K+1]=(1<<T)-1;for(let R=K;R>=B;R-=1){const q=R-1,me=n[t[q]];if(b&&(w[q]=+!!me),O[R]=(O[R+1]<<1|1)&me,T&&(O[R]|=(I[R+1]|I[R])<<1|1|I[R+1]),O[R]&Ue&&(E=f(T,q),E<=h)){if(h=E,y=q,y<=m)break;B=Math.max(1,2*m-y)}}if(f(T+1,m)>h)break;I=O}const $={isMatch:y>=0,score:Math.max(.001,E)};if(b){const T=kt(w,a);T.length?c&&($.indices=T):$.isMatch=!1}return $}function xt(t){const e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}function ce(t){if(t.length<=1)return t;t.sort((n,r)=>n[0]-r[0]||n[1]-r[1]);const e=[t[0]];for(let n=1,r=t.length;n<r;n+=1){const o=e[e.length-1],i=t[n];i[0]<=o[1]+1?o[1]=Math.max(o[1],i[1]):e.push(i)}return e}const Se={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Tt=new RegExp("["+Object.keys(Se).join("")+"]","g"),j=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Tt,e=>Se[e]):t=>t;class le{constructor(e,{location:n=g.location,threshold:r=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:s=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:c=g.isCaseSensitive,ignoreDiacritics:d=g.ignoreDiacritics,ignoreLocation:l=g.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:d,ignoreLocation:l},e=c?e:e.toLowerCase(),e=d?j(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(h,y)=>{this.chunks.push({pattern:h,alphabet:xt(h),startIndex:y})},m=this.pattern.length;if(m>S){let h=0;const y=m%S,f=m-y;for(;h<f;)p(this.pattern.substr(h,S),h),h+=S;if(y){const b=m-S;p(this.pattern.substr(b),b)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:o}=this.options;if(e=n?e:e.toLowerCase(),e=r?j(e):e,this.pattern===e){const f={isMatch:!0,score:0};return o&&(f.indices=[[0,e.length-1]]),f}const{location:i,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:d,ignoreLocation:l}=this.options,p=[];let m=0,h=!1;this.chunks.forEach(({pattern:f,alphabet:b,startIndex:w})=>{const{isMatch:k,score:I,indices:E}=wt(e,f,b,{location:i+w,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:d,includeMatches:o,ignoreLocation:l});k&&(h=!0),m+=I,k&&E&&p.push(...E)});const y={isMatch:h,score:h?m/this.chunks.length:1};return h&&o&&(y.indices=ce(p)),y}}class F{constructor(e){this.pattern=e}static isMultiMatch(e){return ve(e,this.multiRegex)}static isSingleMatch(e){return ve(e,this.singleRegex)}search(e){return{isMatch:!1,score:1}}}function ve(t,e){const n=t.match(e);return n?n[1]:null}class Pt extends F{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class It extends F{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Ct extends F{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Rt extends F{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class At extends F{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Dt extends F{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Oe extends F{constructor(e,{location:n=g.location,threshold:r=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:s=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:c=g.isCaseSensitive,ignoreDiacritics:d=g.ignoreDiacritics,ignoreLocation:l=g.ignoreLocation}={}){super(e),this._bitapSearch=new le(e,{location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:d,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Le extends F{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+i,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const Z=[Pt,Le,Ct,Rt,Dt,At,It,Oe],ke=Z.length,Mt="\0",_t="|";function Ft(t){const e=[],n=t.length;let r=0;for(;r<n;){for(;r<n&&t[r]===" ";)r++;if(r>=n)break;let o=r;for(;o<n&&t[o]!==" "&&t[o]!=='"';)o++;if(o<n&&t[o]==='"'){for(o++;o<n;){if(t[o]==='"'){const i=o+1;if(i>=n||t[i]===" "){o++;break}if(t[i]==="$"&&(i+1>=n||t[i+1]===" ")){o+=2;break}}o++}e.push(t.substring(r,o)),r=o}else{for(;o<n&&t[o]!==" ";)o++;e.push(t.substring(r,o)),r=o}}return e}function Nt(t,e={}){return t.replace(/\\\|/g,Mt).split(_t).map(r=>{const o=r.replace(/\u0000/g,"|"),i=Ft(o.trim()).filter(a=>a&&!!a.trim()),s=[];for(let a=0,c=i.length;a<c;a+=1){const d=i[a];let l=!1,p=-1;for(;!l&&++p<ke;){const m=Z[p],h=m.isMultiMatch(d);h&&(s.push(new m(h,e)),l=!0)}if(!l)for(p=-1;++p<ke;){const m=Z[p],h=m.isSingleMatch(d);if(h){s.push(new m(h,e));break}}}return s})}const Et=new Set([Oe.type,Le.type]);class St{constructor(e,{isCaseSensitive:n=g.isCaseSensitive,ignoreDiacritics:r=g.ignoreDiacritics,includeMatches:o=g.includeMatches,minMatchCharLength:i=g.minMatchCharLength,ignoreLocation:s=g.ignoreLocation,findAllMatches:a=g.findAllMatches,location:c=g.location,threshold:d=g.threshold,distance:l=g.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:o,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:c,threshold:d,distance:l},e=n?e:e.toLowerCase(),e=r?j(e):e,this.pattern=e,this.query=Nt(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o,ignoreDiacritics:i}=this.options;e=o?e:e.toLowerCase(),e=i?j(e):e;let s=0;const a=[];let c=0,d=!1;for(let l=0,p=n.length;l<p;l+=1){const m=n[l];a.length=0,s=0,d=!1;for(let h=0,y=m.length;h<y;h+=1){const f=m[h],{isMatch:b,indices:w,score:k}=f.search(e);if(b){s+=1,c+=k;const I=f.constructor.type;I.startsWith("inverse")&&(d=!0),r&&(Et.has(I)?a.push(...w):a.push(w))}else{c=0,s=0,a.length=0,d=!1;break}}if(s){const h={isMatch:!0,score:c/s};return d&&(h.hasInverse=!0),r&&(h.indices=ce(a)),h}}return{isMatch:!1,score:1}}}const X=[];function de(...t){X.push(...t)}function U(t,e){for(let n=0,r=X.length;n<r;n+=1){const o=X[n];if(o.condition(t,e))return new o(t,e)}return new le(t,e)}const G={AND:"$and",OR:"$or"},ee={PATH:"$path",PATTERN:"$val"},ne=t=>!!(t[G.AND]||t[G.OR]),Ot=t=>!!t[ee.PATH],Lt=t=>!_(t)&&_e(t)&&!ne(t),we=t=>({[G.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Be(t,e,{auto:n=!0}={}){const r=o=>{if(x(o)){const c={keyId:null,pattern:o};return n&&(c.searcher=U(o,e)),c}const i=Object.keys(o),s=Ot(o);if(!s&&i.length>1&&!ne(o))return r(we(o));if(Lt(o)){const c=s?o[ee.PATH]:i[0],d=s?o[ee.PATTERN]:o[c];if(!x(d))throw new Error(at(c));const l={keyId:J(c),pattern:d};return n&&(l.searcher=U(d,e)),l}const a={children:[],operator:i[0]};return i.forEach(c=>{const d=o[c];_(d)&&d.forEach(l=>{a.children.push(r(l))})}),a};return ne(t)||(t=we(t)),r(t)}function te(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){let n=1;return t.forEach(({key:r,norm:o,score:i})=>{const s=r?r.weight:null;n*=Math.pow(i===0&&s?Number.EPSILON:i,(s||1)*(e?1:o))}),n}function Bt(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(n=>{n.score=te(n.matches,{ignoreFieldNorm:e})})}class jt{constructor(e){this.limit=e,this.heap=[]}get size(){return this.heap.length}shouldInsert(e){return this.size<this.limit||e<this.heap[0].score}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):e.score<this.heap[0].score&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(e){return this.heap.sort(e)}_bubbleUp(e){const n=this.heap;for(;e>0;){const r=e-1>>1;if(n[e].score<=n[r].score)break;const o=n[e];n[e]=n[r],n[r]=o,e=r}}_sinkDown(e){const n=this.heap,r=n.length;let o=e;do{e=o;const i=2*e+1,s=2*e+2;if(i<r&&n[i].score>n[o].score&&(o=i),s<r&&n[s].score>n[o].score&&(o=s),o!==e){const a=n[e];n[e]=n[o],n[o]=a}}while(o!==e)}}function Vt(t,e){const n=t.matches;e.matches=[],P(n)&&n.forEach(r=>{if(!P(r.indices)||!r.indices.length)return;const{indices:o,value:i}=r,s={indices:o,value:i};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function qt(t,e){e.score=t.score}function zt(t,e,{includeMatches:n=g.includeMatches,includeScore:r=g.includeScore}={}){const o=[];return n&&o.push(Vt),r&&o.push(qt),t.map(i=>{const{idx:s}=i,a={item:e[s],refIndex:s};return o.length&&o.forEach(c=>{c(i,a)}),a})}const Wt=/\b\w+\b/g;function oe({isCaseSensitive:t=!1,ignoreDiacritics:e=!1}={}){return{tokenize(n){return t||(n=n.toLowerCase()),e&&(n=j(n)),n.match(Wt)||[]}}}function Ut(t,e,n){const r=new Map,o=new Map;let i=0;function s(a,c,d,l){const p=n.tokenize(a);if(!p.length)return;i++;const m=new Map;for(const h of p)m.set(h,(m.get(h)||0)+1);for(const[h,y]of m){const f={docIdx:c,keyIdx:d,subIdx:l,tf:y};let b=r.get(h);b||(b=[],r.set(h,b)),b.push(f),o.set(h,(o.get(h)||0)+1)}}for(const a of t){const{i:c,v:d,$:l}=a;if(d!==void 0){s(d,c,-1,-1);continue}if(l)for(let p=0;p<e;p++){const m=l[p];if(m)if(Array.isArray(m))for(const h of m)s(h.v,c,p,h.i??-1);else s(m.v,c,p,-1)}}return{terms:r,fieldCount:i,df:o}}function Gt(t,e,n,r){const{i:o,v:i,$:s}=e;function a(c,d,l){const p=r.tokenize(c);if(!p.length)return;t.fieldCount++;const m=new Map;for(const h of p)m.set(h,(m.get(h)||0)+1);for(const[h,y]of m){const f={docIdx:o,keyIdx:d,subIdx:l,tf:y};let b=t.terms.get(h);b||(b=[],t.terms.set(h,b)),b.push(f),t.df.set(h,(t.df.get(h)||0)+1)}}if(i!==void 0){a(i,-1,-1);return}if(s)for(let c=0;c<n;c++){const d=s[c];if(d)if(Array.isArray(d))for(const l of d)a(l.v,c,l.i??-1);else a(d.v,c,-1)}}function xe(t,e){for(const[n,r]of t.terms){const o=r.filter(s=>s.docIdx!==e),i=r.length-o.length;i>0&&(t.fieldCount-=i,t.df.set(n,(t.df.get(n)||0)-i),o.length===0?(t.terms.delete(n),t.df.delete(n)):t.terms.set(n,o))}}class N{constructor(e,n,r){this.options={...g,...n},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new ut(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,r),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const n=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,r=U(e,n);return this._lastQuery=e,this._lastSearcher=r,r}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ae))throw new Error(st);if(this._myIndex=n||Ee(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const r=oe({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=Ut(this._myIndex.records,this._myIndex.keys.length,r)}}add(e){if(P(e)&&(this._docs.push(e),this._myIndex.add(e),this._invertedIndex)){const n=this._myIndex.records[this._myIndex.records.length-1],r=oe({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});Gt(this._invertedIndex,n,this._myIndex.keys.length,r)}}remove(e=()=>!1){const n=[],r=[];for(let o=0,i=this._docs.length;o<i;o+=1)e(this._docs[o],o)&&(n.push(this._docs[o]),r.push(o));if(r.length){if(this._invertedIndex)for(const o of r)xe(this._invertedIndex,o);for(let o=r.length-1;o>=0;o-=1)this._docs.splice(r[o],1);this._myIndex.removeAll(r)}return n}removeAt(e){this._invertedIndex&&xe(this._invertedIndex,e);const n=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),n}getIndex(){return this._myIndex}search(e,n){const{limit:r=-1}=n||{},{includeMatches:o,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:c}=this.options;if(x(e)&&!e.trim()){let p=this._docs.map((m,h)=>({item:m,refIndex:h}));return W(r)&&r>-1&&(p=p.slice(0,r)),p}const d=W(r)&&r>0&&x(e);let l;if(d){const p=new jt(r);x(this._docs[0])?this._searchStringList(e,{heap:p,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:p,ignoreFieldNorm:c}),l=p.extractSorted(a)}else l=x(e)?x(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Bt(l,{ignoreFieldNorm:c}),s&&l.sort(a),W(r)&&r>-1&&(l=l.slice(0,r));return zt(l,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(e,{heap:n,ignoreFieldNorm:r}={}){const o=this._getSearcher(e),{records:i}=this._myIndex,s=n?null:[];return i.forEach(({v:a,i:c,n:d})=>{if(!P(a))return;const{isMatch:l,score:p,indices:m}=o.searchIn(a);if(l){const h={item:a,idx:c,matches:[{score:p,value:a,norm:d,indices:m}]};n?(h.score=te(h.matches,{ignoreFieldNorm:r}),n.shouldInsert(h.score)&&n.insert(h)):s.push(h)}}),s}_searchLogical(e){const n=Be(e,this.options),r=(a,c,d)=>{if(!("children"in a)){const{keyId:h,searcher:y}=a;let f;return h===null?(f=[],this._myIndex.keys.forEach((b,w)=>{f.push(...this._findMatches({key:b,value:c[w],searcher:y}))})):f=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(c,h),searcher:y}),f&&f.length?[{idx:d,item:c,matches:f}]:[]}const{children:l,operator:p}=a,m=[];for(let h=0,y=l.length;h<y;h+=1){const f=l[h],b=r(f,c,d);if(b.length)m.push(...b);else if(p===G.AND)return[]}return m},o=this._myIndex.records,i=new Map,s=[];return o.forEach(({$:a,i:c})=>{if(P(a)){const d=r(n,a,c);d.length&&(i.has(c)||(i.set(c,{idx:c,item:a,matches:[]}),s.push(i.get(c))),d.forEach(({matches:l})=>{i.get(c).matches.push(...l)}))}}),s}_searchObjectList(e,{heap:n,ignoreFieldNorm:r}={}){const o=this._getSearcher(e),{keys:i,records:s}=this._myIndex,a=n?null:[];return s.forEach(({$:c,i:d})=>{if(!P(c))return;const l=[];let p=!1,m=!1;if(i.forEach((h,y)=>{const f=this._findMatches({key:h,value:c[y],searcher:o});f.length?(l.push(...f),f[0].hasInverse&&(m=!0)):p=!0}),!(m&&p)&&l.length){const h={idx:d,item:c,matches:l};n?(h.score=te(h.matches,{ignoreFieldNorm:r}),n.shouldInsert(h.score)&&n.insert(h)):a.push(h)}}),a}_findMatches({key:e,value:n,searcher:r}){if(!P(n))return[];const o=[];if(_(n))n.forEach(({v:i,i:s,n:a})=>{if(!P(i))return;const{isMatch:c,score:d,indices:l,hasInverse:p}=r.searchIn(i);c&&o.push({score:d,key:e,value:i,idx:s,norm:a,indices:l,hasInverse:p})});else{const{v:i,n:s}=n,{isMatch:a,score:c,indices:d,hasInverse:l}=r.searchIn(i);a&&o.push({score:c,key:e,value:i,norm:s,indices:d,hasInverse:l})}return o}}class Ht{static condition(e,n){return n.useTokenSearch}constructor(e,n){this.options=n,this.analyzer=oe({isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics});const r=this.analyzer.tokenize(e),o=n._invertedIndex,{df:i,fieldCount:s}=o;this.termSearchers=[],this.idfWeights=[];for(const a of r){this.termSearchers.push(new le(a,{location:n.location,threshold:n.threshold,distance:n.distance,includeMatches:n.includeMatches,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength,isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics,ignoreLocation:!0}));const c=i.get(a)||0,d=Math.log(1+(s-c+.5)/(c+.5));this.idfWeights.push(d)}}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const n=[];let r=0,o=0,i=0;for(let c=0;c<this.termSearchers.length;c++){const d=this.termSearchers[c].searchIn(e),l=this.idfWeights[c];o+=l,d.isMatch&&(i++,r+=l*(1-d.score),d.indices&&n.push(...d.indices))}if(i===0)return{isMatch:!1,score:1};const s=o>0?1-r/o:0,a={isMatch:!0,score:Math.max(.001,s)};return this.options.includeMatches&&n.length&&(a.indices=ce(n)),a}}N.version="7.3.0";N.createIndex=Ee;N.parseIndex=vt;N.config=g;N.match=function(t,e,n){return U(t,{...g,...n}).searchIn(e)};N.parseQuery=Be;de(St);de(Ht);N.use=function(...t){t.forEach(e=>de(e))};function Te(t,e,n){const r=Math.max(0,e),o=Math.min(t.length,n),i=t.slice(r,o).trim();return`${r>0?"…":""}${i}${o<t.length?"…":""}`}function Pe(t,e){const n=e?.find(i=>i.key==="content"&&i.indices.length>0);if(!n)return Te(t,0,140);const[r,o]=n.indices[0];return Te(t,r-60,o+90)}function $t(t,e){const n=new Map(se.map(o=>[o.to,{codeSnippetCount:o.codeSnippetCount,headingCount:o.headings.length}])),r=new Map;for(const o of t){const i=n.get(o.to)??{codeSnippetCount:0,headingCount:0},s=r.get(o.to)??{codeSnippetCount:i.codeSnippetCount,headingCount:i.headingCount,items:[],pagePreview:void 0,pageScore:Number.POSITIVE_INFINITY,score:o.score,section:o.section,title:o.title,to:o.to};if(s.score=Math.min(s.score,o.score),o.heading&&o.anchor&&o.headingLevel){const a={...o,anchor:o.anchor,heading:o.heading,headingLevel:o.headingLevel};s.items.some(c=>c.id===a.id)||s.items.push(a)}else(!s.pagePreview||o.score<s.pageScore)&&(s.pagePreview=o.preview,s.pageScore=o.score);r.set(o.to,s)}return[...r.values()].sort((o,i)=>o.score-i.score).slice(0,e?6:8).map(o=>({...o,items:o.items.sort((i,s)=>i.score-s.score).slice(0,e?4:2)}))}function Ie(){const[t,e]=v.useState(!1),[n,r]=v.useState(""),o=v.useRef(null),i=v.useMemo(()=>new N(tt,{keys:[{name:"title",weight:.35},{name:"heading",weight:.3},{name:"section",weight:.1},{name:"content",weight:.25}],threshold:.34,ignoreLocation:!0,minMatchCharLength:2,includeMatches:!0,includeScore:!0}),[]),s=n.trim(),a=v.useMemo(()=>s?i.search(s).slice(0,24).map(d=>({...d.item,preview:Pe(d.item.content,d.matches),score:d.score??0})):se.slice(0,8).map(d=>({content:d.content,id:`${d.to}#page`,preview:Pe(d.content),score:0,section:d.section,title:d.title,to:d.to})),[i,s]),c=v.useMemo(()=>$t(a,!!s),[s,a]);return v.useEffect(()=>{const d=l=>{(l.metaKey||l.ctrlKey)&&l.key==="k"&&(l.preventDefault(),e(!0)),l.key==="Escape"&&e(!1)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),v.useEffect(()=>{t&&setTimeout(()=>o.current?.focus(),50)},[t]),u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:()=>e(!0),className:"inline-flex h-10 w-full max-w-sm items-center gap-3 rounded-xl border border-border/80 bg-background/90 px-3.5 text-sm text-muted-foreground shadow-sm transition hover:border-border hover:bg-background hover:text-foreground",children:[u.jsx(fe,{className:"h-4 w-4 shrink-0"}),u.jsx("span",{className:"flex-1 text-left",children:"Search documentation..."}),u.jsx("kbd",{className:"hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline",children:"⌘ K"})]}),t&&u.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center bg-slate-950/22 px-4 pt-18 backdrop-blur-[3px] sm:pt-24",onClick:()=>e(!1),children:u.jsxs("div",{onClick:d=>d.stopPropagation(),className:"w-full max-w-3xl overflow-hidden rounded-[1.35rem] border border-border/80 bg-background/95 shadow-[0_30px_90px_-38px_rgba(15,23,42,0.55)]",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-border/70 px-4 py-3.5 sm:px-5",children:[u.jsx(fe,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),u.jsx("input",{ref:o,value:n,onChange:d=>r(d.target.value),placeholder:"Search the docs...",className:"flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"}),u.jsx("button",{onClick:()=>e(!1),className:"rounded-md p-1 text-muted-foreground transition hover:bg-accent/70 hover:text-foreground","aria-label":"Close search",children:u.jsx(Re,{className:"h-4 w-4"})})]}),u.jsx("div",{className:"border-b border-border/60 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:px-5",children:s?"Search Results":"Browse Docs"}),u.jsx("div",{className:"max-h-[34rem] overflow-y-auto px-2 py-2 sm:px-3",children:c.length===0?u.jsxs("div",{className:"px-4 py-10 text-center text-sm text-muted-foreground",children:['No results for "',s,'"']}):u.jsx("div",{className:"divide-y divide-border/60",children:c.map(d=>u.jsxs("section",{className:"px-2 py-2.5",children:[u.jsx(M,{to:d.to,onClick:()=>e(!1),className:"group block rounded-2xl px-3 py-3 transition hover:bg-accent/45",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground",children:u.jsx(gn,{className:"h-4 w-4"})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"truncate text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase",children:d.section}),u.jsx("div",{className:"mt-1 truncate text-[15px] font-semibold text-foreground",children:d.title}),u.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[d.headingCount>0&&u.jsx(Ce,{label:"Main Topics"}),d.codeSnippetCount>0&&u.jsx(Ce,{label:"Code Snippets"})]})]}),u.jsx(cn,{className:"mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground"})]})}),d.items.length>0&&u.jsxs("div",{className:"mt-1 space-y-1 pl-12",children:[u.jsx("div",{className:"px-3 pt-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase",children:"Main Topics"}),d.items.map(l=>u.jsxs(M,{to:l.to,hash:l.anchor,onClick:()=>e(!1),className:"group flex gap-3 rounded-xl px-3 py-2.5 transition hover:bg-accent/35",children:[u.jsx("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/70 text-muted-foreground transition group-hover:bg-background",children:l.headingLevel===3?u.jsx(pn,{className:"h-3.5 w-3.5"}):u.jsx(yn,{className:"h-3.5 w-3.5"})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("div",{className:"truncate text-sm font-medium text-foreground",children:l.heading}),u.jsx("p",{className:"mt-1 text-[13px] leading-5 text-muted-foreground",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden"},children:l.preview})]})]},l.id))]})]},d.to))})})]})})]})}function Ce({label:t}){return u.jsx("span",{className:"rounded-full border border-border/70 bg-muted/60 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase",children:t})}var H="Collapsible",[Kt]=rn(H),[Yt,ue]=Kt(H),je=v.forwardRef((t,e)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:i,onOpenChange:s,...a}=t,[c,d]=Xe({prop:r,defaultProp:o??!1,onChange:s,caller:H});return u.jsx(Yt,{scope:n,disabled:i,contentId:en(),open:c,onOpenToggle:v.useCallback(()=>d(l=>!l),[d]),children:u.jsx(ie.div,{"data-state":pe(c),"data-disabled":i?"":void 0,...a,ref:e})})});je.displayName=H;var Ve="CollapsibleTrigger",qe=v.forwardRef((t,e)=>{const{__scopeCollapsible:n,...r}=t,o=ue(Ve,n);return u.jsx(ie.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":pe(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:e,onClick:nn(t.onClick,o.onOpenToggle)})});qe.displayName=Ve;var he="CollapsibleContent",ze=v.forwardRef((t,e)=>{const{forceMount:n,...r}=t,o=ue(he,t.__scopeCollapsible);return u.jsx(tn,{present:n||o.open,children:({present:i})=>u.jsx(Qt,{...r,ref:e,present:i})})});ze.displayName=he;var Qt=v.forwardRef((t,e)=>{const{__scopeCollapsible:n,present:r,children:o,...i}=t,s=ue(he,n),[a,c]=v.useState(r),d=v.useRef(null),l=Qe(e,d),p=v.useRef(0),m=p.current,h=v.useRef(0),y=h.current,f=s.open||a,b=v.useRef(f),w=v.useRef(void 0);return v.useEffect(()=>{const k=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(k)},[]),on(()=>{const k=d.current;if(k){w.current=w.current||{transitionDuration:k.style.transitionDuration,animationName:k.style.animationName},k.style.transitionDuration="0s",k.style.animationName="none";const I=k.getBoundingClientRect();p.current=I.height,h.current=I.width,b.current||(k.style.transitionDuration=w.current.transitionDuration,k.style.animationName=w.current.animationName),c(r)}},[s.open,r]),u.jsx(ie.div,{"data-state":pe(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!f,...i,ref:l,style:{"--radix-collapsible-content-height":m?`${m}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...t.style},children:f&&o})});function pe(t){return t?"open":"closed"}var Jt=je;const Zt=Jt,Xt=qe,eo=ze;function no(){const t=sn(),[e,n]=v.useState(!1),r=L.findIndex(a=>a.to===t.pathname),o=r>0?L[r-1]:null,i=r>=0&&r<L.length-1?L[r+1]:null,s=L[r];return v.useEffect(()=>{const a=document.querySelectorAll(".prose-docs h2, .prose-docs h3"),c=new Map;for(const d of a){const l=d.textContent?.trim();if(!l)continue;const p=Me(l)||"section",m=c.get(p)??0;c.set(p,m+1),d.id=m===0?p:`${p}-${m+1}`}},[t.pathname]),u.jsxs("div",{className:"min-h-screen bg-background",children:[u.jsx("header",{className:"sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",children:u.jsxs("div",{className:"mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6",children:[u.jsx("button",{className:"lg:hidden",onClick:()=>n(a=>!a),"aria-label":"Toggle menu",children:e?u.jsx(Re,{className:"h-5 w-5"}):u.jsx(vn,{className:"h-5 w-5"})}),u.jsxs(M,{to:"/",className:"flex items-center gap-2",children:[u.jsx("img",{src:Ye,alt:"PID Pilot",className:"h-8 w-8"}),u.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"PID Pilot"}),u.jsx("span",{className:"hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline",children:"docs"})]}),u.jsx("div",{className:"flex-1"}),u.jsxs("nav",{className:"hidden items-center gap-4 sm:flex",children:[u.jsx(M,{to:"/docs",className:re("text-sm font-medium transition",t.pathname.startsWith("/docs")?"text-foreground":"text-muted-foreground hover:text-foreground"),children:"Docs"}),u.jsx(M,{to:"/tuner-lab",className:"text-sm font-medium text-muted-foreground transition hover:text-foreground",children:"Tuner Lab"})]}),u.jsx("div",{className:"hidden md:block",children:u.jsx(Ie,{})}),u.jsx(Je,{className:"h-9 w-9"})]})}),u.jsxs("div",{className:"mx-auto flex max-w-[1400px] gap-4 px-4 sm:gap-6 lg:px-6 xl:gap-8",children:[u.jsxs("aside",{className:`${e?"block":"hidden"} fixed inset-x-0 top-14 z-30 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-sidebar px-4 py-3 shadow-sm lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:w-64 lg:flex-shrink-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-6 lg:shadow-none`,children:[u.jsx("div",{className:"mb-4 lg:hidden",children:u.jsx(Ie,{})}),u.jsx("nav",{className:"space-y-4 pb-8 lg:space-y-5 lg:pb-12",children:De.map(a=>u.jsxs("div",{children:[u.jsx("h4",{className:"mb-2 px-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:a.title}),u.jsx("ul",{className:"space-y-0.5",children:a.links.map(c=>Ae(c)?u.jsx(to,{title:c.title,links:c.links,pathname:t.pathname,onNavigate:()=>n(!1)},`${a.title}-${c.title}`):u.jsx(We,{link:c,active:t.pathname===c.to,onNavigate:()=>n(!1)},c.to))})]},a.title))})]}),u.jsxs("main",{className:"min-w-0 flex-1 py-6 sm:py-8 lg:py-10 xl:py-12",children:[s&&u.jsxs("div",{className:"mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",children:[u.jsx("span",{children:"Docs"}),u.jsx(ge,{className:"h-3 w-3"}),u.jsx("span",{children:s.section}),u.jsx(ge,{className:"h-3 w-3"}),u.jsx("span",{className:"text-foreground",children:s.title})]}),u.jsx("article",{className:"prose-docs",children:u.jsx(Ke,{})}),u.jsxs("div",{className:"mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2",children:[o?u.jsxs(M,{to:o.to,className:"group rounded-lg border border-border p-4 transition hover:border-brand/50 hover:bg-accent/30",children:[u.jsx("div",{className:"text-xs text-muted-foreground",children:"← Previous"}),u.jsx("div",{className:"mt-1 font-medium text-foreground group-hover:text-brand",children:o.title})]}):u.jsx("div",{}),i&&u.jsxs(M,{to:i.to,className:"group rounded-lg border border-border p-4 text-right transition hover:border-brand/50 hover:bg-accent/30 sm:col-start-2",children:[u.jsx("div",{className:"text-xs text-muted-foreground",children:"Next →"}),u.jsx("div",{className:"mt-1 font-medium text-foreground group-hover:text-brand",children:i.title})]})]})]})]}),u.jsx(Ze,{})]})}function We({link:t,active:e,onNavigate:n,compact:r=!1}){return u.jsx("li",{children:u.jsx(M,{to:t.to,onClick:n,className:re("block rounded-md border-l-2 text-sm transition",r?"px-3 py-1.5":"px-3 py-2",e?"border-brand bg-brand-muted font-medium text-brand":"border-transparent text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"),children:t.title})})}function to({title:t,links:e,pathname:n,onNavigate:r}){const o=e.some(a=>a.to===n),[i,s]=v.useState(o);return v.useEffect(()=>{o&&s(!0)},[o]),u.jsx("li",{children:u.jsxs(Zt,{open:i,onOpenChange:s,children:[u.jsxs(Xt,{className:re("group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm transition",o?"bg-brand-muted font-medium text-brand":"text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"),children:[u.jsx("span",{children:t}),u.jsx(dn,{className:"h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"})]}),u.jsx(eo,{className:"mt-1 space-y-0.5 pl-3",children:u.jsx("ul",{className:"space-y-0.5 border-l border-border/80",children:e.map(a=>u.jsx(We,{link:a,active:n===a.to,onNavigate:r,compact:!0},a.to))})})]})})}const lo=no;export{lo as component};
