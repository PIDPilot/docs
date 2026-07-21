import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Workflows & Caveats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This page condenses the practical parts of the README that matter once the framework is already installed: how teams typically use each tuner, how the two tuners differ, where the framework is meant to be extended, and what assumptions still need engineering judgment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Typical velocity workflow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Start from ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TuneFlywheelNew" }),
        " or an equivalent velocity OpMode."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Set a believable target speed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Let characterization compute a physical ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " unless you already trust one."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Let relay auto-tuning derive starting gain families when appropriate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Compare ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        " against the mechanism’s real job."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use disruption sampling if the wheel must survive repeated load events." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Typical position workflow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pick the correct actuator family and feedback source first." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make sure target units are meaningful and consistent." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Set tolerance and hard bounds early." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add gravity or cosine compensation if the mechanism physics need it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enable motion profiling if instantaneous steps are too violent." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Tune approach behavior with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " and hold behavior with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Important differences between the tuners" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Velocity uses raw ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" }),
        "; position uses normalized move scaling internally."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Velocity has characterization and relay auto-tuning; position focuses on actuator and feedforward modeling." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Velocity ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is physical feedforward; position ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is static trim."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Position supports motors and servos; velocity is motor-oriented." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Position can enforce hard bounds; velocity focuses more on motor-mode ownership and headroom sanity." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Common extension points" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Config builder surfaces" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Telemetry keys and status blocks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sample OpModes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Relay formulas or acceptance logic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Motion-profile shape" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Final summary formatting or export helpers" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Practical caveats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The velocity tuner expects to own motor power control completely." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The velocity tuner must keep motors in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUN_WITHOUT_ENCODER" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "A nonzero position ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        " is not the same concept as velocity ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard-servo closed-loop quality depends heavily on the quality of external feedback." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Motion profiling only affects ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " in the position tuner."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Disruption phases are meaningful only when real feedback exists." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dashboard defaults are starting points, not guarantees." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "PID Pilot makes live control work easier to reason about. It does not replace mechanical quality, safe targets, or the need to compare tuner behavior against the real match task." })
  ] });
}
export {
  Page as component
};
