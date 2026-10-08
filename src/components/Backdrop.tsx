"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export function Backdrop() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const a = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["#7c5cff", "#22d3ee", "#7c5cff", "#22d3ee", "#7c5cff"]);
  const b = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["#22d3ee", "#7c5cff", "#22d3ee", "#7c5cff", "#22d3ee"]);
  const ya = useTransform(scrollYProgress, [0, 1], ["-10vh", "35vh"]);
  const yb = useTransform(scrollYProgress, [0, 1], ["30vh", "-15vh"]);
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const f = (e: PointerEvent) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { glow.current?.style.setProperty("--x", `${e.clientX}px`); glow.current?.style.setProperty("--y", `${e.clientY}px`); }); };
    window.addEventListener("pointermove", f, { passive: true });
    return () => { window.removeEventListener("pointermove", f); cancelAnimationFrame(raf); };
  }, [reduce]);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div style={{ background: a, y: reduce ? 0 : ya }} className="absolute -left-[20vw] top-0 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] rounded-full opacity-[.14] blur-[120px]" />
      <motion.div style={{ background: b, y: reduce ? 0 : yb }} className="absolute -right-[20vw] bottom-0 h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full opacity-[.10] blur-[120px]" />
      <div className="absolute left-[40%] top-[60%] h-48 w-48 rounded-full bg-lime-300 opacity-[.035] blur-[90px]" />
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at 50% 20%,#000 10%,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 20%,#000 10%,transparent 75%)" }} />
      <div ref={glow} className="absolute inset-0" style={{ background: "radial-gradient(420px circle at var(--x,50%) var(--y,30%), rgba(139,123,255,.10), transparent 65%)" }} />
      <div className="grain absolute inset-0 opacity-[.05]" />
    </div>
  );
}
