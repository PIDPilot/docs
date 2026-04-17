import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, Target, Activity, Cpu, Zap, ShieldCheck } from "lucide-react";
import logo from "@/assets/pidpilot-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PID Pilot — Automatic PIDF tuning for FTC" },
      {
        name: "description",
        content:
          "PID Pilot automatically tunes velocity and position PIDF controllers for FTC mechanisms. Ziegler–Nichols seeding, step-response refinement, disturbance scoring.",
      },
      { property: "og:title", content: "PID Pilot — Automatic PIDF tuning for FTC" },
      {
        property: "og:description",
        content: "Automatic velocity and position PIDF tuning for FTC mechanisms.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PID Pilot" className="h-8 w-8" />
            <span className="font-display text-lg font-semibold tracking-tight">PID Pilot</span>
          </Link>
          <div className="flex-1" />
          <Link
            to="/docs"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Docs
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, oklch(0.45 0.18 255 / 0.12), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 py-20 text-center lg:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Zap className="h-3 w-3 text-brand" />
            Built for FTC mechanisms
          </div>
          <img src={logo} alt="" className="mx-auto mb-6 h-24 w-24" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Automatic PIDF tuning,
            <br />
            <span className="text-brand">on autopilot.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            PID Pilot finds usable PIDF gains for your flywheels, slides and arms — by
            actually running your mechanism, scoring its behavior, and refining gains
            until it lands the best candidate.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
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
              Quick Start
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
          <Feature
            icon={<Gauge className="h-5 w-5" />}
            title="Velocity Tuner"
            desc="For flywheels and shooters. F sweep, Ziegler-Nichols seed, step refinement, disturbance recovery."
          />
          <Feature
            icon={<Target className="h-5 w-5" />}
            title="Position Tuner"
            desc="For arms and slides. Hold-F search, Ku binary search, refinement, optional disturbance phase."
          />
          <Feature
            icon={<Activity className="h-5 w-5" />}
            title="Score-Driven Refinement"
            desc="Final gains are the best-measured candidate from a real cost function — not a single formula."
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" />}
            title="REV_UP & MAINTAIN"
            desc="Pick fast arrival or rock-solid hold under load. Modes change weights and add a disturbance test."
          />
          <Feature
            icon={<Cpu className="h-5 w-5" />}
            title="FTC Dashboard ready"
            desc="Full telemetry to driver station and FTC Dashboard. Final PIDF held on screen for easy copy."
          />
          <Feature
            icon={<Zap className="h-5 w-5" />}
            title="Drop-in templates"
            desc="One-file op modes for flywheels, arms, slides, and custom multi-motor setups."
          />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        PID Pilot · Built for FIRST Tech Challenge teams
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition hover:border-brand/40 hover:shadow-sm">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-muted text-brand">
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
