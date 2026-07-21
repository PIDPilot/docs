import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { L as Link } from "./router-Ct0ZQmnX.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Position Auto-Tune (Relay)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The position tuner auto-tunes the same way the velocity tuner does: it drives the mechanism into a controlled oscillation around your target, measures it, and computes working",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " gains with Ziegler–Nichols formulas. It runs automatically on start for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "motors and CR servos" }),
      " — arms, elevators, slides, and turrets."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When it runs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Auto-tune runs on start unless you opt out. Concretely:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Runs" }),
        " for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MOTOR" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CR_SERVO" }),
        " actuators when you have not supplied both gain sets."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Skipped" }),
        " if you call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".skipRelayTuning()" }),
        ", or if you supply",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "both" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".revUpGains(...)" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".maintainGains(...)" }),
        " manually."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not supported" }),
        " for standard servos (open-loop or with external feedback) — those are position-commanded, not power-driven, so tune them by hand. See",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/hold-f", children: "Actuator & Feedback Modes" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "The minimal setup" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No gains, no relay settings — just a target, the motor, and (for anything that fights gravity) a feedforward term to hold it in place while the relay works." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { filename: "TuneElevator.java", language: "java", code: `return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(elevator)
        .feedforwardGravityConstant(ELEVATOR_KG) // holds it up during the relay
        .telemetry(telemetry);` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What happens on start" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RELAY_TUNING" }),
        " — the tuner applies your feedforward plus a bang-bang relay signal (±",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude" }),
        ") based on position error. That both drives the mechanism to the target and forces it to oscillate around it. Unlike the velocity tuner, there is no separate “approach” phase — closing the relay on position error does both at once."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Measure" }),
        " — it records the oscillation's amplitude and period across several cycles to compute the ultimate gain ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Ku" }),
        " and period ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Pu" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RELAY_COMPLETE" }),
        " — it holds briefly, shows the computed gains, then hands off to the normal closed loop."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RUNNING" }),
        " — the computed gains take over and the mechanism holds the target under PID. Toggle ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "gamepad1.x" }),
        " for REV_UP vs MAINTAIN."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Keep hands off the mechanism during RELAY_TUNING — a push during measurement corrupts the oscillation and the computed gains. Wait for the phase to read ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUNNING" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Reading the result" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Watch these keys on FTC Dashboard:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `Diagnostics/phase              RELAY_TUNING -> RELAY_COMPLETE -> RUNNING
RelayTune/cyclesCompleted      4/4
RelayTune/amplitudeTicks       23.4
RelayTune/periodSec            0.42
RelayTune/Ku / Pu              0.031 / 0.42
RelayTune/computedMaintainKP   0.61
RelayTune/computedMaintainKI   0.028
RelayTune/computedMaintainKD   0.041
RelayTune/computedRevUpKP      1.02
Diagnostics/relayTuneNote      Relay auto-tune complete.` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Tuning the tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The defaults work for most mechanisms. If auto-tune struggles, three knobs adjust the",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "process" }),
      " (not the mechanism gains):"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Config" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Default" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Raise it when…" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude(a)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "0.3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The mechanism can't overcome friction/gravity to oscillate. Lower it if the swing is violent." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayHysteresisBandPct(p)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "0.03" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Position noise causes chattering / false zero-crossings near the target." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayDetune(f)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "1.0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "You want a gentler (lower) or more aggressive (up to 2.0) result from the same measurement." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "If it can't establish an oscillation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "If the mechanism never oscillates (too much friction/backlash, or ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude" }),
      " ",
      "too low), the relay times out after ~15 seconds, leaves your Dashboard-default gains in place, and posts a note on ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Diagnostics/relayTuneNote" }),
      ". Raise",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude" }),
      ", check the mechanism, or tune by hand."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Opting out" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "java", code: `// Start from your own known-good gains, no auto-tune:
return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .withMotors(arm)
        .revUpGains(0.9, 0.0, 0.12, 0.0)
        .maintainGains(0.6, 0.03, 0.08, 0.0)
        .telemetry(telemetry);

// ...or keep the Dashboard defaults and disable the relay entirely:
        .skipRelayTuning()` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Next: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/config", children: "Config Reference" }),
      " for every builder method, or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/scoring", children: "How Auto-Tune Works" }),
      " for the relay theory shared by both tuners."
    ] })
  ] });
}
export {
  Page as component
};
