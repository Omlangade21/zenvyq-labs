import type { Metadata } from "next";
import { Mail, Globe, Github, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { contactFields } from "@/data/forms";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Contact", description: "Tell Zenvyq Labs what you’re trying to build or improve.", alternates: { canonical: "/contact" } };
export default function Contact() {
  const rows = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Globe, label: "Portfolio", value: "omlangade21.github.io/portfolio", href: site.portfolio },
    { icon: Github, label: "GitHub", value: "github.com/Omlangade21", href: site.github },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s build something useful.">Tell us what you’re trying to build or improve. Budget is optional.</PageHero>
      <section className="section"><div className="wrap grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
        <Reveal><LeadForm kind="contact" fields={contactFields} submitLabel="Send Enquiry" successTitle="Enquiry ready" /></Reveal>
        <Reveal delay={0.1} className="space-y-4">
          {rows.map((r) => { const Icon = r.icon; return (
            <a key={r.label} href={r.href} {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card card-hover flex items-center gap-4 p-5">
              <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span className="min-w-0"><span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">{r.label}</span><span className="block truncate text-sm text-white">{r.value}</span></span>
            </a>
          ); })}
          {site.whatsappUrl ? <Button href={site.whatsappUrl} external className="w-full"><MessageCircle className="h-4 w-4" aria-hidden="true" />Chat on WhatsApp</Button> : <Button href={`mailto:${site.email}`} variant="ghost" className="w-full">Prefer email? Write to us</Button>}
        </Reveal>
      </div></section>
    </>
  );
}
