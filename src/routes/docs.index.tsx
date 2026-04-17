import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Introduction — PID Pilot" },
      {
        name: "description",
        content: "PID Pilot is an automatic PIDF tuner for FTC velocity and position mechanisms.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        PID Pilot is an automatic PIDF tuner for FTC. It helps you find usable PIDF gains
        for velocity-controlled mechanisms (flywheels, shooters) and position-controlled
        mechanisms (arms, slides) without doing a manual sweep by hand.
      </p>

      <p>
        It is built on top of <code>FtcDashboard</code> and standard <code>DcMotorEx</code>{" "}
        APIs, and ships as a small set of Java files you drop into your{" "}
        <code>TeamCode</code> module.
      </p>

      <h2>What you get</h2>
      <ul>
        <li>
          <strong>Two tuners</strong> — <code>VelocityPIDFTuner</code> and{" "}
          <code>PositionPIDFTuner</code>, both following the same high-level pattern.
        </li>
        <li>
          <strong>Two tuning modes</strong> — <code>REV_UP</code> for fast arrival,{" "}
          <code>MAINTAIN</code> for holding under load with disturbance recovery.
        </li>
        <li>
          <strong>Score-driven refinement</strong> — final gains are the best-measured
          candidate from a real cost function, not a single closed-form formula.
        </li>
        <li>
          <strong>Drop-in op modes</strong> — <code>PIDFTunerOpMode</code> wrapper plus
          ready-to-use templates.
        </li>
      </ul>

      <h2>The shared pattern</h2>
      <p>
        Both tuners follow the same four high-level phases:
      </p>
      <ol>
        <li>Estimate a usable <code>F</code></li>
        <li>Find a rough <code>P</code>, <code>I</code>, <code>D</code> with a Ziegler–Nichols style search</li>
        <li>Refine gains by scoring real candidate behavior</li>
        <li>(MAINTAIN only) Score disturbance recovery and fold it into the cost</li>
      </ol>

      <p>
        The tuners are meant to give a strong starting point quickly. They are not
        mathematically perfect system-identification tools. The final gains come from
        repeated real measurements and a cost function — not one closed-form equation.
      </p>

      <blockquote>
        New here? Jump to the <a href="/docs/quick-start">Quick Start</a> to get a
        flywheel tuned in under five minutes.
      </blockquote>
    </>
  );
}
