import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { industries } from "@/data/content";
export const metadata: Metadata = { title: "Industries", description: "Industries where Zenvyq Labs can help with websites, software, AI and automation.", alternates: { canonical: "/industries" } };
export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries we can help" title="Built for businesses that want to move faster.">Below are areas where we can help. We don’t claim previous clients in these industries; these are the problems and opportunities we see.</PageHero>
      <section className="section"><div className="wrap space-y-5">
        {industries.map((i) => { const Icon = i.icon; const id = i.name.toLowerCase().replace(/[^a-z]+/g, "-"); return (
          <Reveal key={i.name}><article id={id} className="card scroll-mt-24 grid gap-6 p-7 lg:grid-cols-[.7fr_1.3fr]">
            <div><Icon className="h-7 w-7 text-accent" aria-hidden="true" /><h2 className="mt-4 font-display text-2xl font-semibold text-white">{i.name}</h2><p className="mt-1 text-sm">{i.line}</p></div>
            <dl className="grid gap-5 sm:grid-cols-3">
              <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Common problem</dt><dd className="mt-2 text-sm leading-relaxed">{i.problem}</dd></div>
              <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Possible solution</dt><dd className="mt-2 text-sm leading-relaxed">We can help with: {i.solution}</dd></div>
              <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Automation opportunity</dt><dd className="mt-2 text-sm leading-relaxed">{i.automation}</dd></div>
            </dl>
          </article></Reveal>
        ); })}
      </div></section>
      <CTASection />
    </>
  );
}
