import{j as e,L as t}from"./index-DIiyB1Xw.js";import{C as o}from"./CodeBlock-BBuTUr4a.js";import"./createLucideIcon-XeEljrMN.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Quick Start"}),e.jsxs("p",{children:["This is the shortest path to a tuned mechanism. You'll write one small OpMode, press start, and let relay auto-tune find your gains — then read them off FTC Dashboard. Assumes you've finished ",e.jsx(t,{to:"/docs/installation",children:"Installation"}),"."]}),e.jsx("h2",{children:"1. Pick your tuner"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Velocity"})," — flywheels, shooters: anything whose target is a speed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Position"})," — arms, elevators, slides, turrets: anything driven to a target position."]})]}),e.jsx("h2",{children:"2. Write the OpMode"}),e.jsxs("p",{children:["Extend ",e.jsx("code",{children:"PIDFTunerOpMode"})," and override exactly one of"," ",e.jsx("code",{children:"configureVelocity()"})," or ",e.jsx("code",{children:"configurePosition()"}),", returning a"," ",e.jsx("code",{children:"Config"}),". That's the whole setup — you don't supply gains; auto-tune finds them."]}),e.jsx(o,{filename:"TuneFlywheel.java",language:"java",code:`package org.firstinspires.ftc.teamcode;

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
}`}),e.jsxs("blockquote",{children:[e.jsx("code",{children:"configureVelocity()"})," / ",e.jsx("code",{children:"configurePosition()"})," are called"," ",e.jsx("strong",{children:"every control loop"})," so Dashboard edits to ",e.jsx("code",{children:"TARGET_VELOCITY"})," apply live. Always cache ",e.jsx("code",{children:"hardwareMap.get(...)"})," in a field like above — don't re-fetch each call."]}),e.jsx("h2",{children:"3. Press start — auto-tune runs"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Choose a target the mechanism can realistically reach."}),e.jsxs("li",{children:["Select the OpMode under ",e.jsx("strong",{children:"Tuning"}),", press ",e.jsx("strong",{children:"INIT"}),", open FTC Dashboard, then press ",e.jsx("strong",{children:"START"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hands clear."})," Velocity first does a short full-power sweep to estimate"," ",e.jsx("code",{children:"kF"}),", then relay auto-tune oscillates the mechanism around the target and computes gains. Position goes straight to the relay."]}),e.jsxs("li",{children:["When it finishes it holds the target. Press ",e.jsx("code",{children:"gamepad1.x"})," to flip between"," ",e.jsx("code",{children:"REV_UP"})," and ",e.jsx("code",{children:"MAINTAIN"}),"."]})]}),e.jsx("h2",{children:"4. Read the gains off Dashboard"}),e.jsxs("p",{children:["The tuner streams the computed gains plus the full controller story. Copy the set that matches the behavior you need — a good ",e.jsx("code",{children:"REV_UP"})," tune and a good"," ",e.jsx("code",{children:"MAINTAIN"})," tune are legitimately different because they solve different problems."]}),e.jsx(o,{language:"text",code:`RelayTune/computedMaintainKP   0.0034
RelayTune/computedMaintainKI   0.0121
RelayTune/computedMaintainKD   0.00008
Gains/activekF                 0.00048   (velocity: characterized)
RelayTune/Ku / Pu              0.019 / 0.31s
Diagnostics/phase              RUNNING`}),e.jsx("h2",{children:"5. Put them in your real subsystem"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Drop the selected gains into the mechanism class you run in teleop / autonomous."}),e.jsx("li",{children:"Test under the real task, not just under the tuner OpMode."}),e.jsx("li",{children:"Re-run the tune if gearing, inertia, weight, or feedback changes."})]}),e.jsx("h2",{children:"Prefer to tune by hand?"}),e.jsxs("p",{children:["Auto-tune is the default, not a requirement. Supply ",e.jsx("code",{children:".revUpGains(...)"})," and"," ",e.jsx("code",{children:".maintainGains(...)"})," to start from your own values, or call"," ",e.jsx("code",{children:".skipRelayTuning()"})," to disable it entirely and adjust every gain live in Dashboard. The ",e.jsx(t,{to:"/docs/concepts/pidf-terms",children:"Concepts"})," and Advanced sections cover the manual workflow."]}),e.jsxs("blockquote",{children:["Next: grab a full working example from ",e.jsx(t,{to:"/docs/templates",children:"Sample OpModes"}),", or read ",e.jsx(t,{to:"/docs/concepts/scoring",children:"How Auto-Tune Works"})," to understand what just happened."]})]})}export{i as component};
