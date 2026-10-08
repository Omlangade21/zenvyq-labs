"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/content";
import { topics } from "@/data/story";
import { FlowDiagram } from "./FlowDiagram";
export function IndustriesExplorer() {
  const [i, setI] = useState(0);
  const x = industries[i], Icon = x.icon, hue = 255 - i * 14;
  return (
    <section id="industries" className="section scroll-mt-16">
      <div className="wrap">
        <p className="eyebrow mb-4">Industries we can help</p>
        <h2 className="h2 mb-3 max-w-3xl">Built for businesses that want to move faster.</h2>
        <p className="mb-12 max-w-2xl text-sm text-zinc-500">These are areas Zenvyq can serve, not a list of existing clients.</p>
        <div className="grid gap-6 lg:grid-cols-[.55fr_1.45fr]">
          <div role="group" aria-label="Industries" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {industries.map((n, k) => (
              <button key={n.name} type="button" aria-pressed={k === i} onClick={() => setI(k)} onMouseEnter={() => setI(k)} className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition lg:rounded-none lg:border-0 lg:border-t lg:border-white/10 lg:px-0 lg:py-4 lg:text-left lg:text-lg ${k === i ? "border-accent bg-accent/15 text-white lg:bg-transparent lg:pl-3" : "border-white/10 text-zinc-400 hover:text-white"}`}>{n.name}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={x.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} aria-live="polite" className="rounded-xl border border-white/10 p-6 sm:p-9" style={{ background: `radial-gradient(560px circle at 90% 0%, hsl(${hue} 85% 62% / .2), transparent 70%), rgba(255,255,255,.02)` }}>
              <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">{x.name}</h3>
              <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                <div><dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">Common problem</dt><dd className="mt-2 text-sm leading-relaxed">{x.problem}</dd></div>
                <div><dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">How we can help</dt><dd className="mt-2 text-sm leading-relaxed">{x.solution}</dd></div>
              </dl>
              <div className="mt-8"><FlowDiagram steps={topics[x.name].map((t) => ({ t }))} color={`hsl(${hue} 85% 62%)`} /></div>
              <Link href={`/industries#${x.name.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="link-u mt-8 inline-block text-sm font-medium text-white">More on {x.name} →</Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
