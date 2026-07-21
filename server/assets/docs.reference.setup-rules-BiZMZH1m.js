import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Setup Rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These are the rules worth treating as non-negotiable. Ignoring them usually produces a bad session for reasons that look like tuning trouble but are really setup trouble." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Override only one configure method" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "A tuning OpMode must override exactly one of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configurePosition()" }),
      ". The base runner expects a single active control family."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Remember that config refreshes every loop" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Any hardware assumptions you make inside the configure method need to remain compatible with the tuner on every refresh cycle. Live Dashboard edits are powerful, but they mean the OpMode is not a one-time constructor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Let the velocity tuner own motor mode" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The velocity tuner is an external power controller and must keep motors in",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUN_WITHOUT_ENCODER" }),
      ". Do not rely on the SDK’s internal velocity mode to “help” it. That produces two loops fighting the same mechanism."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Choose exactly one position actuator family" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For the position tuner, bind motors, standard servos, or CR servos once and only once. Mixed or ambiguous actuator selection is a configuration error, not an advanced feature." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Use meaningful units and safe bounds" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Targets should be in the same units as the feedback source." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Position mechanisms with hard stops should use ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "positionBounds(...)" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard servo modes need a valid open-loop mapping range." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Do not treat position kF like velocity kF" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Velocity ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " is physical feedforward. Position ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
      " is static trim. If you use one concept as though it were the other, the rest of the tuning session becomes hard to interpret."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Supply telemetry and watch it live" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Always pass ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "telemetry(telemetry)" }),
      ". PID Pilot is designed around rich telemetry surfaces. Running blind removes one of the framework’s strongest advantages."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Use conservative first targets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The first run should prove the control path, not challenge the mechanism at its absolute limit. Ask for targets the mechanism can really reach and hold before you start raising ambition." })
  ] });
}
export {
  Page as component
};
