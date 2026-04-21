export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "pid-pilot-theme";

export function getDocumentTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return "light";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export const themeInitScript = `
(() => {
  try {
    const stored = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (_error) {
    document.documentElement.style.colorScheme = "light";
  }
})();
`;
