import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { L as Link } from "./router-CUlrL_qo.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Velocity Tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "VelocityPIDFTuner" }),
      " tunes speed-controlled mechanisms — flywheels and shooters. On start it estimates a physical ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      ", then",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/ku-search", children: "relay auto-tunes" }),
      " kP/kI/kD for you. Beyond that it handles feedforward, phase routing, disruption measurement, and telemetry rich enough to explain why the controller behaves the way it does."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "New here? The fastest path is ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/quick-start", children: "Quick Start" }),
      " — bind your motors, set a target, press start, and read the gains off Dashboard. The pages below explain each phase in depth."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Raw units are deliberate" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The velocity tuner works in raw ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
      ". That means the gain values often look numerically small, but the numbers are honest: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kP" }),
      ", ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kI" }),
      ",",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kD" }),
      ", and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " all correspond to real physical units instead of a hidden normalization scheme."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Lifecycle phases" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CHARACTERIZING" }),
        " estimates a physical ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " from max velocity."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SETTLING" }),
        " pauses output and clears controller memory before the next step."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RELAY_TUNING" }),
        " creates a controlled oscillation to estimate usable gains."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RELAY_COMPLETE" }),
        " briefly surfaces relay results before normal control takes over."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RUNNING" }),
        " performs normal closed-loop control with active gains."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "DISRUPTION" }),
        " measures recovery after a real disturbance when hold quality matters."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "COMPLETE" }),
        " exposes final summary lines and copyable values."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Main responsibilities inside the class" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Manage active gain families and mode switching." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Resolve the physical feedforward source." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Characterize startup behavior when needed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Run relay auto-tuning when enabled." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Apply normal closed-loop control in raw power space." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Measure disruption recovery in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Render operational telemetry and warnings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why motor mode enforcement matters" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The tuner is an external power controller and must keep motors in",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUN_WITHOUT_ENCODER" }),
      ". Because the surrounding OpMode refreshes config every loop, user code might accidentally reassert another run mode. If that happened and the tuner did not push back, the SDK’s inner loop could start fighting the tuner's outer loop."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Important next pages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/f-sweep", children: "Characterization & Feedforward" }),
        " explains how physical ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is sourced."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/ku-search", children: "Relay Auto-Tuning" }),
        " explains how the tuner derives conservative starting gains."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/refinement", children: "Running Control & Headroom" }),
        " explains the normal update loop, ramping, and gain sanity warnings."
      ] })
    ] })
  ] });
}
export {
  Page as component
};
