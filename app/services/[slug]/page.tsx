import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ServiceProjectMedia } from "@/components/service-project-media";
import { createPageMetadata } from "@/lib/seo";
import {
  altForPhoto,
  fullAddress,
  fullOfficeAddress,
  videos,
} from "@/lib/site-content";
import { posts } from "@/lib/blog";
import { landscapeServices } from "@/lib/services";
import {
  getSeoServicePage,
  seoServicePages,
  servicePageJsonLd,
} from "@/lib/seo-service-pages";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoServicePage(slug);

  if (!page) return { title: "Service not found" };

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/services/${page.slug}`,
    keywords: [page.primaryKeyword, ...page.keywords],
  });
}

export default async function SeoServicePage({ params }: Params) {
  const { slug } = await params;
  const page = getSeoServicePage(slug);

  if (!page) notFound();

  const service = landscapeServices.find(
    (item) => item.href === `/services/${slug}`,
  );
  const guides = service
    ? posts
        .filter((post) => post.relatedServices?.includes(service.slug))
        .slice(0, 3)
    : [];
  const serviceVideos = service?.videoIds
    ? videos.filter((video) => service.videoIds?.includes(video.id))
    : [];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicePageJsonLd(page)),
        }}
      />
      <Navigation />

      <header className="relative min-h-[72vh] overflow-hidden pt-28 md:pt-32">
        <Image
          src={page.image}
          alt={page.imageAlt ?? altForPhoto(page.image)}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ objectPosition: page.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        <div className="relative z-10 mx-auto flex min-h-[calc(72vh-7rem)] max-w-7xl items-center px-6 pb-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/75">
              {page.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              {page.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              {page.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-7 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="rounded-sm border border-white/45 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              About the Service
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              {page.h1}
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            {page.intro.map((paragraph) => (
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
                Scope
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                What GardenPlus can deliver
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {page.deliverables.map((item) => (
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

      {service && (
        <ServiceProjectMedia
          images={service.gallery}
          videos={serviceVideos}
          title={`${service.title} Project Media`}
          description="Real GardenPlus photographs and videos selected from the material supplied by the company."
        />
      )}

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Process
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Planning Your Project
            </h2>
            <ol className="mt-10 space-y-5">
              {page.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-7 text-muted-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:border-l lg:border-border lg:pl-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Areas
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Service areas
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              GardenPlus undertakes landscaping projects across Pakistan. Our
              Lahore office is at {fullOfficeAddress}, with an additional
              address at {fullAddress} Contact us to discuss your project
              location and requirements.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.areas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{area}</span>
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
            {page.h1} FAQ
          </h2>
          <div className="mt-12 divide-y divide-border">
            {page.faqs.map((faq) => (
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
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all landscaping services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground">
              Related Reading
            </h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-3">
              {guides.map((post) => (
                <li key={post.slug} className="border-t border-border pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-serif text-xl text-primary hover:underline"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CTASection />
      <Footer />
    </main>
  );
}
