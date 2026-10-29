import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/industries", "/work", "/about", "/contact", "/careers", "/privacy"].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 }));
}
