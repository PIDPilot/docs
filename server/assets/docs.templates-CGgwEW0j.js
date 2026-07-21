import { T as jsxRuntimeExports } from "./worker-entry-BHG0Bsvg.js";
import { L as Link } from "./router-CUlrL_qo.js";
import { C as CodeBlock } from "./CodeBlock-BsEdrsNF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-JMHtqSFh.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Sample OpModes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The library ships three reference OpModes you can copy into TeamCode and adapt. None of them supply gains — each one relies on relay auto-tune, so the pattern to copy is “bind hardware, set a target, press start.” Change the hardware names and targets to match your robot." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "TuneFlywheel — velocity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "A two-motor shooter. Note two things: hardware is cached on the first",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
      " call (the method runs every loop), and the feeder motors are only powered ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "after" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "isStarted()" }),
      " — never during INIT.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "averageAbsoluteVelocity(true)" }),
      " handles wheels that spin in opposite directions."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { filename: "TuneFlywheel.java", language: "java", code: `private DcMotorEx intake, transfer, left, right;
private boolean feederStarted;

@Override
protected VelocityPIDFTuner.Config configureVelocity() {
    if (left == null) {
        intake   = hardwareMap.get(DcMotorEx.class, "intake");
        transfer = hardwareMap.get(DcMotorEx.class, "transfer");
        left     = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right    = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);
    }
    // Only spin the feeder once the match has actually started.
    if (!feederStarted && isStarted()) {
        intake.setPower(1);
        transfer.setPower(1);
        feederStarted = true;
    }
    return new VelocityPIDFTuner.Config()
            .target(TARGET_VELOCITY)
            .withMotors(left, right)
            .averageAbsoluteVelocity(true)
            .runDisruptionPhase(true)
            .disruptionSamples(5)
            .telemetry(telemetry);
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "TuneArm — position with cosine feedforward" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while it does. Motion profiling smooths large REV_UP moves." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { filename: "TuneArm.java", language: "java", code: `private DcMotorEx arm;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (arm == null) {
        arm = hardwareMap.get(DcMotorEx.class, "arm");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.REV_UP)
            .withMotors(arm)
            .useMotionProfile(MAX_VELOCITY, MAX_ACCELERATION)
            .feedforwardCosineConstant(ARM_KCOS)          // gravity ~ cos(angle)
            .cosineFeedforwardReference(ZERO_TICKS, TICKS_PER_RADIAN)
            .telemetry(telemetry);
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "TuneElevator — position with constant gravity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A vertical lift needs the same hold force at every height, so it uses a single constant gravity feedforward instead of the arm's cosine geometry. This is the simplest position example." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { filename: "TuneElevator.java", language: "java", code: `private DcMotorEx elevator;

@Override
protected PositionPIDFTuner.Config configurePosition() {
    if (elevator == null) {
        elevator = hardwareMap.get(DcMotorEx.class, "elevator");
    }
    return new PositionPIDFTuner.Config()
            .target(TARGET_POSITION)
            .tuningMode(PIDFTuningMode.MAINTAIN)
            .withMotors(elevator)
            .feedforwardGravityConstant(ELEVATOR_KG)
            .telemetry(telemetry);
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "What the samples teach" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Cache hardware once — ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configure*()" }),
        " runs every loop."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Never power auxiliary motors during INIT; gate them on ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "isStarted()" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Pick the sample by mechanism ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "physics" }),
        " (constant vs angle-dependent gravity), not just motor count."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Feedforward (",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kG" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kCos" }),
        ") is your job; kP/kI/kD are auto-tune's job."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Adapting them" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Replace hardware names and motor directions first." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Set a safe, reachable target." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Add feedforward and, for fragile mechanisms, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "positionBounds(min, max)" }),
        " before you run."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Keep the OpMode structure intact so the live runner works as designed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "For the full builder surface, use the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/velocity/config", children: "Velocity" }),
      " and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/position/config", children: "Position" }),
      " config references rather than guessing method names."
    ] })
  ] });
}
export {
  Page as component
};
