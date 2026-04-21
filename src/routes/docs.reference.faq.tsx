import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PID Pilot" },
      {
        name: "description",
        content:
          "Frequently asked questions about PID Pilot’s tuning modes, feedforward semantics, motor ownership, and supported actuator workflows.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>FAQ</h1>

      <h2>Why are my REV_UP and MAINTAIN gains different?</h2>
      <p>
        Because the framework treats them as different controller personalities. <code>REV_UP</code>{" "}
        prioritizes getting there quickly. <code>MAINTAIN</code> prioritizes holding near target and
        recovering from disturbance. Different valid gains for the same mechanism are expected.
      </p>

      <h2>Why does the velocity tuner use raw ticks per second?</h2>
      <p>
        So gain values and feedforward stay physically interpretable. The numbers may look small,
        but they describe real units rather than a hidden normalization scheme.
      </p>

      <h2>Why does position kF feel different from velocity kF?</h2>
      <p>
        Because they are different concepts. Velocity <code>kF</code> is baseline effort per{" "}
        <code>ticks/s</code>. Position <code>kF</code> is a static trim or friction-help term.
      </p>

      <h2>Why does the tuner keep forcing RUN_WITHOUT_ENCODER?</h2>
      <p>
        To stop the SDK’s inner loop from fighting the framework’s outer loop. VelocityPIDFTuner
        must own motor power control if its math is going to mean what the telemetry says it means.
      </p>

      <h2>Can I skip characterization or relay tuning?</h2>
      <p>
        Yes. Use <code>skipCharacterization(manualKF)</code> when you already trust a physical
        feedforward, and <code>skipRelayTuning()</code> when you are supplying manual gain families
        or want to bypass automatic gain estimation.
      </p>

      <h2>Why is disruption unavailable in some position sessions?</h2>
      <p>
        Because disruption logic is only meaningful when there is real feedback control. In standard
        servo open-loop mode, the tuner is only mapping target to servo position, so there is no
        closed-loop hold behavior to evaluate.
      </p>

      <h2>Do I always need position bounds?</h2>
      <p>
        If the mechanism has hard end stops, yes. Bounds are not only for clamping requested
        targets; they also prevent the controller from continuing to push outward once the mechanism
        is already at a limit.
      </p>

      <h2>Can I use PID Pilot with custom hardware arrangements?</h2>
      <p>
        Usually yes, as long as you can represent the mechanism with one supported actuator family
        and a meaningful feedback source. The sample OpModes are meant to be adapted, not copied
        blindly.
      </p>

      <h2>When should I re-run a tune?</h2>
      <p>
        Re-run when the physics change: different gearing, repaired mechanism, new motor, changed
        wheel inertia, changed arm geometry, or different feedback hardware. PIDF values are tied to
        the actual mechanism, not to the codebase in the abstract.
      </p>
    </>
  );
}
