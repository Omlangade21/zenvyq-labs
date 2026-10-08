"use client";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { problems } from "@/data/story";
type R = [number, number, number, number];
// Each layer: [fade-in start, fully visible, fade-out start, fully gone]. Slots are back-to-back, so a layer is
// fully gone before the next begins to appear: never two headlines readable at once.
function Layer({ p, r, mode = "mid", children }: { p: MotionValue<number>; r: R; mode?: "first" | "mid" | "last"; children: ReactNode }) {
  const o = mode === "first" ? [1, 1, 1, 0] : mode === "last" ? [0, 1, 1, 1] : [0, 1, 1, 0];
  const yv = mode === "first" ? [0, 0, 0, -32] : mode === "last" ? [32, 0, 0, 0] : [32, 0, 0, -32];
  const fv = mode === "first" ? ["blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"] : mode === "last" ? ["blur(6px)", "blur(0px)", "blur(0px)", "blur(0px)"] : ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"];
  const opacity = useTransform(p, r, o), y = useTransform(p, r, yv), filter = useTransform(p, r, fv);
  return <motion.div style={{ opacity, y, filter }} className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">{children}</motion.div>;
}
const Head = () => <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">Your business doesn’t need more software.<br /><span className="text-grad">It needs better systems.</span></h2>;
const Final = () => <><p className="eyebrow mb-5">The answer</p><h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">We build the systems behind <span className="text-grad">better businesses.</span></h2></>;
export function ProblemStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  if (reduce) return (
    <section id="problem" className="wrap section scroll-mt-16 text-center"><Head /><ul className="mx-auto mt-12 max-w-2xl space-y-6">{problems.map((x) => <li key={x.w}><p className="font-display text-3xl font-semibold text-white">{x.w}</p><p>{x.d}</p></li>)}</ul><div className="mt-16"><Final /></div></section>
  );
  return (
    <section id="problem" ref={ref} className="relative -mt-16 h-[300vh] scroll-mt-0">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <Layer p={p} r={[0, 0.001, 0.085, 0.12]} mode="first"><Head /></Layer>
        {problems.map((x, i) => { const s = 0.12 + i * 0.13; return (
          <Layer key={x.w} p={p} r={[s, s + 0.035, s + 0.095, s + 0.13]}>
            <p className="font-mono text-xs tracking-widest text-accent">0{i + 1} / 05</p>
            <h3 className="mt-5 font-display text-5xl font-semibold leading-none tracking-tight text-white sm:text-8xl">{x.w}</h3>
            <p className="mt-6 max-w-md text-base sm:text-lg">{x.d}</p>
            <span className="mt-8 text-2xl text-cyan-400" aria-hidden="true">↓</span>
          </Layer>
        ); })}
        <Layer p={p} r={[0.77, 0.815, 1, 1]} mode="last"><Final /></Layer>
      </div>
    </section>
  );
}
