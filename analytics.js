/**
 * PID Pilot docs — analytics.
 *
 * This file is hand-maintained and lives on the `gh-pages` branch alongside the
 * built site. It is deliberately dependency-free, unminified, and separate from
 * everything in assets/ so it survives being read and edited later.
 *
 * One provider, one dashboard: GoatCounter handles both pageviews and custom
 * events, cookielessly. `attachSink` is the only function that knows which
 * provider that is — swap its body to move to Umami, Plausible, or your own
 * endpoint without touching anything below it.
 *
 * Because GoatCounter counts a pageview only on a full page load, this file
 * takes over navigation counting entirely (`no_onload`) and reports route
 * changes by patching the History API, which is what a client-side router does
 * instead of loading a document.
 *
 * Events are attached with delegated listeners against the built markup rather
 * than by editing bundles in assets/. The selectors are pinned to structure
 * (a `pre.docs-code` sibling, an input placeholder) rather than to Tailwind
 * class strings, which change on every rebuild.
 */
(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Configure here. This value is public — it ships to every visitor.
  // ---------------------------------------------------------------------------

  /**
   * GoatCounter counting endpoint, e.g. "https://pidpilot.goatcounter.com/count".
   * Sign up at goatcounter.com (free for non-commercial use); the code you pick
   * becomes the subdomain. Leave "" and this whole file no-ops.
   */
  var GOATCOUNTER_URL = "https://andresalonso.goatcounter.com/count";

  // ---------------------------------------------------------------------------

  var GOATCOUNTER_SRC = "https://gc.zgo.at/count.js";

  /** Longest event detail we send, to keep stray pasted text out of the dashboard. */
  var MAX_DETAIL = 80;
  /** Hits fired before the sink script loads wait here. */
  var MAX_QUEUED = 20;
  /**
   * How long to wait after a route change before reporting it, so the router
   * has committed the new <title>. The cost is that someone who leaves within
   * this window is not counted — which is arguably correct anyway.
   */
  var PAGEVIEW_DELAY_MS = 250;
  /** How long typing must pause before a search query counts as settled. */
  var SEARCH_SETTLE_MS = 900;
  /** Ignore one- and two-letter queries; they are mid-typing, not intent. */
  var SEARCH_MIN_LENGTH = 3;

  var queued = [];
  var sink = null;
  var lastPath = null;

  /**
   * Events record text the reader typed, so honour Do Not Track for them.
   * Pageviews are exempt: they are aggregate, cookieless, and carry nothing
   * that identifies a visitor. Move the check into `send` to opt out of both.
   */
  function optedOut() {
    return navigator.doNotTrack === "1" || window.doNotTrack === "1";
  }

  function loadScript(src, attrs) {
    var script = document.createElement("script");

    script.src = src;
    script.defer = true;
    Object.keys(attrs).forEach(function (name) {
      script.setAttribute(name, attrs[name]);
    });
    document.head.appendChild(script);

    return script;
  }

  function drain() {
    if (!sink) return;

    while (queued.length > 0) {
      sink(queued.shift());
    }
  }

  /** Queue a hit until the provider script is live, then hand it over. */
  function send(hit) {
    if (sink) {
      sink(hit);
      return;
    }

    if (queued.length < MAX_QUEUED) queued.push(hit);
  }

  /** Point the reporting layer at GoatCounter once its script is live. */
  function attachSink() {
    // Take over pageview counting: the built-in one fires on document load,
    // which in a client-side-routed app happens exactly once. Must be set
    // before the script evaluates.
    window.goatcounter = { no_onload: true };

    loadScript(GOATCOUNTER_SRC, { "data-goatcounter": GOATCOUNTER_URL }).addEventListener(
      "load",
      function () {
        sink = function (hit) {
          if (window.goatcounter && window.goatcounter.count) window.goatcounter.count(hit);
        };
        drain();
      },
    );
  }

  /**
   * Report a pageview for the current URL. `title` is deliberately omitted so
   * count.js reads document.title at send time, by which point the route has
   * rendered. Repeated calls for the same path are dropped — routers replace
   * state for scroll restoration and hash changes without it being a new view.
   */
  function countPageview() {
    var path = window.location.pathname + window.location.search;

    if (path === lastPath) return;
    lastPath = path;

    setTimeout(function () {
      send({ path: path });
    }, PAGEVIEW_DELAY_MS);
  }

  /**
   * A client-side router changes the URL through the History API instead of
   * loading a document, so wrap those calls to notice. pushState/replaceState
   * are patched rather than polled, and popstate covers back/forward.
   */
  function watchNavigation() {
    ["pushState", "replaceState"].forEach(function (name) {
      var original = window.history[name];
      if (typeof original !== "function") return;

      window.history[name] = function () {
        var result = original.apply(this, arguments);
        // After the original call, so location already reflects the new URL.
        countPageview();
        return result;
      };
    });

    window.addEventListener("popstate", countPageview);
  }

  /**
   * Record a custom event. `name` is what the dashboard groups by, so keep it
   * to a small fixed set; `detail` is the varying part (a query, a filename, a
   * host). GoatCounter does not store the page path on events, so it goes in
   * the title field, which is where the dashboard shows it.
   */
  function track(name, detail) {
    if (optedOut()) return;

    var trimmed = detail ? String(detail).trim().slice(0, MAX_DETAIL) : "";

    send({
      // GoatCounter uses path as the event name; it must not start with "/".
      path: trimmed ? name + ": " + trimmed : name,
      title: window.location.pathname,
      event: true,
    });
  }

  /**
   * A CodeBlock renders as:
   *   <div>                                        <- wrapper
   *     <div><span>name</span><button>Copy</button></div>   <- header
   *     <pre class="docs-code">...</pre>
   *   </div>
   * so a copy button is one whose immediate parent is directly followed by the
   * pre. Matching on "some ancestor contains a pre.docs-code" is not enough —
   * that catches every unrelated button on a page that happens to show code.
   * The label beside it is the filename, falling back to the language.
   */
  function codeBlockLabel(button) {
    var header = button.parentElement;
    var pre = header && header.nextElementSibling;

    if (!pre || !pre.matches("pre.docs-code")) return null;

    var label = header.querySelector("span");

    return (label && label.textContent.trim()) || "unknown";
  }

  function watchCopyClicks() {
    document.addEventListener(
      "click",
      function (e) {
        var button = e.target && e.target.closest && e.target.closest("button");
        if (!button) return;

        var label = codeBlockLabel(button);
        if (label) track("copy", label);
      },
      { capture: true },
    );
  }

  /**
   * Count clicks that leave the site. Capture phase, so a handler that stops
   * propagation upstream cannot hide the click from us.
   */
  function watchOutboundLinks() {
    document.addEventListener(
      "click",
      function (e) {
        var anchor = e.target && e.target.closest && e.target.closest("a");
        if (!anchor) return;
        // Skip mailto:, tel:, and anything else that is not a web destination.
        if (anchor.protocol !== "http:" && anchor.protocol !== "https:") return;
        if (anchor.host === window.location.host) return;

        track("outbound", anchor.host + anchor.pathname);
      },
      { capture: true },
    );
  }

  /**
   * Report the search query only once typing settles, so "installation" does
   * not land in the dashboard as eleven separate prefixes. Queries that return
   * nothing are tracked under their own name — those are the ones worth acting
   * on, since they say what the docs are missing.
   */
  function watchSearch() {
    var timer = null;

    document.addEventListener("input", function (e) {
      var input = e.target;
      if (!input || input.placeholder !== "Search the docs...") return;

      clearTimeout(timer);

      var query = input.value.trim();
      if (query.length < SEARCH_MIN_LENGTH) return;

      timer = setTimeout(function () {
        // The modal is the nearest fixed-position ancestor of the input.
        var modal = input.closest("div.fixed");
        var missed = !!modal && modal.textContent.indexOf('No results for "') !== -1;

        track(missed ? "search-miss" : "search", query);
      }, SEARCH_SETTLE_MS);
    });
  }

  if (!GOATCOUNTER_URL) return;

  attachSink();

  countPageview();
  watchNavigation();

  if (!optedOut()) {
    watchCopyClicks();
    watchOutboundLinks();
    watchSearch();
  }
})();
