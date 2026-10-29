export const site = {
  name: "Zenvyq Labs",
  wordmark: "ZENVYQ LABS",
  tagline: "Build Better. Automate Smarter.",
  description: "Zenvyq Labs builds modern websites, custom software, practical AI solutions and business automation for growing businesses.",
  title: "Zenvyq Labs — Build Better. Automate Smarter.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zenvyqlabs.com").replace(/\/$/, ""),
  founder: { name: "Om Langade", role: "Full-Stack Developer | AI Automation Developer", title: "Founder, Zenvyq Labs" },
  email: "hello@zenvyqlabs.com",
  portfolio: "https://omlangade21.github.io/portfolio/",
  github: "https://github.com/Omlangade21",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/919226734874",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  nav: [
    { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" },
    { href: "/work", label: "Work" }, { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" }, { href: "/work", label: "Work" },
    { href: "/careers", label: "Careers" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }, { href: "/privacy", label: "Privacy" },
  ],
} as const;
