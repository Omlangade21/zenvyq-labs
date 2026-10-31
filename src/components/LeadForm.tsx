"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { FieldDef } from "@/data/forms";
import { submitLead, type SubmitResult } from "@/lib/submit";
import { site } from "@/config/site";

type Status = "idle" | "sending" | "error" | { done: SubmitResult };
export function LeadForm({ kind, fields, submitLabel, defaults = {} }: { kind: "audit" | "contact"; fields: FieldDef[]; submitLabel: string; defaults?: Record<string, string> }) {
  const [status, setStatus] = useState<Status>("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(Array.from(new FormData(e.currentTarget).entries()).map(([k, v]) => [k, String(v)]));
    if (data._gotcha) { setStatus({ done: "sent" }); return; }
    setStatus("sending");
    try { setStatus({ done: await submitLead(kind, data) }); } catch { setStatus("error"); }
  }
  if (typeof status === "object") {
    return (
      <div className="card p-8" role="status">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <h3 className="h3 mt-4">{status.done === "sent" ? "Message sent" : "Your email app should open"}</h3>
        <p className="mt-2 text-sm text-muted">
          {status.done === "sent" ? "Thanks. We’ll reply to the email address you provided." : `Press send in your email app to deliver your enquiry. If nothing opened, write to ${site.email}.`}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-accent hover:underline">Send another message</button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-9">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        return (
          <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-head">{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
            {f.type === "textarea" ? <textarea id={id} name={f.name} rows={5} required={f.required} placeholder={f.placeholder} className="input resize-y" />
              : f.type === "select" ? <select id={id} name={f.name} defaultValue={defaults[f.name] ?? ""} className="input"><option value="">Select a service</option>{f.options?.map((o) => <option key={o} value={o}>{o}</option>)}</select>
              : <input id={id} name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} autoComplete={f.autoComplete} className="input" />}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}{status === "sending" ? "Sending…" : submitLabel}
        </button>
        <p className="mt-3 text-xs text-muted" aria-live="polite">{status === "error" ? `Something went wrong. Please try again or email ${site.email}.` : "We use your details only to reply to this request."}</p>
      </div>
    </form>
  );
}
