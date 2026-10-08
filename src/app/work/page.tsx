import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/content";
export const metadata: Metadata = { title: "Work", description: "Selected projects built by Zenvyq Labs founder Om Langade: AuraVerify, Cortex Growth, a bus route system and a multimodal macOS AI assistant.", alternates: { canonical: "/work" } };
export default function Work() {
  return (
    <>
      <PageHero eyebrow="Selected Projects" title="Things we’ve built.">These are personal and portfolio projects built by founder Om Langade. They are not paid client projects, and we don’t list client results, user counts or testimonials.</PageHero>
      <div className="wrap">
        {projects.map((p) => (
          <section key={p.id} id={p.id} className="scroll-mt-20 border-b border-white/10 py-16 sm:py-24">
            <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="font-mono text-xs"><span className="text-accent">{p.n}</span> <span className="text-zinc-500">· {p.category}</span></p>
                <h2 className="h2 mt-3">{p.title}</h2>
                <dl className="mt-8 space-y-6 text-sm leading-relaxed">
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Overview</dt><dd className="mt-2">{p.overview}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Problem</dt><dd className="mt-2">{p.problem}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Approach</dt><dd className="mt-2">{p.approach}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">What was built</dt><dd><ul className="mt-2 space-y-2">{p.built.map((b) => <li key={b} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />{b}</li>)}</ul></dd></div>
                </dl>
                <ul className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-medium text-accent">View project</a>}
              </div>
              <div className="card self-start bg-ink-soft p-6"><ProjectVisual kind={p.visual} /><p className="mt-4 text-xs text-zinc-500">An abstract illustration, not a screenshot of the product.</p></div>
            </Reveal>
          </section>
        ))}
      </div>
      <CTASection title="Want something like this built for your business?" />
    </>
  );
}
