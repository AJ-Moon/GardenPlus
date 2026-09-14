import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { completedProjects } from "@/lib/completed-projects";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { pakistanSeoLocationLinks } from "@/lib/seo-pakistan-locations";
import { landscapeServices } from "@/lib/services";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Services Across Pakistan",
  description:
    "GardenPlus provides landscape design, development, civil works, planting, irrigation and maintenance for suitable projects across Pakistan.",
  path: "/landscaping-pakistan",
  keywords: [
    "landscaping services Pakistan",
    "landscaping company Pakistan",
    "landscape design Pakistan",
    "garden design Pakistan",
    "commercial landscaping Pakistan",
    "landscaping Islamabad",
    "landscaping Karachi",
    "landscaping Rawalpindi",
    "landscaping Faisalabad",
    "landscaping Multan",
  ],
});

const nationwideProjects = completedProjects.filter((project) =>
  [
    "Sapphire Electric",
    "D.G. Khan Cement Factory",
    "Prime Tannery",
    "Blue Horizon Factory Residence of Mr. Abid Qureshi & Ahsan Q.",
    "Beacon Impex / Masood Textile Mills",
  ].includes(project.name),
);

const faqs = [
  {
    question: "Does GardenPlus provide landscaping across Pakistan?",
    answer:
      "GardenPlus undertakes suitable residential, commercial and larger landscaping projects across Pakistan, coordinated from its Lahore base. Project availability depends on the site, scope and schedule.",
  },
  {
    question: "Which Pakistan cities can request a landscaping quotation?",
    answer:
      "Enquiries are welcome from across Pakistan, including Lahore, Islamabad, Rawalpindi, Karachi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, Gujranwala and Sheikhupura. Share the exact site location for confirmation.",
  },
  {
    question: "Can GardenPlus provide design and BOQ before construction?",
    answer:
      "Yes. Landscape Design & Planning includes site visits, 3D proposals, execution planning and detailed quotations. GardenPlus also provides detailed landscaping BOQs.",
  },
  {
    question: "What information is needed for a project outside Lahore?",
    answer:
      "Send the site location, approximate area, photographs or drawings, intended use, required services and target schedule. The team can then review logistics and the appropriate next step.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/landscaping-pakistan#webpage`,
      url: absoluteUrl("/landscaping-pakistan"),
      name: "Landscaping Services Across Pakistan",
      description:
        "GardenPlus landscape design, development, planting, irrigation and maintenance services across Pakistan.",
      about: { "@id": `${siteConfig.url}/#landscaping-service` },
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/landscaping-pakistan#service`,
      name: "Landscaping Services Across Pakistan",
      serviceType: "Landscape design, development and maintenance",
      provider: { "@id": `${siteConfig.url}/#local-business` },
      areaServed: { "@type": "Country", name: "Pakistan" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GardenPlus Pakistan Landscaping Services",
        itemListElement: landscapeServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: absoluteUrl(service.href),
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/landscaping-pakistan#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Landscaping Across Pakistan",
          item: absoluteUrl("/landscaping-pakistan"),
        },
      ],
    },
  ],
};

export default function LandscapingPakistanPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <header className="relative min-h-[72vh] overflow-hidden pt-28 md:pt-32">
        <Image
          src="/gardenplus-work/homepage-hero.jpg"
          alt="GardenPlus residential landscape with a timber gazebo, lawn and mature planting"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        <div className="relative z-10 mx-auto flex min-h-[calc(72vh-7rem)] max-w-7xl items-center px-6 pb-16 lg:px-8">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/90">Pakistan</li>
              </ol>
            </nav>
            <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              Landscaping Services Across Pakistan
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Landscape design, development, civil works, planting, irrigation
              and maintenance for suitable residential, commercial and larger
              projects nationwide.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-7 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a Project Review
              </Link>
              <Link
                href="/portfolio"
                className="rounded-sm border border-white/45 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Completed Projects
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              National project coverage
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              One landscape team, planned around each site
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              Pakistan does not have one landscape climate. A project in Karachi
              has different water and exposure demands from a garden in
              Islamabad, while Multan and Quetta require their own approach to
              heat, cold, soil and irrigation.
            </p>
            <p>
              GardenPlus coordinates suitable projects nationwide from Lahore.
              Each enquiry begins with the location, site conditions, intended
              use and required service scope so design, logistics, execution and
              aftercare can be planned honestly.
            </p>
            <p>
              The same team can connect 3D landscape design, levels and
              drainage, civil works, lawns and planting, water features,
              irrigation, lighting, garden structures, BOQs and maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            City service pages
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Landscaping in major Pakistan markets
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            These pages explain the available GardenPlus service scope and the
            local conditions considered for each city. They do not represent
            additional branch offices; all project availability is confirmed
            against the site and schedule.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/landscaping-lahore"
              className="group bg-background p-6 transition-colors hover:bg-accent/45 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Punjab
              </div>
              <h3 className="mt-4 font-serif text-2xl text-foreground group-hover:text-primary">
                Lahore
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                View Lahore services <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            {pakistanSeoLocationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="group bg-background p-6 transition-colors hover:bg-accent/45 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {location.region}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-foreground group-hover:text-primary">
                  {location.name}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View city services <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Complete service scope
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                Landscaping services available nationwide
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {landscapeServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="group flex items-start gap-3 rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground group-hover:text-primary">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Project evidence
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Completed work beyond Lahore
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Selected locations from the owner-supplied GardenPlus completed
            projects list.
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {nationwideProjects.map((project) => (
              <li
                key={`${project.name}-${project.detail}`}
                className="bg-background p-6"
              >
                <h3 className="font-serif text-2xl text-foreground">
                  {project.name}
                </h3>
                {project.detail && (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all completed projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Nationwide enquiries
          </p>
          <h2 className="text-center font-serif text-4xl font-light text-foreground md:text-5xl">
            Pakistan Landscaping FAQ
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
