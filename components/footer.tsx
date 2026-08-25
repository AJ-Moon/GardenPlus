import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig, segments } from "@/lib/site-content";
import { seoServicePageLinks } from "@/lib/seo-service-pages";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Landscaping Lahore", href: "/landscaping-lahore" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

const socialIcons = {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
} as const;

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <span className="font-serif text-lg font-semibold text-foreground">
                  G
                </span>
              </span>
              <span className="font-serif text-2xl font-medium text-background">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mb-8 max-w-md leading-relaxed text-background/70">
              Professional landscaping and gardening services that transform
              outdoor spaces into thriving, beautiful environments your family
              and clients will love.
            </p>

            <address className="space-y-2 text-sm not-italic text-background/70">
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p className="pt-2">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="rounded-sm transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-sm transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-background">
              Company
            </h2>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-background/70 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — deep-linked to the matching section of /services */}
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-background">
              Services
            </h2>
            <ul className="space-y-4">
              {segments.map((segment) => (
                <li key={segment.slug}>
                  <Link
                    href={`/services#${segment.slug}`}
                    className="rounded-sm text-background/70 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  >
                    {segment.heading}
                  </Link>
                </li>
              ))}
              {seoServicePageLinks.slice(0, 5).map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="rounded-sm text-background/70 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.social.map((item) => {
              const Icon =
                socialIcons[item.name as keyof typeof socialIcons] ?? Facebook;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-background/50 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  aria-label={`${siteConfig.name} on ${item.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
