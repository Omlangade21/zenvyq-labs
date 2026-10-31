import { Globe, Sparkles, Workflow, Code2, type LucideIcon } from "lucide-react";

export type Service = { id: string; n: string; icon: LucideIcon; title: string; short: string; what: string; who: string; problems: string[]; deliverables: string[]; tech: string[]; start: string };
export const services: Service[] = [
  { id: "websites", n: "01", icon: Globe, title: "Website Development", start: "I need a website that brings in enquiries",
    short: "Modern, responsive websites designed to turn visitors into enquiries.",
    what: "Websites that explain what your business does, build credibility and make it easy to get in touch.",
    who: "Service businesses, startups, consultants and personal brands that need a site that explains the offer and invites contact.",
    problems: ["Visitors leave without enquiring", "The site looks outdated or isn’t mobile-friendly", "It’s unclear what the business actually does", "Pages load slowly"],
    deliverables: ["Responsive website", "Page and message structure", "Enquiry and contact flow", "SEO basics and metadata", "Deployment and handover"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { id: "ai", n: "02", icon: Sparkles, title: "AI Solutions & Integrations", start: "I want AI to take on repetitive work",
    short: "Practical AI added to real business workflows: assistants, chatbots and integrations.",
    what: "AI used where it genuinely helps, such as answering questions, reading documents, understanding images or assisting routine decisions.",
    who: "Teams handling repetitive questions, documents or lookups that take up time.",
    problems: ["Staff answering the same questions repeatedly", "Information locked inside documents", "Slow first response to enquiries", "Manual review of text and images"],
    deliverables: ["A scoped use case", "Model or API integration", "A usable interface or chat widget", "Fallbacks for when the AI is unsure", "Documentation"],
    tech: ["Python", "Gemini", "REST APIs", "Speech & vision (Apple Vision, OCR)"] },
  { id: "automation", n: "03", icon: Workflow, title: "Business Automation", start: "My team repeats the same follow-ups",
    short: "Lead management, WhatsApp and email workflows that connect the tools you already use.",
    what: "Connecting the tools and workflows a business already uses so routine steps happen on their own.",
    who: "Businesses doing the same follow-ups, data entry and reporting by hand.",
    problems: ["Leads going cold from slow follow-up", "Copying data between tools", "Missed reminders and notifications", "Reports compiled manually every week"],
    deliverables: ["A mapped workflow", "Integrations through APIs", "Scripts and scheduled jobs", "Notifications", "Handover documentation"],
    tech: ["Python", "REST APIs", "Webhooks", "WhatsApp, email and CRM integrations"] },
  { id: "software", n: "04", icon: Code2, title: "Custom Software Development", start: "My spreadsheets no longer fit the work",
    short: "Dashboards, internal tools and web applications built around how your business works.",
    what: "Web applications with a clean interface, a dependable backend and a data model that fits how your business actually runs.",
    who: "Businesses running processes on spreadsheets, chat threads or tools that no longer fit.",
    problems: ["Work tracked across scattered spreadsheets", "No single view of customers or orders", "Manual hand-offs between people", "Off-the-shelf tools that don’t fit the workflow"],
    deliverables: ["Frontend interface", "Backend and REST APIs", "Database design", "Login and roles where required", "Documentation"],
    tech: ["Java", "Spring Boot", "Python", "Flask", "Node.js", "Swift / SwiftUI"] },
];

export const highlights = [
  { title: "Full-stack engineering", text: "Interfaces, backends and APIs from one team, using Java, Python, Swift and the modern web." },
  { title: "Applied AI", text: "Language models, voice and computer vision wired into working software." },
  { title: "Workflow automation", text: "Leads, WhatsApp and email flows that remove repetitive manual work." },
  { title: "Founder-led delivery", text: "You speak directly with the person who designs and builds your solution." },
];

export const reasons = [
  { title: "Requirements first", text: "We start with your business, customers and constraints before choosing any technology." },
  { title: "The simplest thing that works", text: "If a simpler option fits, we’ll say so rather than sell you something bigger." },
  { title: "Built around your workflow", text: "Solutions are shaped to how you operate, not adapted from a generic template." },
  { title: "Plain-language communication", text: "Agreed scope, clear updates and no surprises about what is being built." },
  { title: "Usable by default", text: "Interfaces people can use without training, and systems that reduce effort." },
  { title: "Room to grow", text: "Clean foundations so a solution can be extended as the business changes." },
];

export const industries = [
  { name: "Healthcare", problem: "Appointment requests and routine questions pile up at the front desk.", solution: "A clear website with an enquiry or booking flow and a simple patient portal.", automation: "Appointment reminders and automatic acknowledgement of new enquiries." },
  { name: "Hospitality", problem: "Enquiries arrive across calls, email and chat, and replies are slow.", solution: "A website built around bookings, menus and enquiries.", automation: "Instant confirmations and routing of enquiries to the right person." },
  { name: "Fitness", problem: "Trial and membership enquiries are followed up inconsistently.", solution: "Landing pages for classes and offers with simple sign-up flows.", automation: "Follow-up messages and reminders for trial sessions and renewals." },
  { name: "Interior & Architecture", problem: "Strong work is hidden behind a weak online presence.", solution: "A visual portfolio site with a structured project enquiry form.", automation: "Enquiry details collected and sent to a shared inbox or sheet." },
  { name: "Education", problem: "Admissions queries and updates are handled manually.", solution: "Course pages, enquiry forms and a lightweight student or parent portal.", automation: "Automated responses to common questions and announcement notifications." },
  { name: "Real Estate", problem: "Leads from many sources are hard to track and follow up.", solution: "Listing pages and enquiry capture that records what each lead wants.", automation: "Lead routing and follow-up reminders." },
  { name: "Professional Services", problem: "Prospects can’t tell what is offered or how to start.", solution: "A clear services site with a simple intake flow.", automation: "Client intake, document collection and status updates." },
  { name: "Startups", problem: "A small team needs a product or site quickly, without over-building.", solution: "An MVP or landing page with a backend that can grow.", automation: "Internal workflows and reporting wired together early." },
];

export const stack = [
  { group: "Web platform", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Backend & APIs", items: ["Java", "Spring Boot", "Python", "Flask", "Node.js", "REST APIs"] },
  { group: "AI & vision", items: ["Gemini", "Apple Vision", "OCR", "Speech recognition & synthesis"] },
  { group: "Native apps", items: ["Swift", "SwiftUI"] },
];

export const process = [
  { n: "01", title: "Discover", text: "Understand the business, the problem and the outcome you want." },
  { n: "02", title: "Plan", text: "Define the simplest technical solution and agree the scope in writing." },
  { n: "03", title: "Build", text: "Design, develop, test and refine, with progress you can see along the way." },
  { n: "04", title: "Improve", text: "Launch, measure and improve, with support where agreed." },
];

/* Project facts come from the founder-supplied site content. They are not independently verified against source repositories.
   Add `url` only when a working public link exists. None of these are presented as paid client engagements. */
export type Project = { slug: string; n: string; title: string; category: string; kind: "profiles" | "route" | "assistant"; status: string; type: string; role: string; summary: string; overview: string; problem: string; approach: string; built: string[]; tech: string[]; url?: string };
export const projects: Project[] = [
  { slug: "auraverify", n: "01", title: "AuraVerify", category: "Fake Profile Detection System", kind: "profiles", status: "Team project", type: "Team project led by the founder", role: "Project Lead of a technical team of three",
    summary: "A behavioural-analysis system designed to identify suspicious or fake profiles.",
    overview: "A fraudulent-profile detection system built on behavioural analysis, led by Om Langade as Project Lead of a technical team of three.",
    problem: "Fake profiles erode trust on platforms that depend on real users, and they are hard to spot one by one.",
    approach: "Behavioural signals are analysed to flag suspicious profiles, with the work organised through the full software development lifecycle.",
    built: ["Behavioural-analysis detection system", "Backend services in Java and Spring Boot with Python and Flask components", "SDLC activities, development and testing", "Technical documentation"],
    tech: ["Java", "Spring Boot", "Python", "Flask"] },
  { slug: "bus-route-optimization", n: "02", title: "Bus Route Optimization System", category: "Transit Management", kind: "route", status: "Founder-built project", type: "Founder-built project", role: "Developer",
    summary: "A Python and Flask transit management system for routing, scheduling and tracking.",
    overview: "A transit management system built with Python and Flask, covering routing, scheduling and tracking of buses.",
    problem: "Running a bus network means coordinating routes, timetables and vehicle locations in one place.",
    approach: "A Flask backend exposes REST APIs for the routing, scheduling and tracking logic.",
    built: ["Bus routing", "Scheduling", "Tracking", "REST APIs"],
    tech: ["Python", "Flask", "REST APIs"] },
  { slug: "macos-ai-assistant", n: "03", title: "Multimodal macOS AI Assistant", category: "Native AI Application", kind: "assistant", status: "In development", type: "Founder-built project, in development", role: "Developer",
    summary: "A native macOS assistant combining voice, camera vision and screen context.",
    overview: "A native macOS AI assistant integrating voice, camera vision and screen intelligence through a modular Swift architecture. Work is ongoing.",
    problem: "Most assistants work from typed text alone and lack context about what the user sees and says.",
    approach: "Voice, camera and screen inputs are processed and combined into one context, which the AI uses to respond.",
    built: ["Voice interaction with speech recognition and synthesis", "Camera and screen context using Apple Vision and OCR", "Multimodal context fusion", "Modular Swift architecture with a capability registry"],
    tech: ["Swift", "SwiftUI", "Gemini", "Apple Vision"] },
];

/* Previous recruitment roles. They are NOT confirmed open. Set status to "open" only when a role is genuinely being recruited. */
export type Role = { title: string; status: "open" | "previous"; summary: string; tasks: string[]; skills: string[]; terms: string };
export const roles: Role[] = [
  { title: "Lead Research & Growth Intern", status: "previous", terms: "Remote · Flexible part-time · Performance-based commission",
    summary: "Build a focused pipeline of businesses that may benefit from better websites, AI solutions or automation.",
    tasks: ["Research industries and potential client needs", "Verify publicly available business contact information", "Keep lead records accurate and useful", "Share concise research and outreach recommendations"],
    skills: ["Online research and attention to detail", "Basic spreadsheet skills", "Interest in technology, marketing or business development"] },
  { title: "Outreach & Meeting Booking Intern", status: "previous", terms: "Remote · Flexible part-time · Performance-based commission",
    summary: "Help start relevant business conversations, qualify interest and arrange discovery calls for Zenvyq Labs.",
    tasks: ["Research and identify suitable businesses", "Contact prospects through approved professional channels", "Follow up respectfully and maintain an accurate lead tracker", "Coordinate discovery meetings and share context before each call"],
    skills: ["Clear written and spoken communication", "Professional follow-up and organisation", "Comfort with email, spreadsheets and basic business technology"] },
  { title: "Digital Content & Marketing Intern", status: "previous", terms: "Remote · Flexible part-time · Scope and any incentives agreed in writing",
    summary: "Help explain technology services through useful, polished social content and campaign ideas.",
    tasks: ["Support content planning for LinkedIn and Instagram", "Draft educational posts about websites, AI and automation", "Help maintain consistent brand voice and visuals", "Review engagement and suggest practical improvements"],
    skills: ["Clear writing and creative thinking", "Interest in digital marketing and technology", "Familiarity with social platforms; design tools are a plus"] },
];
