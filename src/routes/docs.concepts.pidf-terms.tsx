import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/pidf-terms")({
  head: () => ({
    meta: [
      { title: "PIDF Terms — PID Pilot" },
      { name: "description", content: "What P, I, D, and F do in a PIDF controller." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>PIDF Terms</h1>
      <p>
        Before reading the rest of the docs, it helps to have a one-line definition of
        each PIDF term in front of you.
      </p>

      <h2>P — Proportional</h2>
      <p>
        Reacts to the <strong>current error</strong>. Bigger error → bigger correction.
        Too much <code>P</code> causes oscillation around the target.
      </p>

      <h2>I — Integral</h2>
      <p>
        Reacts to <strong>accumulated error over time</strong>. <code>I</code> is what
        kills steady-state error and helps a mechanism hold target under continuous load.
      </p>
      <p>
        Too much <code>I</code> causes wind-up: the mechanism overshoots and takes a long
        time to settle. PID Pilot explores <code>I</code> more aggressively in{" "}
        <code>MAINTAIN</code> mode because that's where it pays off.
      </p>

      <h2>D — Derivative</h2>
      <p>
        Reacts to <strong>how fast the error is changing</strong>. <code>D</code> dampens
        the response and reduces overshoot. Too much <code>D</code> makes the mechanism
        noisy or unstable, since it amplifies sensor noise.
      </p>

      <h2>F — Feedforward</h2>
      <p>
        A predicted, open-loop term added to the controller output. It represents the
        effort the mechanism needs <em>just to do its job</em> — fight gravity, spin at
        speed — before any feedback correction.
      </p>
      <p>
        A good <code>F</code> means <code>P</code> and <code>I</code> have less work to
        do. PID Pilot estimates <code>F</code> first, before searching for <code>P</code>,{" "}
        <code>I</code>, and <code>D</code>.
      </p>

      <h2>Rules of thumb</h2>
      <ul>
        <li><code>F</code> should handle most of the constant load.</li>
        <li><code>P</code> should correct immediate error.</li>
        <li><code>I</code> usually helps most with maintain behavior and long-term error.</li>
        <li>Too much <code>I</code> can make recovery slower or cause oscillation.</li>
        <li>Too much <code>D</code> can make the mechanism noisy.</li>
      </ul>
    </>
  );
}
