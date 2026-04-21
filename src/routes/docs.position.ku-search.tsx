import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/position/ku-search")({
  head: () => ({
    meta: [
      { title: "Position Motion Profile & Feedforward — PID Pilot" },
      {
        name: "description",
        content:
          "How PositionPIDFTuner uses move normalization, optional trapezoidal motion profiles, and layered feedforward terms.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Motion Profile &amp; Feedforward</h1>
      <p>
        Position tuning is not only “PID plus position.” The framework shapes approach behavior with
        optional trapezoidal profiling and separates different baseline-effort terms so the operator
        can reason about them honestly.
      </p>

      <h2>Move normalization</h2>
      <p>
        The tuner scales target and measurement by <code>moveScaleTicks</code>, which is based on
        actual move distance together with a tolerance floor. This keeps small moves from feeling
        hyper-aggressive while still letting long moves use the same overall gain family.
      </p>

      <h2>Motion profiling</h2>
      <p>
        In <code>REV_UP</code>, the tuner can replace an instantaneous step with a trapezoidal
        profile. That is enabled through:
      </p>

      <CodeBlock language="java" code={`useMotionProfile(maxVelocity, maxAcceleration)`} />

      <p>
        If profiling is disabled, the profiled target simply equals the requested target. If it is
        enabled, the tuner computes a position, velocity, and acceleration trajectory each loop.
      </p>

      <h2>Feedforward pieces</h2>
      <ul>
        <li>
          <strong>
            Static trim from <code>kF</code>
          </strong>{" "}
          helps break friction or stiction.
        </li>
        <li>
          <strong>
            Constant gravity term from <code>kG</code>
          </strong>{" "}
          helps elevators and vertical slides.
        </li>
        <li>
          <strong>
            Cosine compensation from <code>kCos</code>
          </strong>{" "}
          helps arms or joints with changing gravity torque.
        </li>
      </ul>

      <h2>Static trim is not velocity feedforward</h2>
      <p>
        In the position tuner, <code>kF</code> is applied as a sign-aware static trim term. It is
        intentionally not the same concept as the velocity tuner’s physical feedforward. Treating
        them as interchangeable is one of the fastest ways to confuse a tuning session.
      </p>

      <h2>Cosine compensation</h2>
      <p>Cosine feedforward uses an encoder-angle mapping and computes:</p>

      <CodeBlock language="text" code={`kCos * cos((position - zeroTicks) / ticksPerRadian)`} />

      <p>
        That is why <code>cosineFeedforwardReference(zeroTicks, ticksPerRadian)</code> is required
        whenever <code>kCos</code> is nonzero.
      </p>

      <h2>When each term is most useful</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Typical mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>kF</code>
            </td>
            <td>Any mechanism with noticeable static friction or breakaway effort</td>
          </tr>
          <tr>
            <td>
              <code>kG</code>
            </td>
            <td>Elevators and vertical slides</td>
          </tr>
          <tr>
            <td>
              <code>kCos</code>
            </td>
            <td>Arms, joints, or mechanisms with angle-dependent gravity torque</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
