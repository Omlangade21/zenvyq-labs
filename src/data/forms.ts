export type FieldDef = { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; required?: boolean; options?: string[]; placeholder?: string; autoComplete?: string; full?: boolean };
export const auditFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "business", label: "Business name", autoComplete: "organization" },
  { name: "website", label: "Website", placeholder: "yourbusiness.com", autoComplete: "url" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "+91…", autoComplete: "tel" },
  { name: "improve", label: "What would you like to improve?", type: "textarea", full: true, placeholder: "More enquiries, a faster site, fewer manual tasks…" },
];
export const contactFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "business", label: "Business", autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "+91…", autoComplete: "tel" },
  { name: "website", label: "Website", placeholder: "yourbusiness.com", autoComplete: "url" },
  { name: "service", label: "Service", type: "select", options: ["Website", "Web Application", "AI Solution", "Automation", "Not Sure"] },
  { name: "budget", label: "Budget range (optional)", type: "select", options: ["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Not sure"], full: true },
  { name: "details", label: "Project details", type: "textarea", required: true, full: true, placeholder: "What are you trying to build or improve?" },
];
