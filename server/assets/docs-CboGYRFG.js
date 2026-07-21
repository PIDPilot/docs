import { M as useRouter, r as reactExports, T as jsxRuntimeExports, Z as Outlet } from "./worker-entry-BHG0Bsvg.js";
import { L as Link } from "./router-CUlrL_qo.js";
import { l as logo } from "./pidpilot-logo-transparent-COYC6ICd.js";
import { u as useComposedRefs, a as cn, T as ThemeToggle, S as SiteFooter } from "./ThemeToggle-DL1hJCdx.js";
import { c as createLucideIcon } from "./createLucideIcon-JMHtqSFh.js";
import { a as useControllableState, P as Primitive, d as useId, b as composeEventHandlers, e as Presence, u as useLayoutEffect2, c as createContextScope } from "./index-ARDNPH-0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useLocation(opts) {
  const router = useRouter();
  {
    const location = router.stores.location.get();
    return location;
  }
}
const __iconNode$8 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$8);
const __iconNode$7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$7);
const __iconNode$6 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
];
const CornerDownRight = createLucideIcon("corner-down-right", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$4);
const __iconNode$3 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function isDocLinkGroup(item) {
  return "links" in item;
}
const docsNav = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", to: "/docs" },
      { title: "Installation", to: "/docs/installation" },
      { title: "Quick Start", to: "/docs/quick-start" },
      { title: "Sample OpModes", to: "/docs/templates" }
    ]
  },
  {
    title: "Concepts",
    links: [
      { title: "PIDF Terms", to: "/docs/concepts/pidf-terms" },
      { title: "REV_UP vs MAINTAIN", to: "/docs/concepts/tuning-modes" },
      { title: "How Auto-Tune Works", to: "/docs/concepts/scoring" }
    ]
  },
  {
    title: "Velocity — Flywheels",
    links: [
      { title: "Overview", to: "/docs/velocity/overview" },
      { title: "Auto-Tune (Relay)", to: "/docs/velocity/ku-search" },
      { title: "Config Reference", to: "/docs/velocity/config" },
      {
        title: "Advanced",
        links: [
          { title: "Feedforward Characterization", to: "/docs/velocity/f-sweep" },
          { title: "Running Control & Headroom", to: "/docs/velocity/refinement" },
          { title: "Disruption Sampling", to: "/docs/velocity/disruption" }
        ]
      }
    ]
  },
  {
    title: "Position — Arms & Slides",
    links: [
      { title: "Overview", to: "/docs/position/overview" },
      { title: "Auto-Tune (Relay)", to: "/docs/position/auto-tune" },
      { title: "Config Reference", to: "/docs/position/config" },
      {
        title: "Advanced",
        links: [
          { title: "Actuator & Feedback Modes", to: "/docs/position/hold-f" },
          { title: "Motion Profile & Feedforward", to: "/docs/position/ku-search" },
          { title: "Bounds & Control Flow", to: "/docs/position/refinement" },
          { title: "Disruption Sampling", to: "/docs/position/disturbance" }
        ]
      }
    ]
  },
  {
    title: "Reference",
    links: [
      { title: "Troubleshooting", to: "/docs/troubleshooting" },
      { title: "Telemetry & Final Summary", to: "/docs/reference/telemetry" },
      { title: "Workflows & Caveats", to: "/docs/reference/practical-notes" },
      { title: "Setup Rules", to: "/docs/reference/setup-rules" },
      { title: "FAQ", to: "/docs/reference/faq" }
    ]
  }
];
const flatDocs = docsNav.flatMap(
  (s) => s.links.flatMap(
    (item) => isDocLinkGroup(item) ? item.links.map((link) => ({ ...link, section: `${s.title} / ${item.title}` })) : [{ ...item, section: s.title }]
  )
);
const __vite_glob_0_0 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/concepts/pidf-terms")({\n  head: () => ({\n    meta: [\n      { title: "Shared Concepts — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Shared control concepts in PID Pilot: feedforward vs feedback, Dashboard-driven config, telemetry, and controller internals.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Shared Concepts</h1>\n      <p>\n        Before you dive into the individual tuners, it helps to understand the common ideas the\n        framework is built around. These concepts explain why the package has the class structure it\n        does and why the telemetry is so detailed.\n      </p>\n\n      <h2>Where P, I, D, and F fit</h2>\n      <ul>\n        <li>\n          <strong>P</strong> reacts to current error and provides the immediate corrective push.\n        </li>\n        <li>\n          <strong>I</strong> reacts to accumulated error over time and is most valuable when hold\n          quality and steady-state accuracy matter.\n        </li>\n        <li>\n          <strong>D</strong> damps the response and in PID Pilot is based on measurement change, not\n          direct error difference.\n        </li>\n        <li>\n          <strong>F</strong> is not one universal idea: in velocity it is a physical feedforward,\n          while in position it is a static trim or friction-help term.\n        </li>\n      </ul>\n\n      <h2>Feedforward vs feedback</h2>\n      <p>\n        The package works hard to keep these jobs distinct. Feedforward supplies the expected\n        baseline effort. PID handles the leftover error. This matters because a team can only debug\n        the controller rationally if it knows whether the mechanism is failing due to a missing\n        baseline effort or due to bad feedback behavior.\n      </p>\n\n      <ul>\n        <li>\n          Velocity <code>kF</code> is motor power per <code>ticks/s</code> and is meant to be\n          physically interpretable.\n        </li>\n        <li>\n          Position <code>kF</code> is static trim. Gravity constant and cosine compensation are\n          separate terms because they represent different physics.\n        </li>\n      </ul>\n\n      <h2>Dashboard-driven configuration</h2>\n      <p>\n        PID Pilot is not based on static startup configuration only. The base OpMode calls{" "}\n        <code>configureVelocity()</code> or <code>configurePosition()</code> every loop, so changes\n        made in FTC Dashboard take effect immediately. That is why the tuners must reassert key\n        hardware assumptions during refresh, such as velocity mode ownership.\n      </p>\n\n      <h2>Telemetry is a diagnostic surface</h2>\n      <p>\n        The framework exposes more than target, measurement, and error. It publishes controller\n        terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries,\n        warnings, and copyable gain summaries because teams need to know <em>why</em> the loop\n        behaves the way it does.\n      </p>\n\n      <h2>Derivative on measurement</h2>\n      <p>\n        <code>PIDFController</code> computes derivative from the measurement rather than from direct\n        error difference. That avoids derivative kick when the setpoint changes suddenly, which is\n        common in FTC because many commands are step changes.\n      </p>\n\n      <h2>Controller state is intentionally exposed</h2>\n      <p>\n        The controller stores things like integral memory, measurement rate, filtered measurement\n        rate, term contributions, last error, and last output. The tuners reuse that state directly\n        for telemetry instead of re-deriving it elsewhere. This is part of why the framework can\n        explain controller behavior so clearly.\n      </p>\n\n      <h2>Accumulator units matter</h2>\n      <p>\n        When integral is clamped, the controller clamps the stored accumulator rather than only the\n        final <code>iTerm</code>. That keeps the cap tied to error history. The tuners can then\n        derive that cap from actuator headroom while still reasoning about the stored state\n        correctly.\n      </p>\n    </>\n  );\n}\n';
const __vite_glob_0_1 = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/concepts/scoring")({\n  head: () => ({\n    meta: [\n      { title: "How Auto-Tune Works — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "The relay (Åström–Hägglund) method behind PID Pilot\'s auto-tune: how it measures a mechanism and turns that into PIDF gains.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>How Auto-Tune Works</h1>\n      <p>\n        Both tuners auto-tune with the same engine: the <strong>relay method</strong>{" "}\n        (Åström–Hägglund). Instead of guessing gains and nudging them, it makes the mechanism reveal\n        its own dynamics, measures them, and converts the measurement into PIDF gains with textbook\n        formulas. This page explains what&apos;s happening under the hood.\n      </p>\n\n      <h2>The idea: make it oscillate on purpose</h2>\n      <p>\n        Drive a mechanism with a <em>relay</em> — full push when it&apos;s below target, full pull\n        when it&apos;s above — and it settles into a steady oscillation around the target. That limit\n        cycle is not noise; its size and speed are a fingerprint of the mechanism&apos;s dynamics.\n      </p>\n      <ul>\n        <li>\n          The <strong>amplitude</strong> of the oscillation, together with the relay strength, gives\n          the <strong>ultimate gain</strong> <code>Ku</code> — how much proportional gain the system\n          can take before it oscillates on its own.\n        </li>\n        <li>\n          The <strong>period</strong> of the oscillation is the <strong>ultimate period</strong>{" "}\n          <code>Pu</code> — how fast the system naturally cycles at that edge.\n        </li>\n      </ul>\n      <p>\n        A hysteresis band around the target keeps sensor noise from causing false switches, so the\n        relay produces a clean oscillation instead of chatter.\n      </p>\n\n      <h2>From measurement to gains</h2>\n      <p>\n        Once <code>Ku</code> and <code>Pu</code> are known, Ziegler–Nichols-style formulas produce\n        the gains. PID Pilot computes a calmer <code>MAINTAIN</code> set (good disturbance rejection)\n        and a more aggressive <code>REV_UP</code> set (fast approach) from the same measurement, and\n        a <em>detune</em> factor lets you scale how aggressive the result is.\n      </p>\n      <CodeBlock\n        language="text"\n        code={`Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)\nPu = oscillation period\n\nMAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8\nREV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20\n           (each scaled by relayDetune)`}\n      />\n\n      <h2>The lifecycle</h2>\n      <p>The two tuners run slightly different phase sequences on start:</p>\n      <CodeBlock\n        language="text"\n        code={`Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING\nPosition:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING`}\n      />\n      <ul>\n        <li>\n          <strong>Velocity</strong> first runs a short full-power sweep (CHARACTERIZING) to estimate\n          a physical feedforward <code>kF ≈ 1/maxVelocity</code>, settles, then relays. Feedforward\n          gets the wheel near speed; the relay tunes the feedback around it.\n        </li>\n        <li>\n          <strong>Position</strong> skips characterization — closing the relay on position error\n          both drives the mechanism to the target and induces the oscillation in one motion. Gravity\n          / cosine feedforward holds it in place while the relay works.\n        </li>\n        <li>\n          <strong>RELAY_COMPLETE</strong> briefly displays the result, then <strong>RUNNING</strong>{" "}\n          hands off to normal closed-loop control with the computed gains.\n        </li>\n      </ul>\n\n      <blockquote>\n        Because auto-tune starts in the OpMode constructor (during INIT), the tuners re-baseline their\n        phase clocks the moment you press start — so a long INIT wait never eats into the measurement\n        window.\n      </blockquote>\n\n      <h2>When it can&apos;t measure</h2>\n      <p>\n        If the mechanism can&apos;t be made to oscillate — too much friction or backlash, or{" "}\n        <code>relayAmplitude</code> set too low — the relay times out, leaves your default gains in\n        place, and posts a note on the <code>relayTuneNote</code> telemetry key. Raise{" "}\n        <code>relayAmplitude</code>, check the hardware, or tune by hand.\n      </p>\n\n      <h2>The architecture behind it</h2>\n      <p>\n        Auto-tune is one system inside a clean split: generic control math, mechanism-specific logic,\n        and runtime orchestration each live in their own place.\n      </p>\n      <table>\n        <thead>\n          <tr>\n            <th>Class</th>\n            <th>Responsibility</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>PIDFController</code>\n            </td>\n            <td>Raw control math: derivative-on-measurement, anti-windup, term state, clamping</td>\n          </tr>\n          <tr>\n            <td>\n              <code>PIDFTunerOpMode</code>\n            </td>\n            <td>Runtime shell: loop timing, live config refresh, telemetry mirror, mode toggle</td>\n          </tr>\n          <tr>\n            <td>\n              <code>VelocityPIDFTuner</code>\n            </td>\n            <td>ticks/s control, characterization, relay auto-tune, disruption recovery</td>\n          </tr>\n          <tr>\n            <td>\n              <code>PositionPIDFTuner</code>\n            </td>\n            <td>Actuator / feedback abstraction, relay auto-tune, motion profiles, feedforward, bounds</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <blockquote>\n        Next: <Link to="/docs/velocity/ku-search">Velocity Auto-Tune</Link> or{" "}\n        <Link to="/docs/position/auto-tune">Position Auto-Tune</Link> for the tuner-specific details,\n        or <Link to="/docs/concepts/tuning-modes">REV_UP vs MAINTAIN</Link> for why there are two\n        gain sets.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_2 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/concepts/tuning-modes")({\n  head: () => ({\n    meta: [\n      { title: "Tuning Modes — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PID Pilot uses REV_UP and MAINTAIN as separate controller personalities with separate gains.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Tuning Modes</h1>\n      <p>\n        <code>PIDFTuningMode</code> is a small enum with a large role in the framework. It gives the\n        entire package a shared language for two different controller personalities: one focused on\n        getting there quickly and one focused on holding accurately under disturbances.\n      </p>\n\n      <h2>REV_UP</h2>\n      <ul>\n        <li>Prioritizes fast approach to the target.</li>\n        <li>Often uses little or no integral.</li>\n        <li>May use motion profiling in the position tuner.</li>\n        <li>Can accept some overshoot if that buys better approach speed.</li>\n      </ul>\n\n      <h2>MAINTAIN</h2>\n      <ul>\n        <li>Prioritizes low steady-state error and disturbance rejection.</li>\n        <li>Commonly benefits from integral action.</li>\n        <li>Is the mode used for disruption sampling.</li>\n        <li>\n          Represents the controller personality you care about once the mechanism is near target.\n        </li>\n      </ul>\n\n      <h2>Why the framework keeps two gain sets</h2>\n      <p>\n        The package does not pretend that approach behavior and hold behavior are the same control\n        problem. Both tuners keep separate gain sets so a team can tune the personality it actually\n        needs instead of forcing one compromise set to cover everything.\n      </p>\n\n      <h2>How teams switch modes live</h2>\n      <p>\n        The base runner handles mode toggling with <code>gamepad1.x</code>. When the mode changes,\n        the active tuner swaps gain families and resets state where stale controller memory would be\n        misleading.\n      </p>\n\n      <h2>Where the effect differs by tuner</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Area</th>\n            <th>REV_UP emphasis</th>\n            <th>MAINTAIN emphasis</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Velocity tuner</td>\n            <td>Fast approach and cleaner rev-up behavior</td>\n            <td>Robust speed hold and disruption recovery</td>\n          </tr>\n          <tr>\n            <td>Position tuner</td>\n            <td>Approach behavior, often with motion profiling</td>\n            <td>Holding behavior and load rejection near target</td>\n          </tr>\n          <tr>\n            <td>Integral usage</td>\n            <td>Often low or zero</td>\n            <td>Commonly more useful</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Practical guidance</h2>\n      <ul>\n        <li>\n          Use <code>REV_UP</code> when arrival speed is the main job.\n        </li>\n        <li>\n          Use <code>MAINTAIN</code> when resisting changing load is the main job.\n        </li>\n        <li>\n          Expect the same mechanism to produce different valid gains in each mode. That is normal,\n          not a bug.\n        </li>\n      </ul>\n    </>\n  );\n}\n';
const __vite_glob_0_3 = 'import { createFileRoute, Link } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/")({\n  head: () => ({\n    meta: [\n      { title: "Introduction — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "PID Pilot is a drop-in PIDF tuning library for FTC with one-button relay auto-tune for flywheels, arms, and elevators.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Introduction</h1>\n      <p>\n        PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode,\n        and its relay auto-tune measures the mechanism and computes working gains for you — live on\n        FTC Dashboard, with no controls background required.\n      </p>\n\n      <p>\n        It covers the two control problems most FTC mechanisms fall into: <strong>velocity</strong>{" "}\n        (flywheels and shooters) and <strong>position</strong> (arms, elevators, slides, turrets, and\n        servo-driven axes). Both share the same controller core and the same auto-tune engine, but\n        each speaks its own mechanism&apos;s language.\n      </p>\n\n      <div className="not-prose my-8 grid gap-4 md:grid-cols-3">\n        <IntroCard\n          title="Quick Start"\n          desc="Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains."\n          to="/docs/quick-start"\n          label="Start here"\n        />\n        <IntroCard\n          title="Velocity Tuner"\n          desc="Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec."\n          to="/docs/velocity/overview"\n          label="Velocity docs"\n        />\n        <IntroCard\n          title="Position Tuner"\n          desc="Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds."\n          to="/docs/position/overview"\n          label="Position docs"\n        />\n      </div>\n\n      <h2>What auto-tune actually does</h2>\n      <p>\n        Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the{" "}\n        <strong>relay method</strong>: it drives the mechanism into a controlled oscillation around\n        your target, measures the oscillation (its ultimate gain <code>Ku</code> and period{" "}\n        <code>Pu</code>), and applies Ziegler–Nichols formulas to produce working{" "}\n        <code>REV_UP</code> and <code>MAINTAIN</code> gains. It runs automatically the first time you\n        start the OpMode, for motors and CR servos, on both tuners.\n      </p>\n      <p>\n        You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain,\n        band, and timeout live from FTC Dashboard while the mechanism runs.\n      </p>\n\n      <h2>How it runs</h2>\n      <ol>\n        <li>\n          Your OpMode extends <code>PIDFTunerOpMode</code> and returns a <code>Config</code> from{" "}\n          <code>configureVelocity()</code> or <code>configurePosition()</code>.\n        </li>\n        <li>\n          The runner instantiates the matching tuner and drives the live loop — reading sensors,\n          computing control, applying output, and mirroring rich telemetry to the Driver Station and\n          Dashboard.\n        </li>\n        <li>\n          On start it auto-tunes (unless you skipped it), then holds the target so you can watch and\n          refine.\n        </li>\n        <li>\n          <code>gamepad1.x</code> toggles between <code>REV_UP</code> (fast approach) and{" "}\n          <code>MAINTAIN</code> (steady-state hold) live.\n        </li>\n      </ol>\n\n      <h2>What&apos;s in the library</h2>\n      <ul>\n        <li>\n          <code>PIDFController</code> — the shared control math: derivative-on-measurement,\n          anti-windup, and fully exposed term state.\n        </li>\n        <li>\n          <code>PIDFTunerOpMode</code> — the live runner: config refresh every loop, telemetry\n          mirroring, and the mode toggle.\n        </li>\n        <li>\n          <code>VelocityPIDFTuner</code> — raw <code>ticks/s</code> control, feedforward\n          characterization, relay auto-tune, and disruption recovery.\n        </li>\n        <li>\n          <code>PositionPIDFTuner</code> — motors, CR servos, and standard servos, with relay\n          auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds.\n        </li>\n        <li>\n          Ready-to-copy sample OpModes: <code>TuneFlywheelNew</code>, <code>TuneArm</code>, and{" "}\n          <code>TuneElevator</code>.\n        </li>\n      </ul>\n\n      <h2>Suggested reading order</h2>\n      <ol>\n        <li>\n          <Link to="/docs/installation">Installation</Link> then{" "}\n          <Link to="/docs/quick-start">Quick Start</Link> to get auto-tune running.\n        </li>\n        <li>\n          <Link to="/docs/concepts/pidf-terms">PIDF Terms</Link> and{" "}\n          <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> to understand what the numbers\n          mean.\n        </li>\n        <li>The velocity or position section that matches your mechanism.</li>\n        <li>\n          <Link to="/docs/reference/telemetry">Telemetry</Link> and{" "}\n          <Link to="/docs/troubleshooting">Troubleshooting</Link> when you need to decode real\n          behavior.\n        </li>\n      </ol>\n\n      <blockquote>\n        PID Pilot reasons about control; it does not hide bad hardware. It works best when the\n        mechanism is already mechanically healthy, with a safe range of motion and consistent\n        sensors.\n      </blockquote>\n    </>\n  );\n}\n\nfunction IntroCard({\n  title,\n  desc,\n  to,\n  label,\n}: {\n  title: string;\n  desc: string;\n  to: string;\n  label: string;\n}) {\n  return (\n    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">\n      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>\n      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>\n      <Link\n        to={to}\n        className="mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"\n      >\n        {label}\n      </Link>\n    </div>\n  );\n}\n';
const __vite_glob_0_4 = `import { createFileRoute, Link } from "@tanstack/react-router";
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
`;
const __vite_glob_0_5 = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/position/auto-tune")({\n  head: () => ({\n    meta: [\n      { title: "Position Auto-Tune — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How relay auto-tune finds kP/kI/kD for arms, elevators, and slides driven by motors or CR servos.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Position Auto-Tune (Relay)</h1>\n      <p>\n        The position tuner auto-tunes the same way the velocity tuner does: it drives the mechanism\n        into a controlled oscillation around your target, measures it, and computes working{" "}\n        <code>REV_UP</code> and <code>MAINTAIN</code> gains with Ziegler–Nichols formulas. It runs\n        automatically on start for <strong>motors and CR servos</strong> — arms, elevators, slides,\n        and turrets.\n      </p>\n\n      <h2>When it runs</h2>\n      <p>Auto-tune runs on start unless you opt out. Concretely:</p>\n      <ul>\n        <li>\n          <strong>Runs</strong> for <code>MOTOR</code> and <code>CR_SERVO</code> actuators when you\n          have not supplied both gain sets.\n        </li>\n        <li>\n          <strong>Skipped</strong> if you call <code>.skipRelayTuning()</code>, or if you supply{" "}\n          <em>both</em> <code>.revUpGains(...)</code> and <code>.maintainGains(...)</code> manually.\n        </li>\n        <li>\n          <strong>Not supported</strong> for standard servos (open-loop or with external feedback) —\n          those are position-commanded, not power-driven, so tune them by hand. See{" "}\n          <Link to="/docs/position/hold-f">Actuator &amp; Feedback Modes</Link>.\n        </li>\n      </ul>\n\n      <h2>The minimal setup</h2>\n      <p>\n        No gains, no relay settings — just a target, the motor, and (for anything that fights\n        gravity) a feedforward term to hold it in place while the relay works.\n      </p>\n      <CodeBlock\n        filename="TuneElevator.java"\n        language="java"\n        code={`return new PositionPIDFTuner.Config()\n        .target(TARGET_POSITION)\n        .withMotors(elevator)\n        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay\n        .telemetry(telemetry);`}\n      />\n\n      <h2>What happens on start</h2>\n      <ol>\n        <li>\n          <strong>RELAY_TUNING</strong> — the tuner applies your feedforward plus a bang-bang relay\n          signal (±<code>relayAmplitude</code>) based on position error. That both drives the\n          mechanism to the target and forces it to oscillate around it. Unlike the velocity tuner,\n          there is no separate &ldquo;approach&rdquo; phase — closing the relay on position error\n          does both at once.\n        </li>\n        <li>\n          <strong>Measure</strong> — it records the oscillation&apos;s amplitude and period across\n          several cycles to compute the ultimate gain <code>Ku</code> and period <code>Pu</code>.\n        </li>\n        <li>\n          <strong>RELAY_COMPLETE</strong> — it holds briefly, shows the computed gains, then hands\n          off to the normal closed loop.\n        </li>\n        <li>\n          <strong>RUNNING</strong> — the computed gains take over and the mechanism holds the target\n          under PID. Toggle <code>gamepad1.x</code> for REV_UP vs MAINTAIN.\n        </li>\n      </ol>\n\n      <blockquote>\n        Keep hands off the mechanism during RELAY_TUNING — a push during measurement corrupts the\n        oscillation and the computed gains. Wait for the phase to read <code>RUNNING</code>.\n      </blockquote>\n\n      <h2>Reading the result</h2>\n      <p>Watch these keys on FTC Dashboard:</p>\n      <CodeBlock\n        language="text"\n        code={`Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING\nRelayTune/cyclesCompleted      4/4\nRelayTune/amplitudeTicks       23.4\nRelayTune/periodSec            0.42\nRelayTune/Ku / Pu              0.031 / 0.42\nRelayTune/computedMaintainKP   0.61\nRelayTune/computedMaintainKI   0.028\nRelayTune/computedMaintainKD   0.041\nRelayTune/computedRevUpKP      1.02\nDiagnostics/relayTuneNote      Relay auto-tune complete.`}\n      />\n\n      <h2>Tuning the tuner</h2>\n      <p>\n        The defaults work for most mechanisms. If auto-tune struggles, three knobs adjust the\n        <em>process</em> (not the mechanism gains):\n      </p>\n      <table>\n        <thead>\n          <tr>\n            <th>Config</th>\n            <th>Default</th>\n            <th>Raise it when…</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>relayAmplitude(a)</code>\n            </td>\n            <td>0.3</td>\n            <td>\n              The mechanism can&apos;t overcome friction/gravity to oscillate. Lower it if the swing\n              is violent.\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayHysteresisBandPct(p)</code>\n            </td>\n            <td>0.03</td>\n            <td>Position noise causes chattering / false zero-crossings near the target.</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayDetune(f)</code>\n            </td>\n            <td>1.0</td>\n            <td>\n              You want a gentler (lower) or more aggressive (up to 2.0) result from the same\n              measurement.\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>If it can&apos;t establish an oscillation</h2>\n      <p>\n        If the mechanism never oscillates (too much friction/backlash, or <code>relayAmplitude</code>{" "}\n        too low), the relay times out after ~15 seconds, leaves your Dashboard-default gains in\n        place, and posts a note on <code>Diagnostics/relayTuneNote</code>. Raise{" "}\n        <code>relayAmplitude</code>, check the mechanism, or tune by hand.\n      </p>\n\n      <h2>Opting out</h2>\n      <CodeBlock\n        language="java"\n        code={`// Start from your own known-good gains, no auto-tune:\nreturn new PositionPIDFTuner.Config()\n        .target(TARGET_POSITION)\n        .withMotors(arm)\n        .revUpGains(0.9, 0.0, 0.12, 0.0)\n        .maintainGains(0.6, 0.03, 0.08, 0.0)\n        .telemetry(telemetry);\n\n// ...or keep the Dashboard defaults and disable the relay entirely:\n        .skipRelayTuning()`}\n      />\n\n      <blockquote>\n        Next: <Link to="/docs/position/config">Config Reference</Link> for every builder method, or{" "}\n        <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> for the relay theory shared by\n        both tuners.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_6 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/position/config")({\n  head: () => ({\n    meta: [\n      { title: "Position Config Reference — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Reference for PositionPIDFTuner.Config, covering actuator families, feedback modes, motion profiles, feedforward, bounds, and validation.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Position Config Reference</h1>\n      <p>\n        <code>PositionPIDFTuner.Config</code> is the public builder for a position tuning session.\n        It lets you select one actuator family, wire an optional feedback source, shape approach\n        behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic.\n      </p>\n\n      <h2>Required fields</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>target(double)</code>\n            </td>\n            <td>Required target in the same units as the feedback source</td>\n          </tr>\n          <tr>\n            <td>\n              <code>telemetry(Telemetry)</code>\n            </td>\n            <td>Required telemetry surface for Driver Station and Dashboard</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Actuator family selection</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Use case</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>withMotors(DcMotorEx...)</code>\n            </td>\n            <td>DC motor position control</td>\n          </tr>\n          <tr>\n            <td>\n              <code>withServos(Servo...)</code>\n            </td>\n            <td>Standard servo control</td>\n          </tr>\n          <tr>\n            <td>\n              <code>withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)</code>\n            </td>\n            <td>Single CR servo with encoder feedback</td>\n          </tr>\n          <tr>\n            <td>\n              <code>withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)</code>\n            </td>\n            <td>Multiple CR servos with encoder feedback</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Standard servo feedback and mapping</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>withServoFeedback(DcMotorEx)</code>\n            </td>\n            <td>Closed-loop standard servo with encoder feedback</td>\n          </tr>\n          <tr>\n            <td>\n              <code>withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)</code>\n            </td>\n            <td>Closed-loop standard servo with analog feedback</td>\n          </tr>\n          <tr>\n            <td>\n              <code>withServoOpenLoopRange(double minTicks, double maxTicks)</code>\n            </td>\n            <td>Required target-to-servo mapping range for standard servo modes</td>\n          </tr>\n          <tr>\n            <td>\n              <code>servoOutputScale(double)</code>\n            </td>\n            <td>Scale final command for standard or CR servos</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Mode, gains, and controller shaping</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>tuningMode(PIDFTuningMode)</code>\n            </td>\n            <td>Select initial gain family</td>\n          </tr>\n          <tr>\n            <td>\n              <code>revUpGains(kP, kI, kD, kF)</code>\n            </td>\n            <td>\n              Manual <code>REV_UP</code> gains\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>maintainGains(kP, kI, kD, kF)</code>\n            </td>\n            <td>\n              Manual <code>MAINTAIN</code> gains\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>integralSumMax(double)</code>\n            </td>\n            <td>Cap integral contribution in output space</td>\n          </tr>\n          <tr>\n            <td>\n              <code>derivativeAlpha(double)</code>\n            </td>\n            <td>Tune derivative filtering</td>\n          </tr>\n          <tr>\n            <td>\n              <code>positionToleranceTicks(double)</code>\n            </td>\n            <td>Define in-band tolerance for at-target checks</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Relay auto-tuning</h2>\n      <p>\n        For <code>MOTOR</code> and <code>CR_SERVO</code> actuators, relay auto-tune runs on start and\n        computes both gain sets unless you supply both manually or call <code>skipRelayTuning()</code>.\n        See <a href="/docs/position/auto-tune">Position Auto-Tune</a>.\n      </p>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>skipRelayTuning()</code>\n            </td>\n            <td>Disable relay auto-tune and start from the supplied / Dashboard-default gains</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayAmplitude(double)</code>\n            </td>\n            <td>Bang-bang power used to induce the oscillation (default 0.3)</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayHysteresisBandPct(double)</code>\n            </td>\n            <td>Switching band as a fraction of |target| (default 0.03)</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayDetune(double)</code>\n            </td>\n            <td>Scale the relay-computed gains — lower is gentler, up to 2.0 (default 1.0)</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Motion profile and bounds</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>useMotionProfile(double maxVelocity, double maxAcceleration)</code>\n            </td>\n            <td>\n              Enable trapezoidal approach shaping in <code>REV_UP</code>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>positionBounds(double minTicks, double maxTicks)</code>\n            </td>\n            <td>Enable hard mechanical limits</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Feedforward terms</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>feedforwardGravityConstant(double)</code>\n            </td>\n            <td>Constant gravity bias for vertical systems</td>\n          </tr>\n          <tr>\n            <td>\n              <code>feedforwardCosineConstant(double)</code>\n            </td>\n            <td>Angle-dependent gravity compensation</td>\n          </tr>\n          <tr>\n            <td>\n              <code>cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)</code>\n            </td>\n            <td>Encoder-angle mapping for cosine compensation</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Disruption configuration</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>runDisruptionPhase(boolean)</code>\n            </td>\n            <td>Enable or disable disruption timing</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionSamples(int)</code>\n            </td>\n            <td>Number of recovery samples</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionReadyStableMs(long)</code>\n            </td>\n            <td>Required stable time before a sample is armed</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionDetectTimeoutMs(long)</code>\n            </td>\n            <td>How long the tuner waits to detect a disturbance</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionRecoveryTimeoutMs(long)</code>\n            </td>\n            <td>How long the tuner waits for recovery</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionReadyBandPct(double)</code>\n            </td>\n            <td>Ready band around target</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionDropThresholdPct(double)</code>\n            </td>\n            <td>Drop threshold that counts as a disturbance</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Validation rules</h2>\n      <ul>\n        <li>Target must be present.</li>\n        <li>Exactly one actuator family must be selected.</li>\n        <li>Telemetry must be present.</li>\n        <li>Motion-profile limits must be valid when profiling is enabled.</li>\n        <li>Position bounds must be valid when bounds are enabled.</li>\n        <li>Servo output scale must be nonnegative.</li>\n        <li>\n          <code>kCos</code> requires a cosine reference.\n        </li>\n        <li>Standard-servo mapping range must be valid.</li>\n        <li>Only one standard-servo feedback source may be chosen.</li>\n        <li>Analog feedback scale must be nonzero when analog feedback is used.</li>\n        <li>CR servo configurations need feedback encoders and valid counts.</li>\n      </ul>\n\n      <h2>Example session</h2>\n      <CodeBlock\n        language="java"\n        code={`return new PositionPIDFTuner.Config()\n        .target(TARGET_POSITION)\n        .tuningMode(PIDFTuningMode.MAINTAIN)\n        .withMotors(slideLeft, slideRight)\n        .feedforwardGravityConstant(K_G)\n        .positionBounds(MIN_POSITION, MAX_POSITION)\n        .positionToleranceTicks(12.0)\n        .runDisruptionPhase(true)\n        .telemetry(telemetry);`}\n      />\n    </>\n  );\n}\n';
const __vite_glob_0_7 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/position/disturbance")({\n  head: () => ({\n    meta: [\n      { title: "Position Disruption Sampling — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PositionPIDFTuner measures hold robustness after a push or load change and when disruption logic is unavailable.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Disruption Sampling</h1>\n      <p>\n        The position tuner also includes a disruption measurement system. Its purpose is to quantify\n        how quickly the mechanism recovers after it is pushed away from target or after a load\n        change makes holding harder than the original approach move.\n      </p>\n\n      <h2>When the phase is unavailable</h2>\n      <p>\n        In <code>SERVO_OPEN_LOOP</code>, there is no real feedback controller, so disruption\n        sampling is not meaningful and the framework disables it.\n      </p>\n\n      <h2>Disruption stages</h2>\n      <ul>\n        <li>\n          <code>WAITING</code>\n        </li>\n        <li>\n          <code>ARMED</code>\n        </li>\n        <li>\n          <code>DETECTING</code>\n        </li>\n        <li>\n          <code>RECOVERING</code>\n        </li>\n        <li>\n          <code>COMPLETE</code>\n        </li>\n      </ul>\n\n      <h2>What it measures</h2>\n      <ol>\n        <li>Hold the mechanism near target until position is stably in band.</li>\n        <li>Detect a meaningful deviation or load event.</li>\n        <li>Measure the peak drop away from target.</li>\n        <li>Measure recovery time back into the ready band.</li>\n        <li>Repeat until the configured number of samples is collected.</li>\n      </ol>\n\n      <h2>Why it matters</h2>\n      <p>\n        Arms, elevators, and slides often fail the real game task not because they cannot reach the\n        target once, but because they cannot stay there cleanly under changing load. Disruption\n        telemetry lets the team quantify that instead of relying on intuition.\n      </p>\n\n      <h2>Key configuration methods</h2>\n      <ul>\n        <li>\n          <code>runDisruptionPhase(boolean)</code>\n        </li>\n        <li>\n          <code>disruptionSamples(int)</code>\n        </li>\n        <li>\n          <code>disruptionReadyStableMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionDetectTimeoutMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionRecoveryTimeoutMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionReadyBandPct(double)</code>\n        </li>\n        <li>\n          <code>disruptionDropThresholdPct(double)</code>\n        </li>\n      </ul>\n    </>\n  );\n}\n';
const __vite_glob_0_8 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/position/hold-f")({\n  head: () => ({\n    meta: [\n      { title: "Position Actuator & Feedback Modes — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PositionPIDFTuner supports motors, CR servos, standard servos, and multiple feedback sources.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Actuator &amp; Feedback Modes</h1>\n      <p>\n        The position tuner is effectively a multi-backend position-control framework. The actuator\n        family determines how commands are written, how measurements are read, and whether a true\n        closed-loop position controller exists at all.\n      </p>\n\n      <h2>Actuator modes</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Mode</th>\n            <th>What it means</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>MOTOR</code>\n            </td>\n            <td>DC motor position control using encoder feedback and power output</td>\n          </tr>\n          <tr>\n            <td>\n              <code>SERVO_OPEN_LOOP</code>\n            </td>\n            <td>Direct target-to-servo-position mapping with no PID correction</td>\n          </tr>\n          <tr>\n            <td>\n              <code>SERVO_WITH_EXTERNAL_ENCODER</code>\n            </td>\n            <td>Standard servo with external feedback and PID correction layered on top</td>\n          </tr>\n          <tr>\n            <td>\n              <code>CR_SERVO</code>\n            </td>\n            <td>Continuous-rotation servo driven from encoder feedback and scaled power output</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Feedback modes for standard servos</h2>\n      <ul>\n        <li>\n          <code>NONE</code> for open-loop mapping only\n        </li>\n        <li>\n          <code>MOTOR_ENCODER</code> when an external encoder motor supplies position\n        </li>\n        <li>\n          <code>ANALOG_INPUT</code> when an analog sensor provides the feedback signal\n        </li>\n      </ul>\n\n      <h2>Standard servo open-loop behavior</h2>\n      <p>\n        Open-loop standard servo mode is intentionally simple. There is no PID correction and no\n        disruption logic. The target is mapped directly into servo position space, and the tuner\n        forces <code>isAtTarget()</code> to report true because there is no real feedback loop to\n        qualify.\n      </p>\n\n      <h2>Standard servo closed-loop behavior</h2>\n      <p>\n        Closed-loop standard servo mode blends a direct servo-position mapping with an external PID\n        correction. The tuner maps the requested target to a base servo position, computes a\n        correction in normalized position space, adds feedforward, and clamps the final command back\n        into <code>[0.0, 1.0]</code>.\n      </p>\n\n      <h2>CR servo behavior</h2>\n      <p>\n        CR servos behave more like motors: the tuner uses encoder feedback to estimate position and\n        writes scaled power through <code>servoOutputScale</code>. This lets the framework keep one\n        consistent tuning model while still respecting how the actuator is commanded physically.\n      </p>\n\n      <h2>Why this abstraction matters</h2>\n      <p>\n        Teams do not need separate tuning frameworks for every actuator family. They need one\n        framework that changes its hardware semantics without changing its overall workflow:\n        configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the\n        right reasons.\n      </p>\n    </>\n  );\n}\n';
const __vite_glob_0_9 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/position/ku-search")({\n  head: () => ({\n    meta: [\n      { title: "Position Motion Profile & Feedforward — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PositionPIDFTuner uses move normalization, optional trapezoidal motion profiles, and layered feedforward terms.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Motion Profile &amp; Feedforward</h1>\n      <p>\n        Position tuning is not only “PID plus position.” The framework shapes approach behavior with\n        optional trapezoidal profiling and separates different baseline-effort terms so the operator\n        can reason about them honestly.\n      </p>\n\n      <h2>Move normalization</h2>\n      <p>\n        The tuner scales target and measurement by <code>moveScaleTicks</code>, which is based on\n        actual move distance together with a tolerance floor. This keeps small moves from feeling\n        hyper-aggressive while still letting long moves use the same overall gain family.\n      </p>\n\n      <h2>Motion profiling</h2>\n      <p>\n        In <code>REV_UP</code>, the tuner can replace an instantaneous step with a trapezoidal\n        profile. That is enabled through:\n      </p>\n\n      <CodeBlock language="java" code={`useMotionProfile(maxVelocity, maxAcceleration)`} />\n\n      <p>\n        If profiling is disabled, the profiled target simply equals the requested target. If it is\n        enabled, the tuner computes a position, velocity, and acceleration trajectory each loop.\n      </p>\n\n      <h2>Feedforward pieces</h2>\n      <ul>\n        <li>\n          <strong>\n            Static trim from <code>kF</code>\n          </strong>{" "}\n          helps break friction or stiction.\n        </li>\n        <li>\n          <strong>\n            Constant gravity term from <code>kG</code>\n          </strong>{" "}\n          helps elevators and vertical slides.\n        </li>\n        <li>\n          <strong>\n            Cosine compensation from <code>kCos</code>\n          </strong>{" "}\n          helps arms or joints with changing gravity torque.\n        </li>\n      </ul>\n\n      <h2>Static trim is not velocity feedforward</h2>\n      <p>\n        In the position tuner, <code>kF</code> is applied as a sign-aware static trim term. It is\n        intentionally not the same concept as the velocity tuner’s physical feedforward. Treating\n        them as interchangeable is one of the fastest ways to confuse a tuning session.\n      </p>\n\n      <h2>Cosine compensation</h2>\n      <p>Cosine feedforward uses an encoder-angle mapping and computes:</p>\n\n      <CodeBlock language="text" code={`kCos * cos((position - zeroTicks) / ticksPerRadian)`} />\n\n      <p>\n        That is why <code>cosineFeedforwardReference(zeroTicks, ticksPerRadian)</code> is required\n        whenever <code>kCos</code> is nonzero.\n      </p>\n\n      <h2>When each term is most useful</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Term</th>\n            <th>Typical mechanism</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>kF</code>\n            </td>\n            <td>Any mechanism with noticeable static friction or breakaway effort</td>\n          </tr>\n          <tr>\n            <td>\n              <code>kG</code>\n            </td>\n            <td>Elevators and vertical slides</td>\n          </tr>\n          <tr>\n            <td>\n              <code>kCos</code>\n            </td>\n            <td>Arms, joints, or mechanisms with angle-dependent gravity torque</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}\n';
const __vite_glob_0_10 = 'import { createFileRoute, Link } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/position/overview")({\n  head: () => ({\n    meta: [\n      { title: "Position Tuner Overview — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Overview of PositionPIDFTuner, including actuator families, normalized control, motion profiles, feedforward, and bounds.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Position Tuner</h1>\n      <p>\n        <code>PositionPIDFTuner</code> tunes anything driven to a target position — arms, elevators,\n        slides, and turrets. For motors and CR servos it{" "}\n        <Link to="/docs/position/auto-tune">auto-tunes on start</Link> via the relay method, the same\n        one-button flow as the velocity tuner. It also supports standard servos (open-loop, or\n        closed-loop with external encoder / analog feedback), which are tuned by hand.\n      </p>\n\n      <blockquote>\n        New here? Go straight to <Link to="/docs/position/auto-tune">Position Auto-Tune</Link> —\n        bind a motor, set a target, press start. Everything below is the machinery behind it.\n      </blockquote>\n\n      <h2>What makes it different from the velocity tuner</h2>\n      <ul>\n        <li>It supports multiple actuator and feedback backends.</li>\n        <li>It normalizes position internally by move scale.</li>\n        <li>\n          It can use trapezoidal motion profiles in <code>REV_UP</code>.\n        </li>\n        <li>It separates static trim, gravity constant, and cosine compensation.</li>\n        <li>It can clamp targets and suppress outward command at hard stops.</li>\n      </ul>\n\n      <h2>Major subsystems</h2>\n      <ol>\n        <li>Actuator-family abstraction</li>\n        <li>Feedback-source abstraction</li>\n        <li>Position normalization</li>\n        <li>Optional motion profiling</li>\n        <li>Static, gravity, and cosine feedforward</li>\n        <li>Hard position constraints</li>\n        <li>At-target qualification</li>\n        <li>Disruption testing</li>\n      </ol>\n\n      <h2>Why position is normalized</h2>\n      <p>\n        The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a\n        tiny trim move and a long travel move would feel like unrelated controllers unless gains\n        were changed constantly. The move scale keeps small moves from becoming twitchy while still\n        preserving meaningful units elsewhere in the system.\n      </p>\n\n      <h2>What page to read next</h2>\n      <ul>\n        <li>\n          <Link to="/docs/position/auto-tune">Auto-Tune (Relay)</Link> to let it find your gains —\n          the fastest path to a working mechanism.\n        </li>\n        <li>\n          <Link to="/docs/position/hold-f">Actuator &amp; Feedback Modes</Link> if you are choosing\n          how the tuner should read and command the mechanism.\n        </li>\n        <li>\n          <Link to="/docs/position/ku-search">Motion Profile &amp; Feedforward</Link> if your main\n          question is how the position model is shaped.\n        </li>\n        <li>\n          <Link to="/docs/position/refinement">Bounds &amp; Control Flow</Link> if you need to\n          understand safety and loop behavior.\n        </li>\n      </ul>\n    </>\n  );\n}\n';
const __vite_glob_0_11 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/position/refinement")({\n  head: () => ({\n    meta: [\n      { title: "Position Bounds & Control Flow — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PositionPIDFTuner applies bounds, qualifies at-target state, and executes its closed-loop update path.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Bounds &amp; Control Flow</h1>\n      <p>\n        The position tuner’s control loop includes more than PID and feedforward. It has to manage\n        actuator-specific writes, target clamping, at-target qualification, and protection against\n        continued outward drive at hard stops.\n      </p>\n\n      <h2>Closed-loop update flow</h2>\n      <CodeBlock\n        language="text"\n        code={`handle SERVO_OPEN_LOOP separately if needed\nread feedback position\nupdate motion profile\napply active gains\nnormalize target and measurement\ncompute PID output\ncompute feedforward\napply actuator-specific output\nupdate at-target counter\nupdate disruption phase\npush telemetry`}\n      />\n\n      <h2>Hard position constraints</h2>\n      <p>\n        <code>positionBounds(minTicks, maxTicks)</code> does two jobs. First, it clamps the\n        requested target into a safe range. Second, if the mechanism is already at a hard limit, it\n        suppresses any additional outward command so the controller does not keep pushing into the\n        stop.\n      </p>\n\n      <h2>Why target clamping alone is not enough</h2>\n      <p>\n        If the actuator is already against a hard stop, a controller can still compute an outward\n        command even when the requested target was clamped. The framework explicitly blocks that\n        behavior because otherwise the mechanism can keep loading the stop and damage itself.\n      </p>\n\n      <h2>At-target qualification</h2>\n      <p>\n        The tuner does not declare victory from one lucky loop. It requires several consecutive\n        in-band loops before <code>isAtTarget()</code> becomes true:\n      </p>\n\n      <CodeBlock language="text" code={`REQUIRED_AT_TARGET_LOOPS = 5`} />\n\n      <p>\n        This reduces false success caused by noise, backlash, or a transient crossing through the\n        tolerance band.\n      </p>\n\n      <h2>Telemetry that matters here</h2>\n      <ul>\n        <li>Requested target versus clamped target</li>\n        <li>Profiled target, velocity, and acceleration</li>\n        <li>Measured position and actuator command</li>\n        <li>Constraint status and current bound values</li>\n        <li>At-target qualification state</li>\n      </ul>\n\n      <blockquote>\n        When a position session looks unsafe, check bounds and actuator selection before you touch\n        gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_12 = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/quick-start")({\n  head: () => ({\n    meta: [\n      { title: "Quick Start — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Get relay auto-tune running on an FTC mechanism in a few minutes: extend PIDFTunerOpMode, return a Config, press start.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Quick Start</h1>\n      <p>\n        This is the shortest path to a tuned mechanism. You&apos;ll write one small OpMode, press\n        start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes\n        you&apos;ve finished <Link to="/docs/installation">Installation</Link>.\n      </p>\n\n      <h2>1. Pick your tuner</h2>\n      <ul>\n        <li>\n          <strong>Velocity</strong> — flywheels, shooters: anything whose target is a speed.\n        </li>\n        <li>\n          <strong>Position</strong> — arms, elevators, slides, turrets: anything driven to a target\n          position.\n        </li>\n      </ul>\n\n      <h2>2. Write the OpMode</h2>\n      <p>\n        Extend <code>PIDFTunerOpMode</code> and override exactly one of{" "}\n        <code>configureVelocity()</code> or <code>configurePosition()</code>, returning a{" "}\n        <code>Config</code>. That&apos;s the whole setup — you don&apos;t supply gains; auto-tune\n        finds them.\n      </p>\n\n      <CodeBlock\n        filename="TuneFlywheel.java"\n        language="java"\n        code={`package org.firstinspires.ftc.teamcode;\n\nimport com.acmerobotics.dashboard.config.Config;\nimport com.qualcomm.robotcore.eventloop.opmode.TeleOp;\nimport com.qualcomm.robotcore.hardware.DcMotorEx;\nimport com.qualcomm.robotcore.hardware.DcMotorSimple;\nimport com.pidpilot.ftc.PIDFTunerOpMode;\nimport com.pidpilot.ftc.VelocityPIDFTuner;\n\n@Config\n@TeleOp(name = "Tune Flywheel", group = "Tuning")\npublic class TuneFlywheel extends PIDFTunerOpMode {\n\n    public static double TARGET_VELOCITY = 1800.0; // ticks/sec\n\n    private DcMotorEx left, right;\n\n    @Override\n    protected VelocityPIDFTuner.Config configureVelocity() {\n        // configure*() runs every loop, so cache hardware the first time only.\n        if (left == null) {\n            left = hardwareMap.get(DcMotorEx.class, "outtakeL");\n            right = hardwareMap.get(DcMotorEx.class, "outtakeR");\n            left.setDirection(DcMotorSimple.Direction.REVERSE);\n        }\n        return new VelocityPIDFTuner.Config()\n                .target(TARGET_VELOCITY)\n                .withMotors(left, right)\n                .averageAbsoluteVelocity(true) // wheels spin opposite by design\n                .telemetry(telemetry);\n    }\n}`}\n      />\n\n      <blockquote>\n        <code>configureVelocity()</code> / <code>configurePosition()</code> are called{" "}\n        <strong>every control loop</strong> so Dashboard edits to <code>TARGET_VELOCITY</code> apply\n        live. Always cache <code>hardwareMap.get(...)</code> in a field like above — don&apos;t\n        re-fetch each call.\n      </blockquote>\n\n      <h2>3. Press start — auto-tune runs</h2>\n      <ol>\n        <li>Choose a target the mechanism can realistically reach.</li>\n        <li>\n          Select the OpMode under <strong>Tuning</strong>, press <strong>INIT</strong>, open FTC\n          Dashboard, then press <strong>START</strong>.\n        </li>\n        <li>\n          <strong>Hands clear.</strong> Velocity first does a short full-power sweep to estimate{" "}\n          <code>kF</code>, then relay auto-tune oscillates the mechanism around the target and\n          computes gains. Position goes straight to the relay.\n        </li>\n        <li>\n          When it finishes it holds the target. Press <code>gamepad1.x</code> to flip between{" "}\n          <code>REV_UP</code> and <code>MAINTAIN</code>.\n        </li>\n      </ol>\n\n      <h2>4. Read the gains off Dashboard</h2>\n      <p>\n        The tuner streams the computed gains plus the full controller story. Copy the set that\n        matches the behavior you need — a good <code>REV_UP</code> tune and a good{" "}\n        <code>MAINTAIN</code> tune are legitimately different because they solve different problems.\n      </p>\n      <CodeBlock\n        language="text"\n        code={`RelayTune/computedMaintainKP   0.0034\nRelayTune/computedMaintainKI   0.0121\nRelayTune/computedMaintainKD   0.00008\nGains/activekF                 0.00048   (velocity: characterized)\nRelayTune/Ku / Pu              0.019 / 0.31s\nDiagnostics/phase              RUNNING`}\n      />\n\n      <h2>5. Put them in your real subsystem</h2>\n      <ol>\n        <li>Drop the selected gains into the mechanism class you run in teleop / autonomous.</li>\n        <li>Test under the real task, not just under the tuner OpMode.</li>\n        <li>Re-run the tune if gearing, inertia, weight, or feedback changes.</li>\n      </ol>\n\n      <h2>Prefer to tune by hand?</h2>\n      <p>\n        Auto-tune is the default, not a requirement. Supply <code>.revUpGains(...)</code> and{" "}\n        <code>.maintainGains(...)</code> to start from your own values, or call{" "}\n        <code>.skipRelayTuning()</code> to disable it entirely and adjust every gain live in\n        Dashboard. The <Link to="/docs/concepts/pidf-terms">Concepts</Link> and Advanced sections\n        cover the manual workflow.\n      </p>\n\n      <blockquote>\n        Next: grab a full working example from <Link to="/docs/templates">Sample OpModes</Link>, or\n        read <Link to="/docs/concepts/scoring">How Auto-Tune Works</Link> to understand what just\n        happened.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_13 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/reference/faq")({\n  head: () => ({\n    meta: [\n      { title: "FAQ — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Frequently asked questions about PID Pilot’s tuning modes, feedforward semantics, motor ownership, and supported actuator workflows.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>FAQ</h1>\n\n      <h2>Why are my REV_UP and MAINTAIN gains different?</h2>\n      <p>\n        Because the framework treats them as different controller personalities. <code>REV_UP</code>{" "}\n        prioritizes getting there quickly. <code>MAINTAIN</code> prioritizes holding near target and\n        recovering from disturbance. Different valid gains for the same mechanism are expected.\n      </p>\n\n      <h2>Why does the velocity tuner use raw ticks per second?</h2>\n      <p>\n        So gain values and feedforward stay physically interpretable. The numbers may look small,\n        but they describe real units rather than a hidden normalization scheme.\n      </p>\n\n      <h2>Why does position kF feel different from velocity kF?</h2>\n      <p>\n        Because they are different concepts. Velocity <code>kF</code> is baseline effort per{" "}\n        <code>ticks/s</code>. Position <code>kF</code> is a static trim or friction-help term.\n      </p>\n\n      <h2>Why does the tuner keep forcing RUN_WITHOUT_ENCODER?</h2>\n      <p>\n        To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner\n        must own motor power control if its math is going to mean what the telemetry says it means.\n      </p>\n\n      <h2>Can I skip characterization or relay tuning?</h2>\n      <p>\n        Yes. Use <code>skipCharacterization(manualKF)</code> when you already trust a physical\n        feedforward, and <code>skipRelayTuning()</code> when you are supplying manual gain families\n        or want to bypass automatic gain estimation.\n      </p>\n\n      <h2>Why is disruption unavailable in some position sessions?</h2>\n      <p>\n        Because disruption logic is only meaningful when there is real feedback control. In standard\n        servo open-loop mode, the tuner is only mapping target to servo position, so there is no\n        closed-loop hold behavior to evaluate.\n      </p>\n\n      <h2>Do I always need position bounds?</h2>\n      <p>\n        If the mechanism has hard end stops, yes. Bounds are not only for clamping requested\n        targets; they also prevent the controller from continuing to push outward once the mechanism\n        is already at a limit.\n      </p>\n\n      <h2>Can I use PID Pilot with custom hardware arrangements?</h2>\n      <p>\n        Usually yes, as long as you can represent the mechanism with one supported actuator family\n        and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied\n        blindly.\n      </p>\n\n      <h2>When should I re-run a tune?</h2>\n      <p>\n        Re-run when the physics change: different gearing, repaired mechanism, new motor, changed\n        wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to\n        the actual mechanism, not to the codebase in the abstract.\n      </p>\n    </>\n  );\n}\n';
const __vite_glob_0_14 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/reference/practical-notes")({\n  head: () => ({\n    meta: [\n      { title: "Workflows & Caveats — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Practical engineering workflows, tuner differences, extension points, and real-world caveats for PID Pilot.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Workflows &amp; Caveats</h1>\n      <p>\n        This page condenses the practical parts of the README that matter once the framework is\n        already installed: how teams typically use each tuner, how the two tuners differ, where the\n        framework is meant to be extended, and what assumptions still need engineering judgment.\n      </p>\n\n      <h2>Typical velocity workflow</h2>\n      <ol>\n        <li>\n          Start from <code>TuneFlywheelNew</code> or an equivalent velocity OpMode.\n        </li>\n        <li>Set a believable target speed.</li>\n        <li>\n          Let characterization compute a physical <code>kF</code> unless you already trust one.\n        </li>\n        <li>Let relay auto-tuning derive starting gain families when appropriate.</li>\n        <li>\n          Compare <code>REV_UP</code> and <code>MAINTAIN</code> against the mechanism’s real job.\n        </li>\n        <li>Use disruption sampling if the wheel must survive repeated load events.</li>\n      </ol>\n\n      <h2>Typical position workflow</h2>\n      <ol>\n        <li>Pick the correct actuator family and feedback source first.</li>\n        <li>Make sure target units are meaningful and consistent.</li>\n        <li>Set tolerance and hard bounds early.</li>\n        <li>Add gravity or cosine compensation if the mechanism physics need it.</li>\n        <li>Enable motion profiling if instantaneous steps are too violent.</li>\n        <li>\n          Tune approach behavior with <code>REV_UP</code> and hold behavior with{" "}\n          <code>MAINTAIN</code>.\n        </li>\n      </ol>\n\n      <h2>Important differences between the tuners</h2>\n      <ul>\n        <li>\n          Velocity uses raw <code>ticks/s</code>; position uses normalized move scaling internally.\n        </li>\n        <li>\n          Velocity has characterization and relay auto-tuning; position focuses on actuator and\n          feedforward modeling.\n        </li>\n        <li>\n          Velocity <code>kF</code> is physical feedforward; position <code>kF</code> is static trim.\n        </li>\n        <li>Position supports motors and servos; velocity is motor-oriented.</li>\n        <li>\n          Position can enforce hard bounds; velocity focuses more on motor-mode ownership and\n          headroom sanity.\n        </li>\n      </ul>\n\n      <h2>Common extension points</h2>\n      <ul>\n        <li>Config builder surfaces</li>\n        <li>Telemetry keys and status blocks</li>\n        <li>Sample OpModes</li>\n        <li>Relay formulas or acceptance logic</li>\n        <li>Motion-profile shape</li>\n        <li>Final summary formatting or export helpers</li>\n      </ul>\n\n      <h2>Practical caveats</h2>\n      <ul>\n        <li>The velocity tuner expects to own motor power control completely.</li>\n        <li>\n          The velocity tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>.\n        </li>\n        <li>\n          A nonzero position <code>kF</code> is not the same concept as velocity <code>kF</code>.\n        </li>\n        <li>\n          Standard-servo closed-loop quality depends heavily on the quality of external feedback.\n        </li>\n        <li>\n          Motion profiling only affects <code>REV_UP</code> in the position tuner.\n        </li>\n        <li>Disruption phases are meaningful only when real feedback exists.</li>\n        <li>Dashboard defaults are starting points, not guarantees.</li>\n      </ul>\n\n      <blockquote>\n        PID Pilot makes live control work easier to reason about. It does not replace mechanical\n        quality, safe targets, or the need to compare tuner behavior against the real match task.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_15 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/reference/setup-rules")({\n  head: () => ({\n    meta: [\n      { title: "Setup Rules — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Hard setup rules for using PID Pilot safely and in ways that match the framework’s control model.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Setup Rules</h1>\n      <p>\n        These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad\n        session for reasons that look like tuning trouble but are really setup trouble.\n      </p>\n\n      <h2>Override only one configure method</h2>\n      <p>\n        A tuning OpMode must override exactly one of <code>configureVelocity()</code> or{" "}\n        <code>configurePosition()</code>. The base runner expects a single active control family.\n      </p>\n\n      <h2>Remember that config refreshes every loop</h2>\n      <p>\n        Any hardware assumptions you make inside the configure method need to remain compatible with\n        the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the\n        OpMode is not a one-time constructor.\n      </p>\n\n      <h2>Let the velocity tuner own motor mode</h2>\n      <p>\n        The velocity tuner is an external power controller and must keep motors in{" "}\n        <code>RUN_WITHOUT_ENCODER</code>. Do not rely on the SDK’s internal velocity mode to “help”\n        it. That produces two loops fighting the same mechanism.\n      </p>\n\n      <h2>Choose exactly one position actuator family</h2>\n      <p>\n        For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed\n        or ambiguous actuator selection is a configuration error, not an advanced feature.\n      </p>\n\n      <h2>Use meaningful units and safe bounds</h2>\n      <ul>\n        <li>Targets should be in the same units as the feedback source.</li>\n        <li>\n          Position mechanisms with hard stops should use <code>positionBounds(...)</code>.\n        </li>\n        <li>Standard servo modes need a valid open-loop mapping range.</li>\n      </ul>\n\n      <h2>Do not treat position kF like velocity kF</h2>\n      <p>\n        Velocity <code>kF</code> is physical feedforward. Position <code>kF</code> is static trim.\n        If you use one concept as though it were the other, the rest of the tuning session becomes\n        hard to interpret.\n      </p>\n\n      <h2>Supply telemetry and watch it live</h2>\n      <p>\n        Always pass <code>telemetry(telemetry)</code>. PID Pilot is designed around rich telemetry\n        surfaces. Running blind removes one of the framework’s strongest advantages.\n      </p>\n\n      <h2>Use conservative first targets</h2>\n      <p>\n        The first run should prove the control path, not challenge the mechanism at its absolute\n        limit. Ask for targets the mechanism can really reach and hold before you start raising\n        ambition.\n      </p>\n    </>\n  );\n}\n';
const __vite_glob_0_16 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/reference/telemetry")({\n  head: () => ({\n    meta: [\n      { title: "Telemetry & Final Summary — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How PID Pilot uses telemetry as a diagnostic surface across the base runner, controller core, velocity tuner, and position tuner.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Telemetry &amp; Final Summary</h1>\n      <p>\n        Telemetry is one of the central design features of PID Pilot. The framework mirrors output\n        to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough\n        internal state that a team can tell whether it is looking at bad feedforward, bad damping,\n        integral windup, poor bounds, or a mechanism limitation.\n      </p>\n\n      <h2>Base runner behavior</h2>\n      <p>\n        <code>PIDFTunerOpMode</code> mirrors telemetry to both surfaces and uses reflection to avoid\n        a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is\n        unavailable, but the richer live workflow remains available when it is connected.\n      </p>\n\n      <h2>Controller-core internals</h2>\n      <p>\n        Because <code>PIDFController</code> stores term contributions and measurement derivatives\n        directly, the tuners can publish controller internals without duplicating the math.\n      </p>\n\n      <ul>\n        <li>\n          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, <code>fTerm</code>\n        </li>\n        <li>Raw and filtered measurement-rate estimates</li>\n        <li>Last output, error, and error rate</li>\n      </ul>\n\n      <h2>Velocity tuner telemetry</h2>\n      <CodeBlock\n        language="text"\n        code={`mode                 MAINTAIN\nphase                RUNNING\ntarget velocity      ...\nmeasured velocity    ...\nerror                ...\npTerm / iTerm / dTerm / fTerm\ncharacterized kF     ...\nrelay Ku / Pu        ...\nwarnings             ...\ndisruption recovery  ...`}\n      />\n\n      <p>\n        Velocity sessions can also expose characterization data, relay auto-tune metrics,\n        feedforward routing notes, disruption timing, and copyable final gains.\n      </p>\n\n      <h2>Position tuner telemetry</h2>\n      <CodeBlock\n        language="text"\n        code={`mode                 REV_UP\nrequested target     ...\nclamped target       ...\nprofiled target      ...\nprofile velocity     ...\nmeasured position    ...\nactuator mode        ...\nfeedback mode        ...\npTerm / iTerm / dTerm / fTerm\ngravity / cosine ff  ...\nconstraint status    ...\ndisruption stage     ...`}\n      />\n\n      <p>\n        Position sessions add actuator-family and feedback-mode context, target clamping state,\n        profile state, and feedforward breakdown because those things are often as important as the\n        gains themselves.\n      </p>\n\n      <h2>Final summary</h2>\n      <p>\n        At the end of a session, the tuner keeps a copyable summary on screen. The exact contents\n        depend on the control family, but the summary is supposed to capture both the values you\n        might copy and the reason those values were trustworthy.\n      </p>\n\n      <ul>\n        <li>Active tuning mode and gain family</li>\n        <li>Final gain values</li>\n        <li>Characterized or resolved feedforward notes</li>\n        <li>Relay results if relay tuning ran</li>\n        <li>Disruption summary if disruption sampling ran</li>\n      </ul>\n\n      <blockquote>\n        The best use of telemetry is comparative: if you change a feedforward term, a bound, or a\n        target and the trace suddenly makes more physical sense, you learned something about the\n        mechanism before you ever copied a new number.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_17 = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/templates")({\n  head: () => ({\n    meta: [\n      { title: "Sample OpModes — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Ready-to-copy velocity, arm, and elevator tuning OpModes for PID Pilot, using relay auto-tune by default.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Sample OpModes</h1>\n      <p>\n        The library ships three reference OpModes you can copy into TeamCode and adapt. None of them\n        supply gains — each one relies on relay auto-tune, so the pattern to copy is &ldquo;bind\n        hardware, set a target, press start.&rdquo; Change the hardware names and targets to match\n        your robot.\n      </p>\n\n      <h2>TuneFlywheel — velocity</h2>\n      <p>\n        A two-motor shooter. Note two things: hardware is cached on the first{" "}\n        <code>configureVelocity()</code> call (the method runs every loop), and the feeder motors are\n        only powered <strong>after</strong> <code>isStarted()</code> — never during INIT.{" "}\n        <code>averageAbsoluteVelocity(true)</code> handles wheels that spin in opposite directions.\n      </p>\n      <CodeBlock\n        filename="TuneFlywheel.java"\n        language="java"\n        code={`private DcMotorEx intake, transfer, left, right;\nprivate boolean feederStarted;\n\n@Override\nprotected VelocityPIDFTuner.Config configureVelocity() {\n    if (left == null) {\n        intake   = hardwareMap.get(DcMotorEx.class, "intake");\n        transfer = hardwareMap.get(DcMotorEx.class, "transfer");\n        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");\n        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");\n        left.setDirection(DcMotorSimple.Direction.REVERSE);\n    }\n    // Only spin the feeder once the match has actually started.\n    if (!feederStarted && isStarted()) {\n        intake.setPower(1);\n        transfer.setPower(1);\n        feederStarted = true;\n    }\n    return new VelocityPIDFTuner.Config()\n            .target(TARGET_VELOCITY)\n            .withMotors(left, right)\n            .averageAbsoluteVelocity(true)\n            .runDisruptionPhase(true)\n            .disruptionSamples(5)\n            .telemetry(telemetry);\n}`}\n      />\n\n      <h2>TuneArm — position with cosine feedforward</h2>\n      <p>\n        An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from\n        an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while\n        it does. Motion profiling smooths large REV_UP moves.\n      </p>\n      <CodeBlock\n        filename="TuneArm.java"\n        language="java"\n        code={`private DcMotorEx arm;\n\n@Override\nprotected PositionPIDFTuner.Config configurePosition() {\n    if (arm == null) {\n        arm = hardwareMap.get(DcMotorEx.class, "arm");\n    }\n    return new PositionPIDFTuner.Config()\n            .target(TARGET_POSITION)\n            .tuningMode(PIDFTuningMode.REV_UP)\n            .withMotors(arm)\n            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)\n            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)\n            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)\n            .telemetry(telemetry);\n}`}\n      />\n\n      <h2>TuneElevator — position with constant gravity</h2>\n      <p>\n        A vertical lift needs the same hold force at every height, so it uses a single constant\n        gravity feedforward instead of the arm&apos;s cosine geometry. This is the simplest position\n        example.\n      </p>\n      <CodeBlock\n        filename="TuneElevator.java"\n        language="java"\n        code={`private DcMotorEx elevator;\n\n@Override\nprotected PositionPIDFTuner.Config configurePosition() {\n    if (elevator == null) {\n        elevator = hardwareMap.get(DcMotorEx.class, "elevator");\n    }\n    return new PositionPIDFTuner.Config()\n            .target(TARGET_POSITION)\n            .tuningMode(PIDFTuningMode.MAINTAIN)\n            .withMotors(elevator)\n            .feedforwardGravityConstant(ELEVATOR_KG)\n            .telemetry(telemetry);\n}`}\n      />\n\n      <h2>What the samples teach</h2>\n      <ul>\n        <li>Cache hardware once — <code>configure*()</code> runs every loop.</li>\n        <li>Never power auxiliary motors during INIT; gate them on <code>isStarted()</code>.</li>\n        <li>\n          Pick the sample by mechanism <em>physics</em> (constant vs angle-dependent gravity), not\n          just motor count.\n        </li>\n        <li>\n          Feedforward (<code>kG</code>, <code>kCos</code>) is your job; kP/kI/kD are auto-tune&apos;s\n          job.\n        </li>\n      </ul>\n\n      <h2>Adapting them</h2>\n      <ol>\n        <li>Replace hardware names and motor directions first.</li>\n        <li>Set a safe, reachable target.</li>\n        <li>\n          Add feedforward and, for fragile mechanisms, <code>positionBounds(min, max)</code> before\n          you run.\n        </li>\n        <li>Keep the OpMode structure intact so the live runner works as designed.</li>\n      </ol>\n\n      <blockquote>\n        For the full builder surface, use the{" "}\n        <Link to="/docs/velocity/config">Velocity</Link> and{" "}\n        <Link to="/docs/position/config">Position</Link> config references rather than guessing\n        method names.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_18 = 'import { createFileRoute, Link } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/troubleshooting")({\n  head: () => ({\n    meta: [\n      { title: "Troubleshooting — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Troubleshoot common PID Pilot issues in velocity and position sessions using the framework’s real diagnostics and caveats.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Troubleshooting</h1>\n      <p>\n        When a PID Pilot session goes wrong, the fastest path forward is usually to identify which\n        framework assumption is being violated. This page maps common symptoms to the most likely\n        setup or control-model problem and points you to the next page worth reading.\n      </p>\n\n      <div className="not-prose my-8 grid gap-4 md:grid-cols-2">\n        <SymptomCard\n          title="Velocity cannot reach target or warnings mention headroom"\n          desc="The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output."\n          causes={[\n            "Target speed is unrealistic for the current mechanism and battery state.",\n            "The physical kF source is wrong or never established cleanly.",\n            "The loop is spending too much output on proportional correction because the baseline effort was never covered.",\n          ]}\n          links={[\n            { label: "Velocity Overview", to: "/docs/velocity/overview" },\n            { label: "Characterization", to: "/docs/velocity/f-sweep" },\n            { label: "Running Control", to: "/docs/velocity/refinement" },\n          ]}\n        />\n\n        <SymptomCard\n          title="Velocity behavior looks like two controllers are fighting"\n          desc="Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story."\n          causes={[\n            "Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.",\n            "User code is reasserting a conflicting hardware mode inside configureVelocity().",\n            "The tuner is not being allowed to own raw power control.",\n          ]}\n          links={[\n            { label: "Setup Rules", to: "/docs/reference/setup-rules" },\n            { label: "Velocity Overview", to: "/docs/velocity/overview" },\n            { label: "Telemetry", to: "/docs/reference/telemetry" },\n          ]}\n        />\n\n        <SymptomCard\n          title="Position mechanism reaches target once but holds badly"\n          desc="An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load."\n          causes={[\n            "Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.",\n            "You are reading the wrong feedback source or using inconsistent units.",\n            "The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP.",\n          ]}\n          links={[\n            { label: "Position Overview", to: "/docs/position/overview" },\n            { label: "Motion & Feedforward", to: "/docs/position/ku-search" },\n            { label: "Disruption", to: "/docs/position/disturbance" },\n          ]}\n        />\n\n        <SymptomCard\n          title="Position mechanism pushes into a stop or clamps unexpectedly"\n          desc="The requested target and measured motion do not agree, or the controller appears to fight a hard limit."\n          causes={[\n            "Bounds are missing, wrong, or defined in inconsistent units.",\n            "The actuator family or servo mapping range is incorrect.",\n            "Constraint status is telling you something real that you are not reading yet.",\n          ]}\n          links={[\n            { label: "Bounds & Control Flow", to: "/docs/position/refinement" },\n            { label: "Setup Rules", to: "/docs/reference/setup-rules" },\n            { label: "Telemetry", to: "/docs/reference/telemetry" },\n          ]}\n        />\n      </div>\n\n      <h2>First checks before changing gains</h2>\n      <ul>\n        <li>\n          Confirm the mechanism is physically healthy and can move safely through the intended\n          range.\n        </li>\n        <li>\n          Verify hardware names, motor directions, encoder directions, and target sign conventions.\n        </li>\n        <li>Choose a target the mechanism can realistically reach and hold.</li>\n        <li>Read the telemetry notes and warnings instead of only the final gain values.</li>\n        <li>Confirm that the selected control family matches the actual mechanism job.</li>\n      </ul>\n\n      <h2>When to stop the session immediately</h2>\n      <ul>\n        <li>The mechanism is driving into a hard stop.</li>\n        <li>The velocity loop is clearly fighting a motor-mode conflict.</li>\n        <li>The feedback signal is obviously wrong or discontinuous.</li>\n        <li>The mechanism is outside a safe physical range for live testing.</li>\n      </ul>\n\n      <h2>Best next pages</h2>\n      <ul>\n        <li>\n          <Link to="/docs/reference/telemetry">Telemetry &amp; Final Summary</Link> when the raw\n          numbers need interpretation.\n        </li>\n        <li>\n          <Link to="/docs/reference/practical-notes">Workflows &amp; Caveats</Link> when the session\n          looks “legal” but still not useful.\n        </li>\n        <li>\n          <Link to="/docs/reference/faq">FAQ</Link> when the issue is really about the framework’s\n          intended semantics.\n        </li>\n      </ul>\n\n      <blockquote>\n        If the telemetry story and the mechanism physics disagree, trust the physics first and use\n        the telemetry to figure out which framework assumption broke.\n      </blockquote>\n    </>\n  );\n}\n\nfunction SymptomCard({\n  title,\n  desc,\n  causes,\n  links,\n}: {\n  title: string;\n  desc: string;\n  causes: string[];\n  links: { label: string; to: string }[];\n}) {\n  return (\n    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">\n      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>\n      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>\n      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">\n        Likely Causes\n      </p>\n      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">\n        {causes.map((cause) => (\n          <li key={cause}>{cause}</li>\n        ))}\n      </ul>\n      <div className="mt-5 flex flex-wrap gap-2">\n        {links.map((link) => (\n          <Link\n            key={link.to}\n            to={link.to}\n            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand"\n          >\n            {link.label}\n          </Link>\n        ))}\n      </div>\n    </div>\n  );\n}\n';
const __vite_glob_0_19 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { DocsLayout } from "@/components/DocsLayout";\n\nexport const Route = createFileRoute("/docs")({\n  component: DocsLayout,\n});\n';
const __vite_glob_0_20 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/velocity/config")({\n  head: () => ({\n    meta: [\n      { title: "Velocity Config Reference — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "Reference for VelocityPIDFTuner.Config, including feedforward sources, relay tuning, disruption settings, and validation rules.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Velocity Config Reference</h1>\n      <p>\n        <code>VelocityPIDFTuner.Config</code> is the public API for constructing a velocity tuning\n        session. The builder is organized around target selection, motor binding, gain families,\n        feedforward sourcing, relay behavior, and disruption measurement.\n      </p>\n\n      <h2>Required fields</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>target(double)</code>\n            </td>\n            <td>\n              Required target velocity in <code>ticks/s</code>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>withMotors(DcMotorEx...)</code>\n            </td>\n            <td>Bind one or more velocity motors controlled together</td>\n          </tr>\n          <tr>\n            <td>\n              <code>telemetry(Telemetry)</code>\n            </td>\n            <td>Supply telemetry for Driver Station and Dashboard mirroring</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Motor binding</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Notes</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>withMotors(DcMotorEx...)</code>\n            </td>\n            <td>\n              Bind one or more motors driven together. The tuner forces{" "}\n              <code>RUN_WITHOUT_ENCODER</code> so its outer loop owns control.\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>averageAbsoluteVelocity(boolean)</code>\n            </td>\n            <td>\n              Average <code>|velocity|</code> instead of signed velocity — use when paired wheels\n              spin in opposite directions.\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Mode and gain families</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>tuningMode(PIDFTuningMode)</code>\n            </td>\n            <td>Choose the initial active gain family</td>\n          </tr>\n          <tr>\n            <td>\n              <code>revUpGains(kP, kI, kD, kF)</code>\n            </td>\n            <td>\n              Provide manual gains for <code>REV_UP</code>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>maintainGains(kP, kI, kD, kF)</code>\n            </td>\n            <td>\n              Provide manual gains for <code>MAINTAIN</code>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Feedforward and characterization</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>skipCharacterization(double manualKF)</code>\n            </td>\n            <td>\n              Skip startup characterization and force a physical <code>kF</code>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <code>integralSumMax(double)</code>\n            </td>\n            <td>Override anti-windup if you do not want headroom-derived limits</td>\n          </tr>\n          <tr>\n            <td>\n              <code>derivativeAlpha(double)</code>\n            </td>\n            <td>Tune derivative filtering in the shared controller core</td>\n          </tr>\n          <tr>\n            <td>\n              <code>velocityRampTicksPerSecPerSec(double)</code>\n            </td>\n            <td>Slew-limit target changes during running control</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Relay auto-tuning</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>skipRelayTuning()</code>\n            </td>\n            <td>Bypass relay auto-tuning completely</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayAmplitude(double)</code>\n            </td>\n            <td>Set relay strength</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayHysteresisBandPct(double)</code>\n            </td>\n            <td>Set relay deadband as a fraction of target</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayDetune(double)</code>\n            </td>\n            <td>Scale relay-computed gains conservatively</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Disruption sampling</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>runDisruptionPhase(boolean)</code>\n            </td>\n            <td>Enable or disable disruption timing</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionSamples(int)</code>\n            </td>\n            <td>Number of recovery samples to collect</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionReadyStableMs(long)</code>\n            </td>\n            <td>Stable time required before arming a sample</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionDetectTimeoutMs(long)</code>\n            </td>\n            <td>Maximum wait before the sample is considered missed</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionRecoveryTimeoutMs(long)</code>\n            </td>\n            <td>Maximum recovery wait per sample</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionReadyBandPct(double)</code>\n            </td>\n            <td>Ready band around the target velocity</td>\n          </tr>\n          <tr>\n            <td>\n              <code>disruptionDropThresholdPct(double)</code>\n            </td>\n            <td>Velocity drop required to count as a disturbance</td>\n          </tr>\n          <tr>\n            <td>\n              <code>realDisruptionRefineIterations(int)</code>\n            </td>\n            <td>Reserved placeholder for future expansion</td>\n          </tr>\n          <tr>\n            <td>\n              <code>realDisruptionRefineSamples(int)</code>\n            </td>\n            <td>Reserved placeholder for future expansion</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Validation rules</h2>\n      <ul>\n        <li>Target must be present.</li>\n        <li>At least one motor must be supplied.</li>\n        <li>Telemetry must be present.</li>\n      </ul>\n\n      <h2>Example session</h2>\n      <CodeBlock\n        language="java"\n        code={`return new VelocityPIDFTuner.Config()\n        .target(TARGET_VELOCITY)\n        .tuningMode(PIDFTuningMode.MAINTAIN)\n        .withMotors(left, right)\n        .averageAbsoluteVelocity(true)\n        .relayAmplitude(0.12)\n        .relayHysteresisBandPct(0.04)\n        .velocityRampTicksPerSecPerSec(6000.0)\n        .runDisruptionPhase(true)\n        .disruptionSamples(5)\n        .telemetry(telemetry);`}\n      />\n    </>\n  );\n}\n';
const __vite_glob_0_21 = 'import { createFileRoute } from "@tanstack/react-router";\n\nexport const Route = createFileRoute("/docs/velocity/disruption")({\n  head: () => ({\n    meta: [\n      { title: "Velocity Disruption Sampling — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How the velocity tuner measures disturbance recovery when MAINTAIN behavior matters more than raw spin-up.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Disruption Sampling</h1>\n      <p>\n        The velocity tuner includes a second state machine dedicated to measuring recovery after a\n        real disturbance. This matters because a flywheel that looks good on a clean step response\n        can still perform badly once game pieces start loading it.\n      </p>\n\n      <h2>Disruption stages</h2>\n      <ul>\n        <li>\n          <code>WAITING</code>\n        </li>\n        <li>\n          <code>ARMED</code>\n        </li>\n        <li>\n          <code>DETECTING</code>\n        </li>\n        <li>\n          <code>RECOVERING</code>\n        </li>\n        <li>\n          <code>COMPLETE</code>\n        </li>\n      </ul>\n\n      <h2>What the phase measures</h2>\n      <ol>\n        <li>Wait for the mechanism to be stably near target.</li>\n        <li>Detect or apply a disturbance depending on the configured workflow.</li>\n        <li>Measure how far velocity drops.</li>\n        <li>Measure how long it takes to recover into the ready band.</li>\n        <li>Repeat until the requested number of samples is collected.</li>\n      </ol>\n\n      <h2>Configuration knobs</h2>\n      <ul>\n        <li>\n          <code>runDisruptionPhase(boolean)</code>\n        </li>\n        <li>\n          <code>disruptionSamples(int)</code>\n        </li>\n        <li>\n          <code>disruptionReadyStableMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionDetectTimeoutMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionRecoveryTimeoutMs(long)</code>\n        </li>\n        <li>\n          <code>disruptionReadyBandPct(double)</code>\n        </li>\n        <li>\n          <code>disruptionDropThresholdPct(double)</code>\n        </li>\n      </ul>\n\n      <h2>Why it belongs in MAINTAIN</h2>\n      <p>\n        <code>MAINTAIN</code> is the controller personality you care about once the mechanism is\n        already near target and outside forces start pushing it around. Disruption telemetry is the\n        framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole\n        story.\n      </p>\n\n      <h2>What shows up in telemetry</h2>\n      <ul>\n        <li>Recovery timing</li>\n        <li>Drop magnitude</li>\n        <li>Sample counts and completion status</li>\n        <li>Instructional notes about when the mechanism is ready for the next disturbance</li>\n      </ul>\n\n      <blockquote>\n        If a shooter must survive repeated loading, a fast <code>REV_UP</code> result alone is not\n        enough. Use disruption recovery to decide whether the hold-side gain family is the one you\n        should ship.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_22 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/velocity/f-sweep")({\n  head: () => ({\n    meta: [\n      { title: "Velocity Characterization & Feedforward — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How VelocityPIDFTuner characterizes max velocity, computes physical kF, and chooses a feedforward source.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Characterization &amp; Feedforward</h1>\n      <p>\n        The velocity tuner begins by trying to establish a believable physical feedforward. This is\n        one of the most important design choices in the framework because good velocity control gets\n        dramatically easier once the loop stops asking PID to supply the entire baseline effort.\n      </p>\n\n      <h2>Startup characterization</h2>\n      <p>\n        During <strong>CHARACTERIZING</strong>, the tuner drives the mechanism at full power,\n        samples the final portion of the run, estimates max steady-state velocity, and computes:\n      </p>\n\n      <CodeBlock language="text" code={`kF = 1 / maxVelocity`} />\n\n      <p>\n        In this framework, that is a real physical feedforward in motor power per{" "}\n        <code>ticks/s</code>. The point is to tell the controller how much output the mechanism\n        usually needs just to maintain a target speed.\n      </p>\n\n      <h2>Why the tuner pauses after characterization</h2>\n      <p>\n        The <strong>SETTLING</strong> phase immediately follows characterization. Output is driven\n        to zero, controller memory is cleared, and the tuner pauses briefly so the next phase starts\n        from a clean state instead of inheriting momentum and stale integrator history from full\n        power operation.\n      </p>\n\n      <h2>Feedforward can come from multiple sources</h2>\n      <ul>\n        <li>\n          A newly characterized physical <code>kF</code>.\n        </li>\n        <li>\n          A manual value provided through <code>skipCharacterization(manualKF)</code>.\n        </li>\n        <li>\n          A nonzero <code>kF</code> embedded directly in the active gain set.\n        </li>\n      </ul>\n\n      <p>\n        The tuner treats feedforward selection and phase routing as related but not identical. Once\n        relay tuning or running control is already active, changing which feedforward source is\n        available should not destroy the current state machine.\n      </p>\n\n      <h2>Methods behind the routing</h2>\n      <ul>\n        <li>\n          <code>resolveActivePhysicalKf()</code> chooses the current physical source.\n        </li>\n        <li>\n          <code>resolveModePhysicalKf(...)</code> checks the gain family currently in use.\n        </li>\n        <li>\n          <code>usesManualKf()</code> and <code>usesConfiguredGainKf()</code> explain why a source\n          won.\n        </li>\n        <li>\n          <code>syncFeedforwardMode()</code> keeps phase logic coherent while sources change.\n        </li>\n      </ul>\n\n      <h2>What to watch in telemetry</h2>\n      <ul>\n        <li>\n          The estimated max velocity and characterized <code>kF</code>.\n        </li>\n        <li>\n          Whether the tuner says it is using a manual or configured gain-set <code>kF</code>.\n        </li>\n        <li>Any warning that feedforward already consumes too much output headroom.</li>\n      </ul>\n\n      <blockquote>\n        If the characterized <code>kF</code> looks physically unreasonable, stop there. Do not try\n        to “save” the session by adding more P or I on top of a bad baseline effort estimate.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_23 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/velocity/ku-search")({\n  head: () => ({\n    meta: [\n      { title: "Velocity Relay Auto-Tuning — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How VelocityPIDFTuner uses a hysteretic relay to estimate Ku, Pu, and conservative starting gains.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Relay Auto-Tuning</h1>\n      <p>\n        The velocity tuner’s automatic gain discovery is built around a hysteretic relay rather than\n        a hand-wavy default gain. This is the framework’s answer to the reality that a single\n        starting <code>kP</code> cannot fit both a fast flywheel and a slow high-inertia mechanism.\n      </p>\n\n      <h2>What the relay phase does</h2>\n      <ol>\n        <li>The tuner effectively zeros traditional PID gains.</li>\n        <li>It runs feedforward plus a relay signal around the target.</li>\n        <li>The relay forces a stable oscillation instead of relying on chance instability.</li>\n        <li>Oscillation amplitude and period are measured.</li>\n        <li>\n          The tuner estimates <code>Ku</code> and <code>Pu</code>, then computes conservative{" "}\n          <code>REV_UP</code> and <code>MAINTAIN</code> gain sets.\n        </li>\n      </ol>\n\n      <h2>Relay subsystem states</h2>\n      <ul>\n        <li>\n          <code>WAITING_FOR_TARGET</code>\n        </li>\n        <li>\n          <code>OSCILLATING</code>\n        </li>\n        <li>\n          <code>COMPUTING</code>\n        </li>\n        <li>\n          <code>COMPLETE</code>\n        </li>\n      </ul>\n\n      <p>\n        It also tracks which side of the target the signal is on so it can detect clean zero\n        crossings and compute the oscillation period honestly.\n      </p>\n\n      <h2>Why hysteresis is essential</h2>\n      <p>\n        Encoder noise near target would make a zero-hysteresis relay chatter constantly. The\n        hysteresis band prevents false switching so the tuner measures a real oscillation instead of\n        noise around the setpoint.\n      </p>\n\n      <h2>Operator-facing knobs</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Method</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <code>skipRelayTuning()</code>\n            </td>\n            <td>Bypass relay auto-tuning entirely</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayAmplitude(double)</code>\n            </td>\n            <td>Control how strong the relay push is</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayHysteresisBandPct(double)</code>\n            </td>\n            <td>Control how wide the deadband is near target</td>\n          </tr>\n          <tr>\n            <td>\n              <code>relayDetune(double)</code>\n            </td>\n            <td>Scale the computed gains conservatively after estimation</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Methods worth knowing</h2>\n      <ul>\n        <li>\n          <code>runRelayTuningLoop(...)</code> executes the active relay behavior.\n        </li>\n        <li>\n          <code>applyRelayComputedGains()</code> loads the calculated gain families.\n        </li>\n        <li>\n          <code>applyRelayHeadroomGuard(...)</code> keeps the results physically reasonable.\n        </li>\n        <li>\n          <code>appendRelayTuneNote(...)</code> surfaces what happened in telemetry.\n        </li>\n      </ul>\n\n      <h2>What comes out of the phase</h2>\n      <CodeBlock\n        language="text"\n        code={`oscillation amplitude\noscillation period\nKu\nPu\ncomputed MAINTAIN gains\ncomputed REV_UP gains`}\n      />\n\n      <blockquote>\n        Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a\n        license to ignore telemetry, headroom warnings, or impossible targets.\n      </blockquote>\n    </>\n  );\n}\n';
const __vite_glob_0_24 = `import { createFileRoute, Link } from "@tanstack/react-router";

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
`;
const __vite_glob_0_25 = 'import { createFileRoute } from "@tanstack/react-router";\nimport { CodeBlock } from "@/components/CodeBlock";\n\nexport const Route = createFileRoute("/docs/velocity/refinement")({\n  head: () => ({\n    meta: [\n      { title: "Velocity Running Control & Headroom — PID Pilot" },\n      {\n        name: "description",\n        content:\n          "How VelocityPIDFTuner runs closed-loop control, enforces motor mode, manages target ramping, and warns about unrealistic gains.",\n      },\n    ],\n  }),\n  component: Page,\n});\n\nfunction Page() {\n  return (\n    <>\n      <h1>Running Control &amp; Headroom</h1>\n      <p>\n        Once the velocity tuner reaches <strong>RUNNING</strong>, it becomes a normal external\n        closed-loop controller. What makes the framework valuable here is not only the control law,\n        but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator\n        headroom, and warnings when the requested operating point is physically dubious.\n      </p>\n\n      <h2>Main running loop</h2>\n      <ol>\n        <li>Read average mechanism velocity.</li>\n        <li>Resolve the active target, including optional ramping.</li>\n        <li>\n          Apply the active gain family for <code>REV_UP</code> or <code>MAINTAIN</code>.\n        </li>\n        <li>\n          Compute PID output through <code>PIDFController</code>.\n        </li>\n        <li>Add the resolved feedforward term.</li>\n        <li>Write raw power to the hardware.</li>\n        <li>Publish telemetry and warnings.</li>\n      </ol>\n\n      <h2>Optional target ramping</h2>\n      <p>\n        <code>velocityRampTicksPerSecPerSec(double)</code> lets the tuner slew the active target\n        instead of commanding an instantaneous step. This matters when the mechanism or power system\n        needs a smoother approach before full closed-loop behavior takes over.\n      </p>\n\n      <h2>Why ensureMotorMode exists</h2>\n      <p>\n        The tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>. If another mode slipped in\n        during live config refresh, <code>setPower()</code> could stop meaning raw power and the SDK\n        inner loop could start interpreting the command differently. <code>ensureMotorMode()</code>\n        prevents that nondeterminism.\n      </p>\n\n      <h2>Derived gain sanity logic</h2>\n      <p>\n        <code>updateDerivedGainState()</code> turns controller math into practical warnings. It can\n        derive <code>integralSumMax</code> from remaining output headroom and tell the operator when\n        either feedforward or proportional action is already consuming more output than the\n        mechanism can realistically provide.\n      </p>\n\n      <CodeBlock\n        language="text"\n        code={`warn if kF consumes all headroom\nwarn if kP * target is much larger than remaining headroom\nderive integralSumMax from available output when not overridden`}\n      />\n\n      <h2>Telemetry categories during running control</h2>\n      <ul>\n        <li>Setpoint, measured velocity, error, and active tuning mode</li>\n        <li>\n          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, and <code>fTerm</code>\n        </li>\n        <li>Filtered derivative information from the controller core</li>\n        <li>Active gains, feedforward source notes, and warnings</li>\n        <li>Relay or characterization results that remain relevant to the session</li>\n      </ul>\n\n      <blockquote>\n        When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward\n        baseline or a motor-mode conflict will make every gain discussion less honest.\n      </blockquote>\n    </>\n  );\n}\n';
const docsRouteModules = /* @__PURE__ */ Object.assign({
  "../routes/docs.concepts.pidf-terms.tsx": __vite_glob_0_0,
  "../routes/docs.concepts.scoring.tsx": __vite_glob_0_1,
  "../routes/docs.concepts.tuning-modes.tsx": __vite_glob_0_2,
  "../routes/docs.index.tsx": __vite_glob_0_3,
  "../routes/docs.installation.tsx": __vite_glob_0_4,
  "../routes/docs.position.auto-tune.tsx": __vite_glob_0_5,
  "../routes/docs.position.config.tsx": __vite_glob_0_6,
  "../routes/docs.position.disturbance.tsx": __vite_glob_0_7,
  "../routes/docs.position.hold-f.tsx": __vite_glob_0_8,
  "../routes/docs.position.ku-search.tsx": __vite_glob_0_9,
  "../routes/docs.position.overview.tsx": __vite_glob_0_10,
  "../routes/docs.position.refinement.tsx": __vite_glob_0_11,
  "../routes/docs.quick-start.tsx": __vite_glob_0_12,
  "../routes/docs.reference.faq.tsx": __vite_glob_0_13,
  "../routes/docs.reference.practical-notes.tsx": __vite_glob_0_14,
  "../routes/docs.reference.setup-rules.tsx": __vite_glob_0_15,
  "../routes/docs.reference.telemetry.tsx": __vite_glob_0_16,
  "../routes/docs.templates.tsx": __vite_glob_0_17,
  "../routes/docs.troubleshooting.tsx": __vite_glob_0_18,
  "../routes/docs.tsx": __vite_glob_0_19,
  "../routes/docs.velocity.config.tsx": __vite_glob_0_20,
  "../routes/docs.velocity.disruption.tsx": __vite_glob_0_21,
  "../routes/docs.velocity.f-sweep.tsx": __vite_glob_0_22,
  "../routes/docs.velocity.ku-search.tsx": __vite_glob_0_23,
  "../routes/docs.velocity.overview.tsx": __vite_glob_0_24,
  "../routes/docs.velocity.refinement.tsx": __vite_glob_0_25
});
function routeToModulePath(route) {
  if (route === "/docs") return "../routes/docs.index.tsx";
  return `../routes/docs.${route.replace(/^\/docs\//, "").replaceAll("/", ".")}.tsx`;
}
function extractPageMarkup(source) {
  const match = source.match(/function Page\(\)\s*\{[\s\S]*?return\s*\(([\s\S]*?)\);\s*\}/);
  return match?.[1] ?? source;
}
function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}
function stripJsx(value) {
  return normalizeWhitespace(
    value.replace(/<CodeBlock[\s\S]*?code=\{`([\s\S]*?)`\}[\s\S]*?\/>/g, " $1 ").replace(/\{\s*" "\s*\}/g, " ").replace(/\{\s*' '\s*\}/g, " ").replace(/\{"([^"]*?)"\}/g, " $1 ").replace(/\{'([^']*?)'\}/g, " $1 ").replace(/\{\/\*[\s\S]*?\*\/\}/g, " ").replace(/\{[\s\S]*?\}/g, " ").replace(/<[^>]+>/g, " ")
  );
}
function slugifyHeading(value) {
  return value.toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}
