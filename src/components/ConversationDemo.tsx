import { MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function ConversationDemo() {
  return (
    <section className="section">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow mb-4">A better way to work</p>
          <h2 className="h2">Good technology starts with the right conversation.</h2>
          <p className="mt-5 leading-relaxed">Every business is different. We start by understanding the friction in your current process, then explore a practical solution that fits your tools, team and budget.</p>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500">The conversation shown here is a fictional illustrative demo, not a real customer exchange, testimonial or claim of past results.</p>
          <div className="mt-7"><Button href="/contact">Discuss your workflow</Button></div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card overflow-hidden p-4 sm:p-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent"><MessageCircle className="h-5 w-5" aria-hidden="true" /></div>
              <div><p className="font-semibold text-white">Example discovery chat</p><p className="text-xs text-zinc-500">Illustrative scenario · Website + automation</p></div>
              <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500">Demo</span>
            </div>
            <div className="space-y-4 py-5">
              <div className="flex justify-start"><div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4"><p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Business owner · example</p><p className="text-sm leading-relaxed text-white">We receive enquiries from our website and Instagram, but following up manually is getting hard to manage.</p></div></div>
              <div className="flex justify-end"><div className="max-w-[92%] rounded-2xl rounded-tr-sm border border-violet-400/20 bg-violet-500/10 p-4"><p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-accent">Zenvyq Labs · example</p><p className="text-sm leading-relaxed text-white">We could map how enquiries arrive, centralize the details and automate appropriate follow-ups. First, we’d review your current tools and what a useful outcome looks like.</p></div></div>
              <div className="flex justify-start"><div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4"><p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Business owner · example</p><p className="text-sm leading-relaxed text-white">Can we review our current setup and understand the options before deciding?</p></div></div>
              <div className="flex justify-end"><div className="max-w-[92%] rounded-2xl rounded-tr-sm border border-cyan-400/20 bg-cyan-500/10 p-4"><p className="mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-400"><Sparkles className="h-3 w-3" aria-hidden="true" /> Zenvyq Labs · example</p><p className="text-sm leading-relaxed text-white">Absolutely. We’ll understand your needs, discuss scope and budget, then recommend a practical next step—without promising results before we’ve assessed the workflow.</p></div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
