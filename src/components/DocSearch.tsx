import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { flatDocs } from "@/lib/docs-nav";

export function DocSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(
    () => new Fuse(flatDocs, { keys: ["title", "section"], threshold: 0.4 }),
    [],
  );

  const results = q ? fuse.search(q).slice(0, 8).map((r) => r.item) : flatDocs.slice(0, 8);

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
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex w-full max-w-xs items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition hover:border-brand/40 hover:text-foreground"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search docs…</span>
        <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the docs…"
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button onClick={() => setOpen(false)}>
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">No results</div>
              ) : (
                results.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    <span className="font-medium">{r.title}</span>
                    <span className="text-xs text-muted-foreground">{r.section}</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
