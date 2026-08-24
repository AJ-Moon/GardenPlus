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
  title: "Landscaping Clients & Testimonials in Lahore",
  description:
    "See why homeowners, hotels, developers and corporate campuses trust GardenPlus for landscaping, garden design, lawn maintenance and irrigation projects in Lahore.",
  path: "/clients",
  keywords: [
    "commercial landscaping Lahore",
    "corporate landscaping Pakistan",
    "landscaping company Lahore reviews",
  ],
});

export default function ClientsPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Clients & Testimonials"
        subtitle="Our Partners"
        description="Trusted by homeowners, businesses and developers to create exceptional outdoor spaces"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop"
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
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30 md:p-7">
                  <h3 className="mb-2 font-serif text-xl leading-tight text-foreground">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {client.industry}
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
