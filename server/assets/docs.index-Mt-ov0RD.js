import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { L as Link } from "./router-CUlrL_qo.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Introduction" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a mechanism, run one OpMode, and its relay auto-tune measures the mechanism and computes working gains for you — live on FTC Dashboard, with no controls background required." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "It covers the two control problems most FTC mechanisms fall into: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "velocity" }),
      " ",
      "(flywheels and shooters) and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "position" }),
      " (arms, elevators, slides, turrets, and servo-driven axes). Both share the same controller core and the same auto-tune engine, but each speaks its own mechanism's language."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-prose my-8 grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntroCard, { title: "Quick Start", desc: "Install the dependency, drop in a sample OpMode, and let auto-tune find your first set of gains.", to: "/docs/quick-start", label: "Start here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntroCard, { title: "Velocity Tuner", desc: "Flywheels and shooters: characterization, relay auto-tune, and disruption recovery in raw ticks/sec.", to: "/docs/velocity/overview", label: "Velocity docs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntroCard, { title: "Position Tuner", desc: "Arms, elevators, and slides: relay auto-tune plus gravity feedforward, motion profiles, and bounds.", to: "/docs/position/overview", label: "Position docs" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What auto-tune actually does" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Hand-tuning PIDF is the biggest wall new teams hit. PID Pilot removes it with the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "relay method" }),
      ": it drives the mechanism into a controlled oscillation around your target, measures the oscillation (its ultimate gain ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Ku" }),
      " and period",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Pu" }),
      "), and applies Ziegler–Nichols formulas to produce working",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " gains. It runs automatically the first time you start the OpMode, for motors and CR servos, on both tuners."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You are never locked into it. Supply your own gains to skip auto-tune, or nudge every gain, band, and timeout live from FTC Dashboard while the mechanism runs." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "How it runs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Your OpMode extends ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTunerOpMode" }),
        " and returns a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Config" }),
        " from",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
        " or ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configurePosition()" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The runner instantiates the matching tuner and drives the live loop — reading sensors, computing control, applying output, and mirroring rich telemetry to the Driver Station and Dashboard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "On start it auto-tunes (unless you skipped it), then holds the target so you can watch and refine." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "gamepad1.x" }),
        " toggles between ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " (fast approach) and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        " (steady-state hold) live."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What's in the library" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFController" }),
        " — the shared control math: derivative-on-measurement, anti-windup, and fully exposed term state."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTunerOpMode" }),
        " — the live runner: config refresh every loop, telemetry mirroring, and the mode toggle."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "VelocityPIDFTuner" }),
        " — raw ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
        " control, feedforward characterization, relay auto-tune, and disruption recovery."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PositionPIDFTuner" }),
        " — motors, CR servos, and standard servos, with relay auto-tune, motion profiles, gravity/cosine feedforward, and hard bounds."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Ready-to-copy sample OpModes: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TuneFlywheelNew" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TuneArm" }),
        ", and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TuneElevator" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Suggested reading order" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/installation", children: "Installation" }),
        " then",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/quick-start", children: "Quick Start" }),
        " to get auto-tune running."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/pidf-terms", children: "PIDF Terms" }),
        " and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/scoring", children: "How Auto-Tune Works" }),
        " to understand what the numbers mean."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The velocity or position section that matches your mechanism." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/reference/telemetry", children: "Telemetry" }),
        " and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/troubleshooting", children: "Troubleshooting" }),
        " when you need to decode real behavior."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "PID Pilot reasons about control; it does not hide bad hardware. It works best when the mechanism is already mechanically healthy, with a safe range of motion and consistent sensors." })
  ] });
}
function IntroCard({
  title,
  desc,
  to,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "mt-4 inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand", children: label })
  ] });
}
export {
  Page as component
};
