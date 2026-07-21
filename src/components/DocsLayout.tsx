import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/pidpilot-logo-transparent.png";
import { docsNav, flatDocs, isDocLinkGroup, type DocLink } from "@/lib/docs-nav";
import { slugifyHeading } from "@/lib/docs-search";
import { cn } from "@/lib/utils";
import { DocSearch } from "./DocSearch";
import { SiteFooter } from "./SiteFooter";
import { ThemeToggle } from "./ThemeToggle";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function DocsLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentIdx = flatDocs.findIndex((d) => d.to === location.pathname);
  const prev = currentIdx > 0 ? flatDocs[currentIdx - 1] : null;
  const next =
    currentIdx >= 0 && currentIdx < flatDocs.length - 1 ? flatDocs[currentIdx + 1] : null;
  const current = flatDocs[currentIdx];

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(".prose-docs h2, .prose-docs h3");
    const usedIds = new Map<string, number>();

    for (const heading of headings) {
      const text = heading.textContent?.trim();
      if (!text) continue;

      const baseId = slugifyHeading(text) || "section";
      const count = usedIds.get(baseId) ?? 0;
      usedIds.set(baseId, count + 1);

      heading.id = count === 0 ? baseId : `${baseId}-${count + 1}`;
    }
  }, [location.pathname]);

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
            <span className="font-display text-lg font-semibold tracking-tight">PID Pilot</span>
            <span className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
              docs
            </span>
          </Link>
          <div className="flex-1" />
          <nav className="hidden items-center gap-4 sm:flex">
            <Link
              to="/docs"
              className={cn(
                "text-sm font-medium transition",
                location.pathname.startsWith("/docs")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Docs
            </Link>
            <Link
              to="/tuner-lab"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Tuner Lab
            </Link>
          </nav>
          <div className="hidden md:block">
            <DocSearch />
          </div>
          <ThemeToggle className="h-9 w-9" />
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-4 px-4 sm:gap-6 lg:px-6 xl:gap-8">
        {/* Sidebar */}
        <aside
          className={`${
            mobileOpen ? "block" : "hidden"
          } fixed inset-x-0 top-14 z-30 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-sidebar px-4 py-3 shadow-sm lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:w-64 lg:flex-shrink-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-6 lg:shadow-none`}
        >
          <div className="mb-4 lg:hidden">
            <DocSearch />
          </div>
          <nav className="space-y-4 pb-8 lg:space-y-5 lg:pb-12">
            {docsNav.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 px-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-0.5">
                  {section.links.map((item) =>
                    isDocLinkGroup(item) ? (
                      <PhaseGroup
                        key={`${section.title}-${item.title}`}
                        title={item.title}
                        links={item.links}
                        pathname={location.pathname}
                        onNavigate={() => setMobileOpen(false)}
                      />
                    ) : (
                      <DocNavLink
                        key={item.to}
                        link={item}
                        active={location.pathname === item.to}
                        onNavigate={() => setMobileOpen(false)}
                      />
                    ),
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 py-6 sm:py-8 lg:py-10 xl:py-12">
          {current && (
            <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
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

      <SiteFooter />
    </div>
  );
}

function DocNavLink({
  link,
  active,
  onNavigate,
  compact = false,
}: {
  link: DocLink;
  active: boolean;
  onNavigate: () => void;
  compact?: boolean;
}) {
  return (
    <li>
      <Link
        to={link.to}
        onClick={onNavigate}
        className={cn(
          "block rounded-md border-l-2 text-sm transition",
          compact ? "px-3 py-1.5" : "px-3 py-2",
          active
            ? "border-brand bg-brand-muted font-medium text-brand"
            : "border-transparent text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground",
        )}
      >
        {link.title}
      </Link>
    </li>
  );
}

function PhaseGroup({
  title,
  links,
  pathname,
  onNavigate,
}: {
  title: string;
  links: DocLink[];
  pathname: string;
  onNavigate: () => void;
}) {
  const active = links.some((link) => link.to === pathname);
  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (active) setOpen(true);
  }, [active]);

  return (
    <li>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className={cn(
            "group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm transition",
            active
              ? "bg-brand-muted font-medium text-brand"
              : "text-muted-foreground hover:border-border hover:bg-accent/50 hover:text-foreground",
          )}
        >
          <span>{title}</span>
          <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-1 space-y-0.5 pl-3">
          <ul className="space-y-0.5 border-l border-border/80">
            {links.map((link) => (
              <DocNavLink
                key={link.to}
                link={link}
                active={pathname === link.to}
                onNavigate={onNavigate}
                compact
              />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
