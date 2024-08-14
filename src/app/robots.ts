import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ezeemedia.io";
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}