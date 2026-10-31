import type { Metadata } from "next";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Zenvyq Labs handles information you share through this website.", alternates: { canonical: "/privacy" } };
const sections = [
  ["What we collect", "Only what you type into our contact form: your name, email, company, the service you need and your project details."],
  ["How we use it", "To reply to your enquiry and discuss your project. We don’t sell your information or use it for unrelated marketing."],
  ["How it is sent", "Form submissions are delivered through a third-party form service (Formspree). If that is unavailable, the form opens your email app so you can send the message yourself."],
  ["Cookies and analytics", "This website sets no tracking cookies. Your light/dark theme choice is stored in your browser only. If analytics are added later, this page will be updated."],
  ["Your choices", `You can ask us to delete information you’ve sent by emailing ${site.email}.`],
  ["Changes", "We may update this policy as the site changes. Last updated: October 2026."],
];
export default function Privacy() {
  return (
    <section className="section pt-36 md:pt-44"><div className="wrap">
      <h1 className="h1">Privacy Policy</h1>
      <div className="mt-10 max-w-prose space-y-8">{sections.map(([h, t]) => <div key={h}><h2 className="h3">{h}</h2><p className="mt-2 text-muted">{t}</p></div>)}</div>
    </div></section>
  );
}
