import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Activity, Gauge, SlidersHorizontal, Target, TriangleAlert, Waves } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/tuner-lab")({
  head: () => ({
    meta: [
      { title: "PID Pilot — Framework Lab" },
      {
        name: "description",
        content:
          "Interactive guide to how PID Pilot’s velocity and position frameworks change between REV_UP and MAINTAIN.",
      },
    ],
  }),
  component: FrameworkLab,
});

type ControlFamily = "velocity" | "position";
type TuningMode = "REV_UP" | "MAINTAIN";

function FrameworkLab() {
  const [family, setFamily] = useState<ControlFamily>("velocity");
  const [mode, setMode] = useState<TuningMode>("REV_UP");
  const [headroom, setHeadroom] = useState([62]);
  const [disturbance, setDisturbance] = useState([38]);
  const [load, setLoad] = useState([44]);

  const headroomValue = headroom[0];
  const disturbanceValue = disturbance[0];
  const loadValue = load[0];

  const objective =
    mode === "REV_UP"
      ? "Get to target quickly, accept some aggression, and clear stale controller memory on mode changes."
      : "Hold target cleanly, reject disturbances, and keep steady-state error small.";

  const subsystem =
    family === "velocity"
      ? "VelocityPIDFTuner uses raw ticks/s, physical kF, relay auto-tuning, and motor-mode enforcement."
      : "PositionPIDFTuner manages actuator families, normalized moves, feedforward layers, motion profiles, and optional hard bounds.";

  const feedforward =
    family === "velocity"
      ? "Velocity kF is a real feedforward in motor power per ticks/s. Characterization or a manual override should cover most of the baseline effort."
      : "Position kF is static trim, not velocity feedforward. Gravity and cosine compensation are separate terms that should stay interpretable.";

  const telemetryFocus =
    family === "velocity"
      ? [
          "target, measured velocity, error",
          "pTerm, iTerm, dTerm, fTerm",
          "characterized kF, relay Ku and Pu, headroom warnings",
          "disruption drop and recovery when MAINTAIN is active",
        ]
      : [
          "requested target, clamped target, profiled target",
          "actuator mode, feedback mode, command, and constraint status",
          "feedforward breakdown: static trim, kG, kCos",
          "at-target qualification and disruption stages when feedback exists",
        ];

  const warnings = buildWarnings(family, mode, headroomValue, disturbanceValue, loadValue);
  const summary = buildSummary(family, mode, headroomValue, disturbanceValue, loadValue);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight">Framework Lab</span>
          </div>
          <div className="flex-1" />
          <ThemeToggle className="h-9 w-9" />
        </div>
      </header>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-brand" />
              Interactive framework guide
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              See how the framework changes before you change the robot.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              This page does not pretend to simulate your mechanism. It helps teams reason about the
              framework’s intent: which control family they are in, what REV_UP or MAINTAIN should
              emphasize, which telemetry matters, and where common warnings come from.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Control family
              </p>
              <Tabs value={family} onValueChange={(value) => setFamily(value as ControlFamily)}>
                <TabsList className="mt-4 grid w-full grid-cols-2">
                  <TabsTrigger value="velocity">Velocity</TabsTrigger>
                  <TabsTrigger value="position">Position</TabsTrigger>
                </TabsList>
              </Tabs>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Tuning personality
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button
                  variant={mode === "REV_UP" ? "default" : "outline"}
                  onClick={() => setMode("REV_UP")}
                >
                  REV_UP
                </Button>
                <Button
                  variant={mode === "MAINTAIN" ? "default" : "outline"}
                  onClick={() => setMode("MAINTAIN")}
                >
                  MAINTAIN
                </Button>
              </div>

              <div className="mt-8 space-y-6">
                <SliderField
                  label="Output headroom"
                  value={headroomValue}
                  help="Low headroom means feedforward and proportional action have less room to work safely."
                  onChange={(value) => setHeadroom(value)}
                />
                <SliderField
                  label="Disturbance pressure"
                  value={disturbanceValue}
                  help="Higher disturbance means MAINTAIN behavior and recovery timing matter more."
                  onChange={(value) => setDisturbance(value)}
                />
                <SliderField
                  label="Mechanism load"
                  value={loadValue}
                  help="Higher load increases the need for physically sensible feedforward and honest target choices."
                  onChange={(value) => setLoad(value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <SignalCard
                icon={
                  family === "velocity" ? (
                    <Gauge className="h-5 w-5" />
                  ) : (
                    <Target className="h-5 w-5" />
                  )
                }
                title="Primary objective"
                text={objective}
              />
              <SignalCard
                icon={<Activity className="h-5 w-5" />}
                title="Subsystem emphasis"
                text={subsystem}
              />
              <SignalCard
                icon={<Waves className="h-5 w-5" />}
                title="Feedforward model"
                text={feedforward}
              />

              <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-2xl font-semibold">Telemetry to watch first</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {telemetryFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-2xl font-semibold">Live diagnostic readout</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Readout label="Framework state" value={summary.state} />
                  <Readout label="Likely next move" value={summary.nextStep} />
                  <Readout label="Most important telemetry" value={summary.telemetry} />
                  <Readout label="Best operator question" value={summary.question} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <TriangleAlert className="h-3.5 w-3.5 text-brand" />
              Common warnings
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Signals the framework is designed to surface early.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {warnings.map((warning) => (
              <WarningCard key={warning.title} title={warning.title} text={warning.text} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function buildWarnings(
  family: ControlFamily,
  mode: TuningMode,
  headroom: number,
  disturbance: number,
  load: number,
) {
  const warnings = [];

  if (family === "velocity" && headroom < 35) {
    warnings.push({
      title: "Velocity headroom is tight",
      text: "Expect derived gain warnings if kF already consumes most of the available output. Lower the target or revisit feedforward before adding more proportional aggression.",
    });
  }

  if (family === "position" && load > 60) {
    warnings.push({
      title: "Position feedforward needs to be explicit",
      text: "High load on an arm, elevator, or slide is a clue to add kG or kCos rather than forcing integral to do the whole job.",
    });
  }

  if (mode === "MAINTAIN" && disturbance > 55) {
    warnings.push({
      title: "Disruption telemetry matters more than arrival speed",
      text: "Recovery time, drop magnitude, and in-band stability should drive decisions before you celebrate a fast initial move.",
    });
  }

  warnings.push({
    title: "Live config refresh cuts both ways",
    text: "Because PIDFTunerOpMode refreshes config every loop, any hardware assumptions you make inside configureVelocity or configurePosition need to stay compatible with the tuner’s control model.",
  });

  if (family === "velocity") {
    warnings.push({
      title: "Do not let the SDK fight the outer loop",
      text: "VelocityPIDFTuner must own motor power control and reassert RUN_WITHOUT_ENCODER so setPower remains raw power instead of becoming an internal SDK velocity command.",
    });
  } else {
    warnings.push({
      title: "Bounds are not only target clamps",
      text: "If positionBounds are enabled, the tuner should also suppress outward command at hard stops so the mechanism does not keep pushing into a limit.",
    });
  }

  return warnings.slice(0, 3);
}

function buildSummary(
  family: ControlFamily,
  mode: TuningMode,
  headroom: number,
  disturbance: number,
  load: number,
) {
  if (family === "velocity") {
    return {
      state:
        mode === "REV_UP"
          ? "Characterize kF, run relay auto-tune if needed, then watch RUNNING behavior with profiled targets."
          : "Hold the target in RUNNING, then pay attention to DISRUPTION recovery and copyable final values.",
      nextStep:
        headroom < 40
          ? "Reduce requested target or verify the physical kF source before leaning on larger gains."
          : "Use relay results as a starting point, then confirm the active gain family matches the operator goal.",
      telemetry:
        disturbance > 50
          ? "Drop magnitude, recovery time, warning lines, and active gains."
          : "Measured velocity, pTerm/dTerm balance, and feedforward contribution at target.",
      question:
        load > 50
          ? "Is the wheel sagging because the load changed, or because feedforward never covered the baseline effort?"
          : "Is the controller doing work that feedforward should already have handled?",
    };
  }

  return {
    state:
      mode === "REV_UP"
        ? "Use motion profiling and normalized position control to approach cleanly without slamming the mechanism."
        : "Focus on holding behavior, at-target qualification, and disturbance recovery under the real load.",
    nextStep:
      load > 55
        ? "Add or verify kG and kCos, then confirm your encoder-angle mapping is trustworthy."
        : "Validate actuator family selection, target units, and bounds before touching gains.",
    telemetry:
      disturbance > 50
        ? "Clamped target, constraint status, disruption stage, and final recovery timing."
        : "Profiled target, measured position, command, and the feedforward breakdown.",
    question:
      headroom < 40
        ? "Is the mechanism near a hard limit or using too much command just to support the load?"
        : "Is the controller fighting a geometry problem, or are the chosen gains actually the issue?",
  };
}

function SliderField({
  label,
  value,
  help,
  onChange,
}: {
  label: string;
  value: number;
  help: string;
  onChange: (value: number[]) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className="font-mono text-sm text-muted-foreground">{value}%</div>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={0}
        max={100}
        step={1}
        onValueChange={onChange}
      />
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{help}</p>
    </div>
  );
}

function SignalCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand">
        {icon}
      </div>
      <h2 className="mt-4 font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background px-4 py-3">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-sm leading-6 text-foreground">{value}</div>
    </div>
  );
}

function WarningCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand">
        <TriangleAlert className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
