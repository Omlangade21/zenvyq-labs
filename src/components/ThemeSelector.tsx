"use client";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Mode = "system" | "light" | "dark";
const options: { mode: Mode; label: string; Icon: typeof Sun }[] = [
  { mode: "light", label: "Light theme", Icon: Sun },
  { mode: "system", label: "Match system theme", Icon: Monitor },
  { mode: "dark", label: "Dark theme", Icon: Moon },
];
export function ThemeSelector() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => {
    try { const t = localStorage.getItem("zl-theme"); if (t === "light" || t === "dark") setMode(t); } catch {}
  }, []);
  function choose(next: Mode) {
    setMode(next);
    const root = document.documentElement;
    try {
      if (next === "system") { localStorage.removeItem("zl-theme"); delete root.dataset.theme; }
      else { localStorage.setItem("zl-theme", next); root.dataset.theme = next; }
    } catch { if (next === "system") delete root.dataset.theme; else root.dataset.theme = next; }
  }
  return (
    <div role="group" aria-label="Colour theme" className="inline-flex rounded-ui border border-line p-0.5">
      {options.map(({ mode: m, label, Icon }) => (
        <button key={m} type="button" aria-label={label} aria-pressed={mode === m} title={label} onClick={() => choose(m)}
          className={`grid h-8 w-8 place-items-center rounded-[7px] transition-colors ${mode === m ? "bg-sel text-[#06141b]" : "text-muted hover:text-head"}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
