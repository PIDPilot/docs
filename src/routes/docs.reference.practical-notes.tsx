import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/reference/practical-notes")({
  head: () => ({
    meta: [
      { title: "Workflows & Caveats — PID Pilot" },
      {
        name: "description",
        content:
          "Practical engineering workflows, tuner differences, extension points, and real-world caveats for PID Pilot.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Workflows &amp; Caveats</h1>
      <p>
        This page condenses the practical parts of the README that matter once the framework is
        already installed: how teams typically use each tuner, how the two tuners differ, where the
        framework is meant to be extended, and what assumptions still need engineering judgment.
      </p>

      <h2>Typical velocity workflow</h2>
      <ol>
        <li>
          Start from <code>TuneFlywheelNew</code> or an equivalent velocity OpMode.
        </li>
        <li>Set a believable target speed.</li>
        <li>
          Let characterization compute a physical <code>kF</code> unless you already trust one.
        </li>
        <li>Let relay auto-tuning derive starting gain families when appropriate.</li>
        <li>
          Compare <code>REV_UP</code> and <code>MAINTAIN</code> against the mechanism’s real job.
        </li>
        <li>Use disruption sampling if the wheel must survive repeated load events.</li>
      </ol>

      <h2>Typical position workflow</h2>
      <ol>
        <li>Pick the correct actuator family and feedback source first.</li>
        <li>Make sure target units are meaningful and consistent.</li>
        <li>Set tolerance and hard bounds early.</li>
        <li>Add gravity or cosine compensation if the mechanism physics need it.</li>
        <li>Enable motion profiling if instantaneous steps are too violent.</li>
        <li>
          Tune approach behavior with <code>REV_UP</code> and hold behavior with{" "}
          <code>MAINTAIN</code>.
        </li>
      </ol>

      <h2>Important differences between the tuners</h2>
      <ul>
        <li>
          Velocity uses raw <code>ticks/s</code>; position uses normalized move scaling internally.
        </li>
        <li>
          Velocity has characterization and relay auto-tuning; position focuses on actuator and
          feedforward modeling.
        </li>
        <li>
          Velocity <code>kF</code> is physical feedforward; position <code>kF</code> is static trim.
        </li>
        <li>Position supports motors and servos; velocity is motor-oriented.</li>
        <li>
          Position can enforce hard bounds; velocity focuses more on motor-mode ownership and
          headroom sanity.
        </li>
      </ul>

      <h2>Common extension points</h2>
      <ul>
        <li>Config builder surfaces</li>
        <li>Telemetry keys and status blocks</li>
        <li>Sample OpModes</li>
        <li>Relay formulas or acceptance logic</li>
        <li>Motion-profile shape</li>
        <li>Final summary formatting or export helpers</li>
      </ul>

      <h2>Practical caveats</h2>
      <ul>
        <li>The velocity tuner expects to own motor power control completely.</li>
        <li>
          The velocity tuner must keep motors in <code>RUN_WITHOUT_ENCODER</code>.
        </li>
        <li>
          A nonzero position <code>kF</code> is not the same concept as velocity <code>kF</code>.
        </li>
        <li>
          Standard-servo closed-loop quality depends heavily on the quality of external feedback.
        </li>
        <li>
          Motion profiling only affects <code>REV_UP</code> in the position tuner.
        </li>
        <li>Disruption phases are meaningful only when real feedback exists.</li>
        <li>Dashboard defaults are starting points, not guarantees.</li>
      </ul>

      <blockquote>
        PID Pilot makes live control work easier to reason about. It does not replace mechanical
        quality, safe targets, or the need to compare tuner behavior against the real match task.
      </blockquote>
    </>
  );
}
