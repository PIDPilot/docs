import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Actuator & Feedback Modes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The position tuner is effectively a multi-backend position-control framework. The actuator family determines how commands are written, how measurements are read, and whether a true closed-loop position controller exists at all." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Actuator modes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Mode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "What it means" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MOTOR" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "DC motor position control using encoder feedback and power output" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "SERVO_OPEN_LOOP" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Direct target-to-servo-position mapping with no PID correction" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "SERVO_WITH_EXTERNAL_ENCODER" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Standard servo with external feedback and PID correction layered on top" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CR_SERVO" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Continuous-rotation servo driven from encoder feedback and scaled power output" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedback modes for standard servos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "NONE" }),
        " for open-loop mapping only"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MOTOR_ENCODER" }),
        " when an external encoder motor supplies position"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ANALOG_INPUT" }),
        " when an analog sensor provides the feedback signal"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Standard servo open-loop behavior" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Open-loop standard servo mode is intentionally simple. There is no PID correction and no disruption logic. The target is mapped directly into servo position space, and the tuner forces ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "isAtTarget()" }),
      " to report true because there is no real feedback loop to qualify."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Standard servo closed-loop behavior" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Closed-loop standard servo mode blends a direct servo-position mapping with an external PID correction. The tuner maps the requested target to a base servo position, computes a correction in normalized position space, adds feedforward, and clamps the final command back into ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "[0.0, 1.0]" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "CR servo behavior" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "CR servos behave more like motors: the tuner uses encoder feedback to estimate position and writes scaled power through ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "servoOutputScale" }),
      ". This lets the framework keep one consistent tuning model while still respecting how the actuator is commanded physically."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why this abstraction matters" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Teams do not need separate tuning frameworks for every actuator family. They need one framework that changes its hardware semantics without changing its overall workflow: configure, run live, inspect telemetry, and decide whether the mechanism is behaving for the right reasons." })
  ] });
}
export {
  Page as component
};
