import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/reference/telemetry")({
  head: () => ({
    meta: [
      { title: "Telemetry & Final Summary — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses telemetry as a diagnostic surface across the base runner, controller core, velocity tuner, and position tuner.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Telemetry &amp; Final Summary</h1>
      <p>
        Telemetry is one of the central design features of PID Pilot. The framework mirrors output
        to Driver Station and FTC Dashboard when Dashboard is present, and it tries to expose enough
        internal state that a team can tell whether it is looking at bad feedforward, bad damping,
        integral windup, poor bounds, or a mechanism limitation.
      </p>

      <h2>Base runner behavior</h2>
      <p>
        <code>PIDFTunerOpMode</code> mirrors telemetry to both surfaces and uses reflection to avoid
        a hard runtime dependency on Dashboard. That means the session still runs if Dashboard is
        unavailable, but the richer live workflow remains available when it is connected.
      </p>

      <h2>Controller-core internals</h2>
      <p>
        Because <code>PIDFController</code> stores term contributions and measurement derivatives
        directly, the tuners can publish controller internals without duplicating the math.
      </p>

      <ul>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, <code>fTerm</code>
        </li>
        <li>Raw and filtered measurement-rate estimates</li>
        <li>Last output, error, and error rate</li>
      </ul>

      <h2>Velocity tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={`mode                 MAINTAIN
phase                RUNNING
target velocity      ...
measured velocity    ...
error                ...
pTerm / iTerm / dTerm / fTerm
characterized kF     ...
relay Ku / Pu        ...
warnings             ...
disruption recovery  ...`}
      />

      <p>
        Velocity sessions can also expose characterization data, relay auto-tune metrics,
        feedforward routing notes, disruption timing, and copyable final gains.
      </p>

      <h2>Position tuner telemetry</h2>
      <CodeBlock
        language="text"
        code={`mode                 REV_UP
requested target     ...
clamped target       ...
profiled target      ...
profile velocity     ...
measured position    ...
actuator mode        ...
feedback mode        ...
pTerm / iTerm / dTerm / fTerm
gravity / cosine ff  ...
constraint status    ...
disruption stage     ...`}
      />

      <p>
        Position sessions add actuator-family and feedback-mode context, target clamping state,
        profile state, and feedforward breakdown because those things are often as important as the
        gains themselves.
      </p>

      <h2>Final summary</h2>
      <p>
        At the end of a session, the tuner keeps a copyable summary on screen. The exact contents
        depend on the control family, but the summary is supposed to capture both the values you
        might copy and the reason those values were trustworthy.
      </p>

      <ul>
        <li>Active tuning mode and gain family</li>
        <li>Final gain values</li>
        <li>Characterized or resolved feedforward notes</li>
        <li>Relay results if relay tuning ran</li>
        <li>Disruption summary if disruption sampling ran</li>
      </ul>

      <blockquote>
        The best use of telemetry is comparative: if you change a feedforward term, a bound, or a
        target and the trace suddenly makes more physical sense, you learned something about the
        mechanism before you ever copied a new number.
      </blockquote>
    </>
  );
}
