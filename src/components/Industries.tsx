"use client";
import { useState } from "react";
import { industries } from "@/data/content";

export function Industries() {
  const [i, setI] = useState(0);
  const cur = industries[i];
  return (
    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
      <div role="tablist" aria-label="Industries" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
        {industries.map((d, n) => (
          <button key={d.name} role="tab" id={`ind-${n}`} aria-selected={i === n} aria-controls="ind-panel" tabIndex={i === n ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowRight") setI((n + 1) % industries.length); if (e.key === "ArrowUp" || e.key === "ArrowLeft") setI((n + industries.length - 1) % industries.length); }}
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-left text-base font-semibold transition-colors lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 lg:text-xl ${i === n ? "border-accent text-accent lg:border-b-accent" : "border-line text-muted hover:text-head lg:border-b-line"}`}>
            {d.name}
          </button>
        ))}
      </div>
      <div id="ind-panel" role="tabpanel" aria-labelledby={`ind-${i}`} className="card p-7 sm:p-10">
        <h3 className="h3">{cur.name}</h3>
        <dl className="mt-8 grid gap-7 sm:grid-cols-3">
          {[["The challenge", cur.problem], ["How we’d help", cur.solution], ["What we’d automate", cur.automation]].map(([t, d]) => (
            <div key={t}><dt className="mb-2 text-sm font-semibold text-accent">{t}</dt><dd className="text-muted">{d}</dd></div>
          ))}
        </dl>
      </div>
    </div>
  );
}
