import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
export function SectionHeading({ eyebrow, title, children, center }: { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed sm:text-lg">{children}</p>}
    </Reveal>
  );
}
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="wrap relative">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">{children}</p>}
      </div>
    </section>
  );
}
