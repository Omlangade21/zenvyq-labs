import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";

const title = "Zenvyq Labs | Web Development, AI Solutions & Business Automation";
const description = "Zenvyq Labs builds modern websites, intelligent AI solutions, custom software and business automation systems to help businesses grow and operate smarter.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Zenvyq Labs" },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: site.name, title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f1f7f7" }, { media: "(prefers-color-scheme: dark)", color: "#06141b" }],
  colorScheme: "light dark",
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, slogan: site.tagline,
  description, email: site.email, logo: `${site.url}/brand/zenvyq-logo.png`, sameAs: [site.github],
};
// Runs before first paint: applies a saved manual choice. No saved choice = System (CSS media query decides).
const themeInit = `try{var t=localStorage.getItem("zl-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>
        <a href="#main" className="fixed left-4 top-[-60px] z-[100] rounded-ui bg-btn px-4 py-2 text-sm font-semibold text-btn-fg focus:top-4">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main id="main">{children}</main>
        <CtaBand />
        <Footer />
      </body>
    </html>
  );
}
