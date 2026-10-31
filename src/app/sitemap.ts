import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: business.siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${business.siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${business.siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}