import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ServiceCards } from "@/components/service-cards";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import {
  createPageMetadata,
  lahorePageJsonLd,
  serviceAreas,
  lahoreFaqs,
} from "@/lib/seo";
import { siteConfig, fullAddress, fullOfficeAddress } from "@/lib/site-content";
import { landscapeServices } from "@/lib/services";
const seoServicePageLinks = landscapeServices.map((service) => ({
  name: service.title,
  href: service.href,
}));
import { lahoreSeoLocations } from "@/lib/seo-locations";

export const metadata: Metadata = createPageMetadata({
  // SEO 2026-11-26: 916 impressions at 0.44% CTR (avg position 14.8). The old
  // title ran to ~80 characters and was cut off; it also said "Lawn Care",
  // which pulled lawn-care searches here instead of to the lawn care page.
  title: "Landscaping Services in Lahore: Design, Build, Care",
  description:
    "Garden design, paving, planting, irrigation, lighting and maintenance for homes and businesses in DHA, Bahria Town, Gulberg and across Lahore. Get a quote.",
  path: "/landscaping-lahore",
  keywords: [
    "landscaping services Lahore",
    "landscape Lahore",
    "landscaping in Lahore",
    "landscape designer Lahore",
    "garden service Lahore",
  ],
});

const faqs = lahoreFaqs;

export default function LandscapingLahorePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lahorePageJsonLd) }}
      />
      <Navigation />

      <header className="relative min-h-[78vh] overflow-hidden pt-28 md:pt-32">
        <Image
          src="/gardenplus-work/fountain-garden.jpg"
          alt="GardenPlus fountain garden with flowering borders in Lahore"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[calc(78vh-7rem)] max-w-7xl items-center px-6 pb-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/75">
              Lahore Landscaping Company
            </p>
            <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              Landscaping Services in Lahore
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Landscape design, civil works, planting, irrigation and
              maintenance for homes, businesses and larger projects.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-7 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Lahore Quote
              </Link>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-sm border border-white/45 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Local climate knowledge
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Built for Lahore soil, heat, water and monsoon conditions
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              A successful Lahore garden needs more than attractive planting. It
              needs soil preparation, drainage, deep-rooted lawn choices,
              heat-tolerant trees, efficient irrigation and maintenance access
              planned from the beginning.
            </p>
            <p>
              Our planning service includes site visits, 3D landscape design
              proposals, execution planning and detailed quotations, with a
              one-year service warranty/guarantee.
            </p>
            <p>
              Already have a garden? Our{" "}
              <Link
                href="/services/lawn-maintenance-lahore"
                className="text-primary underline underline-offset-4"
              >
                lawn care and maintenance service in Lahore
              </Link>{" "}
              looks after existing lawns, planting and irrigation. Planning a
              new one? Start with{" "}
              <Link
                href="/services/garden-design-lahore"
                className="text-primary underline underline-offset-4"
              >
                garden design
              </Link>{" "}
              or see{" "}
              <Link
                href="/landscaping-cost-lahore"
                className="text-primary underline underline-offset-4"
              >
                what drives landscaping costs in Lahore
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Services
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              What GardenPlus handles in Lahore
            </h2>
          </div>
          <ServiceCards preview />
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Areas
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Serving Lahore and nearby projects
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Our Gulberg office is at {fullOfficeAddress} The Mustafa Abad
              address is {fullAddress} Contact the team to discuss your site and
              arrange a visit.
            </p>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {serviceAreas.slice(0, 9).map((area) => (
              <li key={area} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Questions
          </p>
          <h2 className="text-center font-serif text-4xl font-light text-foreground md:text-5xl">
            Lahore Landscaping FAQ
          </h2>
          <div className="mt-12 divide-y divide-border">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-7">
                <h3 className="font-serif text-2xl text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hub links — this page is the parent for every area and service page */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Area by area
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Landscaping across Lahore
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Soil, shade, water pressure and plot size differ enough across the
            city that the same design does not suit every area. These pages
            cover what gardens in each part of Lahore actually need.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lahoreSeoLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/landscaping/${location.slug}`}
                className="group rounded-sm border border-border p-6 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <h3 className="font-serif text-2xl text-foreground group-hover:text-primary">
                  {location.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {location.considerations[0].heading}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="mt-16 font-serif text-4xl font-light text-foreground md:text-5xl">
            Services in detail
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/landscaping-cost-lahore"
              className="text-sm font-medium text-primary hover:underline"
            >
              What landscaping costs in Lahore
            </Link>
            <Link
              href="/faqs"
              className="text-sm font-medium text-primary hover:underline"
            >
              Landscaping questions answered
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
