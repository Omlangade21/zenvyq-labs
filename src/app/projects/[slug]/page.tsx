import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui";
import { ProjectVisual } from "@/components/visuals";
import { projects } from "@/data/content";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title}: ${p.category}`, description: p.overview, alternates: { canonical: `/projects/${p.slug}` } } : {};
}
export default async function Project({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i], next = projects[(i + 1) % projects.length];
  const facts = [["Type", p.type], ["Role", p.role], ["Status", p.status], ["Technology", p.tech.join(", ")]];
  return (
    <>
      <PageHero eyebrow={`Case study · ${p.category}`} title={p.title}>{p.summary}</PageHero>
      <section className="pb-8"><div className="wrap">
        <div className="overflow-hidden rounded-3xl border border-line bg-band p-4 sm:p-8"><ProjectVisual kind={p.kind} className="mx-auto max-w-3xl" /></div>
        <p className="mt-3 text-xs text-muted">Illustrative interface, not a screenshot.</p>
        <dl className="mt-10 grid gap-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([k, v]) => <div key={k}><dt className="text-sm font-semibold text-accent">{k}</dt><dd className="mt-1 text-head">{v}</dd></div>)}
        </dl>
      </div></section>
      <section className="section"><div className="wrap grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
        <div className="max-w-prose space-y-12">
          {[["Overview", p.overview], ["The problem", p.problem], ["Our approach", p.approach]].map(([h, t]) => <div key={h}><h2 className="h3">{h}</h2><p className="mt-3 text-lg text-muted">{t}</p></div>)}
          <div><h2 className="h3">What was built</h2><ul className="mt-4 space-y-3">{p.built.map((b) => <li key={b} className="flex gap-3 text-lg text-muted"><Check className="mt-1.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />{b}</li>)}</ul></div>
        </div>
        <aside className="card h-fit p-8 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold text-head">What we can and can’t say</h2>
          <p className="mt-3 text-[0.95rem] text-muted">{p.type}. It is not presented as a commercial product or paid client work. No usage figures, customer results or deployment claims are made{p.url ? "" : ", and there is no public demo available yet"}.</p>
          {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 w-full">View project</a>}
          <Link href="/contact" className="btn-primary mt-4 w-full">Discuss a similar build</Link>
        </aside>
      </div></section>
      <section className="border-t border-line py-10"><div className="wrap flex flex-col justify-between gap-4 sm:flex-row">
        <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-muted hover:text-head"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All projects</Link>
        <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-2 font-semibold text-accent">Next: {next.title}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div></section>
    </>
  );
}
