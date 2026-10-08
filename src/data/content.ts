import { Globe, AppWindow, Sparkles, Workflow, HeartPulse, ConciergeBell, Dumbbell, Ruler, GraduationCap, Building2, Briefcase, Rocket, Magnet, MousePointerClick, Zap, type LucideIcon } from "lucide-react";

export const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Magnet, title: "Attract", text: "Modern websites and digital experiences that make a strong first impression." },
  { icon: MousePointerClick, title: "Convert", text: "Better landing pages, enquiry flows and lead capture systems." },
  { icon: Zap, title: "Automate", text: "AI and automation that reduce repetitive work and improve response time." },
];

export type Service = { id: string; n: string; icon: LucideIcon; title: string; short: string; what: string; examples: string[]; forWho: string; problems: string[]; deliverables: string[] };
export const services: Service[] = [
  { id: "websites", n: "01", icon: Globe, title: "Business Websites", short: "Modern, responsive websites designed to turn visitors into enquiries.",
    what: "Websites that explain what your business does clearly, build credibility and make it easy to get in touch.",
    examples: ["Business websites", "Landing pages", "Corporate websites", "Portfolio websites", "Conversion-focused redesigns"],
    forWho: "Local and service businesses, startups, consultants and personal brands that need a site that explains the offer and invites contact.",
    problems: ["Visitors leave without enquiring", "The site looks outdated or isn’t mobile-friendly", "It’s unclear what the business actually does", "Pages load slowly"],
    deliverables: ["Responsive website", "Page and message structure", "Enquiry and contact flow", "SEO basics and metadata", "Deployment and handover"] },
  { id: "apps", n: "02", icon: AppWindow, title: "Full-Stack Web Applications", short: "Custom software built around your workflows.",
    what: "Web applications with a clean interface, a dependable backend and a data model that fits how your business actually works.",
    examples: ["Dashboards", "Admin panels", "SaaS applications", "Customer portals", "Internal tools", "REST APIs"],
    forWho: "Businesses running processes on spreadsheets, chat threads or tools that no longer fit.",
    problems: ["Work tracked across scattered spreadsheets", "No single view of customers or orders", "Manual hand-offs between people", "Off-the-shelf tools that don’t fit the workflow"],
    deliverables: ["Frontend interface", "Backend and REST APIs", "Database design", "Login and roles where required", "Documentation"] },
  { id: "ai", n: "03", icon: Sparkles, title: "AI Solutions", short: "Practical AI integrated into real business workflows.",
    what: "AI added where it genuinely helps, such as answering questions, reading documents or assisting with routine decisions.",
    examples: ["AI chatbots", "AI assistants", "AI agents", "Document processing", "AI API integrations", "Intelligent search", "AI-powered workflows"],
    forWho: "Teams handling repetitive questions, documents or lookups that take up time.",
    problems: ["Staff answering the same questions repeatedly", "Information locked inside documents", "Slow first response to enquiries", "Manual review of text and images"],
    deliverables: ["A scoped use case", "Model or API integration", "A usable interface or chat widget", "Fallbacks for when the AI is unsure", "Documentation"] },
  { id: "automation", n: "04", icon: Workflow, title: "Business Automation", short: "Reduce repetitive work and improve operational efficiency.",
    what: "Connecting the tools and workflows a business already uses so routine steps happen on their own.",
    examples: ["Lead automation", "WhatsApp workflows", "Email automation", "Notifications", "Data workflows", "CRM integrations", "Automated reporting"],
    forWho: "Businesses doing the same follow-ups, data entry and reporting by hand.",
    problems: ["Leads going cold from slow follow-up", "Copying data between tools", "Missed reminders and notifications", "Reports compiled manually every week"],
    deliverables: ["A mapped workflow", "Integrations through APIs", "Scripts and scheduled jobs", "Notifications", "Handover documentation"] },
];

