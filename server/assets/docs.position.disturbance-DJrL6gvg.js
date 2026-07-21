import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Disruption Sampling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The position tuner also includes a disruption measurement system. Its purpose is to quantify how quickly the mechanism recovers after it is pushed away from target or after a load change makes holding harder than the original approach move." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When the phase is unavailable" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "SERVO_OPEN_LOOP" }),
      ", there is no real feedback controller, so disruption sampling is not meaningful and the framework disables it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Disruption stages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "WAITING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ARMED" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "DETECTING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RECOVERING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "COMPLETE" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What it measures" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hold the mechanism near target until position is stably in band." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Detect a meaningful deviation or load event." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Measure the peak drop away from target." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Measure recovery time back into the ready band." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Repeat until the configured number of samples is collected." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why it matters" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Arms, elevators, and slides often fail the real game task not because they cannot reach the target once, but because they cannot stay there cleanly under changing load. Disruption telemetry lets the team quantify that instead of relying on intuition." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Key configuration methods" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "runDisruptionPhase(boolean)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionSamples(int)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyStableMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDetectTimeoutMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionRecoveryTimeoutMs(long)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyBandPct(double)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDropThresholdPct(double)" }) })
    ] })
  ] });
}
export {
  Page as component
};
