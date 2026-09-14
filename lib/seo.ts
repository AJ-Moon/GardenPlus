import type { Metadata } from "next";
import { posts } from "@/lib/blog";
import { siteConfig, fullAddress, fullOfficeAddress } from "@/lib/site-content";
import { landscapeServices } from "@/lib/services";

export const primaryKeywords = [
  "landscaping services Pakistan",
  "landscaping company Pakistan",
  "landscape design Pakistan",
  "landscaping services Lahore",
  "landscaping company Lahore",
  "garden design Lahore",
  "landscape designer Lahore",
  "lawn maintenance Lahore",
  "garden maintenance Lahore",
  "irrigation system Pakistan",
  "plant supply Lahore",
  "lawn grass installation Lahore",
  "hardscaping Lahore",
  "indoor plants Lahore",
  "swimming pool landscaping Lahore",
  "farmhouse landscaping Lahore",
  "outdoor plants Pakistan",
  "commercial landscaping Pakistan",
  "corporate landscaping Pakistan",
  "landscape lighting Lahore",
  "landscape civil works Lahore",
  "landscape BOQ Pakistan",
];

export const serviceAreas = [
  "Pakistan",
  "Punjab",
  "Lahore",
  "DHA Lahore",
  "Bahria Town Lahore",
  "Gulberg",
  "Model Town",
  "Johar Town",
  "Wapda Town",
  "Cantt",
  "Askari Lahore",
  "Bedian Road",
  "Raiwind Road",
  "Allama Iqbal Town",
];

export const seoFacts = [
  `${siteConfig.name} is a Pakistan-wide landscaping and gardening company based in Lahore and founded in ${siteConfig.founded}.`,
  `Services: ${landscapeServices.map((service) => service.title).join(", ")}.`,
  "The company serves homeowners, developers, hospitality venues, offices, campuses, and public-space projects.",
  `Gulberg office: ${fullOfficeAddress}`,
  `Mustafa Abad address: ${fullAddress}`,
  `Contact: ${siteConfig.phone}, WhatsApp ${siteConfig.whatsapp}, ${siteConfig.email}.`,
];

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: keywords.length ? keywords : primaryKeywords,
    alternates: {
      canonical: path,
      languages: {
        "en-PK": path,
        "x-default": path,
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_PK",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} landscaping and garden design`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

const areaServed = serviceAreas.map((name) => ({
  "@type": name === "Pakistan" ? "Country" : "Place",
  name,
}));

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg"),
      description: siteConfig.description,
      foundingDate: String(siteConfig.founded),
      knowsAbout: primaryKeywords,
      areaServed: { "@type": "Country", name: "Pakistan" },
      sameAs: siteConfig.social.map((s) => s.href),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: ["PK"],
          availableLanguage: ["English", "Urdu"],
        },
      ],
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.url}/#local-business`,
      name: siteConfig.name,
      image: absoluteUrl("/opengraph-image"),
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      description: siteConfig.description,
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: fullOfficeAddress,
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        {
          "@type": "PostalAddress",
          streetAddress: fullAddress,
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed,
      sameAs: siteConfig.social.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-PK",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#landscaping-service`,
      name: "Landscape design, development and maintenance",
      serviceType: "Landscaping services",
      provider: { "@id": `${siteConfig.url}/#local-business` },
      areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GardenPlus Landscaping Services",
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
  ],
};

export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#homepage`,
  url: siteConfig.url,
  name: `${siteConfig.name} - Landscaping Services Across Pakistan`,
  description: siteConfig.description,
  about: { "@id": `${siteConfig.url}/#landscaping-service` },
};

export const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/services#webpage`,
  url: absoluteUrl("/services"),
  name: "GardenPlus Landscaping Services",
  description: siteConfig.description,
  hasPart: landscapeServices.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#local-business` },
    areaServed,
    url: absoluteUrl(service.href),
  })),
};

// The same questions render on the page and in structured data.
export const lahoreFaqs = [
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. GardenPlus provides landscape design and planning, development, civil works, planting, irrigation planning and landscape maintenance.",
  },
  {
    question: "Can you maintain an existing garden?",
    answer:
      "Yes. Landscape Maintenance covers day-to-day garden upkeep, plants, water bodies, irrigation equipment, pest control and fertilization.",
  },
  {
    question: "Does landscape design include a warranty?",
    answer:
      "Landscape Design & Planning includes site visits, 3D proposals, execution planning and detailed quotations, with a one-year service warranty/guarantee.",
  },
];

export const lahorePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/landscaping-lahore#webpage`,
      url: absoluteUrl("/landscaping-lahore"),
      name: "Landscaping Services in Lahore",
      description: siteConfig.description,
      about: { "@id": `${siteConfig.url}/#landscaping-service` },
    },
    {
      "@type": "FAQPage",
      mainEntity: lahoreFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export const blogIndexJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/blog#blog`,
  name: "GardenPlus Blog",
  url: absoluteUrl("/blog"),
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    description: post.excerpt,
  })),
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
