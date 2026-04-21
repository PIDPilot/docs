import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CornerDownRight, FileText, Hash, Search, X } from "lucide-react";
import { searchableDocRecords, searchableDocs, type SearchRecord } from "@/lib/docs-search";

type SearchMatch = {
  key?: string | number;
  indices: ReadonlyArray<readonly [number, number]>;
};

type SearchResult = SearchRecord & {
  preview: string;
  score: number;
};

type SearchGroup = {
  codeSnippetCount: number;
  headingCount: number;
  items: SearchResult[];
  pagePreview?: string;
  pageScore: number;
  score: number;
  section: string;
  title: string;
  to: string;
};

function truncateSnippet(content: string, start: number, end: number) {
  const snippetStart = Math.max(0, start);
  const snippetEnd = Math.min(content.length, end);
  const slice = content.slice(snippetStart, snippetEnd).trim();

  return `${snippetStart > 0 ? "…" : ""}${slice}${snippetEnd < content.length ? "…" : ""}`;
}

function getPreview(content: string, matches?: readonly SearchMatch[]) {
  const contentMatch = matches?.find(
    (match): match is SearchMatch & { key: string } =>
      match.key === "content" && match.indices.length > 0,
  );

  if (!contentMatch) {
    return truncateSnippet(content, 0, 140);
  }

  const [matchStart, matchEnd] = contentMatch.indices[0];

  return truncateSnippet(content, matchStart - 60, matchEnd + 90);
}

function buildGroups(results: SearchResult[], searching: boolean) {
  const metaByRoute = new Map(
    searchableDocs.map((doc) => [
      doc.to,
      {
        codeSnippetCount: doc.codeSnippetCount,
        headingCount: doc.headings.length,
      },
    ]),
  );
  const groups = new Map<string, SearchGroup>();

  for (const result of results) {
    const meta = metaByRoute.get(result.to) ?? {
      codeSnippetCount: 0,
      headingCount: 0,
    };
    const current = groups.get(result.to) ?? {
      codeSnippetCount: meta.codeSnippetCount,
      headingCount: meta.headingCount,
      items: [],
      pagePreview: undefined,
      pageScore: Number.POSITIVE_INFINITY,
      score: result.score,
      section: result.section,
      title: result.title,
      to: result.to,
    };

    current.score = Math.min(current.score, result.score);

    if (result.heading) {
      if (!current.items.some((item) => item.id === result.id)) {
        current.items.push(result);
      }
    } else if (!current.pagePreview || result.score < current.pageScore) {
      current.pagePreview = result.preview;
      current.pageScore = result.score;
    }

    groups.set(result.to, current);
  }

  return [...groups.values()]
    .sort((a, b) => a.score - b.score)
    .slice(0, searching ? 6 : 8)
    .map((group) => ({
      ...group,
      items: group.items.sort((a, b) => a.score - b.score).slice(0, searching ? 4 : 2),
    }));
}

export function DocSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(searchableDocRecords, {
        keys: [
          { name: "title", weight: 0.35 },
          { name: "heading", weight: 0.3 },
          { name: "section", weight: 0.1 },
          { name: "content", weight: 0.25 },
        ],
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2,
        includeMatches: true,
        includeScore: true,
      }),
    [],
  );

  const query = q.trim();

  const results = useMemo(() => {
    if (!query) {
      return searchableDocs.slice(0, 8).map(
        (doc): SearchResult => ({
          content: doc.content,
          id: `${doc.to}#page`,
          preview: getPreview(doc.content),
          score: 0,
          section: doc.section,
          title: doc.title,
          to: doc.to,
        }),
      );
    }

    return fuse
      .search(query)
      .slice(0, 24)
      .map(
        (result): SearchResult => ({
          ...result.item,
          preview: getPreview(result.item.content, result.matches),
          score: result.score ?? 0,
        }),
      );
  }, [fuse, query]);

  const groups = useMemo(() => buildGroups(results, Boolean(query)), [query, results]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-full max-w-sm items-center gap-3 rounded-xl border border-border/80 bg-background/90 px-3.5 text-sm text-muted-foreground shadow-sm transition hover:border-border hover:bg-background hover:text-foreground"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search documentation...</span>
        <kbd className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline">
          ⌘ K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/22 px-4 pt-18 backdrop-blur-[3px] sm:pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-[1.35rem] border border-border/80 bg-background/95 shadow-[0_30px_90px_-38px_rgba(15,23,42,0.55)]"
          >
            <div className="flex items-center gap-3 border-b border-border/70 px-4 py-3.5 sm:px-5">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the docs..."
                className="flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-muted-foreground transition hover:bg-accent/70 hover:text-foreground"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="border-b border-border/60 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:px-5">
              {query ? "Search Results" : "Browse Docs"}
            </div>

            <div className="max-h-[34rem] overflow-y-auto px-2 py-2 sm:px-3">
              {groups.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-muted-foreground">
                  No results for "{query}"
                </div>
              ) : (
                <div className="divide-y divide-border/60">
                  {groups.map((group) => (
                    <section key={group.to} className="px-2 py-2.5">
                      <Link
                        to={group.to}
                        onClick={() => setOpen(false)}
                        className="group block rounded-2xl px-3 py-3 transition hover:bg-accent/45"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                              {group.section}
                            </div>
                            <div className="mt-1 truncate text-[15px] font-semibold text-foreground">
                              {group.title}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {group.headingCount > 0 && <SearchPill label="Main Topics" />}
                              {group.codeSnippetCount > 0 && <SearchPill label="Code Snippets" />}
                            </div>
                          </div>
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
                        </div>
                      </Link>

                      {group.items.length > 0 && (
                        <div className="mt-1 space-y-1 pl-12">
                          <div className="px-3 pt-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                            Main Topics
                          </div>
                          {group.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.to}
                              hash={item.anchor ? () => item.anchor : undefined}
                              onClick={() => setOpen(false)}
                              className="group flex gap-3 rounded-xl px-3 py-2.5 transition hover:bg-accent/35"
                            >
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/70 text-muted-foreground transition group-hover:bg-background">
                                {item.headingLevel === 3 ? (
                                  <CornerDownRight className="h-3.5 w-3.5" />
                                ) : (
                                  <Hash className="h-3.5 w-3.5" />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="truncate text-sm font-medium text-foreground">
                                  {item.heading}
                                </div>
                                <p
                                  className="mt-1 text-[13px] leading-5 text-muted-foreground"
                                  style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                  }}
                                >
                                  {item.preview}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border/70 bg-muted/60 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
      {label}
    </span>
  );
}
