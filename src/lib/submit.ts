import { site } from "@/config/site";
export type SubmitResult = "sent" | "email";
export async function submitLead(kind: string, data: Record<string, string>): Promise<SubmitResult> {
  const payload = { formType: kind, ...data };
  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error("Request failed");
    return "sent";
  }
  const body = Object.entries(data).filter(([k, v]) => v && k !== "_gotcha").map(([k, v]) => `${k}: ${v}`).join("\n");
  const subject = kind === "audit" ? "Free audit request" : "Project enquiry";
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "email";
}
