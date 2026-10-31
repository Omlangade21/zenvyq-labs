import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { projects } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/projects", ...projects.map((p) => `/projects/${p.slug}`), "/about", "/careers", "/contact", "/privacy"];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: p === "" ? 1 : p.split("/").length > 2 ? 0.6 : 0.8 }));
}
