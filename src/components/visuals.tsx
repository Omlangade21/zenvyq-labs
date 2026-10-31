import type { Project } from "@/data/content";

const bar = "rounded-full bg-line";
/** Illustrative interface composition: website, AI assistant and automation flow. Decorative only. */
export function HeroVisual() {
  const steps = ["New enquiry", "WhatsApp reply", "Added to CRM"];
  return (
    <div className="relative mx-auto aspect-[5/4.5] w-full max-w-[36rem]" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-[76%] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_40px_90px_-40px_rgba(6,20,27,.55)]">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          {[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-line" />)}
          <span className={`${bar} ml-3 h-4 w-40 bg-band`} />
        </div>
        <div className="grid grid-cols-[1.15fr_.85fr] gap-6 p-6">
          <div className="space-y-3">
            <span className="block h-2.5 w-20 rounded-full bg-accent/80" />
            <span className="block h-6 w-full rounded-md bg-head/90" /><span className="block h-6 w-3/4 rounded-md bg-head/90" />
            <span className={`${bar} block h-2.5 w-full`} /><span className={`${bar} block h-2.5 w-5/6`} />
            <span className="mt-4 block h-9 w-32 rounded-full bg-btn" />
          </div>
          <div className="space-y-2.5 rounded-xl border border-line bg-band p-3.5">
            {[0, 1, 2, 3].map((i) => <div key={i} className="flex items-center gap-2.5"><span className="h-6 w-6 shrink-0 rounded-full bg-blue/50" /><span className={`${bar} h-2 flex-1`} /></div>)}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[56%] rounded-2xl border border-line bg-band p-4 shadow-[0_30px_70px_-30px_rgba(6,20,27,.6)]">
        <div className="mb-3 flex items-center gap-2 text-[0.7rem] font-semibold text-muted"><span className="h-2 w-2 rounded-full bg-accent" />AI assistant</div>
        <span className="ml-auto block h-7 w-3/4 rounded-xl rounded-br-sm bg-line" />
        <div className="mt-2.5 space-y-1.5 rounded-xl rounded-bl-sm border border-accent/40 bg-accent/10 p-3"><span className="block h-2 w-full rounded-full bg-accent/50" /><span className="block h-2 w-2/3 rounded-full bg-accent/50" /></div>
      </div>
      <div className="absolute bottom-[4%] right-0 w-[38%] rounded-2xl border border-line bg-card p-4 shadow-[0_30px_70px_-30px_rgba(6,20,27,.6)]">
        <p className="mb-3 text-[0.7rem] font-semibold text-muted">Automation</p>
        <ol className="space-y-2.5">
          {steps.map((s, i) => (
            <li key={s} className="relative flex items-center gap-2.5 text-[0.7rem] font-medium text-head">
              <span className="relative z-10 grid h-5 w-5 place-items-center rounded-full border border-accent bg-bg"><span className="h-1.5 w-1.5 rounded-full bg-accent" /></span>{s}
              {i < steps.length - 1 && <span className="absolute left-2.5 top-5 h-3 w-px bg-line" />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const T = "fill-muted text-[13px] font-semibold";
function Window({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <rect x="24" y="24" width="592" height="432" rx="18" className="fill-card stroke-line" />
      <path d="M24 74h592" className="stroke-line" />
      {[0, 1, 2].map((i) => <circle key={i} cx={52 + i * 18} cy="49" r="5" className="fill-line" />)}
      <text x="132" y="54" className={T}>{title}</text>
      {children}
    </>
  );
}
function Profiles() {
  const cards = [[48, 100, false], [336, 100, false], [48, 270, true], [336, 270, false]] as const;
  return (
    <Window title="Profile review">
      {cards.map(([x, y, flag]) => (
        <g key={`${x}${y}`}>
          <rect x={x} y={y} width="256" height="150" rx="14" className={flag ? "fill-violet/10 stroke-violet" : "fill-band stroke-line"} strokeWidth={flag ? 1.6 : 1} />
          <circle cx={x + 40} cy={y + 42} r="20" className="fill-blue/40" />
          <rect x={x + 72} y={y + 30} width="110" height="9" rx="4.5" className="fill-head/80" />
          <rect x={x + 72} y={y + 48} width="70" height="7" rx="3.5" className="fill-line" />
          {[0, 1, 2].map((i) => <rect key={i} x={x + 24} y={y + 84 + i * 16} width={[170, 120, 90][(i + (flag ? 0 : 1)) % 3]} height="7" rx="3.5" className={flag && i < 2 ? "fill-violet/70" : "fill-accent/60"} />)}
          {flag && <><rect x={x + 120} y={y + 108} width="116" height="26" rx="13" className="fill-violet" /><text x={x + 178} y={y + 125} textAnchor="middle" className="fill-white text-[11.5px] font-semibold">Flagged for review</text></>}
        </g>
      ))}
    </Window>
  );
}
function Route() {
  const stops = [[90, 330], [190, 270], [300, 250], [410, 190], [500, 140]];
  return (
    <Window title="Network overview">
      <rect x="44" y="94" width="356" height="342" rx="12" className="fill-band" />
      {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M44 ${130 + i * 56}h356M${80 + i * 56} 94v342`} className="stroke-line" strokeWidth=".8" opacity=".6" />)}
      <polyline points="70,400 110,330 190,270 300,250 360,190" className="fill-none stroke-accent" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="70,130 150,170 230,170 300,250 340,330 380,400" className="fill-none stroke-blue" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="60,290 140,330 230,330 300,250 380,230" className="fill-none stroke-violet" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      {[[110, 330], [190, 270], [300, 250], [230, 170], [340, 330], [230, 330]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="8" className="fill-card stroke-head" strokeWidth="3" />)}
      <rect x="276" y="226" width="48" height="26" rx="8" className="fill-accent" /><rect x="284" y="233" width="32" height="8" rx="3" className="fill-bg" />
      <text x="428" y="118" className={T}>Schedule</text>
      {[0, 1, 2, 3, 4].map((i) => <g key={i}><circle cx="440" cy={150 + i * 40} r="6" className={["fill-accent", "fill-blue", "fill-violet", "fill-accent", "fill-blue"][i]} /><rect x="458" y={144 + i * 40} width={[110, 90, 120, 80, 100][i]} height="8" rx="4" className="fill-head/70" /><rect x="458" y={158 + i * 40} width="60" height="6" rx="3" className="fill-line" /></g>)}
      <text x="428" y="378" className={T}>Tracking</text>
      <rect x="428" y="392" width="164" height="30" rx="15" className="fill-accent/15 stroke-accent" /><text x="510" y="412" textAnchor="middle" className="fill-accent text-[12px] font-semibold">Vehicles on route</text>
    </Window>
  );
}
function Assistant() {
  return (
    <Window title="Assistant">
      <rect x="44" y="94" width="300" height="250" rx="12" className="fill-band stroke-line" />
      <circle cx="194" cy="196" r="34" className="fill-blue/40" /><path d="M120 330c8-56 40-80 74-80s66 24 74 80z" className="fill-blue/40" />
      {[[44, 94, 1, 1], [344, 94, -1, 1], [44, 344, 1, -1], [344, 344, -1, -1]].map(([x, y, a, b], i) => <path key={i} d={`M${x} ${y + 26 * b}V${y}H${x + 26 * a}`} className="fill-none stroke-accent" strokeWidth="3.5" strokeLinecap="round" />)}
      <rect x="236" y="120" width="82" height="22" rx="5" className="fill-none stroke-violet" strokeDasharray="5 4" /><text x="277" y="136" textAnchor="middle" className="fill-violet text-[11px] font-semibold">Text found</text>
      <text x="364" y="116" className={T}>Voice</text>
      {Array.from({ length: 20 }).map((_, i) => { const h = 10 + Math.abs(Math.sin(i * 0.9)) * 52; return <rect key={i} x={364 + i * 11.5} y={170 - h / 2} width="6" height={h} rx="3" className={i < 12 ? "fill-accent" : "fill-line"} />; })}
      <rect x="364" y="218" width="226" height="126" rx="14" className="fill-accent/10 stroke-accent/50" />
      {[0, 1, 2].map((i) => <rect key={i} x="382" y={238 + i * 24} width={[190, 170, 110][i]} height="8" rx="4" className="fill-head/70" />)}
      {["Voice", "Camera", "Screen"].map((l, i) => <g key={l}><rect x={44 + i * 112} y="372" width="100" height="36" rx="18" className="fill-card stroke-line" /><circle cx={64 + i * 112} cy="390" r="4" className="fill-accent" /><text x={78 + i * 112} y="395" className="fill-head text-[13px] font-semibold">{l}</text></g>)}
      <rect x="372" y="372" width="218" height="36" rx="18" className="fill-band stroke-line" /><text x="481" y="395" textAnchor="middle" className={T}>Combined into one context</text>
    </Window>
  );
}
/** Illustrative interface for a project. Not a screenshot. */
export function ProjectVisual({ kind, className = "" }: { kind: Project["kind"]; className?: string }) {
  const Art = { profiles: Profiles, route: Route, assistant: Assistant }[kind];
  return (
    <svg viewBox="0 0 640 480" role="img" aria-label="Illustrative interface, not a screenshot" className={`block w-full ${className}`}><Art /></svg>
  );
}
