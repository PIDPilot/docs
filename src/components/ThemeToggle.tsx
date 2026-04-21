import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { THEME_STORAGE_KEY, applyTheme, getDocumentTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(getDocumentTheme);

  useEffect(() => {
    setTheme(getDocumentTheme());
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  const handleToggle = () => {
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("relative rounded-full", className)}
      onClick={handleToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all",
          theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all",
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
        )}
      />
      <span className="sr-only">{`Switch to ${nextTheme} mode`}</span>
    </Button>
  );
}
