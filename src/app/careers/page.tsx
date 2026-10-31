import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { roles, type Role } from "@/data/content";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Careers & Internships", description: "Internship roles previously offered at Zenvyq Labs in lead research, outreach and digital content. Terms are performance-based; read them before registering interest.", alternates: { canonical: "/careers" } };
const Points = ({ title, items }: { title: string; items: string[] }) => (
  <div><h3 className="font-semibold text-head">{title}</h3><ul className="mt-3 space-y-2.5">{items.map((i) => <li key={i} className="flex gap-3 text-[0.95rem] text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{i}</li>)}</ul></div>
);
function mail(r: Role) {
  const verb = r.status === "open" ? "apply for" : "register interest in";
  const body = `Hello Zenvyq Labs,\n\nI would like to ${verb} the ${r.title}.\n\nName:\nLocation / time zone:\nRelevant skills or experience:\nAvailability:\nLinkedIn / portfolio (optional):\n\nThank you.`;
  return `mailto:${site.email}?subject=${encodeURIComponent(`${r.status === "open" ? "Application" : "Interest"}: ${r.title}`)}&body=${encodeURIComponent(body)}`;
}
export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Build useful things. <span className="em">Learn by doing.</span></>}>We’re a small, practical technology studio. Below are the internship roles we have recruited for. Please read the status and terms before getting in touch.</PageHero>
      <section className="pb-6"><div className="wrap"><div className="card border-accent/50 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-head">Before you apply</h2>
        <ul className="mt-3 space-y-2 text-muted">
          <li><strong className="text-head">Not necessarily open.</strong> These are previous recruitment roles. Registering interest does not mean a position is available.</li>
          <li><strong className="text-head">Not salaried.</strong> Compensation, where offered, is performance- or commission-based, and no salary or stipend is guaranteed.</li>
          <li><strong className="text-head">Agreed in writing.</strong> Commission or incentives, qualifying criteria, attribution, payment timing and any targets must be shared and agreed in writing before work begins. Do not incur expenses on our behalf without written approval.</li>
        </ul>
      </div></div></section>
      <section className="section pt-12"><div className="wrap space-y-8">
        {roles.map((r) => (
          <Reveal key={r.title}><article className="card p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-2"><span className="chip">Internship</span><span className="chip">{r.status === "open" ? "Open" : "Previous role · not confirmed open"}</span></div>
            <h2 className="h2 mt-5 !text-[clamp(1.7rem,3vw,2.4rem)]">{r.title}</h2>
            <p className="mt-3 max-w-prose text-lg text-muted">{r.summary}</p>
            <p className="mt-4 text-sm font-semibold text-head">{r.terms}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2"><Points title="What you’d do" items={r.tasks} /><Points title="What helps" items={r.skills} /></div>
            <a href={mail(r)} className="btn-primary mt-9">{r.status === "open" ? "Apply by email" : "Register interest by email"}</a>
          </article></Reveal>
        ))}
        <div className="border-t border-line pt-8 text-muted"><h2 className="h3">Don’t see the right fit?</h2><p className="mt-2 max-w-prose">Send a short introduction and tell us how you’d like to contribute. We’ll contact you if there’s a suitable opening. <a className="font-semibold text-accent hover:underline" href={`mailto:${site.email}?subject=${encodeURIComponent("General opportunity")}`}>Introduce yourself</a>.</p></div>
      </div></section>
    </>
  );
}
