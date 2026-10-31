import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Services", description: "Website development, AI solutions and integrations, business automation and custom software from Zenvyq Labs.", alternates: { canonical: "/services" } };
const List = ({ items, title }: { items: string[]; title: string }) => (
  <div><h3 className="mb-4 text-sm font-semibold text-accent">{title}</h3><ul className="space-y-2.5">{items.map((i) => <li key={i} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{i}</li>)}</ul></div>
);
export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Four services. One goal: <span className="em">work that works.</span></>}>The business problems we solve, what you receive and the technologies we typically use.</PageHero>
      <section className="border-b border-line py-6"><div className="wrap"><nav aria-label="Services" className="flex flex-wrap gap-2">{services.map((s) => <a key={s.id} href={`#${s.id}`} className="chip hover:border-accent hover:text-accent">{s.title}</a>)}</nav></div></section>
      {services.map((s, i) => { const Icon = s.icon; return (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className={`section scroll-mt-20 ${i % 2 ? "band" : ""}`}>
          <div className="wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="flex items-center gap-3 text-sm font-semibold text-muted"><Icon className="h-6 w-6 text-accent" aria-hidden="true" />{s.n}</p>
              <h2 id={`${s.id}-h`} className="h2 mt-4">{s.title}</h2>
              <p className="lead mt-5">{s.what}</p>
              <p className="mt-5 text-muted"><span className="font-semibold text-head">Best for:</span> {s.who}</p>
              <Link href={`/contact?service=${s.id}`} className="btn-primary mt-8">Discuss this service <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </Reveal>
            <Reveal className="card grid gap-10 p-8 sm:grid-cols-2 sm:p-10">
              <List title="Problems we solve" items={s.problems} />
              <List title="What you receive" items={s.deliverables} />
              <div className="sm:col-span-2"><h3 className="mb-4 text-sm font-semibold text-accent">Technologies we typically use</h3><ul className="flex flex-wrap gap-2">{s.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul></div>
            </Reveal>
          </div>
        </section>
      ); })}
      <section className="ink section" aria-labelledby="start-h">
        <div className="wrap">
          <p className="eyebrow">Not sure where to start?</p><h2 id="start-h" className="h2 max-w-3xl">Start from the problem you have.</h2>
          <ul className="mt-12 border-b border-line">{services.map((s) => (
            <li key={s.id} className="border-t border-line"><Link href={`/contact?service=${s.id}`} className="group flex items-center justify-between gap-6 py-6 text-xl font-semibold tracking-tight text-head transition-colors hover:text-accent sm:text-2xl">“{s.start}” <ArrowRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" aria-hidden="true" /></Link></li>
          ))}</ul>
        </div>
      </section>
    </>
  );
}
