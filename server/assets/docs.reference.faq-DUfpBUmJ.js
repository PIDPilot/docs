import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "FAQ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why are my REV_UP and MAINTAIN gains different?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Because the framework treats them as different controller personalities. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " ",
      "prioritizes getting there quickly. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " prioritizes holding near target and recovering from disturbance. Different valid gains for the same mechanism are expected."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why does the velocity tuner use raw ticks per second?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "So gain values and feedforward stay physically interpretable. The numbers may look small, but they describe real units rather than a hidden normalization scheme." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why does position kF feel different from velocity kF?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Because they are different concepts. Velocity ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " is baseline effort per",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
      ". Position ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " is a static trim or friction-help term."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why does the tuner keep forcing RUN_WITHOUT_ENCODER?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner must own motor power control if its math is going to mean what the telemetry says it means." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Can I skip characterization or relay tuning?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Yes. Use ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipCharacterization(manualKF)" }),
      " when you already trust a physical feedforward, and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipRelayTuning()" }),
      " when you are supplying manual gain families or want to bypass automatic gain estimation."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why is disruption unavailable in some position sessions?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Because disruption logic is only meaningful when there is real feedback control. In standard servo open-loop mode, the tuner is only mapping target to servo position, so there is no closed-loop hold behavior to evaluate." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Do I always need position bounds?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If the mechanism has hard end stops, yes. Bounds are not only for clamping requested targets; they also prevent the controller from continuing to push outward once the mechanism is already at a limit." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Can I use PID Pilot with custom hardware arrangements?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Usually yes, as long as you can represent the mechanism with one supported actuator family and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied blindly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When should I re-run a tune?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Re-run when the physics change: different gearing, repaired mechanism, new motor, changed wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to the actual mechanism, not to the codebase in the abstract." })
  ] });
}
export {
  Page as component
};
