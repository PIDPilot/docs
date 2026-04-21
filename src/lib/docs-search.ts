import { flatDocs } from "./docs-nav";

type FlatDoc = (typeof flatDocs)[number];

export type SearchHeading = {
  anchor: string;
  content: string;
  level: 2 | 3;
  title: string;
};

export type SearchDoc = FlatDoc & {
  content: string;
  codeSnippetCount: number;
  headings: SearchHeading[];
};

export type SearchRecord = FlatDoc & {
  anchor?: string;
  content: string;
  heading?: string;
  headingLevel?: 2 | 3;
  id: string;
};

const docsRouteModules = import.meta.glob("../routes/docs*.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function routeToModulePath(route: string) {
  if (route === "/docs") return "../routes/docs.index.tsx";

  return `../routes/docs.${route.replace(/^\/docs\//, "").replaceAll("/", ".")}.tsx`;
}

function extractPageMarkup(source: string) {
  const match = source.match(/function Page\(\)\s*\{[\s\S]*?return\s*\(([\s\S]*?)\);\s*\}/);
  return match?.[1] ?? source;
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripJsx(value: string) {
  return normalizeWhitespace(
    value
      .replace(/<CodeBlock[\s\S]*?code=\{`([\s\S]*?)`\}[\s\S]*?\/>/g, " $1 ")
      .replace(/\{\s*" "\s*\}/g, " ")
      .replace(/\{\s*' '\s*\}/g, " ")
      .replace(/\{"([^"]*?)"\}/g, " $1 ")
      .replace(/\{'([^']*?)'\}/g, " $1 ")
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
      .replace(/\{[\s\S]*?\}/g, " ")
      .replace(/<[^>]+>/g, " "),
  );
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createUniqueAnchor(title: string, usedAnchors: Map<string, number>) {
  const base = slugifyHeading(title) || "section";
  const count = usedAnchors.get(base) ?? 0;
  usedAnchors.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function extractHeadings(markup: string) {
  const headingMatches = [...markup.matchAll(/<(h[1-3])>([\s\S]*?)<\/\1>/g)].map((match) => ({
    end: (match.index ?? 0) + match[0].length,
    index: match.index ?? 0,
    level: Number(match[1].slice(1)) as 1 | 2 | 3,
    title: stripJsx(match[2]),
  }));

  const usedAnchors = new Map<string, number>();

  return headingMatches
    .filter((heading): heading is typeof heading & { title: string } => Boolean(heading.title))
    .map((heading, index, all) => {
      const nextHeading = all[index + 1];
      const content = stripJsx(markup.slice(heading.end, nextHeading?.index ?? markup.length));

      return {
        ...heading,
        anchor: createUniqueAnchor(heading.title, usedAnchors),
        content,
      };
    });
}

function countCodeSnippets(markup: string) {
  return [...markup.matchAll(/<CodeBlock\b/g)].length;
}

function extractSearchDoc(doc: FlatDoc): SearchDoc {
  const source = docsRouteModules[routeToModulePath(doc.to)] ?? "";
  const markup = extractPageMarkup(source);
  const headings = extractHeadings(markup);

  return {
    ...doc,
    content: stripJsx(markup),
    codeSnippetCount: countCodeSnippets(markup),
    headings: headings.filter(
      (heading): heading is SearchHeading => heading.level === 2 || heading.level === 3,
    ),
  };
}

export const searchableDocs: SearchDoc[] = flatDocs.map(extractSearchDoc);

export const searchableDocRecords: SearchRecord[] = searchableDocs.flatMap((doc) => [
  {
    content: doc.content,
    id: `${doc.to}#page`,
    section: doc.section,
    title: doc.title,
    to: doc.to,
  },
  ...doc.headings.map((heading) => ({
    anchor: heading.anchor,
    content: heading.content,
    heading: heading.title,
    headingLevel: heading.level,
    id: `${doc.to}#${heading.anchor}`,
    section: doc.section,
    title: doc.title,
    to: doc.to,
  })),
]);
