"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { serviceViz } from "@/data/story";
import { FlowDiagram } from "./FlowDiagram";
export function ServicesExplorer() {
  const [i, setI] = useState(0);
  const s = services[i], v = serviceViz[i], Icon = s.icon;
  return (
    <section id="services" className="section scroll-mt-16">
      <div className="wrap">
        <p className="eyebrow mb-4">Capabilities</p>
        <h2 className="h2 mb-12 max-w-3xl">Digital systems built around your business.</h2>
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div role="group" aria-label="Services" className="flex flex-col">
            {services.map((x, n) => (
              <button key={x.id} type="button" aria-pressed={n === i} onClick={() => setI(n)} onMouseEnter={() => setI(n)} onFocus={() => setI(n)} className={`group flex items-baseline gap-5 border-t border-white/10 py-6 text-left transition last:border-b ${n === i ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
                <span className={`font-mono text-sm transition ${n === i ? "text-accent" : ""}`}>{x.n}</span>
                <span className={`font-display text-2xl font-semibold transition-transform duration-300 sm:text-4xl ${n === i ? "translate-x-2" : ""}`}>{x.title}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={s.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} aria-live="polite" className="relative overflow-hidden rounded-xl border border-white/10 p-6 sm:p-9" style={{ background: `radial-gradient(520px circle at 85% 0%, ${v.color}30, transparent 70%), rgba(255,255,255,.02)` }}>
              <div className="flex items-center justify-between"><Icon className="h-7 w-7" style={{ color: v.color }} aria-hidden="true" /><span className="font-display text-6xl font-semibold text-white/10">{s.n}</span></div>
              <p className="mt-5 text-lg text-white">{s.short}</p>
              <p className="mt-2 text-sm leading-relaxed">{s.what}</p>
              <div className="mt-8"><FlowDiagram steps={v.steps} color={v.color} /></div>
              <ul className="mt-8 grid gap-2 font-mono text-xs text-zinc-400 sm:grid-cols-3">{v.points.map((p) => <li key={p} className="flex gap-2"><span style={{ color: v.color }}>▸</span>{p}</li>)}</ul>
              <Link href={`/services#${s.id}`} className="link-u mt-8 inline-flex items-center gap-1 text-sm font-medium text-white">Details and deliverables <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
