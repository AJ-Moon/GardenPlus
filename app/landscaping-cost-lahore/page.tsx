import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { PageBanner } from "@/components/page-banner";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { altForPhoto, photos, siteConfig } from "@/lib/site-content";
import { seoServicePageLinks } from "@/lib/seo-service-pages";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Cost in Lahore - What Drives the Price",
  description:
    "What actually determines landscaping and garden design costs in Lahore: site condition, soil, irrigation, plant sizes, hardscape and maintenance. How to read and compare quotes.",
  path: "/landscaping-cost-lahore",
  keywords: [
    "landscaping cost Lahore",
    "garden design cost Pakistan",
    "landscaping price Lahore",
    "lawn installation cost Lahore",
    "irrigation system cost Pakistan",
    "how much does landscaping cost in Pakistan",
  ],
});

/**
 * Deliberately no rate card. Publishing invented per-marla figures would be
 * misleading and would date badly — the honest, and more useful, answer is
 * what moves the number. Real quotes come from a site visit.
 */
const drivers = [
  {
    heading: "Site condition before anything is planted",
    text: "This is the biggest single variable and the one most people underestimate. A plot handed over after construction usually has brick, mortar and compacted sand where topsoil should be. Stripping that out and rebuilding a soil profile can cost more than the planting that goes on top of it — and skipping it is why so many new lawns thin out within a year.",
  },
  {
    heading: "How much hardscape is involved",
    text: "Paving, steps, seating walls, pergolas and gazebos are usually the most expensive square metres in any garden, several times the cost of the same area planted. The ratio of hard surface to planting moves a budget more than almost any other design decision.",
  },
  {
    heading: "Irrigation: manual, semi-automatic or fully zoned",
    text: "A hose point and a hand-watering routine costs nothing up front and costs you the garden later. A zoned drip and sprinkler system on a timer is a real line item, priced on the number of zones, the pump or pressure situation and how much trenching is needed. On anything above a small plot it pays for itself in water and in plants that do not die during a heatwave.",
  },
  {
    heading: "Plant sizes and how fast you want maturity",
    text: "The same planting plan can be delivered at three very different prices depending on stock size. Small stock establishes better and costs far less; semi-mature trees give an immediate result at a significant premium. Most sensible budgets mix the two — larger specimens where the eye lands, smaller stock everywhere else.",
  },
  {
    heading: "Lawn area and grass type",
    text: "Lawn is priced by prepared area, and preparation is most of the cost. Grass type matters for both the supply price and the running cost afterwards, since some varieties need noticeably more water and mowing than others.",
  },
  {
    heading: "Access and site logistics",
    text: "Narrow lanes, no vehicle access to the rear, or a finished house that has to be protected all add labour. On a farmhouse or estate the reverse applies — machinery access lowers the unit cost considerably compared with the same work done by hand.",
  },
  {
    heading: "Water source",
    text: "Mains-fed city plots are straightforward. A borewell site needs pump capacity, mainline sizing and zoning designed around available flow, which is engineering work before it is gardening work, and it sets the ceiling on how much irrigated landscape the site can carry.",
  },
  {
    heading: "Maintenance after handover",
    text: "The build is a one-off; maintenance is the recurring number. A weekly contract costs more than a monthly one, and a formal garden with clipped hedges and rotating seasonal colour needs more visits than a robust, low-input design. This is worth deciding at design stage, because it is cheaper to design for your maintenance budget than to discover it afterwards.",
  },
];

const quoteContents = [
  "A measured site plan, not an estimate from photographs",
  "Soil and drainage findings, and what needs correcting before planting",
  "A plant schedule listing species, sizes and quantities",
  "Irrigation scope: number of zones, controller, and what is trenched",
  "Hardscape areas, materials and finishes with square metres stated",
  "Who removes debris and construction waste, and whether it is included",
  "The establishment period: watering, feeding and replacement of failures",
  "Whether ongoing maintenance is included, and on what visit cycle",
];

