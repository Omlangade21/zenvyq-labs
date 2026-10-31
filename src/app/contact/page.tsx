import type { Metadata } from "next";
import { Globe, Mail, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/ui";
import { contactFields } from "@/data/forms";
import { services } from "@/data/content";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Tell Zenvyq Labs about your project. Email hello@zenvyqlabs.com, message us on WhatsApp or send an enquiry.", alternates: { canonical: "/contact" } };
type Props = { searchParams: Promise<{ service?: string }> };
export default async function Contact({ searchParams }: Props) {
  const { service } = await searchParams;
  const sel = services.find((s) => s.id === service)?.title;
  const rows = [
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: Globe, label: "Website", value: "zenvyqlabs.com", href: site.url },
    { Icon: MessageCircle, label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsappUrl },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Have a project in <span className="em">mind?</span></>}>Let’s discuss your business requirements and explore how the right technology solution can help.</PageHero>
      <section className="section pt-4"><div className="wrap grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <ul className="space-y-6">{rows.map(({ Icon, label, value, href }) => (
            <li key={label}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-5">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-line text-accent transition group-hover:border-accent"><Icon className="h-6 w-6" aria-hidden="true" /></span>
              <span><span className="block text-sm text-muted">{label}</span><span className="block text-xl font-semibold tracking-tight text-head group-hover:text-accent">{value}</span></span>
            </a></li>))}
          </ul>
          <h2 className="mt-14 text-lg font-semibold text-head">What happens next</h2>
          <ol className="mt-5 space-y-5">{["We read your enquiry and, if needed, ask a few clarifying questions.", "We discuss your requirements and tell you honestly what fits.", "If we’re a good match, we agree scope in writing before any build starts."].map((t, i) => <li key={t} className="flex gap-4 text-muted"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent text-sm font-semibold text-accent">{i + 1}</span>{t}</li>)}</ol>
        </div>
        <LeadForm kind="contact" fields={contactFields} submitLabel="Send enquiry" defaults={sel ? { service: sel } : {}} />
      </div></section>
    </>
  );
}
