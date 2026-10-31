import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { ProjectVisual } from "@/components/visuals";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Projects", description: "Selected Zenvyq Labs projects: AuraVerify, the Bus Route Optimization System and a multimodal macOS AI assistant.", alternates: { canonical: "/projects" } };
export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title={<>Selected work, <span className="em">clearly labelled.</span></>}>Each project below was built by our founder. They are not paid client engagements, and we only describe what we can stand behind. No public demos are available yet.</PageHero>
      <section className="section pt-4"><div className="wrap space-y-10">
        {projects.map((p) => (
          <Reveal key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="card group grid overflow-hidden transition hover:border-accent lg:grid-cols-[1.1fr_.9fr]">
              <div className="band border-b border-line p-5 sm:p-8 lg:border-b-0 lg:border-r"><ProjectVisual kind={p.kind} /></div>
              <div className="flex flex-col p-8 sm:p-12">
                <p className="text-sm font-semibold text-accent">{p.n} · {p.category}</p>
                <h2 className="h2 mt-3 !text-[clamp(1.8rem,3vw,2.6rem)]">{p.title}</h2>
                <p className="mt-4 text-muted">{p.overview}</p>
                <p className="mt-5 flex flex-wrap gap-2"><span className="chip">{p.type}</span></p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-accent">Read the case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div></section>
    </>
  );
}
