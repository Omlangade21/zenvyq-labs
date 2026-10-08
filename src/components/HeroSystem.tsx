"use client";
import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { useState } from "react";
const pts = [
  { t: "Website", s: "Attracts", x: 24, y: 10, d: 1 }, { t: "Leads", s: "Captured", x: 72, y: 29, d: 1.6 }, { t: "AI", s: "Qualifies", x: 28, y: 50, d: 0.8 },
  { t: "Automation", s: "Acts", x: 72, y: 70, d: 1.4 }, { t: "Business", s: "Grows", x: 42, y: 90, d: 1 },
];
const path = pts.map((p, i) => { if (i === 0) return `M${p.x} ${p.y}`; const q = pts[i - 1], m = (q.y + p.y) / 2; return `C${q.x} ${m} ${p.x} ${m} ${p.x} ${p.y}`; }).join(" ");
function Node({ p, i, mx, my, active, setActive }: { p: (typeof pts)[number]; i: number; mx: MotionValue<number>; my: MotionValue<number>; active: number | null; setActive: (n: number | null) => void }) {
  const x = useTransform(mx, (v) => v * 36 * p.d), y = useTransform(my, (v) => v * 26 * p.d);
  const on = active === i;
  return (
    <div style={{ left: `${p.x}%`, top: `${p.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2"><motion.div style={{ x, y }} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}>
      <div className={`rounded-lg border px-3 py-2 backdrop-blur transition duration-300 ${on ? "scale-110 border-accent bg-accent/20 shadow-[0_0_40px_rgba(139,123,255,.45)]" : "border-white/15 bg-ink/70"}`}>
        <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">0{i + 1}</p>
        <p className="font-display text-sm font-semibold text-white sm:text-base">{p.t}</p>
        <p className="hidden text-[10px] text-zinc-400 sm:block">{p.s}</p>
      </div>
    </motion.div></div>
  );
}
export function HeroSystem({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const bx = useTransform(mx, (v) => v * -14), by = useTransform(my, (v) => v * -10);
  return (
    <div role="img" aria-label="Animated system diagram: Website leads to Leads, then AI, then Automation, then Business" className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[460px]">
      <motion.div style={{ x: bx, y: by }} className="absolute inset-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
          <defs><linearGradient id="hl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8b7bff" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs>
          <path id="flow" d={path} stroke="url(#hl)" strokeWidth=".5" strokeOpacity=".7" vectorEffect="non-scaling-stroke" />
          <path d={path} stroke="#fff" strokeOpacity=".25" strokeWidth=".4" strokeDasharray="1 3" vectorEffect="non-scaling-stroke" />
          {!reduce && [0, 1.6, 3.2].map((b) => <circle key={b} r="1.1" fill="#c6ff3d"><animateMotion dur="5s" begin={`${b}s`} repeatCount="indefinite"><mpath href="#flow" /></animateMotion></circle>)}
        </svg>
        <div className="absolute inset-[10%] -z-10 rounded-full bg-accent/20 blur-[80px]" />
      </motion.div>
      {pts.map((p, i) => <Node key={p.t} p={p} i={i} mx={mx} my={my} active={active} setActive={setActive} />)}
    </div>
  );
}
