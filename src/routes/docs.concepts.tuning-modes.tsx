import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/concepts/tuning-modes")({
  head: () => ({
    meta: [
      { title: "Tuning Modes — PID Pilot" },
      {
        name: "description",
        content:
          "How PID Pilot uses REV_UP and MAINTAIN as separate controller personalities with separate gains.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Tuning Modes</h1>
      <p>
        <code>PIDFTuningMode</code> is a small enum with a large role in the framework. It gives the
        entire package a shared language for two different controller personalities: one focused on
        getting there quickly and one focused on holding accurately under disturbances.
      </p>

      <h2>REV_UP</h2>
      <ul>
        <li>Prioritizes fast approach to the target.</li>
        <li>Often uses little or no integral.</li>
        <li>May use motion profiling in the position tuner.</li>
        <li>Can accept some overshoot if that buys better approach speed.</li>
      </ul>

      <h2>MAINTAIN</h2>
      <ul>
        <li>Prioritizes low steady-state error and disturbance rejection.</li>
        <li>Commonly benefits from integral action.</li>
        <li>Is the mode used for disruption sampling.</li>
        <li>
          Represents the controller personality you care about once the mechanism is near target.
        </li>
      </ul>

      <h2>Why the framework keeps two gain sets</h2>
      <p>
        The package does not pretend that approach behavior and hold behavior are the same control
        problem. Both tuners keep separate gain sets so a team can tune the personality it actually
        needs instead of forcing one compromise set to cover everything.
      </p>

      <h2>How teams switch modes live</h2>
      <p>
        The base runner handles mode toggling with <code>gamepad1.x</code>. When the mode changes,
        the active tuner swaps gain families and resets state where stale controller memory would be
        misleading.
      </p>

      <h2>Where the effect differs by tuner</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>REV_UP emphasis</th>
            <th>MAINTAIN emphasis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Velocity tuner</td>
            <td>Fast approach and cleaner rev-up behavior</td>
            <td>Robust speed hold and disruption recovery</td>
          </tr>
          <tr>
            <td>Position tuner</td>
            <td>Approach behavior, often with motion profiling</td>
            <td>Holding behavior and load rejection near target</td>
          </tr>
          <tr>
            <td>Integral usage</td>
            <td>Often low or zero</td>
            <td>Commonly more useful</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical guidance</h2>
      <ul>
        <li>
          Use <code>REV_UP</code> when arrival speed is the main job.
        </li>
        <li>
          Use <code>MAINTAIN</code> when resisting changing load is the main job.
        </li>
        <li>
          Expect the same mechanism to produce different valid gains in each mode. That is normal,
          not a bug.
        </li>
      </ul>
    </>
  );
}
