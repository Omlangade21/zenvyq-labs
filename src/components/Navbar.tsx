"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k); return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled || open ? "border-white/10 bg-ink/70 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`link-u text-sm transition hover:text-white ${path === l.href ? "text-white" : "text-zinc-400"}`}>{l.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/#audit" className="hidden !min-h-[40px] !px-5 md:inline-flex" arrow={false}>Get a Free Audit</Button>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="wrap flex h-[calc(100dvh-4rem)] flex-col justify-center gap-1 overflow-y-auto pb-16 md:hidden">
            {site.nav.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={l.href} className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl font-semibold text-white"><span className="font-mono text-xs text-accent">0{i + 1}</span>{l.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + site.nav.length * 0.07 }}><Button href="/#audit" className="mt-8 w-full">Get a Free Audit</Button></motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
