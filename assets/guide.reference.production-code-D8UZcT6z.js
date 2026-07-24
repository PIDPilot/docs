import{j as e,L as o}from"./index-Bu1DThJ5.js";import{C as t}from"./CodeBlock-DPc1lYQD.js";import"./createLucideIcon-DRgSxJox.js";function l(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Using Your Gains in Production"}),e.jsxs("p",{children:["The tuning OpMode gets you numbers. To actually run a mechanism in a match you reuse the framework's ",e.jsx("code",{children:"PIDFController"})," in your own loop. That matters: the gains were fit to ",e.jsx("em",{children:"this"})," control law, so they transfer cleanly here — but"," ",e.jsx("strong",{children:"not"})," into ",e.jsx("code",{children:"setVelocityPIDFCoefficients()"})," or"," ",e.jsx("code",{children:"RUN_TO_POSITION"}),", which use a different formulation and units."]}),e.jsxs("blockquote",{children:["The Tuner's ",e.jsx(o,{to:"/tuner",children:"Script Builder"})," emits this production code for you — pick ",e.jsx("strong",{children:"Production code"})," above the generated snippet. The examples below explain what it does."]}),e.jsx("h2",{children:"The control law"}),e.jsx("p",{children:"Every loop, the controller computes a motor power from your gains:"}),e.jsx(t,{filename:"control law",language:"java",code:`output = kP·(target − meas)
       + kI·(∫(target − meas)·dt , clamped to ±integralSumMax)
       + kD·(−filtered d(meas)/dt)   // derivative on measurement → no setpoint kick
       + kF·target                    // feedforward on the setpoint
output = clamp(output, −1, +1)        // motor power`}),e.jsxs("p",{children:["You feed it ",e.jsx("code",{children:"(target, measurement, dt)"})," and apply the returned power. For velocity the feedforward ",e.jsx("code",{children:"kF·target"})," does most of the work; for position it's usually zero and gravity is added separately."]}),e.jsx("h2",{children:"Dual-wheel shooter (velocity)"}),e.jsxs("p",{children:["Read the average ",e.jsx("em",{children:"absolute"})," velocity of the two wheels (the same measurement the tuner used), and drive both motors with the controller output. Run the motors in"," ",e.jsx("code",{children:"RUN_WITHOUT_ENCODER"})," so the SDK's built-in velocity PID doesn't fight yours."]}),e.jsx(t,{filename:"Shooter.java",language:"java",code:`@Config
@TeleOp(name = "Shooter", group = "Competition")
public class Shooter extends OpMode {
    public static double TARGET_VELOCITY = 1800;                 // ticks/sec
    // Paste the gains PID Pilot computed (Dashboard "computed MAINTAIN" / final summary).
    public static double kP = 0.0004, kI = 0.0016, kD = 0.00001, kF = 0.0005;

    private DcMotorEx left, right;
    private final PIDFController pidf = new PIDFController(kP, kI, kD, kF);
    private final ElapsedTime loop = new ElapsedTime();

    @Override public void init() {
        left  = hardwareMap.get(DcMotorEx.class, "outtakeL");
        right = hardwareMap.get(DcMotorEx.class, "outtakeR");
        left.setDirection(DcMotorSimple.Direction.REVERSE);      // match how you tuned it
        left.setMode(DcMotor.RunMode.RUN_WITHOUT_ENCODER);       // you are the controller
        right.setMode(DcMotor.RunMode.RUN_WITHOUT_ENCODER);
    }

    @Override public void loop() {
        double dt = loop.seconds();
        loop.reset();
        pidf.setGains(kP, kI, kD, kF);   // pick up live Dashboard edits

        boolean spinUp = gamepad1.right_trigger > 0.2;
        double velocity = (Math.abs(left.getVelocity()) + Math.abs(right.getVelocity())) / 2.0;

        double power;
        if (spinUp) {
            power = pidf.calculate(TARGET_VELOCITY, velocity, dt);
        } else {
            power = 0;
            pidf.reset();                // clear the integral so it can't wind up while idle
        }
        left.setPower(power);
        right.setPower(power);

        telemetry.addData("velocity", velocity);
        telemetry.addData("power", power);
        telemetry.update();
    }
}`}),e.jsx("h2",{children:"Position slide (arm / elevator)"}),e.jsxs("p",{children:["Same idea, but the measurement is ",e.jsx("code",{children:"getCurrentPosition()"})," and you add a gravity feedforward. For a vertical slide that's a constant hold power (",e.jsx("code",{children:"kG"}),"); for an arm it's ",e.jsx("code",{children:"kCos·cos(angle)"}),"."]}),e.jsx(t,{filename:"Slide.java",language:"java",code:`@Config
@TeleOp(name = "Slide", group = "Competition")
public class Slide extends OpMode {
    public static double kP = 0.008, kI = 0.0, kD = 0.0002, kF = 0.0; // tuned position gains
    public static double kG = 0.08;          // constant hold for a VERTICAL slide (0 if horizontal)
    public static int MIN_TICKS = 0, MAX_TICKS = 2000;
    public static int STOW = 0, LOW = 700, HIGH = 1900;              // preset heights

    private DcMotorEx slide;
    private final PIDFController pidf = new PIDFController(kP, kI, kD, kF);
    private final ElapsedTime loop = new ElapsedTime();
    private double target = 0;

    @Override public void init() {
        slide = hardwareMap.get(DcMotorEx.class, "slide");
        slide.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER); // zero at the bottom
        slide.setMode(DcMotor.RunMode.RUN_WITHOUT_ENCODER);    // we drive raw power
    }

    @Override public void loop() {
        double dt = loop.seconds();
        loop.reset();
        pidf.setGains(kP, kI, kD, kF);

        if (gamepad1.a) target = STOW;
        if (gamepad1.b) target = LOW;
        if (gamepad1.y) target = HIGH;
        target = Range.clip(target, MIN_TICKS, MAX_TICKS);     // soft bounds

        double position = slide.getCurrentPosition();
        double power = Range.clip(pidf.calculate(target, position, dt) + kG, -1, 1);
        slide.setPower(power);

        telemetry.addData("target", target);
        telemetry.addData("position", position);
        telemetry.update();
    }
}`}),e.jsx("h2",{children:"Gotchas that bite people"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"RUN_WITHOUT_ENCODER"})})," ","on the controlled motor — otherwise the SDK's own PID fights yours."," ",e.jsx("code",{children:"getVelocity()"})," / ",e.jsx("code",{children:"getCurrentPosition()"})," still read the encoder in that mode."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"dt"})," in seconds"]}),", reset every loop. The controller clamps a tiny first ",e.jsx("code",{children:"dt"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"pidf.reset()"})})," ","whenever you disable output, so the integral doesn't wind up."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Match your tuned setup"})," — same motor directions and the same measurement (average ",e.jsx("code",{children:"|velocity|"})," for opposed shooter wheels)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Position ",e.jsx("code",{children:"kF"})," stays 0"]})," — here ",e.jsx("code",{children:"fTerm = kF·target"}),", so it is not a gravity term. Add a constant ",e.jsx("code",{children:"kG"})," (or ",e.jsx("code",{children:"kCos·cos(angle)"}),") for gravity instead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't"})," paste these gains into ",e.jsx("code",{children:"setVelocityPIDFCoefficients()"})," ","— different formula, different scaling; they won't behave the same."]})]}),e.jsx("h2",{children:"Other actuators"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"CR servos (position):"})," identical to the slide, but read position from the feedback encoder and call ",e.jsx("code",{children:"crServo.setPower(power)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Open-loop standard servos:"})," no PID — map the target range linearly to"," ",e.jsx("code",{children:"setPosition(0..1)"}),". The builder emits this directly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Closed-loop standard servos:"})," the firmware already closes an inner loop, so faithful outer-loop control is mechanism-specific — keep the framework's controller for these rather than hand-rolling it."]})]}),e.jsxs("blockquote",{children:["Keeping the gains as ",e.jsx("code",{children:"@Config"})," static fields lets you nudge them live from FTC Dashboard during a practice match — the same workflow you used while tuning. See"," ",e.jsx(o,{to:"/guide/reference/telemetry",children:"Telemetry & Final Summary"})," for where to read the computed values."]})]})}export{l as component};
