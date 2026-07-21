import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Disruption Sampling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The velocity tuner includes a second state machine dedicated to measuring recovery after a real disturbance. This matters because a flywheel that looks good on a clean step response can still perform badly once game pieces start loading it." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Disruption stages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "WAITING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ARMED" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "DETECTING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RECOVERING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "COMPLETE" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What the phase measures" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wait for the mechanism to be stably near target." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Detect or apply a disturbance depending on the configured workflow." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Measure how far velocity drops." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Measure how long it takes to recover into the ready band." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Repeat until the requested number of samples is collected." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Configuration knobs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "runDisruptionPhase(boolean)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionSamples(int)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyStableMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDetectTimeoutMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionRecoveryTimeoutMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyBandPct(double)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDropThresholdPct(double)" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why it belongs in MAINTAIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " is the controller personality you care about once the mechanism is already near target and outside forces start pushing it around. Disruption telemetry is the framework’s way of quantifying that job instead of assuming a clean spin-up tells the whole story."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What shows up in telemetry" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Recovery timing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Drop magnitude" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sample counts and completion status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Instructional notes about when the mechanism is ready for the next disturbance" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "If a shooter must survive repeated loading, a fast ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " result alone is not enough. Use disruption recovery to decide whether the hold-side gain family is the one you should ship."
    ] })
  ] });
}
export {
  Page as component
};
