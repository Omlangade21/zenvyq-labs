"use client";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/config/site";

export function CtaBand() {
  if (usePathname() === "/contact") return null;
  return (
    <section className="ink relative overflow-hidden border-t border-line py-24 md:py-32" aria-labelledby="cta-h">
      <div className="tint absolute inset-0" aria-hidden="true" />
      <Reveal className="wrap relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">Start a project</p>
          <h2 id="cta-h" className="display !text-[clamp(2.4rem,5.5vw,4.5rem)]">Have a project in <span className="em">mind?</span></h2>
          <p className="lead mt-6">Let’s discuss your business requirements and explore how the right technology solution can help.</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
          <Button href="/contact">Start a Project</Button>
          <a href={`mailto:${site.email}`} className="text-base font-medium text-head underline-offset-4 hover:text-accent hover:underline">{site.email}</a>
        </div>
      </Reveal>
    </section>
  );
}
