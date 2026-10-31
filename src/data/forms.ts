export type FieldDef = { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; required?: boolean; options?: string[]; placeholder?: string; autoComplete?: string; full?: boolean };
export const contactFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email" },
  { name: "business", label: "Company name (optional)", autoComplete: "organization" },
  { name: "service", label: "Service required", type: "select", options: ["Website Development", "AI Solutions & Integrations", "Business Automation", "Custom Software Development", "Not sure yet"] },
  { name: "details", label: "Project details", type: "textarea", required: true, full: true, placeholder: "What are you trying to build or improve?" },
];
