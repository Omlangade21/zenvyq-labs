import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/content";
export const metadata: Metadata = { title: "Services", description: "Business websites, full-stack web applications, AI solutions and business automation from Zenvyq Labs.", alternates: { canonical: "/services" } };
const List = ({ title, items }: { title: string; items: string[] }) => (
  <div className="card p-6"><h3 className="font-mono text-xs uppercase tracking-widest text-accent">{title}</h3><ul className="mt-4 space-y-2 text-sm">{items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />{i}</li>)}</ul></div>
);
export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Digital systems built around your business.">Four kinds of work, each aimed at a specific business problem. Every project is scoped individually.</PageHero>
      {services.map((s) => { const Icon = s.icon; return (
        <section key={s.id} id={s.id} className="section scroll-mt-16 border-b border-white/10">
          <div className="wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <span className="font-mono text-sm text-zinc-600">{s.n}</span>
              <Icon className="mt-4 h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="h2 mt-5">{s.title}</h2>
              <p className="mt-5 leading-relaxed">{s.what}</p>
              <div className="mt-7"><Button href="/contact">Discuss this</Button></div>
            </Reveal>
            <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
              <List title="What we build" items={s.examples} /><List title="Who it’s for" items={[s.forWho]} />
              <List title="Problems it solves" items={s.problems} /><List title="Example deliverables" items={s.deliverables} />
            </Reveal>
          </div>
        </section>
      ); })}
      <section className="section"><div className="wrap"><Reveal className="card p-8 text-center sm:p-14"><h2 className="h2">Need something different?</h2><p className="mx-auto mt-4 max-w-xl">If your problem doesn’t fit neatly into a service, tell us what you’re trying to achieve.</p><div className="mt-8"><Button href="/contact">Talk to Us</Button></div></Reveal></div></section>
      <CTASection />
    </>
  );
}
