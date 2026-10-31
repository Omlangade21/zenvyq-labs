"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";
import { ThemeSelector } from "./ThemeSelector";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${scrolled || open ? "border-line bg-[var(--header-bg)]" : "border-transparent bg-transparent"}`}>
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((l) => { const on = pathname.startsWith(l.href); return <Link key={l.href} href={l.href} aria-current={on ? "page" : undefined} className={`text-[0.95rem] font-medium transition-colors hover:text-head ${on ? "text-head" : "text-muted"}`}>{l.label}</Link>; })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeSelector />
          <Link href="/contact" className="btn-primary hidden !min-h-[2.75rem] !px-5 lg:inline-flex">Let’s Talk</Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-ui border border-line text-head lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="wrap flex h-[calc(100dvh-4.25rem)] flex-col overflow-y-auto bg-bg pb-10 lg:hidden">
          <ul className="mt-2">
            {[{ href: "/", label: "Home" }, ...site.nav].map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-semibold tracking-tight text-head">{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-8">Let’s Talk</Link>
        </nav>
      )}
    </header>
  );
}
