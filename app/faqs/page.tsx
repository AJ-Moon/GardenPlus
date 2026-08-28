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
import { seoLocationLinks } from "@/lib/seo-locations";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping FAQs - Quotes, Timelines, Maintenance & Water",
  description:
    "Answers to the questions people actually ask before hiring a landscaper in Lahore: how quotes work, how long a garden takes, what maintenance costs, water use, and what happens if plants die.",
  path: "/faqs",
  keywords: [
    "landscaping questions Lahore",
    "hiring a landscaper Pakistan",
    "garden design process Lahore",
    "landscaping maintenance Lahore",
    "landscaping quote Lahore",
  ],
});

type Faq = { question: string; answer: string };
type FaqGroup = { heading: string; blurb: string; faqs: Faq[] };

const groups: FaqGroup[] = [
  {
    heading: "Getting a quote",
    blurb: "How pricing works before any work starts.",
    faqs: [
      {
        question: "Is the site visit and quotation free?",
        answer: `Yes. GardenPlus visits the site, measures it and provides a quotation at no cost across Lahore. Call ${siteConfig.phone} or send the plot details through the contact form and we will arrange a time.`,
      },
      {
        question: "How much does landscaping cost in Lahore?",
        answer:
          "There is no reliable per-marla rate, because cost is driven by site condition, hardscape area, irrigation scope and plant sizes far more than by plot size. Two identical-sized gardens can differ several times over. Our landscaping cost guide explains each variable, and a real figure comes from a site visit.",
      },
      {
        question: "How long is a quotation valid for?",
        answer:
          "Plant stock and material prices move, so quotations are issued with a validity period stated on the document. If the project starts later than that, the schedule is re-priced rather than silently adjusted during the work.",
      },
      {
        question: "Can the work be split into phases to spread the cost?",
        answer:
          "Yes, and on larger sites it is usually the sensible approach. Levels, drainage, irrigation infrastructure and tree planting go first because they are disruptive and expensive to retrofit. Lawns, beds and detail areas follow as budget allows.",
      },
    ],
  },
  {
    heading: "Design and build",
    blurb: "What happens between signing off and handover.",
    faqs: [
      {
        question: "How long does a garden take to build?",
        answer:
          "A residential garden typically runs from a couple of weeks to a couple of months, depending on hardscape, irrigation and the amount of soil correction needed. Estate and commercial sites are delivered in phases across seasons.",
      },
      {
        question: "Should landscaping start before the house is finished?",
        answer:
          "Planning should. Levels, drainage falls, irrigation lines and lighting conduits are far cheaper to coordinate before final paving, and it avoids tearing up finished surfaces later. Planting itself is usually best left until heavy construction traffic has stopped.",
      },
      {
        question: "Do you work around existing mature trees?",
        answer:
          "Yes, and we would generally argue for keeping them. Mature trees are the hardest element in any garden to replace, so layouts are designed around them with root protection during construction and proper pruning rather than removal.",
      },
      {
        question: "What is the best time of year to landscape in Lahore?",
        answer:
          "Spring and autumn are the easiest windows for planting and lawn establishment, since there is warmth for rooting without peak summer water demand. Hardscape and construction can be done at any time of year.",
      },
    ],
  },
  {
    heading: "Plants, lawns and water",
    blurb: "The practical realities of keeping a garden alive here.",
    faqs: [
      {
        question: "What happens if plants die after installation?",
        answer:
          "New planting has an establishment period, and losses in the first season are normal to a degree. Terms for replacement during that period are set out in the quotation, and they depend on whether GardenPlus is also maintaining the garden — irrigation and aftercare are what determine survival.",
      },
      {
        question: "Why did my lawn fail even though it was watered?",
        answer:
          "Almost always what is underneath. Compacted construction fill, no drainage falls or a thin soil layer will defeat any grass regardless of watering. The second most common cause is shade the lawn was never going to tolerate. Both are diagnosed on site before any turf is bought.",
      },
      {
        question: "How much water does a garden in Lahore actually need?",
        answer:
          "Far less than most gardens receive, if the system is zoned properly. Drip irrigation to beds, sprinklers only where there is lawn, and a timer running in the early morning cuts water use substantially compared with hand watering, and produces more even growth.",
      },
      {
        question: "Is artificial grass a good idea in Pakistan?",
        answer:
          "In the right place. It works well in deep shade where natural grass will never establish, in high-traffic areas and on terraces. It gets hot in direct summer sun and still needs proper base preparation and drainage, so it is a targeted solution rather than a default one.",
      },
    ],
  },
  {
    heading: "Maintenance and aftercare",
    blurb: "What keeps a finished landscape looking like the day it was handed over.",
    faqs: [
      {
        question: "Do you maintain gardens you did not build?",
        answer:
          "Yes. The first visit is a condition survey covering irrigation faults, soil condition and pruning that has been missed, so the regular schedule starts from a known baseline.",
      },
      {
        question: "How often does a garden need maintenance visits?",
        answer:
          "Through the growing season, most gardens need weekly or fortnightly attention, largely for mowing and irrigation. In winter, monthly visits are usually enough for pruning, feeding and seasonal planting. Formal gardens with clipped hedges need the shorter cycle.",
      },
      {
        question: "What does a maintenance contract cover?",
        answer:
          "Typically mowing and lawn care, pruning and bed work, seasonal planting, irrigation inspection and pest monitoring, with a visit record. Tree surgery, redesign and major replanting are quoted separately as they arise.",
      },
      {
        question: "Can you maintain commercial and corporate grounds?",
        answer:
          "Yes, including offices, hotels, campuses, retail frontages and residential developments. Schedules are planned around opening hours and guest or staff movement.",
      },
    ],
  },
  {
    heading: "Working with GardenPlus",
    blurb: "Who we are and where we work.",
    faqs: [
      {
        question: "Where is GardenPlus based and which areas do you cover?",
        answer: `GardenPlus is at ${siteConfig.address.line1}, ${siteConfig.address.line2}. We work across Lahore — including DHA, Bahria Town, Gulberg, Model Town, Johar Town, Cantt, Wapda Town and the Bedian and Raiwind Road belts — and on larger projects elsewhere in Punjab.`,
      },
      {
        question: "How long has GardenPlus been operating?",
        answer: `Since ${siteConfig.founded}, which covers residential gardens, commercial and corporate grounds, and large-scale landscape delivery.`,
      },
      {
        question: "Do you supply plants without doing the landscaping?",
        answer:
          "Yes. Plant supply and delivery is available on its own, for outdoor and indoor plants, with advice on placement and care.",
      },
      {
        question: "What is the fastest way to reach you?",
        answer: `Phone or WhatsApp on ${siteConfig.phone} is fastest. Email is ${siteConfig.email}, and the contact form reaches the same inbox.`,
      },
    ],
  },
];

