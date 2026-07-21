import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  CircuitBoard,
  Gauge,
  Github,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import logo from "@/assets/pidpilot-logo-transparent.png";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeToggle } from "@/components/ThemeToggle";

const GITHUB_URL = "https://github.com/PIDPilot/ftc";
const LATEST_VERSION = "v1.0.4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PID Pilot — Auto-Tuned PIDF for FTC" },
      {
        name: "description",
        content:
          "PID Pilot is a drop-in PIDF tuning library for FTC. Point it at a flywheel, arm, or elevator and its relay auto-tune computes working gains — one OpMode, one button, live on FTC Dashboard.",
      },
      { property: "og:title", content: "PID Pilot — Auto-Tuned PIDF for FTC" },
      {
        property: "og:description",
        content:
          "Relay auto-tune computes working PIDF gains for any FTC mechanism. Add one Gradle dependency, run one OpMode.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <InstallBand />
      <AutoTuneSection />
      <FamiliesSection />
      <SafetySection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PID Pilot" className="landing-logo-sway h-8 w-8" />
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
            to="/docs/quick-start"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Quick Start
          </Link>
          <Link
            to="/tuner-lab"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Tuner Lab
          </Link>
        </nav>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition hover:text-foreground"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <ThemeToggle className="h-9 w-9" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(760px 380px at 12% -5%, color-mix(in oklch, var(--color-brand) 20%, transparent), transparent 62%),
            radial-gradient(680px 360px at 92% 8%, color-mix(in oklch, var(--color-warn) 12%, transparent), transparent 60%)`,
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-6 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted/40 px-3 py-1 text-xs font-medium text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            One-button relay auto-tune — now for position too
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Point it at a mechanism.
            <br />
            <span className="text-brand text-signal-glow">It tunes itself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            PID Pilot is a drop-in PIDF tuning library for FTC. Add one Gradle dependency, run one
            OpMode, and its relay auto-tune measures your flywheel, arm, or elevator and computes
            working gains — live on FTC Dashboard, no controls background required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/docs/quick-start"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90"
            >
              Quick start <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Read the docs
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-brand" /> Flywheels &amp; shooters
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Target className="h-4 w-4 text-brand" /> Arms, elevators, slides
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircuitBoard className="h-4 w-4 text-brand" /> Motors &amp; CR servos
            </span>
          </div>
        </div>

        <ScopePanel />
      </div>
    </section>
  );
}

/** Oscilloscope-style panel: a signal that oscillates under relay drive, then locks onto target. */
function ScopePanel() {
  const W = 560;
  const H = 300;
  const target = H * 0.44;
  const settleStart = W * 0.62;

  // Build a decaying-oscillation trace that converges to the target line.
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 4) {
    let y: number;
    if (x < settleStart) {
      const progress = x / settleStart;
      const amp = 96 * (1 - progress) + 14;
      y = target - amp * Math.sin(x / 26);
    } else {
      const decay = Math.exp(-(x - settleStart) / 46);
      y = target - 14 * decay * Math.sin(x / 26);
    }
    pts.push(`${x},${y.toFixed(1)}`);
  }
  const tracePath = `M ${pts.join(" L ")}`;

  return (
    <div className="signal-glow rounded-[1.6rem] border border-border bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between px-1 pb-3">
        <div className="flex items-center gap-2">
          <span className="pulse-lock inline-block h-2 w-2 rounded-full bg-brand" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            relay auto-tune
          </span>
        </div>
        <span className="rounded-md border border-brand/30 bg-brand-muted/40 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand">
          ● locked
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-background/60">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Signal converging to target">
          <defs>
            <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-warn)" />
              <stop offset="70%" stopColor="var(--color-brand)" />
              <stop offset="100%" stopColor="var(--color-brand)" />
            </linearGradient>
            <pattern id="scopeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="color-mix(in oklch, var(--color-border) 70%, transparent)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#scopeGrid)" />
          {/* target line */}
          <line
            x1="0"
            y1={target}
            x2={W}
            y2={target}
            stroke="var(--color-brand)"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity="0.55"
          />
          <text
            x="10"
            y={target - 8}
            className="font-mono"
            fontSize="11"
            fill="var(--color-muted-foreground)"
          >
            target
          </text>
          {/* signal trace */}
          <path d={tracePath} fill="none" stroke="url(#traceGrad)" strokeWidth="2.5" strokeLinejoin="round" />
          {/* leading dot */}
          <circle cx={W} cy={target} r="4" fill="var(--color-brand)" className="pulse-lock" />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <ScopeStat label="kP" value="0.0034" />
        <ScopeStat label="kI" value="0.0121" />
        <ScopeStat label="kD" value="0.00008" />
      </div>
      <p className="mt-3 px-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
        <span className="text-brand">[relay]</span> 4 cycles measured &middot; Ku=0.019 Pu=0.31s
        &middot; gains applied
      </p>
    </div>
  );
}

function ScopeStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/60 px-3 py-2">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-sm font-semibold text-brand">{value}</div>
    </div>
  );
}

function InstallBand() {
  return (
    <section className="border-b border-border bg-muted/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-brand" /> Install
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold">One line in your Gradle file.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Published on JitPack. No copy-pasted source files, no manual controller wiring.
          </p>
        </div>
        <div className="w-full max-w-xl overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-sm shadow-sm">
          <div className="text-muted-foreground">
            <span className="select-none text-brand">// build.dependencies.gradle</span>
          </div>
          <div className="mt-1 whitespace-nowrap">
            <span className="text-foreground">implementation</span>{" "}
            <span className="text-brand">&apos;com.github.PIDPilot:ftc:{LATEST_VERSION}&apos;</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-foreground">implementation</span>{" "}
            <span className="text-brand">&apos;com.acmerobotics.dashboard:dashboard:0.6.0&apos;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutoTuneSection() {
  const steps = [
    {
      icon: <CircuitBoard className="h-5 w-5" />,
      title: "Bind your hardware",
      desc: "Extend PIDFTunerOpMode and return a Config with your motor(s) and a target. That is the whole setup.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Press start — it measures",
      desc: "Relay auto-tune drives the mechanism into a controlled oscillation around the target and measures its response (Ku, Pu).",
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "It computes gains",
      desc: "Ziegler–Nichols formulas turn that measurement into working REV_UP and MAINTAIN gains, applied live.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Copy and ship",
      desc: "Read the final kP / kI / kD / kF off FTC Dashboard and drop them into your real subsystem.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Radar className="h-3.5 w-3.5 text-brand" />
            The auto-tune loop
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            No guessing gains. It finds them for you.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tuning PIDF by hand is the biggest wall new teams hit. PID Pilot removes it: the relay
            method is a proven, self-driving way to find a mechanism&apos;s gains, and it runs
            automatically the first time you start the OpMode.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  {s.icon}
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Prefer to drive it yourself?</span> Every
          gain, band, and timeout is a live FTC Dashboard field, and you can skip auto-tune entirely
          to tune by hand. The{" "}
          <Link to="/docs/concepts/pidf-terms" className="text-brand underline underline-offset-2">
            Concepts
          </Link>{" "}
          and Advanced sections cover the manual workflow in full.
        </div>
      </div>
    </section>
  );
}

function FamiliesSection() {
  return (
    <section className="border-b border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <Workflow className="h-3.5 w-3.5 text-brand" />
            Two tuners, one library
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Velocity and position are different problems.
          </h2>
          <p className="mt-4 text-muted-foreground">
            They share the controller core and the auto-tune engine, but each speaks its own
            mechanism&apos;s language.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <FamilyCard
            icon={<Gauge className="h-5 w-5" />}
            kicker="Velocity tuner"
            title="Flywheels & shooters"
            points={[
              "Characterizes max speed for a physical kF, then relay auto-tunes kP / kI / kD.",
              "Works in raw ticks/sec — feedforward stays physically meaningful, no hidden normalization.",
              "Optional disruption sampling measures real recovery time after a game element hits the wheel.",
            ]}
            to="/docs/velocity/overview"
          />
          <FamilyCard
            icon={<Target className="h-5 w-5" />}
            kicker="Position tuner"
            title="Arms, elevators, slides"
            points={[
              "Relay auto-tune for motors and CR servos — the same one-button flow as velocity.",
              "Gravity & cosine feedforward, motion profiling, and hard position bounds built in.",
              "Also drives standard servos, open-loop or with external encoder / analog feedback.",
            ]}
            to="/docs/position/overview"
          />
        </div>
      </div>
    </section>
  );
}

function FamilyCard({
  icon,
  kicker,
  title,
  points,
  to,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
  points: string[];
  to: string;
}) {
  return (
    <div className="flex flex-col rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand">
          {icon}
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {kicker}
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
        </div>
      </div>
      <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-muted-foreground">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-brand" />
            {p}
          </li>
        ))}
      </ul>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:gap-2.5"
      >
        Explore the {title.split(",")[0].toLowerCase()} tuner <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function SafetySection() {
  const items = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Safe by construction",
      desc: "Position bounds clamp targets and suppress output at hard stops. Sample OpModes only power mechanisms after start — never during INIT.",
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Telemetry that explains itself",
      desc: "Every term — pTerm, iTerm, dTerm, feedforward, error rate, warnings — is streamed so you can see why the loop behaves the way it does.",
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "REV_UP and MAINTAIN, separately",
      desc: "Fast approach and steady-state hold want different gains. Auto-tune produces both, and gamepad X flips between them live.",
    },
    {
      icon: <CircuitBoard className="h-5 w-5" />,
      title: "Reusable controller core",
      desc: "A clean PIDFController with derivative-on-measurement and anti-windup underpins both tuners — drop it into production code too.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-6xl px-4 py-20 text-center lg:px-6">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Stop hand-tuning gains at 2am before a competition.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Add the dependency, run a sample OpMode, and let PID Pilot find your gains. Then read the
          docs to make them great.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/docs/quick-start"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90"
          >
            Start the quick start <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/docs/templates"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            Copy a sample OpMode
          </Link>
        </div>
      </div>
    </section>
  );
}
