import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm">{site.tagline}</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm text-white hover:text-accent">{site.email}</a>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-3 text-sm">{site.footerNav.map((l) => <li key={l.href}><Link href={l.href} className="link-u hover:text-white">{l.label}</Link></li>)}</ul></nav>
        <ul className="space-y-3 text-sm">
          <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a></li>
          <li><a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Globe className="h-4 w-4" aria-hidden="true" />Personal Portfolio</a></li>
        </ul>
      </div>
      <p className="wrap mt-12 text-xs text-zinc-600">© 2026 Zenvyq Labs. All rights reserved.</p>
    </footer>
  );
}
