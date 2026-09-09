import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-content";
import { posts } from "@/lib/blog";
import { seoServicePages } from "@/lib/seo-service-pages";
import { seoLocations } from "@/lib/seo-locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date("2026-09-09");

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    {
      path: "/landscaping-lahore",
      priority: 0.95,
      changeFrequency: "monthly" as const,
    },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/landscaping-cost-lahore",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/clients", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: contentUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...seoServicePages.map((page) => ({
      url: `${siteConfig.url}/services/${page.slug}`,
      lastModified: contentUpdated,
      images: page.image.startsWith("/")
        ? [new URL(page.image, siteConfig.url).toString()]
        : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...seoLocations.map((location) => ({
      url: `${siteConfig.url}/landscaping/${location.slug}`,
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      images: post.image.startsWith("/")
        ? [new URL(post.image, siteConfig.url).toString()]
        : undefined,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