const allFaqs = groups.flatMap((group) => group.faqs);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/faqs#faq`,
      url: absoluteUrl("/faqs"),
      name: "GardenPlus Landscaping FAQs",
      publisher: { "@id": `${siteConfig.url}/#organization` },
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "FAQs", path: "/faqs" },
    ]),
  ],
};

export default function FaqsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <PageBanner
        subtitle="Before you hire anyone"
        title="Landscaping Questions, Answered"
        description="The things worth knowing before you commission a garden in Lahore — how quotes work, how long it takes, what it costs to maintain, and what happens when something dies."
        backgroundImage={photos.plantingFlowers}
        imageAlt={altForPhoto(photos.plantingFlowers)}
      />

      {groups.map((group, index) => (
        <section
          key={group.heading}
          className={
            index % 2 === 0
              ? "bg-background py-20 md:py-24"
              : "bg-secondary py-20 md:py-24"
          }
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                {group.heading}
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {group.blurb}
              </p>
            </div>
            <div className="divide-y divide-border">
              {group.faqs.map((faq) => (
                <article key={faq.question} className="py-7 first:pt-0">
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
      ))}

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Questions about a specific service
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Every service page carries its own FAQ covering the detail specific
            to that job.
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

          <h2 className="mt-14 font-serif text-3xl font-light text-foreground md:text-4xl">
            Questions about a specific area
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {seoLocationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="rounded-sm border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {location.name}
              </Link>
            ))}
          </div>

          <Link
            href="/landscaping-cost-lahore"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            What landscaping costs in Lahore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
