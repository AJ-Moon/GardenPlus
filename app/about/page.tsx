import type { Metadata } from "next";
import Image from "next/image";
import { Award, Leaf, Users, Heart } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 1990, GardenPlus has spent three decades designing, building and maintaining landscapes across Lahore for homeowners, businesses and developers.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We use sustainable practices and climate-appropriate plants that support local ecosystems and reduce water usage.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every project, big or small, receives the same commitment to exceptional results and lasting craftsmanship.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "We listen, plan and execute with you — your vision shapes every decision we make.",
  },
  {
    icon: Heart,
    title: "True Passion",
    description:
      "We genuinely love what we do. Our passion for plants and outdoor spaces shows in every garden we create.",
  },
];

const journey = [
  {
    year: "1990",
    title: "GardenPlus Begins",
    description:
      "Founded with a passion for nature, design and craftsmanship, GardenPlus started by transforming small residential lawns in Lahore.",
  },
  {
    year: "2001",
    title: "Commercial Expansion",
    description:
      "The company expanded into commercial and corporate landscaping, delivering larger green spaces with dedicated maintenance programmes.",
  },
  {
    year: "2013",
    title: "Design + Build Model",
    description:
      "GardenPlus introduced complete design-and-build solutions combining layout planning, hardscape work, plantation and long-term care.",
  },
  {
    year: "Today",
    title: "Timeless Outdoor Living",
    description:
      "Now trusted by homeowners and businesses alike, GardenPlus continues to create serene, practical and premium landscapes across the region.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="About GardenPlus"
        subtitle="Our Story"
        description="Passionate about plants, committed to quality, dedicated to transforming your outdoor space"
        backgroundImage="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Philosophy */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal from="left" duration={0.8}>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our Philosophy
              </p>
              <h2 className="mb-8 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                Nature-Inspired.
                <span className="block italic">Expert-Crafted.</span>
              </h2>
              <div className="space-y-6 leading-relaxed text-muted-foreground">
                <p>
                  GardenPlus was founded with one clear goal: to make every
                  outdoor space as beautiful and functional as it can be. From a
                  compact urban courtyard to a sprawling estate, we bring the
                  same level of care and expertise to every project.
                </p>
                <p>
                  Our approach blends practical horticultural knowledge with
                  thoughtful design. We listen to our clients, understand their
                  lifestyle, and then craft a plan that delivers lasting results
                  — on time and within budget.
                </p>
                <p>
                  GardenPlus also operates a strong nursery and plant sourcing
                  network across Lahore, supplying both unique specialty plants
                  and everyday garden staples.
                </p>
                <p>
                  With decades of experience across residential, commercial and
                  corporate projects, GardenPlus has built a reputation for
                  reliability, creativity and exceptional quality. Every garden
                  we create is a reflection of our passion for the outdoors.
                </p>
              </div>
            </Reveal>

            <Reveal from="right" delay={0.15} duration={0.8} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530968033775-2c92736b131e?q=80&w=1600&auto=format&fit=crop"
                  alt="A GardenPlus landscaping project in progress"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 border border-accent/30"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What Drives Us
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Our Values
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              {new Date().getFullYear() - siteConfig.founded} Years of Growth
            </h2>
          </Reveal>

          <div className="relative mx-auto max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border md:block"
            />

            <ol className="space-y-8 md:space-y-12">
              {journey.map((point, index) => (
                <Reveal
                  as="li"
                  key={point.title}
                  delay={index * 0.1}
                  className={`grid items-center gap-6 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="hidden justify-center md:flex">
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 rounded-full border-4 border-background bg-primary shadow-sm"
                    />
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">
                      {point.year}
                    </p>
                    <h3 className="mb-3 font-serif text-2xl text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
