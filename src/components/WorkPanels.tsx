import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
const tints = ["139,123,255", "34,211,238", "198,255,61", "139,123,255"];
export function WorkPanels() {
  return (
    <section id="work" className="section scroll-mt-16">
      <div className="wrap">
        <p className="eyebrow mb-4">Selected Technical Work</p>
        <h2 className="h2 max-w-3xl">Things we’ve built.</h2>
        <p className="mb-14 mt-5 max-w-2xl text-base sm:text-lg">Personal and portfolio projects by founder Om Langade. They are not paid client engagements.</p>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <Link href={`/work#${p.id}`} className="group grid overflow-hidden rounded-xl border border-white/10 transition duration-500 hover:border-white/30 md:grid-cols-2" style={{ background: `radial-gradient(700px circle at ${i % 2 ? "0% 0%" : "100% 0%"}, rgba(${tints[i]},.14), transparent 65%)` }}>
                <div className={`flex min-h-[260px] items-center justify-center overflow-hidden p-8 transition duration-700 group-hover:bg-white/[0.03] ${i % 2 ? "md:order-2" : ""}`} style={{ color: `rgb(${tints[i]})` }}>
                  <div className="w-full transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110"><ProjectVisual kind={p.visual} className="h-52 w-full sm:h-64" /></div>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-12">
                  <p className="font-mono text-xs"><span className="text-accent">{p.n}</span> <span className="text-zinc-500">· {p.category}</span></p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed sm:text-base">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  <span className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-white">Read the case study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
