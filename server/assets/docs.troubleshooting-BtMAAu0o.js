import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { L as Link } from "./router-Ct0ZQmnX.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Troubleshooting" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When a PID Pilot session goes wrong, the fastest path forward is usually to identify which framework assumption is being violated. This page maps common symptoms to the most likely setup or control-model problem and points you to the next page worth reading." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-prose my-8 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomCard, { title: "Velocity cannot reach target or warnings mention headroom", desc: "The wheel stays well below target, or telemetry suggests feedforward and gains are consuming all available output.", causes: ["Target speed is unrealistic for the current mechanism and battery state.", "The physical kF source is wrong or never established cleanly.", "The loop is spending too much output on proportional correction because the baseline effort was never covered."], links: [{
        label: "Velocity Overview",
        to: "/docs/velocity/overview"
      }, {
        label: "Characterization",
        to: "/docs/velocity/f-sweep"
      }, {
        label: "Running Control",
        to: "/docs/velocity/refinement"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomCard, { title: "Velocity behavior looks like two controllers are fighting", desc: "Power commands feel inconsistent, response changes when live config refreshes, or the mechanism ignores the expected outer-loop story.", causes: ["Motor mode is being changed away from RUN_WITHOUT_ENCODER during the session.", "User code is reasserting a conflicting hardware mode inside configureVelocity().", "The tuner is not being allowed to own raw power control."], links: [{
        label: "Setup Rules",
        to: "/docs/reference/setup-rules"
      }, {
        label: "Velocity Overview",
        to: "/docs/velocity/overview"
      }, {
        label: "Telemetry",
        to: "/docs/reference/telemetry"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomCard, { title: "Position mechanism reaches target once but holds badly", desc: "An arm, slide, or elevator gets close, then droops, chatters, or reacts poorly under load.", causes: ["Static trim, gravity compensation, or cosine compensation is missing or mis-scaled.", "You are reading the wrong feedback source or using inconsistent units.", "The hold-side MAINTAIN gain family needs to be evaluated separately from REV_UP."], links: [{
        label: "Position Overview",
        to: "/docs/position/overview"
      }, {
        label: "Motion & Feedforward",
        to: "/docs/position/ku-search"
      }, {
        label: "Disruption",
        to: "/docs/position/disturbance"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomCard, { title: "Position mechanism pushes into a stop or clamps unexpectedly", desc: "The requested target and measured motion do not agree, or the controller appears to fight a hard limit.", causes: ["Bounds are missing, wrong, or defined in inconsistent units.", "The actuator family or servo mapping range is incorrect.", "Constraint status is telling you something real that you are not reading yet."], links: [{
        label: "Bounds & Control Flow",
        to: "/docs/position/refinement"
      }, {
        label: "Setup Rules",
        to: "/docs/reference/setup-rules"
      }, {
        label: "Telemetry",
        to: "/docs/reference/telemetry"
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "First checks before changing gains" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Confirm the mechanism is physically healthy and can move safely through the intended range." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Verify hardware names, motor directions, encoder directions, and target sign conventions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Choose a target the mechanism can realistically reach and hold." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Read the telemetry notes and warnings instead of only the final gain values." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Confirm that the selected control family matches the actual mechanism job." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "When to stop the session immediately" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The mechanism is driving into a hard stop." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The velocity loop is clearly fighting a motor-mode conflict." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The feedback signal is obviously wrong or discontinuous." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The mechanism is outside a safe physical range for live testing." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Best next pages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/reference/telemetry", children: "Telemetry & Final Summary" }),
        " when the raw numbers need interpretation."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/reference/practical-notes", children: "Workflows & Caveats" }),
        " when the session looks “legal” but still not useful."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/reference/faq", children: "FAQ" }),
        " when the issue is really about the framework’s intended semantics."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "If the telemetry story and the mechanism physics disagree, trust the physics first and use the telemetry to figure out which framework assumption broke." })
  ] });
}
function SymptomCard({
  title,
  desc,
  causes,
  links
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Likely Causes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: causes.map((cause) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: cause }, cause)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.to, className: "inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-accent/40 hover:text-brand", children: link.label }, link.to)) })
  ] });
}
export {
  Page as component
};
