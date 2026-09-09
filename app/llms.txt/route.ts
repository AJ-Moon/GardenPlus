import { posts } from "@/lib/blog";
import { siteConfig, fullAddress } from "@/lib/site-content";
import { landscapeServices } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    siteConfig.description,
    "## Contact",
    `Address: ${fullAddress}`,
    `Phone: ${siteConfig.phone}`,
    `Email: ${siteConfig.email}`,
    `WhatsApp: https://wa.me/${siteConfig.whatsapp}`,
    "## Services",
    ...landscapeServices.map(
      (service) =>
        `- [${service.title}](${absoluteUrl(service.href)}): ${service.description}`,
    ),
    "## Company Pages",
    `- [Completed projects](${absoluteUrl("/portfolio")})`,
    `- [Contact](${absoluteUrl("/contact")})`,
    `- [About GardenPlus](${absoluteUrl("/about")})`,
    "## Garden Guides",
    ...posts.map(
      (post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)})`,
    ),
  ].join("\n\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
