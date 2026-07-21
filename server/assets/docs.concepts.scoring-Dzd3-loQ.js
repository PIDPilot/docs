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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "How Auto-Tune Works" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Both tuners auto-tune with the same engine: the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "relay method" }),
      " ",
      "(Åström–Hägglund). Instead of guessing gains and nudging them, it makes the mechanism reveal its own dynamics, measures them, and converts the measurement into PIDF gains with textbook formulas. This page explains what's happening under the hood."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "The idea: make it oscillate on purpose" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Drive a mechanism with a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "relay" }),
      " — full push when it's below target, full pull when it's above — and it settles into a steady oscillation around the target. That limit cycle is not noise; its size and speed are a fingerprint of the mechanism's dynamics."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "amplitude" }),
        " of the oscillation, together with the relay strength, gives the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ultimate gain" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Ku" }),
        " — how much proportional gain the system can take before it oscillates on its own."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "period" }),
        " of the oscillation is the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ultimate period" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Pu" }),
        " — how fast the system naturally cycles at that edge."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A hysteresis band around the target keeps sensor noise from causing false switches, so the relay produces a clean oscillation instead of chatter." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "From measurement to gains" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Once ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Ku" }),
      " and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Pu" }),
      " are known, Ziegler–Nichols-style formulas produce the gains. PID Pilot computes a calmer ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " set (good disturbance rejection) and a more aggressive ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " set (fast approach) from the same measurement, and a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "detune" }),
      " factor lets you scale how aggressive the result is."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `Ku = (4 · relayAmplitude) / (π · oscillationAmplitude)
Pu = oscillation period

MAINTAIN:  kP ≈ 0.3·Ku   kI ≈ kP/Pu     kD ≈ kP·Pu/8
REV_UP:    kP ≈ 0.5·Ku   kI = 0         kD ≈ kP·Pu/20
           (each scaled by relayDetune)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "The lifecycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The two tuners run slightly different phase sequences on start:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `Velocity:  CHARACTERIZING → SETTLING → RELAY_TUNING → RELAY_COMPLETE → RUNNING
Position:                          RELAY_TUNING → RELAY_COMPLETE → RUNNING` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Velocity" }),
        " first runs a short full-power sweep (CHARACTERIZING) to estimate a physical feedforward ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF ≈ 1/maxVelocity" }),
        ", settles, then relays. Feedforward gets the wheel near speed; the relay tunes the feedback around it."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Position" }),
        " skips characterization — closing the relay on position error both drives the mechanism to the target and induces the oscillation in one motion. Gravity / cosine feedforward holds it in place while the relay works."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RELAY_COMPLETE" }),
        " briefly displays the result, then ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RUNNING" }),
        " ",
        "hands off to normal closed-loop control with the computed gains."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "Because auto-tune starts in the OpMode constructor (during INIT), the tuners re-baseline their phase clocks the moment you press start — so a long INIT wait never eats into the measurement window." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When it can't measure" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "If the mechanism can't be made to oscillate — too much friction or backlash, or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude" }),
      " set too low — the relay times out, leaves your default gains in place, and posts a note on the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayTuneNote" }),
      " telemetry key. Raise",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude" }),
      ", check the hardware, or tune by hand."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "The architecture behind it" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Auto-tune is one system inside a clean split: generic control math, mechanism-specific logic, and runtime orchestration each live in their own place." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Class" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Responsibility" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFController" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Raw control math: derivative-on-measurement, anti-windup, term state, clamping" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTunerOpMode" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Runtime shell: loop timing, live config refresh, telemetry mirror, mode toggle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "VelocityPIDFTuner" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "ticks/s control, characterization, relay auto-tune, disruption recovery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PositionPIDFTuner" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Actuator / feedback abstraction, relay auto-tune, motion profiles, feedforward, bounds" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Next: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/ku-search", children: "Velocity Auto-Tune" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/auto-tune", children: "Position Auto-Tune" }),
      " for the tuner-specific details, or ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/tuning-modes", children: "REV_UP vs MAINTAIN" }),
      " for why there are two gain sets."
    ] })
  ] });
}
export {
  Page as component
};
