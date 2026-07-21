import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Motion Profile & Feedforward" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Position tuning is not only “PID plus position.” The framework shapes approach behavior with optional trapezoidal profiling and separates different baseline-effort terms so the operator can reason about them honestly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Move normalization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The tuner scales target and measurement by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "moveScaleTicks" }),
      ", which is based on actual move distance together with a tolerance floor. This keeps small moves from feeling hyper-aggressive while still letting long moves use the same overall gain family."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Motion profiling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      ", the tuner can replace an instantaneous step with a trapezoidal profile. That is enabled through:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "java", code: `useMotionProfile(maxVelocity, maxAcceleration)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If profiling is disabled, the profiled target simply equals the requested target. If it is enabled, the tuner computes a position, velocity, and acceleration trajectory each loop." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedforward pieces" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "Static trim from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" })
        ] }),
        " ",
        "helps break friction or stiction."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "Constant gravity term from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kG" })
        ] }),
        " ",
        "helps elevators and vertical slides."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "Cosine compensation from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kCos" })
        ] }),
        " ",
        "helps arms or joints with changing gravity torque."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Static trim is not velocity feedforward" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In the position tuner, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " is applied as a sign-aware static trim term. It is intentionally not the same concept as the velocity tuner’s physical feedforward. Treating them as interchangeable is one of the fastest ways to confuse a tuning session."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Cosine compensation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cosine feedforward uses an encoder-angle mapping and computes:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `kCos * cos((position - zeroTicks) / ticksPerRadian)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "That is why ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "cosineFeedforwardReference(zeroTicks, ticksPerRadian)" }),
      " is required whenever ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kCos" }),
      " is nonzero."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When each term is most useful" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Term" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Typical mechanism" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Any mechanism with noticeable static friction or breakaway effort" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kG" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Elevators and vertical slides" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kCos" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Arms, joints, or mechanisms with angle-dependent gravity torque" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Page as component
};
