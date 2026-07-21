import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Running Control & Headroom" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Once the velocity tuner reaches ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RUNNING" }),
      ", it becomes a normal external closed-loop controller. What makes the framework valuable here is not only the control law, but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator headroom, and warnings when the requested operating point is physically dubious."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Main running loop" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Read average mechanism velocity." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Resolve the active target, including optional ramping." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Apply the active gain family for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " or ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Compute PID output through ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFController" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add the resolved feedforward term." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Write raw power to the hardware." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Publish telemetry and warnings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Optional target ramping" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "velocityRampTicksPerSecPerSec(double)" }),
      " lets the tuner slew the active target instead of commanding an instantaneous step. This matters when the mechanism or power system needs a smoother approach before full closed-loop behavior takes over."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why ensureMotorMode exists" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The tuner must keep motors in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUN_WITHOUT_ENCODER" }),
      ". If another mode slipped in during live config refresh, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "setPower()" }),
      " could stop meaning raw power and the SDK inner loop could start interpreting the command differently. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ensureMotorMode()" }),
      "prevents that nondeterminism."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Derived gain sanity logic" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "updateDerivedGainState()" }),
      " turns controller math into practical warnings. It can derive ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "integralSumMax" }),
      " from remaining output headroom and tell the operator when either feedforward or proportional action is already consuming more output than the mechanism can realistically provide."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `warn if kF consumes all headroom
warn if kP * target is much larger than remaining headroom
derive integralSumMax from available output when not overridden` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Telemetry categories during running control" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Setpoint, measured velocity, error, and active tuning mode" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "pTerm" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "iTerm" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "dTerm" }),
        ", and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "fTerm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Filtered derivative information from the controller core" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Active gains, feedforward source notes, and warnings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Relay or characterization results that remain relevant to the session" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward baseline or a motor-mode conflict will make every gain discussion less honest." })
  ] });
}
export {
  Page as component
};
