import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/content";
import { Logo } from "./Logo";

const head = "text-sm font-semibold text-head";
const link = "text-[0.95rem] text-muted transition-colors hover:text-head";
export function Footer() {
  return (
    <footer className="ink border-t border-line pb-10 pt-16">
      <div className="wrap grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-[0.95rem] text-muted">{site.description}</p>
          <p className="mt-5 text-sm font-semibold text-head">{site.tagline}</p>
        </div>
        <nav aria-label="Footer"><h2 className={head}>Company</h2>
          <ul className="mt-5 space-y-3">{site.nav.map((l) => <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>)}<li><Link href="/privacy" className={link}>Privacy</Link></li></ul>
        </nav>
        <div><h2 className={head}>Services</h2>
          <ul className="mt-5 space-y-3">{services.map((s) => <li key={s.id}><Link href={`/services#${s.id}`} className={link}>{s.title}</Link></li>)}</ul>
        </div>
        <div><h2 className={head}>Contact</h2>
          <ul className="mt-5 space-y-3">
            <li><a href={`mailto:${site.email}`} className={link}>{site.email}</a></li>
            <li><a href={site.url} className={link}>zenvyqlabs.com</a></li>
            <li><a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp {site.whatsappDisplay}</a></li>
            <li className="flex gap-5 pt-1">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (founder)" className={link}><Github className="h-5 w-5" /></a>
              <a href={site.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Founder portfolio" className={link}><Globe className="h-5 w-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Zenvyq Labs. All rights reserved.</p>
        <p>Built with Next.js and React.</p>
      </div>
    </footer>
  );
}
