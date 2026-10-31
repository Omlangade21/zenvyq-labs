import type { Metadata } from "next";
import { Github, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { reasons } from "@/data/content";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "About", description: "Zenvyq Labs is a founder-led technology studio building practical software, AI solutions and automation for real businesses.", alternates: { canonical: "/about" } };
export default function About() {
  return (
    <>
      <PageHero eyebrow="About Zenvyq Labs" title={<>Practical technology for <span className="em">real businesses.</span></>}>Zenvyq Labs was created around a simple idea: technology should make businesses better, not more complicated.</PageHero>
      <section className="section pt-8"><div className="wrap grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
        <Reveal className="max-w-prose space-y-6 text-lg text-muted">
          <h2 className="h2 !text-3xl text-head">Who we are</h2>
          <p>Zenvyq Labs is an emerging technology and digital solutions business, founded and run by one developer. We help companies improve their digital presence, streamline operations and implement technology that is genuinely useful.</p>
          <p>We don’t pretend to be a large agency. We take on projects where we can be useful, scope them honestly and say so when a simpler option, or a different provider, would serve you better.</p>
          <p>Our work spans websites, AI solutions and integrations, business automation and custom software, and it draws on full-stack engineering, applied AI and product thinking.</p>
        </Reveal>
        <Reveal className="card h-fit p-9">
          <p className="eyebrow">Founder</p>
          <h2 className="h3 !text-3xl">{site.founder.name}</h2><p className="text-sm text-muted">{site.founder.title}</p>
          <p className="mt-5 text-muted">A Computer Science graduate (Amity University, Noida) who has worked as a Full Stack Web Developer Intern at Maincrafts Technology, with project experience across AI, web and backend systems.</p>
          <div className="mt-6 flex flex-col gap-3 font-semibold">
            <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline"><Globe className="h-4 w-4" aria-hidden="true" />Personal portfolio</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a>
          </div>
        </Reveal>
      </div></section>
      <section className="band section" aria-labelledby="principles-h"><div className="wrap">
        <p className="eyebrow">How we work</p><h2 id="principles-h" className="h2 max-w-3xl">Principles we hold ourselves to.</h2>
        <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{reasons.map((r) => <div key={r.title} className="border-t border-line pt-6"><dt className="text-xl font-semibold tracking-tight text-head">{r.title}</dt><dd className="mt-2 text-muted">{r.text}</dd></div>)}</dl>
      </div></section>
    </>
  );
}
