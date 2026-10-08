"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Step } from "@/data/story";
export function FlowDiagram({ steps, color }: { steps: Step[]; color: string }) {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(0);
  useEffect(() => { if (reduce) return; const id = setInterval(() => setOn((o) => (o + 1) % steps.length), 1300); return () => clearInterval(id); }, [reduce, steps.length]);
  return (
    <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
      {steps.map((s, i) => {
        const lit = reduce || i === on;
        return (
          <li key={s.t} className="flex flex-1 flex-col items-center gap-2 md:flex-row">
            <motion.div animate={{ borderColor: lit ? color : "rgba(255,255,255,.1)", backgroundColor: lit ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.02)" }} transition={{ duration: 0.35 }} className="w-full flex-1 rounded-lg border p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-base font-semibold text-white">{s.t}</p>
              {s.d && <p className="mt-1 text-xs leading-snug text-zinc-400">{s.d}</p>}
            </motion.div>
            {i < steps.length - 1 && <ChevronRight className="h-4 w-4 shrink-0 rotate-90 text-zinc-600 md:rotate-0" aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  );
}
