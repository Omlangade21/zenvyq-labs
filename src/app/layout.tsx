import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Backdrop } from "@/components/Backdrop";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Zenvyq Labs" },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: site.name, title: site.title, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};
export const viewport: Viewport = { themeColor: "#0a0b0d", colorScheme: "dark" };
const jsonLd = {
  "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, slogan: site.tagline, description: site.description, email: site.email,
  founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role, url: site.portfolio, sameAs: [site.github, site.portfolio] },
  sameAs: [site.github],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        <a href="#main" className="fixed left-4 top-[-60px] z-[100] rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink focus:top-4">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Backdrop />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
