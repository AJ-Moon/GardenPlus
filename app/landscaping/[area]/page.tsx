import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";
import {
  getSeoLocation,
  locationPageJsonLd,
  seoLocations,
} from "@/lib/seo-locations";
import { seoServicePageLinks } from "@/lib/seo-service-pages";
import { altForPhoto, siteConfig } from "@/lib/site-content";

type Params = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return seoLocations.map((location) => ({ area: location.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area } = await params;
  const location = getSeoLocation(area);

  if (!location) return { title: "Area not found" };

  return createPageMetadata({
    title: location.title,
    description: location.metaDescription,
    path: `/landscaping/${location.slug}`,
    keywords: [location.primaryKeyword, ...location.keywords],
  });
}

export default async function LocationPage({ params }: Params) {
  const { area } = await params;
  const location = getSeoLocation(area);

  if (!location) notFound();

  const otherLocations = seoLocations.filter((l) => l.slug !== location.slug);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationPageJsonLd(location)),
        }}
      />
      <Navigation />

      <header className="relative min-h-[68vh] overflow-hidden pt-28 md:pt-32">
        <Image
          src={location.image}
          alt={altForPhoto(location.image)}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        <div className="relative z-10 mx-auto flex min-h-[calc(68vh-7rem)] max-w-7xl items-center px-6 pb-16 lg:px-8">
          <div className="max-w-3xl">
            {/* Visible breadcrumb — matches the BreadcrumbList in the JSON-LD */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/landscaping-lahore" className="hover:text-white">
                    Lahore
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/90">{location.name}</li>
              </ol>
            </nav>
            <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              {location.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              {location.metaDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-7 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Free Quote
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {location.name}
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              What gardens in {location.name} actually need
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            {location.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Most requested
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                Popular services in {location.name}
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {location.popular.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Local conditions
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            What we plan around here
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {location.considerations.map((item) => (
              <article key={item.heading} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground">
                  {item.heading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="font-serif text-3xl font-light text-foreground">
              Also covering
            </h3>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {location.nearby.map((place) => (
                <li
                  key={place}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Questions
          </p>
          <h2 className="text-center font-serif text-4xl font-light text-foreground md:text-5xl">
            Landscaping in {location.name}: FAQ
          </h2>
          <div className="mt-12 divide-y divide-border">
            {location.faqs.map((faq) => (
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

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Services available in {location.name}
          </h2>
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

          <h2 className="mt-14 font-serif text-3xl font-light text-foreground md:text-4xl">
            Other areas we work in
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/landscaping/${other.slug}`}
                className="rounded-sm border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {other.name}
              </Link>
            ))}
          </div>

          <Link
            href="/landscaping-lahore"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All landscaping services in Lahore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
