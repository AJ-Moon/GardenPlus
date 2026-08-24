import Link from "next/link";
import { ArrowRight, Droplets, Flower2, Leaf, Sprout } from "lucide-react";
import { Reveal } from "@/components/reveal";

const cards = [
  {
    eyebrow: "Year-round care",
    icon: Leaf,
    title: "Lawn Maintenance",
    description:
      "Regular mowing, edging, fertilisation and weed control — keeping your lawn looking its best all year round.",
    href: "/services#residential",
  },
  {
    eyebrow: "Premium nursery",
    icon: Sprout,
    title: "Plant Supply",
    description:
      "Premium nursery stock — seasonal flowers, ornamental shrubs and ground cover sourced from quality growers.",
    href: "/services#residential",
  },
  {
    eyebrow: "Water-efficient",
    icon: Droplets,
    title: "Irrigation Systems",
    description:
      "Drip and sprinkler systems with smart controllers that cut water use while keeping every plant thriving.",
    href: "/services#corporate",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Everything You Need
          </p>
          <h2 className="font-serif text-5xl font-light italic leading-[1.06] text-foreground md:text-6xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]">
            From a single lawn visit to a complete outdoor transformation —
            GardenPlus has the skills and experience to make it happen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {/* Feature card */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <Link
              href="/services#residential"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary p-9 md:p-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 h-40 w-40 rounded-full border border-white/5"
              />
              <svg
                className="absolute right-8 top-8 opacity-15"
                width="120"
                height="146"
                viewBox="0 0 130 160"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M65 10 C90 30 100 70 75 120 C65 140 55 150 65 155 C75 150 85 140 75 120 C50 70 40 30 65 10Z"
                  fill="white"
                />
                <path
                  d="M65 10 C40 30 30 70 55 120"
                  stroke="white"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M65 50 C80 45 95 55 90 70"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path
                  d="M65 70 C80 65 95 75 90 90"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path
                  d="M65 90 C75 85 85 92 82 105"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                />
              </svg>

              <span className="relative mb-8 inline-block text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Featured Service
              </span>
              <h3 className="relative mb-4 font-serif text-4xl italic leading-[1.08] text-primary-foreground md:text-[42px]">
                Garden Design
              </h3>
              <p className="relative max-w-md text-sm leading-7 text-primary-foreground/70">
                Custom landscape plans tailored to your space and style — from
                lush cottage gardens to sleek, contemporary layouts that
                complement your home&apos;s character.
              </p>
              <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-[12px] uppercase tracking-[0.12em] text-primary-foreground/75 transition-colors group-hover:text-primary-foreground">
                Explore our designs
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          {cards.map((card, index) => (
            <Reveal key={card.title} delay={0.08 + index * 0.06}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1 md:p-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="mb-5 inline-block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {card.eyebrow}
                </span>
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mb-3 font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </Link>
            </Reveal>
          ))}

          {/* Quote CTA */}
          <Reveal delay={0.26}>
            <Link
              href="/contact"
              className="group block h-full rounded-2xl border border-primary-foreground/10 bg-primary/95 p-7 transition-colors hover:bg-primary md:p-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="mb-4 inline-block text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Ready to start?
              </span>
              <h3 className="mb-3 font-serif text-3xl italic leading-tight text-primary-foreground">
                Get a Free Quote
              </h3>
              <p className="mb-6 text-sm leading-6 text-primary-foreground/70">
                Tell us about your project and we&apos;ll get back to you within
                24 hours.
              </p>
              <span className="inline-block rounded-md border border-primary-foreground/30 px-4 py-2.5 text-[12px] uppercase tracking-[0.08em] text-primary-foreground/80 transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
                Contact Us Today
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Consultation strip */}
        <Reveal delay={0.3} className="mt-4">
          <Link
            href="/services"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30 md:p-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Flower2 className="h-5 w-5 text-primary" />
            </span>
            <span className="block">
              <span className="mb-2 block font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                Landscape Consultation
              </span>
              <span className="block text-sm leading-7 text-muted-foreground">
                Site analysis, plant selection guidance and phased planning for
                homeowners and businesses seeking a clear path to a better
                outdoor space.
              </span>
            </span>
            <ArrowRight className="ml-auto hidden h-5 w-5 shrink-0 self-center text-muted-foreground transition-transform group-hover:translate-x-1 sm:block" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
