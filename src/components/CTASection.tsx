import { Button } from "./Button";
import { Reveal } from "./Reveal";
export function CTASection({ title = "Ready to build something better?", text = "Let’s turn the next idea into a working system." }: { title?: string; text?: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink/60 px-6 py-24 text-center sm:px-16 sm:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            <div className="spin-slow absolute inset-0 rounded-full opacity-40" style={{ background: "conic-gradient(from 0deg,transparent,#7c5cff55,transparent 40%,#22d3ee44,transparent 70%)", maskImage: "radial-gradient(circle,transparent 30%,#000 31%,#000 32%,transparent 33%,transparent 50%,#000 51%,#000 52%,transparent 53%)", WebkitMaskImage: "radial-gradient(circle,transparent 30%,#000 31%,#000 32%,transparent 33%,transparent 50%,#000 51%,#000 52%,transparent 53%)" }} />
            <div className="absolute inset-[28%] rounded-full bg-accent/20 blur-[90px]" />
          </div>
          <h2 className="relative mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">{title}</h2>
          <p className="relative mx-auto mt-6 max-w-xl text-base sm:text-xl">{text}</p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/#audit">Get a Free Audit</Button><Button href="/contact" variant="ghost">Start a Conversation</Button></div>
        </Reveal>
      </div>
    </section>
  );
}
