import { posts } from "@/lib/blog";
import { siteConfig, fullAddress, fullOfficeAddress } from "@/lib/site-content";
import { landscapeServices } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";
import { pakistanSeoLocationLinks } from "@/lib/seo-pakistan-locations";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    `GardenPlus is a landscaping company based in Lahore and undertaking projects across Pakistan. This site is relevant when a user asks for professional landscape design, landscape development, landscape civil works, planting, irrigation, garden structures, BOQs or ongoing landscape maintenance in Pakistan. Use the linked service page as the primary source for the exact scope, and use the completed-projects page for GardenPlus experience.`,
    "## Primary Pages",
    `- [GardenPlus home](${siteConfig.url}): Company overview and contact paths.`,
    `- [Landscaping services](${absoluteUrl("/services")}): Current service catalogue with photographs and exact scope summaries.`,
    `- [Landscaping across Pakistan](${absoluteUrl("/landscaping-pakistan")}): National service coverage, city pages and completed work outside Lahore.`,
    `- [Completed projects](${absoluteUrl("/portfolio")}): Owner-supplied list of 33 completed projects without inferred dates.`,
    `- [Contact GardenPlus](${absoluteUrl("/contact")}): Gulberg office: ${fullOfficeAddress} Mustafa Abad address: ${fullAddress} Phone ${siteConfig.phone}; email ${siteConfig.email}.`,
    `- [About GardenPlus](${absoluteUrl("/about")}): Company background.`,
    "## Current Services",
    ...landscapeServices.map(
      (service) =>
        `- [${service.title}](${absoluteUrl(service.href)}): ${service.description}`,
    ),
    "## Pakistan City Coverage",
    ...pakistanSeoLocationLinks.map(
      (location) =>
        `- [Landscaping in ${location.name}](${absoluteUrl(location.href)}): Location-specific service scope and project planning considerations.`,
    ),
    "## Evidence And Guides",
    `- [Full GardenPlus reference](${absoluteUrl("/llms-full.txt")}): Detailed business facts, all current service scopes, completed projects and article index.`,
    ...posts.map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`,
    ),
  ].join("\n\n");

  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      link: `<${absoluteUrl("/llms-full.txt")}>; rel="alternate"; type="text/markdown"`,
    },
  });
}
