import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Zenvyq Labs handles information you share through this website.", alternates: { canonical: "/privacy" } };
const sections = [
  ["What we collect", "Only what you type into our forms: for example your name, business name, website, email, WhatsApp number and the details of your request."],
  ["How we use it", "To reply to your enquiry or audit request and to discuss your project. We don’t sell your information or use it for unrelated marketing."],
  ["How it is sent", "Depending on how the site is configured, form submissions are delivered through a form service we choose, or open in your email app so you can send them yourself."],
  ["Cookies and analytics", "This website doesn’t set tracking cookies of its own. If analytics are added later, this page will be updated."],
  ["Your choices", `You can ask us to delete information you’ve sent by emailing ${site.email}.`],
  ["Changes", "We may update this policy as the site changes. Last updated: October 2026."],
];
export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section"><div className="wrap max-w-3xl space-y-8">
        {sections.map(([h, t]) => <div key={h}><h2 className="font-display text-xl font-semibold text-white">{h}</h2><p className="mt-2 leading-relaxed">{t}</p></div>)}
        <p>Questions? Email <a className="text-accent underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  );
}
