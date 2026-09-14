import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { clients, testimonials } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "GardenPlus Landscaping Clients & Completed Projects",
  description:
    "View named GardenPlus clients and project records across residential, commercial, industrial and institutional landscaping work in Pakistan.",
  path: "/clients",
  keywords: [
    "commercial landscaping Pakistan",
    "corporate landscaping Pakistan",
    "industrial landscaping Pakistan",
    "landscaping projects Pakistan",
  ],
});

export default function ClientsPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Our Valued Clients"
        subtitle="Completed Projects"
        description="Named clients and homeowners from the GardenPlus completed-project record"
        backgroundImage="/gardenplus-work/development.jpg"
        imageAlt="Completed GardenPlus lawn with mature trees and garden planting"
      />

      {/* Clients */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Trusted By
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Our Valued Clients
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clients.map((client, index) => (
              <Reveal
                key={client.name}
                delay={index * 0.04}
                duration={0.45}
                className="h-full"
              >
                <div className="h-full rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/30 md:p-7">
                  <h3 className="mb-2 font-serif text-xl leading-tight text-foreground">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {client.project}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Client Stories
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                What They Say
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.author}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <figure className="flex h-full flex-col border border-border bg-card p-8 md:p-10">
                    <Quote
                      className="mb-6 h-8 w-8 text-accent"
                      aria-hidden="true"
                    />
                    <blockquote className="mb-8 flex-1 leading-relaxed text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption>
                      <p className="font-medium text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />

      <Footer />
    </main>
  );
}
