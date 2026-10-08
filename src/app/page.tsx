import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProblemStory } from "@/components/ProblemStory";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { WorkPanels } from "@/components/WorkPanels";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { auditFields } from "@/data/forms";
import { site } from "@/config/site";
const BuildProcess = dynamic(() => import("@/components/BuildProcess").then((m) => m.BuildProcess));
const AIWorkflow = dynamic(() => import("@/components/AIWorkflow").then((m) => m.AIWorkflow));
const IndustriesExplorer = dynamic(() => import("@/components/IndustriesExplorer").then((m) => m.IndustriesExplorer));
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStory />
      <ServicesExplorer />
      <BuildProcess />
      <WorkPanels />
      <AIWorkflow />
      <IndustriesExplorer />
      <section id="audit" className="section scroll-mt-16">
        <div className="wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Free digital growth audit</p>
            <h2 className="h2">Let’s find what’s holding your digital presence back.</h2>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">Send us your website. We’ll identify a few practical opportunities to improve your website, conversion flow, automation, or digital experience.</p>
          </Reveal>
          <Reveal delay={0.1}><LeadForm kind="audit" fields={auditFields} submitLabel="Get My Free Audit" successTitle="Audit request received" /></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Reveal className="grid items-center gap-8 border-y border-white/10 py-12 md:grid-cols-[1fr_auto]">
            <div><p className="eyebrow mb-3">Founder</p><p className="font-display text-3xl font-semibold text-white sm:text-4xl">{site.founder.name}</p><p className="mt-2 text-sm">Full-Stack Developer | AI Automation Developer. Zenvyq Labs is a small technology studio focused on practical websites, AI solutions and automation.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Button href="/about" variant="ghost">Meet Zenvyq</Button><a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="link-u inline-flex items-center gap-2 py-3 text-sm font-medium text-white">Personal portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
