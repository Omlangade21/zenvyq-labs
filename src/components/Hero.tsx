"use client";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { Button } from "./Button";
import { HeroSystem } from "./HeroSystem";
function Line({ t, d, grad }: { t: string; d: number; grad?: boolean }) {
  return <span className="block overflow-hidden pb-[0.08em]"><motion.span className={`block ${grad ? "text-grad" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] }}>{t}</motion.span></span>;
}
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(p, [0, 1], [0, -160]), textO = useTransform(p, [0, 0.6], [1, 0]);
  const sysS = useTransform(p, [0, 1], [1, 0.78]), sysY = useTransform(p, [0, 1], [0, 90]), sysO = useTransform(p, [0, 0.9], [1, 0.15]);
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const mx: MotionValue<number> = useSpring(rx, { stiffness: 70, damping: 18 }), my: MotionValue<number> = useSpring(ry, { stiffness: 70, damping: 18 });
  function onMove(e: PointerEvent<HTMLElement>) { if (e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); rx.set((e.clientX - r.left) / r.width - 0.5); ry.set((e.clientY - r.top) / r.height - 0.5); }
  return (
    <section ref={ref} onPointerMove={onMove} className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28">
      <div className="wrap relative grid w-full items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div style={{ y: textY, opacity: textO }}>
          <p className="eyebrow mb-6">Zenvyq Labs · Technology studio</p>
          <h1 className="font-display text-[clamp(3rem,11.5vw,8.5rem)] font-semibold leading-[.92] tracking-[-0.04em] text-white">
            <Line t="Build Better." d={0.1} /><Line t="Automate Smarter." d={0.28} grad />
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-8 max-w-lg text-base leading-relaxed sm:text-xl">Websites, full-stack systems and AI automation built around real business outcomes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/#audit">Get a Free Audit</Button><Button href="/work" variant="ghost">Explore Our Work</Button>
          </motion.div>
        </motion.div>
        <motion.div style={{ scale: sysS, y: sysY, opacity: sysO }}><HeroSystem mx={mx} my={my} /></motion.div>
      </div>
      <a href="#problem" className="cue absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-zinc-400 hover:text-white">Scroll to explore ↓</a>
    </section>
  );
}
