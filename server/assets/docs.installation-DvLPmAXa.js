import { T as jsxRuntimeExports } from "./worker-entry-DVzyL1pV.js";
import { L as Link } from "./router-Ct0ZQmnX.js";
import { C as CodeBlock } from "./CodeBlock-jhkUK9ZT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-M5VoV9as.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Installation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PID Pilot ships as a Gradle dependency on JitPack — no copied source files. Add two repositories and two dependencies to the standard FTC project, sync, and the sample tuner OpModes appear on the Driver Station." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Requirements" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The standard FTC SDK project (the FtcRobotController repo) in Android Studio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "FTC Dashboard — strongly recommended; the tuner streams all its telemetry there." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "A mechanism with real feedback: motor velocity for the velocity tuner, or an encoder / analog sensor for the position tuner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enough free physical range to run safe live tests." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "1. Add the repositories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In your project's ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "build.dependencies.gradle" }),
      " (repo root), add the FTC Dashboard maven repo and JitPack to the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "repositories" }),
      " block:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "groovy", filename: "build.dependencies.gradle", code: `repositories {
    mavenCentral()
    google()
    maven { url = 'https://maven.brott.dev/' }   // FTC Dashboard
    maven { url = 'https://jitpack.io' }          // PID Pilot
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "2. Add the dependencies" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In the same ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "dependencies" }),
      " block, add PID Pilot and (recommended) FTC Dashboard:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "groovy", filename: "build.dependencies.gradle", code: `dependencies {
    implementation 'com.github.PIDPilot:ftc:v1.0.4'
    implementation 'com.acmerobotics.dashboard:dashboard:0.6.0'
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Then ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sync Gradle" }),
      ". Check the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://jitpack.io/#PIDPilot/ftc", target: "_blank", rel: "noreferrer", children: "JitPack page" }),
      " ",
      "for the latest version tag."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Kotlin DSL project? The same coordinates work in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "build.gradle.kts" }),
      ":",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'implementation("com.github.PIDPilot:ftc:v1.0.4")' }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "3. Confirm it resolved" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Everything lives under the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "com.pidpilot.ftc" }),
      " package. In any TeamCode file, this import should resolve with no red underline once the sync finishes:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "java", code: `import com.pidpilot.ftc.PIDFTunerOpMode;
import com.pidpilot.ftc.VelocityPIDFTuner;
import com.pidpilot.ftc.PositionPIDFTuner;` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "4. Set up FTC Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "With the robot running, open ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "http://192.168.43.1:8080/dash" }),
        " (RC phone) or",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "http://192.168.43.1:8080" }),
        " (Control Hub) on a laptop on the robot's network."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "The tuner mirrors all telemetry there and exposes every tunable value as a live",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "@Config" }),
        " field — this is where you watch auto-tune and refine gains."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "5. Deploy and run" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Build and install to the Robot Controller as usual. The sample tuners appear in the OpMode list under the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tuning" }),
      " group. Pick one, INIT, then START — and keep hands clear while auto-tune runs."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Compatibility" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Built against FTC SDK ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "11.2.0" }),
      " and FTC Dashboard ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "0.6.0" }),
      ". The API it uses has been stable across seasons, so older SDKs generally work — but if you hit a",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "NoSuchMethodError" }),
      ", match the library to your Robot Controller app's season."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
      "Next: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs/quick-start", children: "Quick Start" }),
      " wires your first tuning OpMode and walks through what to watch once auto-tune begins."
    ] })
  ] });
}
export {
  Page as component
};
