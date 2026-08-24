import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Droplets, Leaf, MapPin, Sprout } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { createPageMetadata, lahorePageJsonLd, serviceAreas } from "@/lib/seo";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Services Lahore - Garden Design, Lawn Care & Irrigation",
  description:
    "GardenPlus provides landscaping services in Lahore including garden design, lawn maintenance, irrigation systems, plant supply, artificial grass, commercial landscaping and outdoor plants.",
  path: "/landscaping-lahore",
  keywords: [
    "landscaping services Lahore",
    "landscape Lahore",
    "landscaping in Lahore",
    "landscape designer Lahore",
    "garden service Lahore",
  ],
});

const serviceHighlights = [
  {
    icon: Leaf,
    title: "Garden Design",
    text: "Concept layouts, planting plans, lawns, paths, water features and outdoor living spaces planned for Lahore homes and farmhouses.",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    text: "Drip and sprinkler irrigation planned around sunlight, soil, grass, plant beds and water pressure to reduce waste.",
  },
  {
    icon: Sprout,
    title: "Plant Supply",
    text: "Outdoor plants, indoor plants, seasonal flowers, trees, shrubs, ground covers and nursery stock selected for heat and maintenance needs.",
  },
  {
    icon: MapPin,
    title: "Commercial Landscaping",
    text: "Entrances, hotel gardens, campuses, office grounds, retail frontages and development landscapes built for consistent presentation.",
  },
];

const faqs = [
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. GardenPlus can manage design, soil preparation, hardscape coordination, plantation, lawn installation, irrigation and maintenance planning.",
  },
  {
    question: "Can you maintain an existing lawn or garden?",
    answer:
      "Yes. GardenPlus provides lawn maintenance, pruning, seasonal planting, irrigation checks, weed control and ongoing grounds care for homes and businesses.",
  },
  {
    question: "Do you recommend artificial grass?",
    answer:
      "Artificial grass can work well for low-maintenance areas, shaded spots and high-use spaces. GardenPlus recommends it only where it fits the design, drainage and heat exposure.",
  },
];

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
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2000&auto=format&fit=crop"
          alt=""
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
              Garden design, lawn maintenance, irrigation systems, plant supply,
              artificial grass and commercial landscaping for homes, hotels,
              offices, campuses and developments.
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
              A successful Lahore garden needs more than attractive planting.
              It needs soil preparation, drainage, deep-rooted lawn choices,
              heat-tolerant trees, efficient irrigation and maintenance access
              planned from the beginning.
            </p>
            <p>
              GardenPlus designs and maintains residential gardens, commercial
              landscapes, corporate grounds and large-scale outdoor spaces with
              practical plant selection and water-aware systems for Pakistan
              and climate-similar Middle East environments.
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item) => (
              <article key={item.title} className="border-t border-border pt-6">
                <item.icon className="mb-5 h-7 w-7 text-primary" />
                <h3 className="font-serif text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
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
              GardenPlus works from Bedian Road and serves homeowners,
              developers and businesses across Lahore and Punjab. For GCC and
              Middle East projects, the same climate-aware design approach is
              useful for plant selection, irrigation planning and outdoor
              comfort.
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

      <CTASection />
      <Footer />
    </main>
  );
}
