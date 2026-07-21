import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { L as Link } from "./router-CUlrL_qo.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Position Tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PositionPIDFTuner" }),
      " tunes anything driven to a target position — arms, elevators, slides, and turrets. For motors and CR servos it",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/auto-tune", children: "auto-tunes on start" }),
      " via the relay method, the same one-button flow as the velocity tuner. It also supports standard servos (open-loop, or closed-loop with external encoder / analog feedback), which are tuned by hand."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "New here? Go straight to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/auto-tune", children: "Position Auto-Tune" }),
      " — bind a motor, set a target, press start. Everything below is the machinery behind it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What makes it different from the velocity tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It supports multiple actuator and feedback backends." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It normalizes position internally by move scale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "It can use trapezoidal motion profiles in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It separates static trim, gravity constant, and cosine compensation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It can clamp targets and suppress outward command at hard stops." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Major subsystems" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Actuator-family abstraction" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Feedback-source abstraction" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Position normalization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Optional motion profiling" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Static, gravity, and cosine feedforward" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hard position constraints" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At-target qualification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Disruption testing" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why position is normalized" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The tuner scales setpoint and measurement by a move-specific distance scale. Without that, a tiny trim move and a long travel move would feel like unrelated controllers unless gains were changed constantly. The move scale keeps small moves from becoming twitchy while still preserving meaningful units elsewhere in the system." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What page to read next" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/auto-tune", children: "Auto-Tune (Relay)" }),
        " to let it find your gains — the fastest path to a working mechanism."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/hold-f", children: "Actuator & Feedback Modes" }),
        " if you are choosing how the tuner should read and command the mechanism."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/ku-search", children: "Motion Profile & Feedforward" }),
        " if your main question is how the position model is shaped."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/refinement", children: "Bounds & Control Flow" }),
        " if you need to understand safety and loop behavior."
      ] })
    ] })
  ] });
}
export {
  Page as component
};
