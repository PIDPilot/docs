import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { C as CodeBlock } from "./CodeBlock-BsEdrsNF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-JMHtqSFh.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Bounds & Control Flow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The position tuner’s control loop includes more than PID and feedforward. It has to manage actuator-specific writes, target clamping, at-target qualification, and protection against continued outward drive at hard stops." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Closed-loop update flow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `handle SERVO_OPEN_LOOP separately if needed
read feedback position
update motion profile
apply active gains
normalize target and measurement
compute PID output
compute feedforward
apply actuator-specific output
update at-target counter
update disruption phase
push telemetry` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Hard position constraints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "positionBounds(minTicks, maxTicks)" }),
      " does two jobs. First, it clamps the requested target into a safe range. Second, if the mechanism is already at a hard limit, it suppresses any additional outward command so the controller does not keep pushing into the stop."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why target clamping alone is not enough" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If the actuator is already against a hard stop, a controller can still compute an outward command even when the requested target was clamped. The framework explicitly blocks that behavior because otherwise the mechanism can keep loading the stop and damage itself." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "At-target qualification" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The tuner does not declare victory from one lucky loop. It requires several consecutive in-band loops before ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "isAtTarget()" }),
      " becomes true:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `REQUIRED_AT_TARGET_LOOPS = 5` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This reduces false success caused by noise, backlash, or a transient crossing through the tolerance band." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Telemetry that matters here" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Requested target versus clamped target" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Profiled target, velocity, and acceleration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Measured position and actuator command" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Constraint status and current bound values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At-target qualification state" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "When a position session looks unsafe, check bounds and actuator selection before you touch gains. A wrong actuator mode or missing hard stop is a setup problem, not a tuning problem." })
  ] });
}
export {
  Page as component
};
