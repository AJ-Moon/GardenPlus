import { posts } from "@/lib/blog";
import { segments, siteConfig } from "@/lib/site-content";
import { absoluteUrl, primaryKeywords, seoFacts, serviceAreas } from "@/lib/seo";
import { seoServicePages } from "@/lib/seo-service-pages";
import { seoLocations } from "@/lib/seo-locations";

export const dynamic = "force-static";

export function GET() {
  const serviceList = segments
    .map(
      (segment) =>
        `- ${segment.heading}: ${segment.intro} Services include ${segment.offerings.join(", ")}.`,
    )
    .join("\n");

  const blogList = posts
    .map((post) => `- ${post.title}: ${absoluteUrl(`/blog/${post.slug}`)}`)
    .join("\n");

  const servicePageList = seoServicePages
    .map(
      (page) =>
        `- ${page.h1}: ${absoluteUrl(`/services/${page.slug}`)} (${page.primaryKeyword})`,
    )
    .join("\n");

  const locationList = seoLocations
    .map(
      (location) =>
        `- ${location.h1}: ${absoluteUrl(`/landscaping/${location.slug}`)} (${location.primaryKeyword}); also covers ${location.nearby.join(", ")}`,
    )
    .join("\n");

  const body = `# ${siteConfig.name}

${siteConfig.description}

## Business Facts
${seoFacts.map((fact) => `- ${fact}`).join("\n")}

## Core Services
${serviceList}

## Service Areas And Climate Relevance
GardenPlus is based in Lahore, Punjab, Pakistan. The site is most relevant for searches about landscaping services in Lahore, garden design in Lahore, lawn maintenance, irrigation systems, plant supply, artificial grass, commercial landscaping, corporate landscaping, large-scale landscape delivery, and climate-aware landscaping for Pakistan and Middle East conditions.

Areas and markets referenced on the site: ${serviceAreas.join(", ")}.

## Important Pages
- Home: ${siteConfig.url}
- Landscaping Services Lahore: ${absoluteUrl("/landscaping-lahore")}
- Services: ${absoluteUrl("/services")}
- Portfolio: ${absoluteUrl("/portfolio")}
- Blog: ${absoluteUrl("/blog")}
- Contact: ${absoluteUrl("/contact")}
- Landscaping Cost Guide: ${absoluteUrl("/landscaping-cost-lahore")}
- FAQs: ${absoluteUrl("/faqs")}

## Dedicated Service Pages
${servicePageList}

## Area Pages In Lahore
${locationList}

## Useful Articles
${blogList}

## Search Topics
${primaryKeywords.map((keyword) => `- ${keyword}`).join("\n")}

## Contact
- Phone: ${siteConfig.phone}
- WhatsApp: https://wa.me/${siteConfig.whatsapp}
- Email: ${siteConfig.email}
- Address: ${siteConfig.address.line1}, ${siteConfig.address.line2}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
