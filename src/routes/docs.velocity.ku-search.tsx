import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/ku-search")({
  head: () => ({
    meta: [
      { title: "Velocity Phase 2 — Ku Search — PID Pilot" },
      { name: "description", content: "Ziegler-Nichols ultimate gain search for velocity tuning." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Phase 2 — Ku Search</h1>
      <p>
        Once <code>F</code> is in hand, the tuner searches for an approximate{" "}
        <strong>ultimate gain</strong> <code>Ku</code> — the proportional gain that makes
        the velocity oscillate sustainedly around the target.
      </p>

      <h2>Algorithm</h2>
      <ol>
        <li>Start with a small <code>P</code> = <code>kuInitialHi</code></li>
        <li>Double <code>P</code> until the velocity oscillates (up to 8 doublings)</li>
        <li>Binary-search the range <code>[lo, hi]</code> for 12 iterations</li>
        <li>Measure oscillation period <code>Tu</code> at the resulting <code>Ku</code></li>
      </ol>

      <h2>From Ku and Tu to PID</h2>
      <p>
        PID Pilot uses a relaxed Ziegler–Nichols mapping that intentionally backs off
        from classic ZN values to give refinement a calmer starting point:
      </p>
      <CodeBlock
        language="text"
        code={`P = 0.33 * Ku
I = (Tu > 0) ? P / (Tu / 2) : 0
D = P * (Tu / 3)`}
      />

      <h2>Why binary search?</h2>
      <p>
        Pure doubling is fast but coarse. Binary search closes in on a tighter{" "}
        <code>Ku</code> in just 12 iterations — enough precision to seed refinement
        without burning excessive run time on the mechanism.
      </p>

      <h2>kuInitialHi</h2>
      <p>
        The starting upper bound for <code>P</code>. It defaults to <code>0.005</code> in
        power-mode but auto-bumps to <code>64.0</code> when{" "}
        <code>withRunUsingEncoderVelocityMotors(...)</code> is used, because{" "}
        <code>setVelocity</code> uses an internal scale where useful gains live in a much
        higher range.
      </p>

      <blockquote>
        If you see "ku search" loop a long time without finding oscillation, your
        target velocity is probably too low for the mechanism to oscillate around. Try
        a larger target.
      </blockquote>
    </>
  );
}
