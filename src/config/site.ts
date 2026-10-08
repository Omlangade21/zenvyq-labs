export const site = {
  name: "Zenvyq Labs",
  wordmark: "ZENVYQ LABS",
  tagline: "Web. AI. Automation. Built for Business.",
  description: "Zenvyq Labs builds websites, full-stack applications, AI solutions and business automation systems for growing businesses.",
  title: "Zenvyq Labs — Web, AI & Automation for Growing Businesses",
  // Production URL: set NEXT_PUBLIC_SITE_URL (or edit the fallback) when you have a domain.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zenvyqlabs.com").replace(/\/$/, ""),
  founder: { name: "Om Langade", role: "Full-Stack Developer | AI Automation Developer", title: "Founder & Full-Stack / AI Automation Developer" },
  email: "om21langade@gmail.com",
  portfolio: "https://omlangade21.github.io/portfolio/",
  github: "https://github.com/Omlangade21",
  // WhatsApp: set NEXT_PUBLIC_WHATSAPP_URL (e.g. https://wa.me/91XXXXXXXXXX). Empty = button hidden.
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  // Enquiry forms: set NEXT_PUBLIC_FORM_ENDPOINT (Formspree etc.). Uses the Zenvyq Formspree endpoint if unset.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  nav: [
    { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" },
    { href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" }, { href: "/work", label: "Work" },
    { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }, { href: "/privacy", label: "Privacy" },
  ],
} as const;
