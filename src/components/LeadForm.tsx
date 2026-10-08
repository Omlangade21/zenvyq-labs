"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { FieldDef } from "@/data/forms";
import { submitLead, type SubmitResult } from "@/lib/submit";
import { site } from "@/config/site";

type Status = "idle" | "sending" | "error" | { done: SubmitResult };
export function LeadForm({ kind, fields, submitLabel, successTitle }: { kind: "audit" | "contact"; fields: FieldDef[]; submitLabel: string; successTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [filled, setFilled] = useState(0);
  function onChange(e: FormEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const n = fields.filter((f) => String(fd.get(f.name) ?? "").trim() !== "").length;
    setFilled(n / fields.length);
  }
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v)]));
    if (data._gotcha) { setStatus({ done: "sent" }); return; }
    setStatus("sending");
    try { setStatus({ done: await submitLead(kind, data) }); } catch { setStatus("error"); }
  }
  if (typeof status === "object") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="card p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-white">{successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed">
          {status.done === "sent" ? "Thanks — your details have been sent and we’ll reply by email." : `Your email app should have opened with your details filled in. Press send to deliver it. If nothing opened, email ${site.email} directly.`}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-medium text-accent hover:text-white">Send another</button>
      </motion.div>
    );
  }
  return (
    <form onSubmit={onSubmit} onChange={onChange} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      <div className="h-1 overflow-hidden rounded-full bg-white/10 sm:col-span-2" aria-hidden="true"><motion.div className="h-full origin-left bg-gradient-to-r from-accent to-cyan-400" initial={false} animate={{ scaleX: filled }} transition={{ type: "spring", stiffness: 120, damping: 20 }} /></div>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        return (
          <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-200">{f.label}{f.required && <span className="text-accent" aria-hidden="true"> *</span>}</label>
            {f.type === "textarea" ? <textarea id={id} name={f.name} rows={4} required={f.required} placeholder={f.placeholder} className="input resize-y" />
              : f.type === "select" ? <select id={id} name={f.name} defaultValue="" className="input"><option value="">Select…</option>{f.options?.map((o) => <option key={o} value={o}>{o}</option>)}</select>
              : <input id={id} name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} autoComplete={f.autoComplete} className="input" />}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-lime-300 disabled:opacity-60 sm:w-auto">
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}{status === "sending" ? "Sending…" : submitLabel}
        </button>
        <p className="mt-3 text-xs text-zinc-500" aria-live="polite">{status === "error" ? "Something went wrong. Please try again or email us directly." : "We use your details only to reply to this request."}</p>
      </div>
    </form>
  );
}
