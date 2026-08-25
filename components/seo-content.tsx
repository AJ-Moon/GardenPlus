import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryKeywords, serviceAreas } from "@/lib/seo";
import { segments, siteConfig } from "@/lib/site-content";
import { seoServicePageLinks } from "@/lib/seo-service-pages";

export function HomeSeoSection() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Landscaping in Lahore
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            Garden design, lawn care and irrigation built for local weather
          </h2>
          <div className="mt-7 space-y-5 leading-8 text-muted-foreground">
            <p>
              GardenPlus plans outdoor spaces for how Lahore gardens actually
              live: hot summers, monsoon drainage, winter color, dusty roads,
              changing water pressure and the daily use of family, hospitality
              and commercial spaces.
            </p>
            <p>
              Our team combines landscape design, lawn maintenance, plant
              nursery supply, artificial grass options, drip irrigation,
              sprinkler systems and long-term care programs for residential,
              commercial, corporate and large-scale projects.
            </p>
          </div>
          <Link
            href="/landscaping-lahore"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Landscaping in Lahore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid content-start gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Popular services
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {primaryKeywords.slice(0, 9).map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Service areas
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {siteConfig.name} serves Lahore and nearby Punjab projects, with
              climate-aware planning for Pakistan and Middle East environments.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {serviceAreas.slice(0, 9).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSeoSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Full service delivery
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              One landscaping partner from first sketch to long-term care
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              The best performing landscapes are planned as systems: soil,
              grading, drainage, irrigation, grass, trees, outdoor plants,
              lighting, maintenance access and seasonal color all have to work
              together.
            </p>
            <p>
              GardenPlus structures every project around the same practical
              sequence: site analysis, garden design, material and plant
              specification, installation, handover and a maintenance plan that
              protects the investment.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <article key={segment.slug} className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground">
                {segment.heading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {segment.intro}
              </p>
              <Link
                href={`/services#${segment.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <h3 className="font-serif text-3xl font-light text-foreground">
            Popular service pages
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {seoServicePageLinks.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-sm border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
