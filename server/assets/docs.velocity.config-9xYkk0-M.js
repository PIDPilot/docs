import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Velocity Config Reference" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "VelocityPIDFTuner.Config" }),
      " is the public API for constructing a velocity tuning session. The builder is organized around target selection, motor binding, gain families, feedforward sourcing, relay behavior, and disruption measurement."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Required fields" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "target(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Required target velocity in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ticks/s" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withMotors(DcMotorEx...)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bind one or more velocity motors controlled together" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "telemetry(Telemetry)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Supply telemetry for Driver Station and Dashboard mirroring" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Motor binding" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Notes" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withMotors(DcMotorEx...)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Bind one or more motors driven together. The tuner forces",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "RUN_WITHOUT_ENCODER" }),
            " so its outer loop owns control."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "averageAbsoluteVelocity(boolean)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Average ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "|velocity|" }),
            " instead of signed velocity — use when paired wheels spin in opposite directions."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Mode and gain families" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "tuningMode(PIDFTuningMode)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Choose the initial active gain family" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "revUpGains(kP, kI, kD, kF)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Provide manual gains for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "maintainGains(kP, kI, kD, kF)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Provide manual gains for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedforward and characterization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipCharacterization(double manualKF)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Skip startup characterization and force a physical ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "integralSumMax(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Override anti-windup if you do not want headroom-derived limits" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "derivativeAlpha(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Tune derivative filtering in the shared controller core" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "velocityRampTicksPerSecPerSec(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Slew-limit target changes during running control" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Relay auto-tuning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipRelayTuning()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bypass relay auto-tuning completely" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Set relay strength" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayHysteresisBandPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Set relay deadband as a fraction of target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayDetune(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Scale relay-computed gains conservatively" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Disruption sampling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "runDisruptionPhase(boolean)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Enable or disable disruption timing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionSamples(int)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Number of recovery samples to collect" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyStableMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Stable time required before arming a sample" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDetectTimeoutMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Maximum wait before the sample is considered missed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionRecoveryTimeoutMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Maximum recovery wait per sample" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyBandPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Ready band around the target velocity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDropThresholdPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Velocity drop required to count as a disturbance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "realDisruptionRefineIterations(int)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Reserved placeholder for future expansion" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "realDisruptionRefineSamples(int)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Reserved placeholder for future expansion" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Validation rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Target must be present." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At least one motor must be supplied." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Telemetry must be present." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Example session" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "java", code: `return new VelocityPIDFTuner.Config()
        .target(TARGET_VELOCITY)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(left, right)
        .averageAbsoluteVelocity(true)
        .relayAmplitude(0.12)
        .relayHysteresisBandPct(0.04)
        .velocityRampTicksPerSecPerSec(6000.0)
        .runDisruptionPhase(true)
        .disruptionSamples(5)
        .telemetry(telemetry);` })
  ] });
}
export {
  Page as component
};
