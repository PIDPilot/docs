import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Shared Concepts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Before you dive into the individual tuners, it helps to understand the common ideas the framework is built around. These concepts explain why the package has the class structure it does and why the telemetry is so detailed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Where P, I, D, and F fit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "P" }),
        " reacts to current error and provides the immediate corrective push."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "I" }),
        " reacts to accumulated error over time and is most valuable when hold quality and steady-state accuracy matter."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "D" }),
        " damps the response and in PID Pilot is based on measurement change, not direct error difference."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "F" }),
        " is not one universal idea: in velocity it is a physical feedforward, while in position it is a static trim or friction-help term."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedforward vs feedback" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The package works hard to keep these jobs distinct. Feedforward supplies the expected baseline effort. PID handles the leftover error. This matters because a team can only debug the controller rationally if it knows whether the mechanism is failing due to a missing baseline effort or due to bad feedback behavior." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Velocity ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is motor power per ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
        " and is meant to be physically interpretable."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Position ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is static trim. Gravity constant and cosine compensation are separate terms because they represent different physics."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Dashboard-driven configuration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "PID Pilot is not based on static startup configuration only. The base OpMode calls",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
      " or ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configurePosition()" }),
      " every loop, so changes made in FTC Dashboard take effect immediately. That is why the tuners must reassert key hardware assumptions during refresh, such as velocity mode ownership."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Telemetry is a diagnostic surface" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The framework exposes more than target, measurement, and error. It publishes controller terms, filtered derivatives, feedforward breakdowns, relay metrics, disruption summaries, warnings, and copyable gain summaries because teams need to know ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "why" }),
      " the loop behaves the way it does."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Derivative on measurement" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFController" }),
      " computes derivative from the measurement rather than from direct error difference. That avoids derivative kick when the setpoint changes suddenly, which is common in FTC because many commands are step changes."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Controller state is intentionally exposed" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The controller stores things like integral memory, measurement rate, filtered measurement rate, term contributions, last error, and last output. The tuners reuse that state directly for telemetry instead of re-deriving it elsewhere. This is part of why the framework can explain controller behavior so clearly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Accumulator units matter" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "When integral is clamped, the controller clamps the stored accumulator rather than only the final ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "iTerm" }),
      ". That keeps the cap tied to error history. The tuners can then derive that cap from actuator headroom while still reasoning about the stored state correctly."
    ] })
  ] });
}
export {
  Page as component
};
