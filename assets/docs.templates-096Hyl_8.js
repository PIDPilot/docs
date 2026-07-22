import{j as e,L as t}from"./index-BYZAkzJ2.js";import{C as r}from"./CodeBlock-EHgPDi7K.js";import"./createLucideIcon-uQWkgsmX.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Sample OpModes"}),e.jsx("p",{children:"The library ships three reference OpModes you can copy into TeamCode and adapt. None of them supply gains — each one relies on relay auto-tune, so the pattern to copy is “bind hardware, set a target, press start.” Change the hardware names and targets to match your robot."}),e.jsx("h2",{children:"TuneFlywheel — velocity"}),e.jsxs("p",{children:["A two-motor shooter. Note two things: hardware is cached on the first"," ",e.jsx("code",{children:"configureVelocity()"})," call (the method runs every loop), and the feeder motors are only powered ",e.jsx("strong",{children:"after"})," ",e.jsx("code",{children:"isStarted()"})," — never during INIT."," ",e.jsx("code",{children:"averageAbsoluteVelocity(true)"})," handles wheels that spin in opposite directions."]}),e.jsx(r,{filename:"TuneFlywheel.java",language:"java",code:`private DcMotorEx intake, transfer, left, right;
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
}`}),e.jsx("h2",{children:"TuneArm — position with cosine feedforward"}),e.jsx("p",{children:"An arm fights gravity as a function of its angle, so it uses cosine feedforward mapped from an encoder reference. Auto-tune handles kP/kI/kD; the feedforward just holds the arm up while it does. Motion profiling smooths large REV_UP moves."}),e.jsx(r,{filename:"TuneArm.java",language:"java",code:`private DcMotorEx arm;

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
}`}),e.jsx("h2",{children:"TuneElevator — position with constant gravity"}),e.jsx("p",{children:"A vertical lift needs the same hold force at every height, so it uses a single constant gravity feedforward instead of the arm's cosine geometry. This is the simplest position example."}),e.jsx(r,{filename:"TuneElevator.java",language:"java",code:`private DcMotorEx elevator;

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
}`}),e.jsx("h2",{children:"What the samples teach"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Cache hardware once — ",e.jsx("code",{children:"configure*()"})," runs every loop."]}),e.jsxs("li",{children:["Never power auxiliary motors during INIT; gate them on ",e.jsx("code",{children:"isStarted()"}),"."]}),e.jsxs("li",{children:["Pick the sample by mechanism ",e.jsx("em",{children:"physics"})," (constant vs angle-dependent gravity), not just motor count."]}),e.jsxs("li",{children:["Feedforward (",e.jsx("code",{children:"kG"}),", ",e.jsx("code",{children:"kCos"}),") is your job; kP/kI/kD are auto-tune's job."]})]}),e.jsx("h2",{children:"Adapting them"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Replace hardware names and motor directions first."}),e.jsx("li",{children:"Set a safe, reachable target."}),e.jsxs("li",{children:["Add feedforward and, for fragile mechanisms, ",e.jsx("code",{children:"positionBounds(min, max)"})," before you run."]}),e.jsx("li",{children:"Keep the OpMode structure intact so the live runner works as designed."})]}),e.jsxs("blockquote",{children:["For the full builder surface, use the"," ",e.jsx(t,{to:"/docs/velocity/config",children:"Velocity"})," and"," ",e.jsx(t,{to:"/docs/position/config",children:"Position"})," config references rather than guessing method names."]})]})}export{i as component};
