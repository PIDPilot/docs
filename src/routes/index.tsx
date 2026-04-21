import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Blocks,
  Gauge,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";
import logo from "@/assets/pidpilot-logo-transparent.png";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PID Pilot — FTC PIDF Tuning Framework" },
      {
        name: "description",
        content:
          "PID Pilot is a self-contained PIDF tuning framework for FTC mechanisms with live Dashboard editing, reusable controller cores, and separate velocity and position workflows.",
      },
      { property: "og:title", content: "PID Pilot — FTC PIDF Tuning Framework" },
      {
        property: "og:description",
        content:
          "Live PIDF tuning for FTC mechanisms with velocity and position tuners, sample OpModes, and telemetry that explains the controller.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PID Pilot" className="h-8 w-8" />
            <span className="font-display text-lg font-semibold tracking-tight">PID Pilot</span>
          </Link>
          <div className="flex-1" />
          <nav className="hidden items-center gap-5 sm:flex">
            <Link
              to="/docs"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              to="/tuner-lab"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Framework Lab
            </Link>
          </nav>
          <ThemeToggle className="h-9 w-9" />
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(820px 420px at 15% 0%, oklch(0.94 0.05 250 / 0.9), transparent 64%),
              radial-gradient(720px 380px at 85% 10%, oklch(0.9 0.06 215 / 0.65), transparent 60%),
              linear-gradient(180deg, transparent, oklch(0.99 0.002 240 / 0.75))
            `,
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Radar className="h-3.5 w-3.5 text-brand" />
              Final PID Pilot framework
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Live PIDF tuning for FTC mechanisms that teams use every day.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              PID Pilot is a self-contained tuning framework, not a one-shot auto-tuner. It gives
              teams a reusable controller core, a live OpMode runner, separate velocity and position
              workflows, and telemetry rich enough to explain what the loop is actually doing.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ValuePill
                title="Velocity and position"
                desc="Different control families, different semantics, one shared framework."
              />
              <ValuePill
                title="Live Dashboard edits"
                desc="Configs refresh every loop, so tuning happens in real operating conditions."
              />
              <ValuePill
                title="Telemetry with internals"
                desc="See terms, feedforward, warnings, disruption metrics, and active gains."
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90"
              >
                Read the docs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/docs/quick-start"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
              >
                Daily workflow
              </Link>
              <Link
                to="/docs/templates"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
              >
                Sample OpModes
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_35px_110px_-55px_rgba(15,23,42,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Architecture Snapshot
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold">
                  The framework at a glance
                </h2>
              </div>
              <div className="rounded-2xl border border-brand/20 bg-brand-muted/80 p-3">
                <img src={logo} alt="" className="h-11 w-11" />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <FrameworkCard
                icon={<Blocks className="h-4 w-4" />}
                title="PIDFController"
                desc="Owns the raw math: proportional, integral, derivative-on-measurement, filtering, clamping, and exposed term state."
              />
              <FrameworkCard
                icon={<Workflow className="h-4 w-4" />}
                title="PIDFTunerOpMode"
                desc="Runs the live loop, refreshes config every cycle, mirrors telemetry, and lets the driver toggle REV_UP and MAINTAIN with gamepad1.x."
              />
              <FrameworkCard
                icon={<Gauge className="h-4 w-4" />}
                title="VelocityPIDFTuner"
                desc="Handles characterization, relay auto-tuning, headroom checks, running control, and disruption recovery in raw ticks per second."
              />
              <FrameworkCard
                icon={<Target className="h-4 w-4" />}
                title="PositionPIDFTuner"
                desc="Supports motors, CR servos, and standard servos with optional feedback, motion profiles, feedforward terms, and hard bounds."
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Package contents
              </p>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <CodeTag text="PIDFController.java" />
                <CodeTag text="PIDFTunerOpMode.java" />
                <CodeTag text="PIDFTuningMode.java" />
                <CodeTag text="VelocityPIDFTuner.java" />
                <CodeTag text="PositionPIDFTuner.java" />
                <CodeTag text="TuneFlywheelNew.java" />
                <CodeTag text="TuneArm.java" />
                <CodeTag text="TuneElevator.java" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-brand" />
              Design goals
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The new framework is built around live control work, not offline theory.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The README’s core idea is consistent across the package: the tuners own the outer
              loop, FTC Dashboard is treated as a live tuning surface, feedforward and feedback stay
              interpretable, and velocity and position are allowed to be different control problems.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={<Activity className="h-5 w-5" />}
              title="REV_UP and MAINTAIN are separate"
              desc="Approach speed and hold robustness use different gains, different telemetry, and different operator intent."
            />
            <FeatureCard
              icon={<Gauge className="h-5 w-5" />}
              title="Velocity uses raw ticks per second"
              desc="The framework avoids hidden normalization so feedforward and gain math stay physically meaningful."
            />
            <FeatureCard
              icon={<Target className="h-5 w-5" />}
              title="Position supports multiple actuator families"
              desc="Motors, CR servos, standard servos, and external feedback fit under one consistent tuning API."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Safety is part of the control flow"
              desc="Velocity reasserts external motor mode. Position can clamp targets and suppress outward commands at hard stops."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <Wrench className="h-3.5 w-3.5 text-brand" />
              Everyday workflow
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What a team actually does with PID Pilot.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The goal is to stand up a tuning OpMode quickly, expose the right controls in FTC
              Dashboard, run the mechanism live, and leave with values and telemetry that make sense
              to the team using them later in the season.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Rich telemetry surface
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <TelemetryStat label="Core terms" value="pTerm iTerm dTerm fTerm" />
                <TelemetryStat label="Signal health" value="filtered derivative, error rate" />
                <TelemetryStat label="Mode context" value="active gains, phase, warnings" />
                <TelemetryStat
                  label="Mechanism detail"
                  value="feedforward breakdown, disruption metrics"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <StepCard
              step="1"
              title="Pick the correct family"
              desc="Velocity for shooters and flywheels. Position for arms, elevators, slides, turrets, and servo-driven axes."
            />
            <StepCard
              step="2"
              title="Wire a sample OpMode"
              desc="Return a Config object, bind hardware, expose targets and tuning mode through Dashboard, and let the runner handle the loop."
            />
            <StepCard
              step="3"
              title="Tune live in Dashboard"
              desc="Configs refresh every loop, so changing targets, bounds, feedforward, or mode affects the live session immediately."
            />
            <StepCard
              step="4"
              title="Copy values with context"
              desc="Use the final summary together with the telemetry story so the team knows whether a problem is feedforward, damping, windup, or hardware."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Workflow className="h-3.5 w-3.5 text-brand" />
              Two control families
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Velocity and position do not pretend to be the same problem.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <CompareCard
              title="Velocity tuner"
              points={[
                "Works in raw ticks per second with physically interpretable feedforward.",
                "Characterizes max velocity, computes a physical kF, and can relay auto-tune starting gains.",
                "Measures disruption recovery when MAINTAIN matters more than raw spin-up speed.",
                "Must keep motors in RUN_WITHOUT_ENCODER so the SDK’s inner loop never fights the outer loop.",
              ]}
            />
            <CompareCard
              title="Position tuner"
              points={[
                "Supports motors, CR servos, open-loop standard servos, and closed-loop standard servos with external feedback.",
                "Uses move-scaled normalization internally so tiny moves and long moves do not feel like unrelated controllers.",
                "Can add motion profiling, static trim, gravity compensation, cosine compensation, and hard bounds.",
                "Uses consecutive in-band loops and disruption logic to measure real hold quality instead of one lucky sample.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The docs now follow the framework the same way a team would.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Start with the architecture and daily workflow if you are adopting PID Pilot, then jump
            into the velocity or position sections that match your mechanism and the telemetry you
            are trying to understand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90"
            >
              Open documentation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tuner-lab"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Open Framework Lab
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ValuePill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/85 p-4 shadow-sm">
      <div className="font-display text-base font-semibold text-foreground">{title}</div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}

function FrameworkCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-background p-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-brand">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/25 bg-brand-muted text-sm font-semibold text-brand">
        {step}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}

function TelemetryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-mono text-sm text-foreground">{value}</div>
    </div>
  );
}

function CompareCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function CodeTag({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-2 font-mono text-xs text-foreground">
      {text}
    </div>
  );
}
