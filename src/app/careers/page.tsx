import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Clock3, GraduationCap, Mail, Sparkles } from "lucide-react";
import { PageHero } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Careers & Internships",
  description: "Explore internship opportunities with Zenvyq Labs in lead research, outreach, meeting booking and digital growth.",
  alternates: { canonical: "/careers" },
};

const openings = [
  {
    type: "Internship", title: "Outreach & Meeting Booking Intern",
    summary: "Help start relevant business conversations, qualify interest and arrange discovery calls for Zenvyq Labs.",
    tasks: ["Research and identify suitable businesses", "Contact prospects through approved professional channels", "Follow up respectfully and maintain an accurate lead tracker", "Coordinate discovery meetings and share context before each call"],
    skills: ["Clear written and spoken communication", "Professional follow-up and organization", "Comfort with email, spreadsheets and basic business technology"],
    terms: "Remote · Flexible part-time · Performance-based commission",
    emailSubject: "Application — Outreach & Meeting Booking Intern",
  },
  {
    type: "Internship", title: "Lead Research & Growth Intern",
    summary: "Build a focused pipeline of businesses that may benefit from better websites, AI solutions or automation.",
    tasks: ["Research industries and potential client needs", "Verify publicly available business contact information", "Keep lead records accurate and useful", "Share concise research and outreach recommendations"],
    skills: ["Online research and attention to detail", "Basic spreadsheet skills", "Interest in technology, marketing or business development"],
    terms: "Remote · Flexible part-time · Performance-based commission",
    emailSubject: "Application — Lead Research & Growth Intern",
  },
  {
    type: "Internship", title: "Digital Content & Marketing Intern",
    summary: "Help explain technology services through useful, polished social content and campaign ideas.",
    tasks: ["Support content planning for LinkedIn and Instagram", "Draft educational posts about websites, AI and automation", "Help maintain consistent brand voice and visuals", "Review engagement and suggest practical improvements"],
    skills: ["Clear writing and creative thinking", "Interest in digital marketing and technology", "Familiarity with social platforms; design tools are a plus"],
    terms: "Remote · Flexible part-time · Scope and any incentives agreed in writing",
    emailSubject: "Application — Digital Content & Marketing Intern",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers at Zenvyq Labs" title="Build useful things. Learn by doing.">
        We’re building a small, practical technology studio. If you’re curious about business, technology and how good work reaches real customers, explore the opportunities below.
      </PageHero>
      <section className="section pt-0">
        <div className="wrap">
          <Reveal className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: GraduationCap, title: "Learn in practice", text: "Work on real research, communication and content tasks." },
              { icon: Clock3, title: "Flexible and remote", text: "Coordinate tasks and availability clearly with the team." },
              { icon: Sparkles, title: "Merit and transparency", text: "Responsibilities, commission rules and expectations are agreed up front." },
            ].map((item) => { const Icon = item.icon; return <div className="card p-5" key={item.title}><Icon className="h-5 w-5 text-accent" aria-hidden="true" /><h2 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h2><p className="mt-2 text-sm leading-relaxed">{item.text}</p></div>; })}
          </Reveal>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <Reveal key={job.title} delay={index * 0.05}>
                <article className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2"><span className="chip">{job.type}</span><span className="chip">{job.terms}</span></div>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{job.title}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed">{job.summary}</p>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div><h3 className="font-semibold text-white">What you’ll do</h3><ul className="mt-3 space-y-2">{job.tasks.map((task) => <li className="flex gap-2 text-sm leading-relaxed" key={task}><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{task}</li>)}</ul></div>
                    <div><h3 className="font-semibold text-white">What helps</h3><ul className="mt-3 space-y-2">{job.skills.map((skill) => <li className="flex gap-2 text-sm leading-relaxed" key={skill}><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{skill}</li>)}</ul></div>
                  </div>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed">
                    <strong className="text-white">Compensation and expectations:</strong> This is not a salaried role. Commission or incentives, qualifying criteria, attribution, payment timing and any targets must be shared and agreed in writing before work begins. Do not incur expenses on our behalf without written approval.
                  </div>
                  <a className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:opacity-85" href={`mailto:${site.email}?subject=${encodeURIComponent(job.emailSubject)}&body=${encodeURIComponent("Hello Zenvyq Labs,\n\nI would like to apply for the " + job.title + ".\n\nName:\nLocation / time zone:\nRelevant skills or experience:\nAvailability:\nLinkedIn / portfolio (optional):\n\nThank you.")}`}>
                    Apply by email <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-2xl border border-white/10 p-6 sm:p-8">
            <BriefcaseBusiness className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-white">Don’t see the right fit?</h2>
            <p className="mt-2 text-sm leading-relaxed">Send a short introduction and tell us how you’d like to contribute. We’ll contact you if there’s a suitable opening.</p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("General opportunity — Zenvyq Labs")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Introduce yourself <Mail className="h-4 w-4" aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
