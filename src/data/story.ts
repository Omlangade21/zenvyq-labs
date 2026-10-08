export type Step = { t: string; d?: string };
export const problems = [
  { w: "Slow websites", d: "Visitors leave before they understand what you do." },
  { w: "Lost leads", d: "Enquiries arrive and go cold without a fast reply." },
  { w: "Manual processes", d: "People copy, paste and chase what software should handle." },
  { w: "Disconnected tools", d: "Data sits in five places and none of them agree." },
  { w: "Missed opportunities", d: "The cost isn’t one failure. It’s everything that never happens." },
];
export const serviceViz: { color: string; steps: Step[]; points: string[] }[] = [
  { color: "#8b7bff", steps: [{ t: "Browser", d: "Fast, responsive site" }, { t: "Leads", d: "Forms and tracking" }, { t: "Enquiry", d: "Routed instantly" }, { t: "WhatsApp", d: "Reply where they are" }], points: ["Built to turn visitors into enquiries", "SEO basics and fast loading", "Easy for you to update"] },
  { color: "#22d3ee", steps: [{ t: "Frontend", d: "React interface" }, { t: "API", d: "REST endpoints" }, { t: "Database", d: "SQL data model" }, { t: "Dashboard", d: "Your view of the business" }], points: ["Dashboards, portals and internal tools", "Login and roles where needed", "Documented handover"] },
  { color: "#c6ff3d", steps: [{ t: "Input", d: "Text, documents, voice" }, { t: "AI reasoning", d: "Model plus your context" }, { t: "Output", d: "Answer, summary or action" }], points: ["Chatbots, assistants and agents", "Document processing and search", "Fallbacks when the AI is unsure"] },
  { color: "#8b7bff", steps: [{ t: "Trigger", d: "A form, email or event" }, { t: "AI", d: "Classify or decide" }, { t: "Workflow", d: "Connected tools" }, { t: "Result", d: "Done without manual work" }], points: ["Lead, email and WhatsApp workflows", "CRM and data integrations", "Automated reporting"] },
];
export const stages = [
  { k: "DISCOVER", cap: "Business problem detected", d: "We start with the business problem and the outcome you want, not the technology." },
  { k: "PLAN", cap: "System architecture appears", d: "We define the simplest technical solution that solves it." },
  { k: "BUILD", cap: "Frontend and backend connect", d: "Interface, API and data are designed, built and tested together." },
  { k: "AUTOMATE", cap: "AI and workflow nodes activate", d: "Repetitive steps are handed to automation and AI where it genuinely helps." },
  { k: "IMPROVE", cap: "Analytics and optimisation appear", d: "We launch, measure what happens and keep improving." },
];
export const nodes = [
  { id: "Frontend", x: 20, y: 22, from: 2, plan: true }, { id: "Backend", x: 50, y: 22, from: 2, plan: true }, { id: "Database", x: 80, y: 22, from: 2, plan: true },
  { id: "AI", x: 35, y: 46, from: 3 }, { id: "Workflow", x: 65, y: 46, from: 3 },
];
export const edges: [number, number, number][] = [[0, 1, 2], [1, 2, 2], [1, 3, 3], [3, 4, 3], [4, 2, 3]];
export const aiStages = [
  { t: "Business input", d: "A lead arrives", log: "New enquiry received from the website form" },
  { t: "Context", d: "Gather what matters", log: "Reads the message, source and any past activity" },
  { t: "AI", d: "Reason over it", log: "Qualifies the lead: high intent, needs a quote" },
  { t: "Decision", d: "Choose the next step", log: "Route to follow-up today, priority high" },
  { t: "Automation", d: "Act across tools", log: "CRM updated · WhatsApp follow-up triggered" },
  { t: "Business result", d: "The outcome", log: "Meeting booked" },
];
export const topics: Record<string, string[]> = {
  Healthcare: ["Appointments", "Patient enquiries", "WhatsApp automation", "Website optimisation"],
  Hospitality: ["Booking enquiries", "Menus and offers", "Instant replies", "Guest follow-ups"],
  Fitness: ["Trial sign-ups", "Class pages", "Reminders", "Renewal follow-ups"],
  "Interior & Architecture": ["Portfolio site", "Project briefs", "Enquiry capture", "Shared inbox"],
  Education: ["Admissions enquiries", "Course pages", "Parent updates", "Auto-replies"],
  "Real Estate": ["Lead qualification", "Property enquiries", "Follow-ups", "CRM automation"],
  "Professional Services": ["Service pages", "Client intake", "Document collection", "Status updates"],
  Startups: ["Landing page", "MVP build", "Internal workflows", "Reporting"],
};
