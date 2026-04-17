import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronRight, Github } from "lucide-react";
import logo from "@/assets/pidpilot-logo.png";
import { docsNav, flatDocs } from "@/lib/docs-nav";
import { DocSearch } from "./DocSearch";

export function DocsLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentIdx = flatDocs.findIndex((d) => d.to === location.pathname);
  const prev = currentIdx > 0 ? flatDocs[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < flatDocs.length - 1 ? flatDocs[currentIdx + 1] : null;
  const current = flatDocs[currentIdx];

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PID Pilot" className="h-8 w-8" />
            <span className="font-display text-lg font-semibold tracking-tight">
              PID Pilot
            </span>
            <span className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
              docs
            </span>
          </Link>
          <div className="flex-1" />
          <div className="hidden md:block">
            <DocSearch />
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-8 px-4 lg:px-6">
        {/* Sidebar */}
        <aside
          className={`${
            mobileOpen ? "block" : "hidden"
          } fixed inset-x-0 top-14 z-30 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-sidebar p-4 lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:w-64 lg:flex-shrink-0 lg:border-0 lg:bg-transparent lg:p-0 lg:py-8`}
        >
          <div className="mb-4 lg:hidden">
            <DocSearch />
          </div>
          <nav className="space-y-6 pb-12">
            {docsNav.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 px-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-0.5">
                  {section.links.map((link) => {
                    const active = location.pathname === link.to;
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-md border-l-2 px-3 py-1.5 text-sm transition ${
                            active
                              ? "border-brand bg-brand-muted font-medium text-brand"
                              : "border-transparent text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground"
                          }`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 py-8 lg:py-12">
          {current && (
            <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>Docs</span>
              <ChevronRight className="h-3 w-3" />
              <span>{current.section}</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{current.title}</span>
            </div>
          )}

          <article className="prose-docs">
            <Outlet />
          </article>

          {/* Pager */}
          <div className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                to={prev.to}
                className="group rounded-lg border border-border p-4 transition hover:border-brand/50 hover:bg-accent/30"
              >
                <div className="text-xs text-muted-foreground">← Previous</div>
                <div className="mt-1 font-medium text-foreground group-hover:text-brand">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                to={next.to}
                className="group rounded-lg border border-border p-4 text-right transition hover:border-brand/50 hover:bg-accent/30 sm:col-start-2"
              >
                <div className="text-xs text-muted-foreground">Next →</div>
                <div className="mt-1 font-medium text-foreground group-hover:text-brand">
                  {next.title}
                </div>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
