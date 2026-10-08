"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, type PointerEvent, type ReactNode } from "react";
type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost"; arrow?: boolean; className?: string; external?: boolean };
export function Button({ href, children, variant = "primary", arrow = true, className = "", external }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  function move(e: PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`); el.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) el.style.transform = `translate(${dx * 0.12}px, ${dy * 0.2}px)`;
  }
  function leave() { if (ref.current) ref.current.style.transform = ""; }
  const base = "btn-light group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 active:scale-[.97]";
  const style = variant === "primary" ? "bg-white text-ink hover:bg-lime-300" : "border border-white/20 text-white hover:border-accent";
  const content = <>{children}{arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}</>;
  const cls = `${base} ${style} ${className}`;
  const isExt = external || href.startsWith("mailto:") || href.startsWith("http");
  return isExt
    ? <a ref={ref} onPointerMove={move} onPointerLeave={leave} href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{content}</a>
    : <Link ref={ref} onPointerMove={move} onPointerLeave={leave} href={href} className={cls}>{content}</Link>;
}
