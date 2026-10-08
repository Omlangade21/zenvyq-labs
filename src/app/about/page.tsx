import type { Metadata } from "next";
import { Github, Globe } from "lucide-react";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "About", description: "Zenvyq Labs is a technology studio founded by Om Langade, building practical software for real businesses.", alternates: { canonical: "/about" } };
const disciplines = ["Web development", "Full-stack engineering", "AI", "Automation", "Product thinking"];
export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Building practical technology for real businesses." />
      <section className="section"><div className="wrap grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal className="space-y-5 text-base leading-relaxed sm:text-lg">
          <p>Zenvyq Labs was created around a simple idea: technology should make businesses better, not more complicated.</p>
          <p>It is a small technology studio, founded and run by one developer. We don’t pretend to be a large agency. We take on projects where we can be genuinely useful and say so when we can’t.</p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-white">What we combine</h2>
          <ul className="flex flex-wrap gap-2">{disciplines.map((d) => <li key={d} className="chip !text-sm">{d}</li>)}</ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-8">
            <p className="eyebrow">Founder</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">{site.founder.name}</h2>
            <p className="mt-1 text-sm">{site.founder.title}</p>
            <p className="mt-5 text-sm leading-relaxed">Om is a Computer Science graduate (Amity University, Noida) who has worked as a Full Stack Web Developer Intern at Maincrafts Technology, and built projects across AI, web and backend systems.</p>
            <div className="mt-6 flex flex-col gap-3 text-sm font-medium">
              <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white"><Globe className="h-4 w-4" aria-hidden="true" />Personal portfolio</a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a>
            </div>
          </div>
        </Reveal>
      </div></section>
      <CTASection />
    </>
  );
}
