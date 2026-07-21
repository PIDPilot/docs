import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { C as CodeBlock } from "./CodeBlock-BsEdrsNF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-JMHtqSFh.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Relay Auto-Tuning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The velocity tuner’s automatic gain discovery is built around a hysteretic relay rather than a hand-wavy default gain. This is the framework’s answer to the reality that a single starting ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kP" }),
      " cannot fit both a fast flywheel and a slow high-inertia mechanism."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What the relay phase does" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The tuner effectively zeros traditional PID gains." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It runs feedforward plus a relay signal around the target." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The relay forces a stable oscillation instead of relying on chance instability." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Oscillation amplitude and period are measured." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The tuner estimates ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Ku" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Pu" }),
        ", then computes conservative",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        " gain sets."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Relay subsystem states" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "WAITING_FOR_TARGET" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "OSCILLATING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "COMPUTING" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "COMPLETE" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It also tracks which side of the target the signal is on so it can detect clean zero crossings and compute the oscillation period honestly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why hysteresis is essential" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Encoder noise near target would make a zero-hysteresis relay chatter constantly. The hysteresis band prevents false switching so the tuner measures a real oscillation instead of noise around the setpoint." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Operator-facing knobs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipRelayTuning()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bypass relay auto-tuning entirely" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Control how strong the relay push is" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayHysteresisBandPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Control how wide the deadband is near target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayDetune(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Scale the computed gains conservatively after estimation" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Methods worth knowing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "runRelayTuningLoop(...)" }),
        " executes the active relay behavior."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "applyRelayComputedGains()" }),
        " loads the calculated gain families."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "applyRelayHeadroomGuard(...)" }),
        " keeps the results physically reasonable."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "appendRelayTuneNote(...)" }),
        " surfaces what happened in telemetry."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What comes out of the phase" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `oscillation amplitude
oscillation period
Ku
Pu
computed MAINTAIN gains
computed REV_UP gains` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "Relay auto-tuning is meant to give the team a mechanism-specific starting point. It is not a license to ignore telemetry, headroom warnings, or impossible targets." })
  ] });
}
export {
  Page as component
};
