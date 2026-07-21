import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { C as CodeBlock } from "./CodeBlock-BsEdrsNF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-JMHtqSFh.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Characterization & Feedforward" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The velocity tuner begins by trying to establish a believable physical feedforward. This is one of the most important design choices in the framework because good velocity control gets dramatically easier once the loop stops asking PID to supply the entire baseline effort." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Startup characterization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "During ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CHARACTERIZING" }),
      ", the tuner drives the mechanism at full power, samples the final portion of the run, estimates max steady-state velocity, and computes:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `kF = 1 / maxVelocity` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this framework, that is a real physical feedforward in motor power per",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
      ". The point is to tell the controller how much output the mechanism usually needs just to maintain a target speed."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why the tuner pauses after characterization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SETTLING" }),
      " phase immediately follows characterization. Output is driven to zero, controller memory is cleared, and the tuner pauses briefly so the next phase starts from a clean state instead of inheriting momentum and stale integrator history from full power operation."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedforward can come from multiple sources" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "A newly characterized physical ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "A manual value provided through ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipCharacterization(manualKF)" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "A nonzero ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " embedded directly in the active gain set."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The tuner treats feedforward selection and phase routing as related but not identical. Once relay tuning or running control is already active, changing which feedforward source is available should not destroy the current state machine." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Methods behind the routing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "resolveActivePhysicalKf()" }),
        " chooses the current physical source."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "resolveModePhysicalKf(...)" }),
        " checks the gain family currently in use."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "usesManualKf()" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "usesConfiguredGainKf()" }),
        " explain why a source won."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "syncFeedforwardMode()" }),
        " keeps phase logic coherent while sources change."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What to watch in telemetry" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The estimated max velocity and characterized ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Whether the tuner says it is using a manual or configured gain-set ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Any warning that feedforward already consumes too much output headroom." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "If the characterized ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " looks physically unreasonable, stop there. Do not try to “save” the session by adding more P or I on top of a bad baseline effort estimate."
    ] })
  ] });
}
export {
  Page as component
};
