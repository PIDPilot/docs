import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { L as Link } from "./router-Ct0ZQmnX.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Quick Start" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "This is the shortest path to a tuned mechanism. You'll write one small OpMode, press start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes you've finished ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/installation", children: "Installation" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "1. Pick your tuner" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Velocity" }),
        " — flywheels, shooters: anything whose target is a speed."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Position" }),
        " — arms, elevators, slides, turrets: anything driven to a target position."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "2. Write the OpMode" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Extend ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "PIDFTunerOpMode" }),
      " and override exactly one of",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
      " or ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configurePosition()" }),
      ", returning a",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Config" }),
      ". That's the whole setup — you don't supply gains; auto-tune finds them."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { filename: "TuneFlywheel.java", language: "java", code: `package org.firstinspires.ftc.teamcode;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;

@Config
@TeleOp(name = "Tune Flywheel", group = "Tuning")
public class TuneFlywheel extends PIDFTunerOpMode {

    public static double TARGET_VELOCITY = 1800.0; // ticks/sec

    private DcMotorEx left, right;

    @Override
    protected VelocityPIDFTuner.Config configureVelocity() {
        // configure*() runs every loop, so cache hardware the first time only.
        if (left == null) {
            left = hardwareMap.get(DcMotorEx.class, "outtakeL");
            right = hardwareMap.get(DcMotorEx.class, "outtakeR");
            left.setDirection(DcMotorSimple.Direction.REVERSE);
        }
        return new VelocityPIDFTuner.Config()
                .target(TARGET_VELOCITY)
                .withMotors(left, right)
                .averageAbsoluteVelocity(true) // wheels spin opposite by design
                .telemetry(telemetry);
    }
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configureVelocity()" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "configurePosition()" }),
      " are called",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "every control loop" }),
      " so Dashboard edits to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TARGET_VELOCITY" }),
      " apply live. Always cache ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "hardwareMap.get(...)" }),
      " in a field like above — don't re-fetch each call."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "3. Press start — auto-tune runs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Choose a target the mechanism can realistically reach." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Select the OpMode under ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tuning" }),
        ", press ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "INIT" }),
        ", open FTC Dashboard, then press ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "START" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hands clear." }),
        " Velocity first does a short full-power sweep to estimate",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "kF" }),
        ", then relay auto-tune oscillates the mechanism around the target and computes gains. Position goes straight to the relay."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "When it finishes it holds the target. Press ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "gamepad1.x" }),
        " to flip between",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "4. Read the gains off Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The tuner streams the computed gains plus the full controller story. Copy the set that matches the behavior you need — a good ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "REV_UP" }),
      " tune and a good",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "MAINTAIN" }),
      " tune are legitimately different because they solve different problems."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "5. Put them in your real subsystem" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Drop the selected gains into the mechanism class you run in teleop / autonomous." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Test under the real task, not just under the tuner OpMode." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Re-run the tune if gearing, inertia, weight, or feedback changes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Prefer to tune by hand?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Auto-tune is the default, not a requirement. Supply ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".revUpGains(...)" }),
      " and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".maintainGains(...)" }),
      " to start from your own values, or call",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".skipRelayTuning()" }),
      " to disable it entirely and adjust every gain live in Dashboard. The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/pidf-terms", children: "Concepts" }),
      " and Advanced sections cover the manual workflow."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Next: grab a full working example from ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/templates", children: "Sample OpModes" }),
      ", or read ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/concepts/scoring", children: "How Auto-Tune Works" }),
      " to understand what just happened."
    ] })
  ] });
}
export {
  Page as component
};