export const industries: { name: string; icon: LucideIcon; line: string; problem: string; solution: string; automation: string }[] = [
  { name: "Healthcare", icon: HeartPulse, line: "Clearer patient journeys and less admin.", problem: "Appointment requests and routine questions pile up at the front desk.", solution: "A clear website with an enquiry or booking flow and a simple patient portal.", automation: "Appointment reminders and automatic acknowledgement of new enquiries." },
  { name: "Hospitality", icon: ConciergeBell, line: "More direct bookings, faster replies.", problem: "Enquiries arrive across calls, email and chat, and replies are slow.", solution: "A website built around bookings, menus and enquiries.", automation: "Instant confirmations and routing of enquiries to the right person." },
  { name: "Fitness", icon: Dumbbell, line: "Turn interest into memberships.", problem: "Trial and membership enquiries are followed up inconsistently.", solution: "Landing pages for classes and offers with simple sign-up flows.", automation: "Follow-up messages and reminders for trial sessions and renewals." },
  { name: "Interior & Architecture", icon: Ruler, line: "Show the work, capture the brief.", problem: "Strong work is hidden behind a weak online presence.", solution: "A visual portfolio site with a structured project enquiry form.", automation: "Enquiry details collected and sent to a shared inbox or sheet." },
  { name: "Education", icon: GraduationCap, line: "Simpler admissions and communication.", problem: "Admissions queries and updates are handled manually.", solution: "Course pages, enquiry forms and a lightweight student or parent portal.", automation: "Automated responses to common questions and announcement notifications." },
  { name: "Real Estate", icon: Building2, line: "Qualify leads before the first call.", problem: "Leads from many sources are hard to track and follow up.", solution: "Listing pages and enquiry capture that records what each lead wants.", automation: "Lead routing and follow-up reminders." },
  { name: "Professional Services", icon: Briefcase, line: "Credibility online, less admin offline.", problem: "Prospects can’t tell what is offered or how to start.", solution: "A clear services site with a simple intake flow.", automation: "Client intake, document collection and status updates." },
  { name: "Startups", icon: Rocket, line: "Ship a first version without the overhead.", problem: "A small team needs a product or site quickly, without over-building.", solution: "An MVP or landing page with a backend that can grow.", automation: "Internal workflows and reporting wired together early." },
];

export const process = [
  { n: "01", title: "Discover", text: "Understand the business, problem and desired outcome." },
  { n: "02", title: "Plan", text: "Define the simplest technical solution." },
  { n: "03", title: "Build", text: "Design, develop, test and refine." },
  { n: "04", title: "Improve", text: "Launch, measure and improve." },
];

export type Project = { id: string; n: string; title: string; category: string; summary: string; tech: string[]; visual: "graph" | "wire" | "route" | "wave"; overview: string; problem: string; approach: string; built: string[]; url?: string };
export const projects: Project[] = [
  { id: "auraverify", n: "01", title: "AuraVerify", category: "Fake Profile Detection System", visual: "graph", tech: ["Java", "Spring Boot", "Python", "Flask"],
    summary: "A behavioral-analysis system designed to identify suspicious or fake profiles.",
    overview: "A fraudulent-profile detection system using behavioral analysis, led by Om Langade as Project Lead of a technical team of three.",
    problem: "Fake profiles erode trust on platforms that depend on real users.",
    approach: "Behavioral signals are analysed to flag suspicious profiles, with the work organised through the full software development lifecycle.",
    built: ["Behavioral-analysis detection system", "Backend services in Java and Spring Boot with Python and Flask components", "SDLC activities, development and testing", "Technical documentation"] },
  { id: "cortex-growth", n: "02", title: "Cortex Growth", category: "AI Automation Agency Platform", visual: "wire", tech: ["React", "Node.js", "REST APIs"],
    summary: "A modern platform concept focused on AI-powered business automation and lead generation.",
    overview: "A SaaS-style platform concept for an AI automation agency, built by Om Langade as Full Stack Developer.",
    problem: "An agency needs to explain what it offers and turn visitors into enquiries.",
    approach: "Responsive interfaces present the services, with lead-generation functionality built into the flow.",
    built: ["Responsive interfaces", "Service management", "Lead-generation functionality"] },
  { id: "bus-route", n: "03", title: "Bus Route Optimization System", category: "Transit Management", visual: "route", tech: ["Python", "Flask", "REST APIs"],
    summary: "A Python/Flask transit management system for routing, scheduling and tracking.",
    overview: "A transit management system built with Python and Flask.",
    problem: "Running a bus network means coordinating routes, timetables and vehicle locations in one place.",
    approach: "A Flask backend exposes REST APIs for the routing, scheduling and tracking logic.",
    built: ["Bus routing", "Scheduling", "Tracking"] },
  { id: "macos-assistant", n: "04", title: "Multimodal macOS AI Assistant", category: "Native AI Application", visual: "wave", tech: ["Swift", "SwiftUI", "Gemini", "AI/Vision"],
    summary: "A multimodal desktop assistant combining voice, vision and AI capabilities.",
    overview: "A native macOS AI assistant integrating voice, camera vision and screen intelligence through a modular Swift architecture. Ongoing.",
    problem: "Most assistants work from typed text alone and lack context about what the user sees and says.",
    approach: "Voice, camera and screen inputs are processed and combined into one context, which the AI uses to respond.",
    built: ["Voice interaction with speech recognition and synthesis", "Camera and screen context using Apple Vision and OCR", "Multimodal context fusion", "Modular Swift architecture with a capability registry"] },
];
