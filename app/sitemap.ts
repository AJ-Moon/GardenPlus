import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-content";
import { posts } from "@/lib/blog";
import { seoServicePages } from "@/lib/seo-service-pages";
import { seoLocations } from "@/lib/seo-locations";
import { landscapeServices } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date("2026-09-15");

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    {
      path: "/landscaping-lahore",
      priority: 0.95,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/landscaping-pakistan",
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
    // SEO 2026-11-26: /llms.txt and /llms-full.txt are no longer listed here.
    // They are plain-text files for AI crawlers (still served and still
    // allowed in robots.txt), not pages for Google's index; Search Console
    // reported them "Crawled - currently not indexed" on 2026-11-24.
  ];

  // Pages whose content or titles changed after the site-wide date above.
  const updatedOn: Record<string, Date> = {
    "/landscaping-lahore": new Date("2026-11-26"),
    "/landscaping-cost-lahore": new Date("2026-11-26"),
    "/services/lawn-maintenance-lahore": new Date("2026-11-26"),
    "/services/artificial-grass-pakistan": new Date("2026-11-26"),
  };

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: updatedOn[route.path] ?? contentUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...seoServicePages.map((page) => {
      const service = landscapeServices.find(
        (item) => item.href === `/services/${page.slug}`,
      );
      const images = [
        page.image,
        ...(service?.gallery.map((image) => image.src) ?? []),
      ]
        .filter((image) => image.startsWith("/"))
        .map((image) => new URL(image, siteConfig.url).toString());

      return {
        url: `${siteConfig.url}/services/${page.slug}`,
        lastModified: updatedOn[`/services/${page.slug}`] ?? contentUpdated,
        images: images.length > 0 ? [...new Set(images)] : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      };
    }),
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
