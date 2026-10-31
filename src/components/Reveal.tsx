"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
/** One restrained entrance: short fade with a 10px rise. Disabled when the visitor prefers reduced motion. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div data-reveal className={className} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
