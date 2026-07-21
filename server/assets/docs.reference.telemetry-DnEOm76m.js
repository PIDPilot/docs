import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Telemetry & Final Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Telemetry is one of the central design features of PID Pilot. The framework mirrors output to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough internal state that a team can tell whether it is looking at bad feedforward, bad damping, integral windup, poor bounds, or a mechanism limitation." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Base runner behavior" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTunerOpMode" }),
      " mirrors telemetry to both surfaces and uses reflection to avoid a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is unavailable, but the richer live workflow remains available when it is connected."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Controller-core internals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Because ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFController" }),
      " stores term contributions and measurement derivatives directly, the tuners can publish controller internals without duplicating the math."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "pTerm" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "iTerm" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "dTerm" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "fTerm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Raw and filtered measurement-rate estimates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Last output, error, and error rate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Velocity tuner telemetry" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `mode                 MAINTAIN
phase                RUNNING
target velocity      ...
measured velocity    ...
error                ...
pTerm / iTerm / dTerm / fTerm
characterized kF     ...
relay Ku / Pu        ...
warnings             ...
disruption recovery  ...` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Velocity sessions can also expose characterization data, relay auto-tune metrics, feedforward routing notes, disruption timing, and copyable final gains." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Position tuner telemetry" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `mode                 REV_UP
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
disruption stage     ...` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Position sessions add actuator-family and feedback-mode context, target clamping state, profile state, and feedforward breakdown because those things are often as important as the gains themselves." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Final summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At the end of a session, the tuner keeps a copyable summary on screen. The exact contents depend on the control family, but the summary is supposed to capture both the values you might copy and the reason those values were trustworthy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Active tuning mode and gain family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Final gain values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Characterized or resolved feedforward notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Relay results if relay tuning ran" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Disruption summary if disruption sampling ran" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "The best use of telemetry is comparative: if you change a feedforward term, a bound, or a target and the trace suddenly makes more physical sense, you learned something about the mechanism before you ever copied a new number." })
  ] });
}
export {
  Page as component
};
