import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Tuning Modes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTuningMode" }),
      " is a small enum with a large role in the framework. It gives the entire package a shared language for two different controller personalities: one focused on getting there quickly and one focused on holding accurately under disturbances."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "REV_UP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prioritizes fast approach to the target." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Often uses little or no integral." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "May use motion profiling in the position tuner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can accept some overshoot if that buys better approach speed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "MAINTAIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prioritizes low steady-state error and disturbance rejection." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Commonly benefits from integral action." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Is the mode used for disruption sampling." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Represents the controller personality you care about once the mechanism is near target." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why the framework keeps two gain sets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The package does not pretend that approach behavior and hold behavior are the same control problem. Both tuners keep separate gain sets so a team can tune the personality it actually needs instead of forcing one compromise set to cover everything." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "How teams switch modes live" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The base runner handles mode toggling with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "gamepad1.x" }),
      ". When the mode changes, the active tuner swaps gain families and resets state where stale controller memory would be misleading."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Where the effect differs by tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "REV_UP emphasis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "MAINTAIN emphasis" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Velocity tuner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Fast approach and cleaner rev-up behavior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Robust speed hold and disruption recovery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Position tuner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Approach behavior, often with motion profiling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Holding behavior and load rejection near target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Integral usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Often low or zero" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Commonly more useful" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Practical guidance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Use ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " when arrival speed is the main job."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Use ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        " when resisting changing load is the main job."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Expect the same mechanism to produce different valid gains in each mode. That is normal, not a bug." })
    ] })
  ] });
}
export {
  Page as component
};
