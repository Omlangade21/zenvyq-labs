import type { Project } from "@/data/content";
export function ProjectVisual({ kind, className = "h-36 w-full text-accent" }: { kind: Project["visual"]; className?: string }) {
  return (
    <figure className="m-0">
      <svg viewBox="0 0 300 140" className={className} fill="none" stroke="currentColor" strokeOpacity=".75" strokeWidth="1.5" strokeLinecap="round" role="img" aria-label="Abstract conceptual illustration">
        {kind === "graph" && <><circle cx="150" cy="70" r="13" /><circle cx="55" cy="30" r="8" /><circle cx="245" cy="35" r="8" /><circle cx="65" cy="112" r="8" /><circle cx="238" cy="108" r="8" strokeDasharray="3 3" /><path d="M138 63L62 34M162 63l75-24M139 79L72 107M161 79l68 26" /></>}
        {kind === "wire" && <><rect x="25" y="12" width="250" height="116" rx="8" /><path d="M25 34h250M45 62h110M45 78h80" /><rect x="185" y="50" width="75" height="58" rx="5" /><rect x="45" y="96" width="60" height="18" rx="9" /></>}
        {kind === "route" && <><path d="M20 112C70 112 70 38 130 38S190 104 240 104 270 60 284 38" /><circle cx="20" cy="112" r="6" /><circle cx="130" cy="38" r="6" /><circle cx="240" cy="104" r="6" /><circle cx="284" cy="38" r="6" /></>}
        {kind === "wave" && <><path d="M20 70h24l10-34 14 68 14-52 12 36 10-18h26l12-30 14 60 12-42 10 26h40l12-22 10 18h26" /><circle cx="150" cy="70" r="46" strokeDasharray="2 6" /></>}
      </svg>
      <figcaption className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-600">Conceptual illustration</figcaption>
    </figure>
  );
}
