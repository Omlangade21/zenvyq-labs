import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Header used at the top of every inner page. */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="tint relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="gridlines absolute inset-0" aria-hidden="true" />
      <div className="wrap relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 max-w-4xl">{title}</h1>
        {children && <p className="lead mt-6">{children}</p>}
      </div>
    </section>
  );
}
/** Two-column section heading: statement left, supporting copy right. */
export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
      <div><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2></div>
      {children && <p className="lead">{children}</p>}
    </Reveal>
  );
}
