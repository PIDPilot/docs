import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { C as CodeBlock } from "./CodeBlock-BsEdrsNF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-JMHtqSFh.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Position Config Reference" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PositionPIDFTuner.Config" }),
      " is the public builder for a position tuning session. It lets you select one actuator family, wire an optional feedback source, shape approach behavior, add baseline-effort terms, enforce hard bounds, and configure disruption logic."
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Required target in the same units as the feedback source" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "telemetry(Telemetry)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Required telemetry surface for Driver Station and Dashboard" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Actuator family selection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Use case" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withMotors(DcMotorEx...)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "DC motor position control" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withServos(Servo...)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Standard servo control" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withCRServos(CRServo servo, DcMotorEx... feedbackEncoders)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Single CR servo with encoder feedback" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withCRServos(CRServo[] servos, DcMotorEx... feedbackEncoders)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Multiple CR servos with encoder feedback" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Standard servo feedback and mapping" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withServoFeedback(DcMotorEx)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Closed-loop standard servo with encoder feedback" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withServoFeedbackAnalog(AnalogInput, double voltageToTicksScale)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Closed-loop standard servo with analog feedback" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "withServoOpenLoopRange(double minTicks, double maxTicks)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Required target-to-servo mapping range for standard servo modes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "servoOutputScale(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Scale final command for standard or CR servos" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Mode, gains, and controller shaping" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "tuningMode(PIDFTuningMode)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Select initial gain family" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "revUpGains(kP, kI, kD, kF)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Manual ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
            " gains"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "maintainGains(kP, kI, kD, kF)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Manual ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
            " gains"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "integralSumMax(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Cap integral contribution in output space" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "derivativeAlpha(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Tune derivative filtering" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "positionToleranceTicks(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Define in-band tolerance for at-target checks" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Relay auto-tuning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "For ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MOTOR" }),
      " and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CR_SERVO" }),
      " actuators, relay auto-tune runs on start and computes both gain sets unless you supply both manually or call ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipRelayTuning()" }),
      ". See ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/docs/position/auto-tune", children: "Position Auto-Tune" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "skipRelayTuning()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Disable relay auto-tune and start from the supplied / Dashboard-default gains" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayAmplitude(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bang-bang power used to induce the oscillation (default 0.3)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayHysteresisBandPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Switching band as a fraction of |target| (default 0.03)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "relayDetune(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Scale the relay-computed gains — lower is gentler, up to 2.0 (default 1.0)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Motion profile and bounds" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useMotionProfile(double maxVelocity, double maxAcceleration)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Enable trapezoidal approach shaping in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "positionBounds(double minTicks, double maxTicks)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Enable hard mechanical limits" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Feedforward terms" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "feedforwardGravityConstant(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Constant gravity bias for vertical systems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "feedforwardCosineConstant(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Angle-dependent gravity compensation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "cosineFeedforwardReference(double zeroTicks, double ticksPerRadian)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Encoder-angle mapping for cosine compensation" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Disruption configuration" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Number of recovery samples" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyStableMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Required stable time before a sample is armed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDetectTimeoutMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "How long the tuner waits to detect a disturbance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionRecoveryTimeoutMs(long)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "How long the tuner waits for recovery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionReadyBandPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Ready band around target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disruptionDropThresholdPct(double)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Drop threshold that counts as a disturbance" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Validation rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Target must be present." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Exactly one actuator family must be selected." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Telemetry must be present." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Motion-profile limits must be valid when profiling is enabled." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Position bounds must be valid when bounds are enabled." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Servo output scale must be nonnegative." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kCos" }),
        " requires a cosine reference."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard-servo mapping range must be valid." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only one standard-servo feedback source may be chosen." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Analog feedback scale must be nonzero when analog feedback is used." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "CR servo configurations need feedback encoders and valid counts." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Example session" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "java", code: `return new PositionPIDFTuner.Config()
        .target(TARGET_POSITION)
        .tuningMode(PIDFTuningMode.MAINTAIN)
        .withMotors(slideLeft, slideRight)
        .feedforwardGravityConstant(K_G)
        .positionBounds(MIN_POSITION, MAX_POSITION)
        .positionToleranceTicks(12.0)
        .runDisruptionPhase(true)
        .telemetry(telemetry);` })
  ] });
}
export {
  Page as component
};
