import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/velocity/refinement")({
  head: () => ({
    meta: [
      { title: "Velocity Running Control & Headroom — PID Pilot" },
      {
        name: "description",
        content:
          "How VelocityPIDFTuner runs closed-loop control, enforces motor mode, manages target ramping, and warns about unrealistic gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Running Control &amp; Headroom</h1>
      <p>
        Once the velocity tuner reaches <strong>RUNNING</strong>, it becomes a normal external
        closed-loop controller. What makes the framework valuable here is not only the control law,
        but the sanity logic wrapped around it: motor-mode enforcement, target ramping, integrator
        headroom, and warnings when the requested operating point is physically dubious.
      </p>

      <h2>Main running loop</h2>
      <ol>
        <li>Read average mechanism velocity.</li>
        <li>Resolve the active target, including optional ramping.</li>
        <li>
          Apply the active gain family for <code>REV_UP</code> or <code>MAINTAIN</code>.
        </li>
        <li>
          Compute PID output through <code>PIDFController</code>.
        </li>
        <li>Add the resolved feedforward term.</li>
        <li>Write raw power to the hardware.</li>
        <li>Publish telemetry and warnings.</li>
      </ol>

      <h2>Optional target ramping</h2>
      <p>
        <code>velocityRampTicksPerSecPerSec(double)</code> lets the tuner slew the active target
        instead of commanding an instantaneous step. This matters when the mechanism or power system
        needs a smoother approach before full closed-loop behavior takes over.
      </p>

      <h2>Why ensureMotorMode exists</h2>
      <p>
        The tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>. If another mode slipped in
        during live config refresh, <code>setPower()</code> could stop meaning raw power and the SDK
        inner loop could start interpreting the command differently. <code>ensureMotorMode()</code>
        prevents that nondeterminism.
      </p>

      <h2>Derived gain sanity logic</h2>
      <p>
        <code>updateDerivedGainState()</code> turns controller math into practical warnings. It can
        derive <code>integralSumMax</code> from remaining output headroom and tell the operator when
        either feedforward or proportional action is already consuming more output than the
        mechanism can realistically provide.
      </p>

      <CodeBlock
        language="text"
        code={`warn if kF consumes all headroom
warn if kP * target is much larger than remaining headroom
derive integralSumMax from available output when not overridden`}
      />

      <h2>Telemetry categories during running control</h2>
      <ul>
        <li>Setpoint, measured velocity, error, and active tuning mode</li>
        <li>
          <code>pTerm</code>, <code>iTerm</code>, <code>dTerm</code>, and <code>fTerm</code>
        </li>
        <li>Filtered derivative information from the controller core</li>
        <li>Active gains, feedforward source notes, and warnings</li>
        <li>Relay or characterization results that remain relevant to the session</li>
      </ul>

      <blockquote>
        When a velocity session looks wrong, check headroom and motor mode first. A bad feedforward
        baseline or a motor-mode conflict will make every gain discussion less honest.
      </blockquote>
    </>
  );
}
