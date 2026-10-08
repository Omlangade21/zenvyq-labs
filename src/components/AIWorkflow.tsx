"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Pause, Play } from "lucide-react";
import { aiStages } from "@/data/story";
export function AIWorkflow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [a, setA] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = aiStages.length;
  useEffect(() => { if (!inView || paused || reduce) return; const id = setInterval(() => setA((x) => (x + 1) % n), 1900); return () => clearInterval(id); }, [inView, paused, reduce, n]);
  const shown = reduce ? n - 1 : a;
  return (
    <section id="ai" className="section scroll-mt-16" ref={ref}>
      <div className="wrap">
        <p className="eyebrow mb-4">AI capability</p>
        <h2 className="h2 max-w-3xl">AI should do more than <span className="text-grad">generate text.</span></h2>
        <p className="mt-5 max-w-2xl text-base sm:text-lg">Useful AI sits inside a workflow: it takes in a business event, decides, and triggers real action. Select a stage to follow an example lead through the system.</p>
        <div className="relative mt-14">
          <div className="absolute left-[8%] right-[8%] top-[34px] hidden h-px bg-white/10 lg:block" aria-hidden="true" />
          {!reduce && <motion.div className="absolute top-[28px] hidden h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_20px_#c6ff3d] lg:block" aria-hidden="true" animate={{ left: `calc(${8 + (shown / (n - 1)) * 84}% - 6px)` }} transition={{ type: "spring", stiffness: 70, damping: 16 }} />}
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {aiStages.map((s, i) => (
              <li key={s.t}>
                <button type="button" onClick={() => { setA(i); setPaused(true); }} aria-pressed={i === shown} className={`w-full rounded-lg border p-4 text-left transition duration-300 ${i === shown ? "border-accent bg-accent/15 shadow-[0_0_40px_rgba(139,123,255,.25)]" : i < shown ? "border-white/20 bg-white/[0.04]" : "border-white/10"}`}>
                  <span className="font-mono text-[10px] text-cyan-400">0{i + 1}</span>
                  <span className="mt-1 block font-display text-base font-semibold text-white">{s.t}</span>
                  <span className="mt-1 block text-xs text-zinc-400">{s.d}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 rounded-xl border border-white/10 bg-ink/60 p-5 font-mono text-xs sm:p-7 sm:text-sm">
          <div className="mb-4 flex items-center justify-between"><span className="text-zinc-500">Illustrative example workflow, not a live system</span>
            {!reduce && <button type="button" onClick={() => setPaused((p) => !p)} className="inline-flex items-center gap-2 text-zinc-300 hover:text-white" aria-label={paused ? "Play animation" : "Pause animation"}>{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}{paused ? "Play" : "Pause"}</button>}</div>
          <ul className="space-y-2" aria-live="polite">
            <AnimatePresence initial={false}>{aiStages.slice(0, shown + 1).map((s, i) => (
              <motion.li key={s.t} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className={`flex items-start gap-3 ${i === shown ? "text-white" : "text-zinc-500"}`}>
                <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === shown ? "text-lime-300" : ""}`} aria-hidden="true" />{s.log}
              </motion.li>))}</AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
