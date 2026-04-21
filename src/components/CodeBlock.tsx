import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";

const SUPPORTED_LANGUAGES = {
  bash: Prism.languages.bash,
  java: Prism.languages.java,
} as const;

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
  const trimmedCode = code.trim();
  const grammar = SUPPORTED_LANGUAGES[language as keyof typeof SUPPORTED_LANGUAGES];
  const highlightedCode = grammar ? Prism.highlight(trimmedCode, grammar, language) : null;

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-border bg-[oklch(0.18_0.03_258)] shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
        <span className="font-mono text-xs text-white/60">{filename ?? language}</span>
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
      <pre className="docs-code overflow-x-auto p-4 text-sm leading-6 text-white/85">
        {highlightedCode ? (
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        ) : (
          <code>{trimmedCode}</code>
        )}
      </pre>
    </div>
  );
}
