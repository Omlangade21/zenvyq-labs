"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { stages, nodes, edges } from "@/data/story";
function Visual({ stage }: { stage: number }) {
  const bars = [6, 10, 15];
  return (
    <svg viewBox="0 0 100 84" className="h-full w-full" fill="none" role="img" aria-label={`System diagram at stage: ${stages[stage].k}`}>
      <motion.g animate={{ opacity: stage === 0 ? 1 : 0 }}>
        <motion.circle cx="50" cy="38" r="7" stroke="#f59e0b" strokeWidth=".6" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: "50px 38px" }} />
        <text x="50" y="40.2" textAnchor="middle" fontSize="6" fill="#f59e0b">!</text><text x="50" y="54" textAnchor="middle" fontSize="3" fill="#a1a1aa">PROBLEM</text>
      </motion.g>
      {edges.map(([a, b, from]) => <motion.line key={`${a}${b}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={from === 2 ? "#8b7bff" : "#22d3ee"} strokeWidth=".6" initial={false} animate={{ pathLength: stage >= from ? 1 : 0, opacity: stage >= from ? 1 : 0 }} transition={{ duration: 0.6 }} />)}
      {nodes.map((n) => { const solid = stage >= n.from, ghost = !solid && n.plan && stage === n.from - 1; const c = n.from === 2 ? "#8b7bff" : "#22d3ee"; return (
        <motion.g key={n.id} initial={false} animate={{ opacity: solid ? 1 : ghost ? 0.4 : 0 }} transition={{ duration: 0.5 }}>
          <rect x={n.x - 11} y={n.y - 5} width="22" height="10" rx="2" fill={solid ? `${c}22` : "none"} stroke={c} strokeWidth=".5" strokeDasharray={solid ? undefined : "1.5 1.5"} />
          <text x={n.x} y={n.y + 1.2} textAnchor="middle" fontSize="3.2" fill="#fff">{n.id}</text>
        </motion.g>); })}
      {bars.map((h, i) => <motion.rect key={i} x={38 + i * 10} width="6" rx="1" fill="#c6ff3d" initial={false} animate={{ height: stage >= 4 ? h : 0, y: stage >= 4 ? 76 - h : 76, opacity: stage >= 4 ? 0.9 : 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} />)}
      <motion.text x="50" y="81" textAnchor="middle" fontSize="3" fill="#a1a1aa" animate={{ opacity: stage >= 4 ? 1 : 0 }}>ANALYTICS</motion.text>
    </svg>
  );
}
export function BuildProcess() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setStage(Math.min(4, Math.max(0, Math.floor(v * 5)))));
  if (reduce) return (
    <section id="process" className="section scroll-mt-16"><div className="wrap"><p className="eyebrow mb-4">How we build</p><h2 className="h2 mb-10">Watch a system take shape.</h2>
      <ol className="grid gap-6 md:grid-cols-5">{stages.map((s, i) => <li key={s.k} className="card p-5"><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="mt-2 font-display text-lg font-semibold text-white">{s.k}</h3><p className="mt-1 text-sm">{s.cap}</p></li>)}</ol></div></section>
  );
  const s = stages[stage];
  return (
    <section id="process" ref={ref} className="relative h-[300vh] scroll-mt-16">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden pt-16">
        <div className="wrap grid w-full items-center gap-4 md:grid-cols-[.9fr_1.1fr] md:gap-10">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-3">How we build</p>
            <AnimatePresence mode="wait">
              <motion.div key={s.k} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }} aria-live="polite">
                <h2 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl">{s.k}</h2>
                <p className="mt-3 font-mono text-sm text-cyan-400">{s.cap}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed sm:text-base">{s.d}</p>
              </motion.div>
            </AnimatePresence>
            <ol className="mt-6 flex gap-3 font-mono text-[10px] sm:text-xs">{stages.map((x, i) => <li key={x.k} className={`border-t-2 pt-2 transition-colors ${i <= stage ? "border-accent text-white" : "border-white/10 text-zinc-600"}`}>{x.k}</li>)}</ol>
          </div>
          <div className="order-1 h-[38svh] rounded-xl border border-white/10 bg-ink/50 p-3 md:order-2 md:h-[56svh]"><Visual stage={stage} /></div>
        </div>
      </div>
    </section>
  );
}