const comparisonTraps = [
  {
    heading: "A quote with no soil preparation line",
    text: "If two quotes are far apart, this is usually where the gap is. The cheaper one is often planting straight into builder's fill, which shows up as a failing lawn one or two seasons later.",
  },
  {
    heading: "Plant sizes left unstated",
    text: "'50 shrubs' can mean five very different prices. Without pot sizes or heights on the schedule, two quotes are not comparable at all.",
  },
  {
    heading: "Irrigation described as a lump sum",
    text: "Ask for the number of zones and whether a controller is included. Irrigation is the easiest scope to quietly reduce while keeping the headline price attractive.",
  },
  {
    heading: "No establishment period",
    text: "New planting has a failure rate. A quote that says nothing about who replaces losses in the first season is leaving a cost with you.",
  },
  {
    heading: "Maintenance priced separately and vaguely",
    text: "Get the visit frequency and scope in writing. 'Maintenance included' with no cycle attached tends to mean whatever is convenient later.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/landscaping-cost-lahore#webpage`,
      url: absoluteUrl("/landscaping-cost-lahore"),
      name: "Landscaping Cost in Lahore",
      description:
        "A guide to what determines landscaping and garden design costs in Lahore, what a complete quote should contain, and how to compare quotes fairly.",
      about: { "@id": `${siteConfig.url}/#landscaping-service` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/landscaping-cost-lahore#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does landscaping cost in Lahore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single rate, because the cost is driven mostly by site condition, the amount of hardscape, irrigation scope and plant sizes rather than by area alone. Two gardens of identical size can differ several times over in price. GardenPlus quotes after a site visit, with a measured plan and an itemised schedule.",
          },
        },
        {
          "@type": "Question",
          name: "Why do landscaping quotes vary so much for the same garden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The usual gap is soil preparation, plant sizes and irrigation scope. A quote that plants straight into construction fill, uses small stock and omits a zoned irrigation system will always look cheaper than one that corrects the ground first. Comparing quotes fairly means comparing those line items, not the totals.",
          },
        },
        {
          "@type": "Question",
          name: "Is a free quote available for landscaping in Lahore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. GardenPlus provides a free site visit and quotation across Lahore. Call ${siteConfig.phone} or send the plot details through the contact form.`,
          },
        },
        {
          "@type": "Question",
          name: "What is the most expensive part of a landscaping project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hardscape is the highest cost per square metre — paving, steps, seating walls, pergolas and gazebos. On plots handed over after construction, ground preparation can rival it, because the soil profile has to be rebuilt before anything is planted.",
          },
        },
        {
          "@type": "Question",
          name: "Can a landscaping project be delivered in phases to spread cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and on larger sites it is usually the sensible route. Services, levels, irrigation infrastructure and tree planting go in first because they are disruptive to retrofit and trees need the longest to mature. Lawns, beds and detail areas follow as budget allows.",
          },
        },
      ],
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Landscaping Cost in Lahore", path: "/landscaping-cost-lahore" },
    ]),
  ],
};

export default function LandscapingCostPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <PageBanner
        subtitle="Budgeting"
        title="What Landscaping Costs in Lahore"
        description="No two gardens price the same. Here is what actually moves the number, what a complete quote should contain, and how to compare two quotes that look far apart."
        backgroundImage={photos.gardenerAtWork}
        imageAlt={altForPhoto(photos.gardenerAtWork)}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Straight answer
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Why nobody can quote a garden over the phone
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              You will find websites advertising a per-marla landscaping rate.
              Treat them carefully. Two plots of exactly the same size, on the
              same street, can differ several times over in cost depending on
              what is under the surface and how much hard construction the
              design involves.
            </p>
            <p>
              We would rather explain the variables honestly than publish a
              number that turns out to be wrong the moment somebody digs. Below
              is what a landscaper is actually pricing when they walk your site,
              in roughly the order the money goes.
            </p>
            <p>
              GardenPlus has been doing this in Lahore since{" "}
              {siteConfig.founded}, and quotes after a free site visit with a
              measured plan and an itemised schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Cost drivers
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            The eight things that move a landscaping budget
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {drivers.map((driver, index) => (
              <article key={driver.heading} className="border-t border-border pt-6">
                <p className="mb-3 text-xs font-medium tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-foreground">
                  {driver.heading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {driver.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Checklist
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                What a complete quote should contain
              </h2>
              <p className="mt-6 leading-8 text-muted-foreground">
                If any of these are missing, the number in front of you is an
                estimate rather than a quote — and the gap will surface during
                the work.
              </p>
            </div>
            <ul className="grid gap-4">
              {quoteContents.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-border pb-4"
                >
                  <span className="text-xs font-medium tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
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

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Comparing quotes
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Where the cheap quote is usually hiding the cost
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {comparisonTraps.map((trap) => (
              <article key={trap.heading} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground">
                  {trap.heading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {trap.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Get a price for your own site
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Site visits and quotations are free across Lahore. Pick the service
            you need, or call{" "}
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="text-primary hover:underline"
            >
              {siteConfig.phone}
            </a>{" "}
            and describe the plot.
          </p>
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
          <Link
            href="/faqs"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            More questions answered
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
