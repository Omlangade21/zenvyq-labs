import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Industries } from "@/components/Industries";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/ui";
import { HeroVisual, ProjectVisual } from "@/components/visuals";
import { highlights, process, projects, reasons, services, stack } from "@/data/content";
import { site } from "@/config/site";

export default function Home() {
  return (
    <>
      <section className="tint relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="gridlines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Technology solutions studio</p>
            <h1 className="display">Build Better. Automate <span className="em">Smarter.</span></h1>
            <p className="lead mt-8">We design modern digital experiences, build intelligent technology solutions and automate business processes to help companies move forward.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
              <Button href="/projects" variant="ghost">Explore Our Work</Button>
            </div>
            <p className="mt-10 text-sm text-muted">Websites <span aria-hidden="true">·</span> AI solutions <span aria-hidden="true">·</span> Automation <span aria-hidden="true">·</span> Custom software</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section aria-label="Capabilities" className="border-y border-line">
        <ul className="wrap grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.title} className="py-9 sm:px-0 lg:px-8 lg:first:pl-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line">
              <h2 className="text-lg font-semibold tracking-tight text-head">{h.title}</h2><p className="mt-2 text-[0.95rem] text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" aria-labelledby="services-h" className="section scroll-mt-20">
        <div className="wrap">
          <SectionHead eyebrow="Services" title={<span id="services-h">Four ways we help you <span className="em">move faster.</span></span>}>Each service is scoped around a specific business problem, and each one can stand alone or work together.</SectionHead>
          <ul className="border-b border-line">
            {services.map((s) => { const Icon = s.icon; return (
              <li key={s.id} className="border-t border-line">
                <Link href={`/services#${s.id}`} className="group grid gap-6 py-9 transition-colors hover:bg-band/60 lg:grid-cols-[5rem_1.1fr_1.2fr_3rem] lg:items-center lg:gap-10 lg:px-4">
                  <span className="flex items-center gap-4 text-sm font-semibold text-muted"><span>{s.n}</span><Icon className="h-6 w-6 text-accent" aria-hidden="true" /></span>
                  <div><h3 className="h3 !text-2xl sm:!text-3xl">{s.title}</h3><p className="mt-2 text-muted">{s.short}</p></div>
                  <ul className="flex flex-wrap gap-2" aria-label={`${s.title} deliverables`}>{s.deliverables.slice(0, 4).map((d) => <li key={d} className="chip">{d}</li>)}</ul>
                  <ArrowUpRight className="hidden h-7 w-7 text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent lg:block" aria-hidden="true" />
                </Link>
              </li>
            ); })}
          </ul>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-h" className="ink section">
        <div className="wrap">
          <SectionHead eyebrow="Selected work" title={<span id="projects-h">Real builds, <span className="em">honestly presented.</span></span>}>Three documented projects across AI, backend systems and native software. They are founder-built projects, not paid client engagements, and we don’t publish results we can’t evidence.</SectionHead>
          <div className="space-y-24 md:space-y-32">
            {projects.map((p, i) => (
              <Reveal key={p.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Link href={`/projects/${p.slug}`} className={`group lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`} aria-label={`${p.title} case study`}>
                  <div className="overflow-hidden rounded-3xl border border-line bg-band p-4 transition group-hover:border-accent sm:p-6"><ProjectVisual kind={p.kind} className="transition duration-500 group-hover:scale-[1.015]" /></div>
                  <p className="mt-3 text-xs text-muted">Illustrative interface, not a screenshot.</p>
                </Link>
                <div className="lg:col-span-5">
                  <p className="text-sm font-semibold text-accent">{p.n} · {p.category}</p>
                  <h3 className="h2 mt-3 !text-[clamp(1.9rem,3.2vw,2.75rem)]">{p.title}</h3>
                  <p className="mt-4 text-lg text-muted">{p.summary}</p>
                  <p className="mt-5"><span className="chip">{p.status}</span></p>
                  <ul className="mt-6 space-y-2 text-[0.95rem]">{p.built.slice(0, 3).map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />{b}</li>)}</ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  <Link href={`/projects/${p.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:underline">Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why" aria-labelledby="why-h" className="section band">
        <div className="wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Why Zenvyq Labs</p>
            <h2 id="why-h" className="h2">Technology that earns its place in your <span className="em">business.</span></h2>
            <p className="lead mt-6">We’re an emerging, founder-led studio. Our credibility comes from the work we can show and the way we run a project, not from numbers we can’t back up.</p>
            <div className="mt-8"><Button href="/about" variant="ghost">About Zenvyq Labs</Button></div>
          </Reveal>
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} className="border-t border-line pt-6">
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
                <dt className="mt-2 text-xl font-semibold tracking-tight text-head">{r.title}</dt><dd className="mt-2 text-muted">{r.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="industries" aria-labelledby="ind-h" className="section">
        <div className="wrap">
          <SectionHead eyebrow="Industries" title={<span id="ind-h">Solutions shaped around <span className="em">your industry.</span></span>}>Examples of how our services apply in different sectors. This is a guide to where we can help, not a list of past clients.</SectionHead>
          <Industries />
        </div>
      </section>

      <section id="stack" aria-labelledby="stack-h" className="section band">
        <div className="wrap">
          <SectionHead eyebrow="Technology stack" title={<span id="stack-h">The tools we <span className="em">build with.</span></span>}>Drawn from our documented projects and from this website itself.</SectionHead>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((g) => (
              <div key={g.group} className="bg-card p-7">
                <h3 className="text-sm font-semibold text-accent">{g.group}</h3>
                <ul className="mt-5 space-y-2.5">{g.items.map((t) => <li key={t} className="text-lg font-medium text-head">{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" aria-labelledby="process-h" className="section">
        <div className="wrap">
          <SectionHead eyebrow="Delivery process" title={<span id="process-h">From first conversation to a <span className="em">working solution.</span></span>}>A simple, transparent four-step process, with scope agreed before building starts.</SectionHead>
          <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <span className="absolute left-0 right-0 top-[0.7rem] hidden h-px bg-line lg:block" aria-hidden="true" />
            {process.map((s) => (
              <li key={s.n} className="relative list-none">
                <Reveal>
                  <span className="relative z-10 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-bg"><span className="h-2 w-2 rounded-full bg-accent" /></span>
                  <p className="mt-6 text-sm font-semibold text-accent">{s.n}</p>
                  <h3 className="h3 mt-1 !text-3xl">{s.title}</h3><p className="mt-3 text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="About and careers" className="band section">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          {[{ href: "/about", k: "About", t: "A founder-led studio.", d: `Zenvyq Labs is run by ${site.founder.name}, a Computer Science graduate who builds across AI, web and backend systems. We’d rather scope honestly than oversell.`, c: "Meet the founder" },
            { href: "/careers", k: "Careers", t: "Build useful things. Learn by doing.", d: "We’ve recruited interns for research, outreach and content roles. They are not necessarily open now, and the terms are performance-based, so read them first.", c: "See the roles and terms" }].map((b) => (
            <Link key={b.href} href={b.href} className="card group flex flex-col p-9 transition hover:border-accent sm:p-12">
              <p className="eyebrow">{b.k}</p><h2 className="h2 !text-[clamp(1.75rem,3vw,2.5rem)]">{b.t}</h2>
              <p className="mt-4 flex-1 text-muted">{b.d}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-accent">{b.c} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
