export const site = {
  name: "Zenvyq Labs",
  tagline: "Build Better. Automate Smarter.",
  description: "Zenvyq Labs is a technology and digital solutions business helping companies improve their digital presence, streamline operations and implement useful technology.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zenvyqlabs.com").replace(/\/$/, ""),
  founder: { name: "Om Langade", title: "Founder, Zenvyq Labs" },
  email: "hello@zenvyqlabs.com",
  whatsappDisplay: "+91 92267 34874",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/919226734874",
  github: "https://github.com/Omlangade21",
  portfolio: "https://omlangade21.github.io/portfolio/",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  nav: [
    { href: "/services", label: "Services" }, { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" }, { href: "/careers", label: "Careers" }, { href: "/contact", label: "Contact" },
  ],
} as const;
