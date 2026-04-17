import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  code,
  language = "java",
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-border bg-[oklch(0.18_0.03_258)] shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
        <span className="font-mono text-xs text-white/60">
          {filename ?? language}
        </span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          background: "transparent",
          padding: "1rem 1.25rem",
          fontSize: "0.85rem",
          lineHeight: "1.6",
        }}
        codeTagProps={{ style: { fontFamily: "var(--font-mono)" } }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