function createUniqueAnchor(title, usedAnchors) {
  const base = slugifyHeading(title) || "section";
  const count = usedAnchors.get(base) ?? 0;
  usedAnchors.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}
function extractHeadings(markup) {
  const headingMatches = [...markup.matchAll(/<(h[1-3])>([\s\S]*?)<\/\1>/g)].map((match) => ({
    end: (match.index ?? 0) + match[0].length,
    index: match.index ?? 0,
    level: Number(match[1].slice(1)),
    title: stripJsx(match[2])
  }));
  const usedAnchors = /* @__PURE__ */ new Map();
  return headingMatches.filter((heading) => Boolean(heading.title)).map((heading, index, all) => {
    const nextHeading = all[index + 1];
    const content = stripJsx(markup.slice(heading.end, nextHeading?.index ?? markup.length));
    return {
      ...heading,
      anchor: createUniqueAnchor(heading.title, usedAnchors),
      content
    };
  });
}
function countCodeSnippets(markup) {
  return [...markup.matchAll(/<CodeBlock\b/g)].length;
}
function extractSearchDoc(doc) {
  const source = docsRouteModules[routeToModulePath(doc.to)] ?? "";
  const markup = extractPageMarkup(source);
  const headings = extractHeadings(markup);
  return {
    ...doc,
    content: stripJsx(markup),
    codeSnippetCount: countCodeSnippets(markup),
    headings: headings.filter(
      (heading) => heading.level === 2 || heading.level === 3
    )
  };
}
const searchableDocs = flatDocs.map(extractSearchDoc);
const searchableDocRecords = searchableDocs.flatMap((doc) => [
  {
    content: doc.content,
    id: `${doc.to}#page`,
    section: doc.section,
    title: doc.title,
    to: doc.to
  },
  ...doc.headings.map((heading) => ({
    anchor: heading.anchor,
    content: heading.content,
    heading: heading.title,
    headingLevel: heading.level,
    id: `${doc.to}#${heading.anchor}`,
    section: doc.section,
    title: doc.title,
    to: doc.to
  }))
]);
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (typeof value === "bigint") {
    return value.toString();
  }
  const result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      const obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return {
    path,
    id,
    weight,
    src,
    getFn
  };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  const list = [];
  let arr = false;
  const deepGet = (obj2, path2, index, arrayIndex) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(arrayIndex !== void 0 ? {
        v: obj2,
        i: arrayIndex
      } : obj2);
    } else {
      const key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value) || typeof value === "bigint")) {
        list.push(arrayIndex !== void 0 ? {
          v: toString(value),
          i: arrayIndex
        } : toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1, i);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1, arrayIndex);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
};
const BasicOptions = {
  isCaseSensitive: false,
  ignoreDiacritics: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
  location: 0,
  threshold: 0.6,
  distance: 100
};
const AdvancedOptions = {
  useExtendedSearch: false,
  useTokenSearch: false,
  getFn: get,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
const Config = Object.freeze({
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
});
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.docs = [];
    this.keys = [];
    this._keysMap = {};
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  // Removes docs at the specified indices (must be sorted ascending)
  removeAll(indices) {
    for (let i = indices.length - 1; i >= 0; i -= 1) {
      this.records.splice(indices[i], 1);
    }
    for (let i = 0, len = this.records.length; i < len; i += 1) {
      this.records[i].i = i;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    const record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    const record = {
      i: docIndex,
      $: {}
    };
    this.keys.forEach((key, keyIndex) => {
      const value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        const subRecords = [];
        for (let i = 0, len = value.length; i < len; i += 1) {
          const item = value[i];
          if (!isDefined(item)) {
            continue;
          }
          if (isString(item)) {
            if (!isBlank(item)) {
              const subRecord = {
                v: item,
                i,
                n: this.norm.get(item)
              };
              subRecords.push(subRecord);
            }
          } else if (isDefined(item.v)) {
            const text = isString(item.v) ? item.v : toString(item.v);
            if (!isBlank(text)) {
              const subRecord = {
                v: text,
                i: item.i,
                n: this.norm.get(text)
              };
              subRecords.push(subRecord);
            }
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        const subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      keys: this.keys.map(({
        getFn,
        ...key
      }) => key),
      records: this.records
    };
  }
}
function createIndex(keys, docs, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const {
    keys,
    records
  } = data;
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  const indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    const match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const calcScore = (errors, currentLocation) => {
    const accuracy = errors / patternLen;
    if (ignoreLocation) return accuracy;
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) return proximity ? 1 : accuracy;
    return accuracy + proximity / distance;
  };
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    const score = calcScore(0, index);
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = calcScore(i, expectedLocation + binMid);
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    const finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    const bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      const currentLocation = j - 1;
      const charMatch = patternAlphabet[text[currentLocation]];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = calcScore(i, currentLocation);
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = calcScore(i + 1, expectedLocation);
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  const mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
function mergeIndices(indices) {
  if (indices.length <= 1) return indices;
  indices.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [indices[0]];
  for (let i = 1, len = indices.length; i < len; i += 1) {
    const last = merged[merged.length - 1];
    const curr = indices[i];
    if (curr[0] <= last[1] + 1) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }
  return merged;
}
const NON_DECOMPOSABLE_MAP = {
  "ł": "l",
  // ł
  "Ł": "L",
  // Ł
  "đ": "d",
  // đ
  "Đ": "D",
  // Đ
  "ø": "o",
  // ø
  "Ø": "O",
  // Ø
  "ħ": "h",
  // ħ
  "Ħ": "H",
  // Ħ
  "ŧ": "t",
  // ŧ
  "Ŧ": "T",
  // Ŧ
  "ı": "i",
  // ı
  "ß": "ss"
  // ß
};
const NON_DECOMPOSABLE_RE = new RegExp("[" + Object.keys(NON_DECOMPOSABLE_MAP).join("") + "]", "g");
const stripDiacritics = String.prototype.normalize ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(NON_DECOMPOSABLE_RE, (ch) => NON_DECOMPOSABLE_MAP[ch]) : (str) => str;
class BitapSearch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      const result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    const allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({
      pattern,
      alphabet,
      startIndex
    }) => {
      const {
        isMatch,
        score,
        indices
      } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices.push(...indices);
      }
    });
    const result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = mergeIndices(allIndices);
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search(_text) {
    return {
      isMatch: false,
      score: 1
    };
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
const searchersLen = searchers.length;
const ESCAPED_PIPE = "\0";
const OR_TOKEN = "|";
function tokenize(pattern) {
  const tokens = [];
  const len = pattern.length;
  let i = 0;
  while (i < len) {
    while (i < len && pattern[i] === " ") i++;
    if (i >= len) break;
    let j = i;
    while (j < len && pattern[j] !== " " && pattern[j] !== '"') j++;
    if (j < len && pattern[j] === '"') {
      j++;
      while (j < len) {
        if (pattern[j] === '"') {
          const next = j + 1;
          if (next >= len || pattern[next] === " ") {
            j++;
            break;
          }
          if (pattern[next] === "$" && (next + 1 >= len || pattern[next + 1] === " ")) {
            j += 2;
            break;
          }
        }
        j++;
      }
      tokens.push(pattern.substring(i, j));
      i = j;
    } else {
      while (j < len && pattern[j] !== " ") j++;
      tokens.push(pattern.substring(i, j));
      i = j;
    }
  }
  return tokens;
}
function parseQuery(pattern, options = {}) {
  const escaped = pattern.replace(/\\\|/g, ESCAPED_PIPE);
  return escaped.split(OR_TOKEN).map((item) => {
    const restored = item.replace(/\u0000/g, "|");
    const query = tokenize(restored.trim()).filter((item2) => item2 && !!item2.trim());
    const results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        const token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        const token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  // Note: searchIn operates on a single text value and sets hasInverse on the
  // result when inverse patterns are involved. _searchObjectList uses this to
  // switch from "ANY key" to "ALL keys" aggregation. See #712.
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const {
      includeMatches,
      isCaseSensitive,
      ignoreDiacritics
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    const allIndices = [];
    let totalScore = 0;
    let hasInverse = false;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      hasInverse = false;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const {
          isMatch,
          indices,
          score
        } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          const type = searcher.constructor.type;
          if (type.startsWith("inverse")) {
            hasInverse = true;
          }
          if (includeMatches) {
            if (MultiMatchSet.has(type)) {
              allIndices.push(...indices);
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          hasInverse = false;
          break;
        }
      }
      if (numMatches) {
        const result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (hasInverse) {
          result.hasInverse = true;
        }
        if (includeMatches) {
          result.indices = mergeIndices(allIndices);
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    const searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, {
  auto = true
} = {}) {
  const next = (query2) => {
    if (isString(query2)) {
      const obj = {
        keyId: null,
        pattern: query2
      };
      if (auto) {
        obj.searcher = createSearcher(query2, options);
      }
      return obj;
    }
    const keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    const node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScoreSingle(matches, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  let totalScore = 1;
  matches.forEach(({
    key,
    norm: norm2,
    score
  }) => {
    const weight = key ? key.weight : null;
    totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
  });
  return totalScore;
}
function computeScore(results, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  results.forEach((result) => {
    result.score = computeScoreSingle(result.matches, {
      ignoreFieldNorm
    });
  });
}
class MaxHeap {
  constructor(limit) {
    this.limit = limit;
    this.heap = [];
  }
  get size() {
    return this.heap.length;
  }
  shouldInsert(score) {
    return this.size < this.limit || score < this.heap[0].score;
  }
  insert(item) {
    if (this.size < this.limit) {
      this.heap.push(item);
      this._bubbleUp(this.size - 1);
    } else if (item.score < this.heap[0].score) {
      this.heap[0] = item;
      this._sinkDown(0);
    }
  }
  extractSorted(sortFn) {
    return this.heap.sort(sortFn);
  }
  _bubbleUp(i) {
    const heap = this.heap;
    while (i > 0) {
      const parent = i - 1 >> 1;
      if (heap[i].score <= heap[parent].score) break;
      const tmp = heap[i];
      heap[i] = heap[parent];
      heap[parent] = tmp;
      i = parent;
    }
  }
  _sinkDown(i) {
    const heap = this.heap;
    const len = heap.length;
    let largest = i;
    do {
      i = largest;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < len && heap[left].score > heap[largest].score) {
        largest = left;
      }
      if (right < len && heap[right].score > heap[largest].score) {
        largest = right;
      }
      if (largest !== i) {
        const tmp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = tmp;
      }
    } while (largest !== i);
  }
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const {
      indices,
      value
    } = match;
    const obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const {
      idx
    } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
const WORD = /\b\w+\b/g;
function createAnalyzer({
  isCaseSensitive = false,
  ignoreDiacritics = false
} = {}) {
  return {
    tokenize(text) {
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (ignoreDiacritics) {
        text = stripDiacritics(text);
      }
      return text.match(WORD) || [];
    }
  };
}
function buildInvertedIndex(records, keyCount, analyzer) {
  const terms = /* @__PURE__ */ new Map();
  const df = /* @__PURE__ */ new Map();
  let fieldCount = 0;
  function addField(text, docIdx, keyIdx, subIdx) {
    const tokens = analyzer.tokenize(text);
    if (!tokens.length) return;
    fieldCount++;
    const termFreqs = /* @__PURE__ */ new Map();
    for (const token of tokens) {
      termFreqs.set(token, (termFreqs.get(token) || 0) + 1);
    }
    for (const [term, tf] of termFreqs) {
      const posting = {
        docIdx,
        keyIdx,
        subIdx,
        tf
      };
      let postings = terms.get(term);
      if (!postings) {
        postings = [];
        terms.set(term, postings);
      }
      postings.push(posting);
      df.set(term, (df.get(term) || 0) + 1);
    }
  }
  for (const record of records) {
    const {
      i: docIdx,
      v,
      $: fields
    } = record;
    if (v !== void 0) {
      addField(v, docIdx, -1, -1);
      continue;
    }
    if (fields) {
      for (let keyIdx = 0; keyIdx < keyCount; keyIdx++) {
        const value = fields[keyIdx];
        if (!value) continue;
        if (Array.isArray(value)) {
          for (const sub of value) {
            addField(sub.v, docIdx, keyIdx, sub.i ?? -1);
          }
        } else {
          addField(value.v, docIdx, keyIdx, -1);
        }
      }
    }
  }
  return {
    terms,
    fieldCount,
    df
  };
}
function addToInvertedIndex(index, record, keyCount, analyzer) {
  const {
    i: docIdx,
    v,
    $: fields
  } = record;
  function addField(text, keyIdx, subIdx) {
    const tokens = analyzer.tokenize(text);
    if (!tokens.length) return;
    index.fieldCount++;
    const termFreqs = /* @__PURE__ */ new Map();
    for (const token of tokens) {
      termFreqs.set(token, (termFreqs.get(token) || 0) + 1);
    }
    for (const [term, tf] of termFreqs) {
      const posting = {
        docIdx,
        keyIdx,
        subIdx,
        tf
      };
      let postings = index.terms.get(term);
      if (!postings) {
        postings = [];
        index.terms.set(term, postings);
      }
      postings.push(posting);
      index.df.set(term, (index.df.get(term) || 0) + 1);
    }
  }
  if (v !== void 0) {
    addField(v, -1, -1);
    return;
  }
  if (fields) {
    for (let keyIdx = 0; keyIdx < keyCount; keyIdx++) {
      const value = fields[keyIdx];
      if (!value) continue;
      if (Array.isArray(value)) {
        for (const sub of value) {
          addField(sub.v, keyIdx, sub.i ?? -1);
        }
      } else {
        addField(value.v, keyIdx, -1);
      }
    }
  }
}
function removeFromInvertedIndex(index, docIdx) {
  for (const [term, postings] of index.terms) {
    const filtered = postings.filter((p) => p.docIdx !== docIdx);
    const removed = postings.length - filtered.length;
    if (removed > 0) {
      index.fieldCount -= removed;
      index.df.set(term, (index.df.get(term) || 0) - removed);
      if (filtered.length === 0) {
        index.terms.delete(term);
        index.df.delete(term);
      } else {
        index.terms.set(term, filtered);
      }
    }
  }
}
class Fuse {
  // Statics are assigned in entry.ts
  constructor(docs, options, index) {
    this.options = {
      ...Config,
      ...options
    };
    if (this.options.useExtendedSearch && false) ;
    if (this.options.useTokenSearch && false) ;
    this._keyStore = new KeyStore(this.options.keys);
    this._docs = docs;
    this._myIndex = null;
    this._invertedIndex = null;
    this.setCollection(docs, index);
    this._lastQuery = null;
    this._lastSearcher = null;
  }
  _getSearcher(query) {
    if (this._lastQuery === query) {
      return this._lastSearcher;
    }
    const opts = this._invertedIndex ? {
      ...this.options,
      _invertedIndex: this._invertedIndex
    } : this.options;
    const searcher = createSearcher(query, opts);
    this._lastQuery = query;
    this._lastSearcher = searcher;
    return searcher;
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
    if (this.options.useTokenSearch) {
      const analyzer = createAnalyzer({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics
      });
      this._invertedIndex = buildInvertedIndex(this._myIndex.records, this._myIndex.keys.length, analyzer);
    }
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
    if (this._invertedIndex) {
      const record = this._myIndex.records[this._myIndex.records.length - 1];
      const analyzer = createAnalyzer({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics
      });
      addToInvertedIndex(this._invertedIndex, record, this._myIndex.keys.length, analyzer);
    }
  }
  remove(predicate = () => false) {
    const results = [];
    const indicesToRemove = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      if (predicate(this._docs[i], i)) {
        results.push(this._docs[i]);
        indicesToRemove.push(i);
      }
    }
    if (indicesToRemove.length) {
      if (this._invertedIndex) {
        for (const idx of indicesToRemove) {
          removeFromInvertedIndex(this._invertedIndex, idx);
        }
      }
      for (let i = indicesToRemove.length - 1; i >= 0; i -= 1) {
        this._docs.splice(indicesToRemove[i], 1);
      }
      this._myIndex.removeAll(indicesToRemove);
    }
    return results;
  }
  removeAt(idx) {
    if (this._invertedIndex) {
      removeFromInvertedIndex(this._invertedIndex, idx);
    }
    const doc = this._docs.splice(idx, 1)[0];
    this._myIndex.removeAt(idx);
    return doc;
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, options) {
    const {
      limit = -1
    } = options || {};
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    if (isString(query) && !query.trim()) {
      let docs = this._docs.map((item, idx) => ({
        item,
        refIndex: idx
      }));
      if (isNumber(limit) && limit > -1) {
        docs = docs.slice(0, limit);
      }
      return docs;
    }
    const useHeap = isNumber(limit) && limit > 0 && isString(query);
    let results;
    if (useHeap) {
      const heap = new MaxHeap(limit);
      if (isString(this._docs[0])) {
        this._searchStringList(query, {
          heap,
          ignoreFieldNorm
        });
      } else {
        this._searchObjectList(query, {
          heap,
          ignoreFieldNorm
        });
      }
      results = heap.extractSorted(sortFn);
    } else {
      results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, {
        ignoreFieldNorm
      });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query, {
    heap,
    ignoreFieldNorm
  } = {}) {
    const searcher = this._getSearcher(query);
    const {
      records
    } = this._myIndex;
    const results = heap ? null : [];
    records.forEach(({
      v: text,
      i: idx,
      n: norm2
    }) => {
      if (!isDefined(text)) {
        return;
      }
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);
      if (isMatch) {
        const result = {
          item: text,
          idx,
          matches: [{
            score,
            value: text,
            norm: norm2,
            indices
          }]
        };
        if (heap) {
          result.score = computeScoreSingle(result.matches, {
            ignoreFieldNorm
          });
          if (heap.shouldInsert(result.score)) {
            heap.insert(result);
          }
        } else {
          results.push(result);
        }
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!("children" in node)) {
        const {
          keyId,
          searcher
        } = node;
        let matches;
        if (keyId === null) {
          matches = [];
          this._myIndex.keys.forEach((key, keyIndex) => {
            matches.push(...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            }));
          });
        } else {
          matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
        }
        if (matches && matches.length) {
          return [{
            idx,
            item,
            matches
          }];
        }
        return [];
      }
      const {
        children,
        operator
      } = node;
      const res = [];
      for (let i = 0, len = children.length; i < len; i += 1) {
        const child = children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = /* @__PURE__ */ new Map();
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (isDefined(item)) {
        const expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap.has(idx)) {
            resultMap.set(idx, {
              idx,
              item,
              matches: []
            });
            results.push(resultMap.get(idx));
          }
          expResults.forEach(({
            matches
          }) => {
            resultMap.get(idx).matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  // When a search involves inverse patterns (e.g. !Syrup), the aggregation
  // across keys switches from "ANY key matches" to "ALL keys must match."
  // This is signaled by hasInverse on the SearchResult from ExtendedSearch.
  //
  // For mixed patterns like "^hello !Syrup", a key failure is ambiguous —
  // it could be the positive or inverse term that failed. In that case we
  // conservatively exclude the item, which is strictly better than the old
  // behavior of including it. See: https://github.com/krisk/Fuse/issues/712
  _searchObjectList(query, {
    heap,
    ignoreFieldNorm
  } = {}) {
    const searcher = this._getSearcher(query);
    const {
      keys,
      records
    } = this._myIndex;
    const results = heap ? null : [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (!isDefined(item)) {
        return;
      }
      const matches = [];
      let anyKeyFailed = false;
      let hasInverse = false;
      keys.forEach((key, keyIndex) => {
        const keyMatches = this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        });
        if (keyMatches.length) {
          matches.push(...keyMatches);
          if (keyMatches[0].hasInverse) {
            hasInverse = true;
          }
        } else {
          anyKeyFailed = true;
        }
      });
      if (hasInverse && anyKeyFailed) {
        return;
      }
      if (matches.length) {
        const result = {
          idx,
          item,
          matches
        };
        if (heap) {
          result.score = computeScoreSingle(result.matches, {
            ignoreFieldNorm
          });
          if (heap.shouldInsert(result.score)) {
            heap.insert(result);
          }
        } else {
          results.push(result);
        }
      }
    });
    return results;
  }
  _findMatches({
    key,
    value,
    searcher
  }) {
    if (!isDefined(value)) {
      return [];
    }
    const matches = [];
    if (isArray(value)) {
      value.forEach(({
        v: text,
        i: idx,
        n: norm2
      }) => {
        if (!isDefined(text)) {
          return;
        }
        const {
          isMatch,
          score,
          indices,
          hasInverse
        } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices,
            hasInverse
          });
        }
      });
    } else {
      const {
        v: text,
        n: norm2
      } = value;
      const {
        isMatch,
        score,
        indices,
        hasInverse
      } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({
          score,
          key,
          value: text,
          norm: norm2,
          indices,
          hasInverse
        });
      }
    }
    return matches;
  }
}
class TokenSearch {
  static condition(_, options) {
    return options.useTokenSearch;
  }
  constructor(pattern, options) {
    this.options = options;
    this.analyzer = createAnalyzer({
      isCaseSensitive: options.isCaseSensitive,
      ignoreDiacritics: options.ignoreDiacritics
    });
    const queryTerms = this.analyzer.tokenize(pattern);
    const invertedIndex = options._invertedIndex;
    const {
      df,
      fieldCount
    } = invertedIndex;
    this.termSearchers = [];
    this.idfWeights = [];
    for (const term of queryTerms) {
      this.termSearchers.push(new BitapSearch(term, {
        location: options.location,
        threshold: options.threshold,
        distance: options.distance,
        includeMatches: options.includeMatches,
        findAllMatches: options.findAllMatches,
        minMatchCharLength: options.minMatchCharLength,
        isCaseSensitive: options.isCaseSensitive,
        ignoreDiacritics: options.ignoreDiacritics,
        ignoreLocation: true
      }));
      const docFreq = df.get(term) || 0;
      const idf = Math.log(1 + (fieldCount - docFreq + 0.5) / (docFreq + 0.5));
      this.idfWeights.push(idf);
    }
  }
  searchIn(text) {
    if (!this.termSearchers.length) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const allIndices = [];
    let weightedScore = 0;
    let maxPossibleScore = 0;
    let matchedCount = 0;
    for (let i = 0; i < this.termSearchers.length; i++) {
      const result = this.termSearchers[i].searchIn(text);
      const idf = this.idfWeights[i];
      maxPossibleScore += idf;
      if (result.isMatch) {
        matchedCount++;
        weightedScore += idf * (1 - result.score);
        if (result.indices) {
          allIndices.push(...result.indices);
        }
      }
    }
    if (matchedCount === 0) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const normalized = maxPossibleScore > 0 ? 1 - weightedScore / maxPossibleScore : 0;
    const searchResult = {
      isMatch: true,
      score: Math.max(1e-3, normalized)
    };
    if (this.options.includeMatches && allIndices.length) {
      searchResult.indices = mergeIndices(allIndices);
    }
    return searchResult;
  }
}
Fuse.version = "7.3.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.match = function(pattern, text, options) {
  const searcher = createSearcher(pattern, {
    ...Config,
    ...options
  });
  return searcher.searchIn(text);
};
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
{
  register(TokenSearch);
}
Fuse.use = function(...plugins) {
  plugins.forEach((plugin) => register(plugin));
};
function truncateSnippet(content, start, end) {
  const snippetStart = Math.max(0, start);
  const snippetEnd = Math.min(content.length, end);
  const slice = content.slice(snippetStart, snippetEnd).trim();
  return `${snippetStart > 0 ? "…" : ""}${slice}${snippetEnd < content.length ? "…" : ""}`;
}
function getPreview(content, matches) {
  const contentMatch = matches?.find(
    (match) => match.key === "content" && match.indices.length > 0
  );
  if (!contentMatch) {
    return truncateSnippet(content, 0, 140);
  }
  const [matchStart, matchEnd] = contentMatch.indices[0];
  return truncateSnippet(content, matchStart - 60, matchEnd + 90);
}
function buildGroups(results, searching) {
  const metaByRoute = new Map(
    searchableDocs.map((doc) => [
      doc.to,
      {
        codeSnippetCount: doc.codeSnippetCount,
        headingCount: doc.headings.length
      }
    ])
  );
  const groups = /* @__PURE__ */ new Map();
  for (const result of results) {
    const meta = metaByRoute.get(result.to) ?? {
      codeSnippetCount: 0,
      headingCount: 0
    };
    const current = groups.get(result.to) ?? {
      codeSnippetCount: meta.codeSnippetCount,
      headingCount: meta.headingCount,
      items: [],
      pagePreview: void 0,
      pageScore: Number.POSITIVE_INFINITY,
      score: result.score,
      section: result.section,
      title: result.title,
      to: result.to
    };
    current.score = Math.min(current.score, result.score);
    if (result.heading) {
      if (!current.items.some((item) => item.id === result.id)) {
        current.items.push(result);
      }
    } else if (!current.pagePreview || result.score < current.pageScore) {
      current.pagePreview = result.preview;
      current.pageScore = result.score;
    }
    groups.set(result.to, current);
  }
  return [...groups.values()].sort((a, b) => a.score - b.score).slice(0, searching ? 6 : 8).map((group) => ({
    ...group,
    items: group.items.sort((a, b) => a.score - b.score).slice(0, searching ? 4 : 2)
  }));
}
function DocSearch() {
  const [open, setOpen] = reactExports.useState(false);
  const [q, setQ] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const fuse = reactExports.useMemo(
    () => new Fuse(searchableDocRecords, {
      keys: [
        { name: "title", weight: 0.35 },
        { name: "heading", weight: 0.3 },
        { name: "section", weight: 0.1 },
        { name: "content", weight: 0.25 }
      ],
      threshold: 0.34,
      ignoreLocation: true,
      minMatchCharLength: 2,
      includeMatches: true,
      includeScore: true
    }),
    []
  );
  const query = q.trim();
  const results = reactExports.useMemo(() => {
    if (!query) {
      return searchableDocs.slice(0, 8).map(
        (doc) => ({
          content: doc.content,
          id: `${doc.to}#page`,
          preview: getPreview(doc.content),
          score: 0,
          section: doc.section,
          title: doc.title,
          to: doc.to
        })
      );
    }
    return fuse.search(query).slice(0, 24).map(
      (result) => ({
        ...result.item,
        preview: getPreview(result.item.content, result.matches),
        score: result.score ?? 0
      })
    );
  }, [fuse, query]);
  const groups = reactExports.useMemo(() => buildGroups(results, Boolean(query)), [query, results]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  reactExports.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "inline-flex h-10 w-full max-w-sm items-center gap-3 rounded-xl border border-border/80 bg-background/90 px-3.5 text-sm text-muted-foreground shadow-sm transition hover:border-border hover:bg-background hover:text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: "Search documentation..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline", children: "⌘ K" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-start justify-center bg-slate-950/22 px-4 pt-18 backdrop-blur-[3px] sm:pt-24",
        onClick: () => setOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            className: "w-full max-w-3xl overflow-hidden rounded-[1.35rem] border border-border/80 bg-background/95 shadow-[0_30px_90px_-38px_rgba(15,23,42,0.55)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border/70 px-4 py-3.5 sm:px-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    value: q,
                    onChange: (e) => setQ(e.target.value),
                    placeholder: "Search the docs...",
                    className: "flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    className: "rounded-md p-1 text-muted-foreground transition hover:bg-accent/70 hover:text-foreground",
                    "aria-label": "Close search",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:px-5", children: query ? "Search Results" : "Browse Docs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[34rem] overflow-y-auto px-2 py-2 sm:px-3", children: groups.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-10 text-center text-sm text-muted-foreground", children: [
                'No results for "',
                query,
                '"'
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-2 py-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: group.to,
                    onClick: () => setOpen(false),
                    className: "group block rounded-2xl px-3 py-3 transition hover:bg-accent/45",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase", children: group.section }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate text-[15px] font-semibold text-foreground", children: group.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-2", children: [
                          group.headingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SearchPill, { label: "Main Topics" }),
                          group.codeSnippetCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SearchPill, { label: "Code Snippets" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" })
                    ] })
                  }
                ),
                group.items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-1 pl-12", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase", children: "Main Topics" }),
                  group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: item.to,
                      hash: item.anchor ? () => item.anchor : void 0,
                      onClick: () => setOpen(false),
                      className: "group flex gap-3 rounded-xl px-3 py-2.5 transition hover:bg-accent/35",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/70 text-muted-foreground transition group-hover:bg-background", children: item.headingLevel === 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CornerDownRight, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium text-foreground", children: item.heading }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-[13px] leading-5 text-muted-foreground",
                              style: {
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden"
                              },
                              children: item.preview
                            }
                          )
                        ] })
                      ]
                    },
                    item.id
                  ))
                ] })
              ] }, group.to)) }) })
            ]
          }
        )
      }
    )
  ] });
}
function SearchPill({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/70 bg-muted/60 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase", children: label });
}
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent$1.displayName = CONTENT_NAME;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible$1;
const Collapsible = Root;
const CollapsibleTrigger = CollapsibleTrigger$1;
const CollapsibleContent = CollapsibleContent$1;
function DocsLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const currentIdx = flatDocs.findIndex((d) => d.to === location.pathname);
  const prev = currentIdx > 0 ? flatDocs[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < flatDocs.length - 1 ? flatDocs[currentIdx + 1] : null;
  const current = flatDocs[currentIdx];
  reactExports.useEffect(() => {
    const headings = document.querySelectorAll(".prose-docs h2, .prose-docs h3");
    const usedIds = /* @__PURE__ */ new Map();
    for (const heading of headings) {
      const text = heading.textContent?.trim();
      if (!text) continue;
      const baseId = slugifyHeading(text) || "section";
      const count = usedIds.get(baseId) ?? 0;
      usedIds.set(baseId, count + 1);
      heading.id = count === 0 ? baseId : `${baseId}-${count + 1}`;
    }
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "lg:hidden",
          onClick: () => setMobileOpen((v) => !v),
          "aria-label": "Toggle menu",
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "PID Pilot", className: "h-8 w-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold tracking-tight", children: "PID Pilot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline", children: "docs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-4 sm:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/docs",
            className: cn(
              "text-sm font-medium transition",
              location.pathname.startsWith("/docs") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: "Docs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/tuner-lab",
            className: "text-sm font-medium text-muted-foreground transition hover:text-foreground",
            children: "Tuner Lab"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { className: "h-9 w-9" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] gap-4 px-4 sm:gap-6 lg:px-6 xl:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "aside",
        {
          className: `${mobileOpen ? "block" : "hidden"} fixed inset-x-0 top-14 z-30 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-sidebar px-4 py-3 shadow-sm lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:w-64 lg:flex-shrink-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-6 lg:shadow-none`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-4 pb-8 lg:space-y-5 lg:pb-12", children: docsNav.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 px-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: section.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: section.links.map(
                (item) => isDocLinkGroup(item) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PhaseGroup,
                  {
                    title: item.title,
                    links: item.links,
                    pathname: location.pathname,
                    onNavigate: () => setMobileOpen(false)
                  },
                  `${section.title}-${item.title}`
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DocNavLink,
                  {
                    link: item,
                    active: location.pathname === item.to,
                    onNavigate: () => setMobileOpen(false)
                  },
                  item.to
                )
              ) })
            ] }, section.title)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1 py-6 sm:py-8 lg:py-10 xl:py-12", children: [
        current && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.section }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: current.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "prose-docs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2", children: [
          prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: prev.to,
              className: "group rounded-lg border border-border p-4 transition hover:border-brand/50 hover:bg-accent/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "← Previous" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-foreground group-hover:text-brand", children: prev.title })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          next && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: next.to,
              className: "group rounded-lg border border-border p-4 text-right transition hover:border-brand/50 hover:bg-accent/30 sm:col-start-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Next →" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-foreground group-hover:text-brand", children: next.title })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function DocNavLink({
  link,
  active,
  onNavigate,
  compact = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: link.to,
      onClick: onNavigate,
      className: cn(
        "block rounded-md border-l-2 text-sm transition",
        compact ? "px-3 py-1.5" : "px-3 py-2",
        active ? "border-brand bg-brand-muted font-medium text-brand" : "border-transparent text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"
      ),
      children: link.title
    }
  ) });
}
function PhaseGroup({
  title,
  links,
  pathname,
  onNavigate
}) {
  const active = links.some((link) => link.to === pathname);
  const [open, setOpen] = reactExports.useState(active);
  reactExports.useEffect(() => {
    if (active) setOpen(true);
  }, [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CollapsibleTrigger,
      {
        className: cn(
          "group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm transition",
          active ? "bg-brand-muted font-medium text-brand" : "text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { className: "mt-1 space-y-0.5 pl-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5 border-l border-border/80", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DocNavLink,
      {
        link,
        active: pathname === link.to,
        onNavigate,
        compact: true
      },
      link.to
    )) }) })
  ] }) });
}
const SplitComponent = DocsLayout;
export {
  SplitComponent as component
};
