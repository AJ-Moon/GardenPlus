import type { Metadata } from "next";
import { posts } from "@/lib/blog";
import { segments, siteConfig, stats } from "@/lib/site-content";

export const primaryKeywords = [
  "landscaping services Lahore",
  "landscaping company Lahore",
  "garden design Lahore",
  "landscape designer Lahore",
  "lawn maintenance Lahore",
  "garden maintenance Lahore",
  "irrigation system Pakistan",
  "artificial grass Pakistan",
  "vertical garden Pakistan",
  "plant nursery Lahore",
  "plant supply Lahore",
  "lawn grass installation Lahore",
  "rooftop garden Lahore",
  "kitchen gardening Lahore",
  "hardscaping Lahore",
  "tree pruning Lahore",
  "indoor plants Lahore",
  "swimming pool landscaping Lahore",
  "farmhouse landscaping Lahore",
  "outdoor plants Pakistan",
  "landscape design Pakistan",
  "commercial landscaping Pakistan",
  "corporate landscaping Pakistan",
  "Middle East landscape design",
  "GCC landscaping consultancy",
];

export const serviceAreas = [
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
  "Punjab",
  "Pakistan",
  "Dubai",
  "Abu Dhabi",
  "Riyadh",
  "Jeddah",
  "Doha",
];

export const seoFacts = [
  `${siteConfig.name} is a Lahore-based landscaping and gardening company founded in ${siteConfig.founded}.`,
  "Core services include garden design, lawn maintenance, lawn grass installation, plant supply, drip and sprinkler irrigation, artificial grass, vertical gardens, rooftop and terrace gardens, kitchen gardening, hardscaping and pergolas, water features, tree pruning and removal, indoor and office plants, swimming pool landscaping, farmhouse and estate grounds, commercial landscaping, corporate grounds care, garden maintenance contracts, and large-scale landscape delivery.",
  "The company serves homeowners, developers, hospitality venues, offices, campuses, and public-space projects.",
  "GardenPlus works with heat-tolerant planting, efficient irrigation, soil preparation, seasonal color, lawns, trees, rooftop gardens, terraces, and outdoor living areas suited to Pakistan and Middle East climates.",
  `Contact: ${siteConfig.phone}, WhatsApp ${siteConfig.whatsapp}, ${siteConfig.email}.`,
];

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

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
    keywords: [...keywords, ...primaryKeywords],
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
  "@type": name.includes("Pakistan") ? "Country" : "City",
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
      sameAs: siteConfig.social.map((s) => s.href),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: ["PK", "AE", "SA", "QA"],
          availableLanguage: ["English", "Urdu"],
        },
      ],
    },
    {
      "@type": "LandscapingBusiness",
      "@id": `${siteConfig.url}/#local-business`,
      name: siteConfig.name,
      image: absoluteUrl("/opengraph-image"),
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: "$$",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.coordinates.lat,
        longitude: siteConfig.coordinates.lng,
      },
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
      name: "Landscaping, garden design, lawn care, irrigation, and plant supply",
      serviceType: "Landscaping services",
      provider: { "@id": `${siteConfig.url}/#local-business` },
      areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GardenPlus Landscaping Services",
        itemListElement: segments.map((segment) => ({
          "@type": "OfferCatalog",
          name: segment.heading,
          itemListElement: segment.offerings.map((offering) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offering,
              serviceType: segment.heading,
            },
          })),
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
  name: `${siteConfig.name} - Landscaping Services in Lahore`,
  description: siteConfig.description,
  about: { "@id": `${siteConfig.url}/#landscaping-service` },
  mainEntity: stats.map((stat) => ({
    "@type": "PropertyValue",
    name: stat.label,
    value: `${stat.value}${stat.suffix}`,
  })),
};

export const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/services#webpage`,
      url: absoluteUrl("/services"),
      name: "GardenPlus Landscaping Services",
      description:
        "Residential gardens, commercial landscaping, corporate grounds, irrigation systems, plant supply, and large-scale landscape delivery.",
      hasPart: segments.map((segment) => ({
        "@type": "Service",
        name: segment.heading,
        description: segment.intro,
        provider: { "@id": `${siteConfig.url}/#local-business` },
        areaServed,
        serviceType: segment.heading,
        url: `${siteConfig.url}/services#${segment.slug}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Does GardenPlus provide complete landscaping services in Lahore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GardenPlus handles garden design, soil preparation, lawn installation, plant supply, irrigation systems, hardscape coordination, and ongoing maintenance for homes and businesses in Lahore.",
          },
        },
        {
          "@type": "Question",
          name: "Can GardenPlus work on commercial and corporate landscaping projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GardenPlus works on hotels, offices, campuses, retail frontages, residential developments, and public or semi-public green spaces with planned delivery and maintenance programs.",
          },
        },
        {
          "@type": "Question",
          name: "Does GardenPlus design water-efficient irrigation systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GardenPlus designs drip and sprinkler irrigation zones around plant type, sunlight, soil, and water-use needs so gardens stay healthy with less waste.",
          },
        },
      ],
    },
  ],
};

export const lahorePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/landscaping-lahore#webpage`,
      url: absoluteUrl("/landscaping-lahore"),
      name: "Landscaping Services in Lahore",
      description:
        "GardenPlus provides landscaping, garden design, lawn maintenance, irrigation systems, artificial grass, and plant supply across Lahore.",
      about: { "@id": `${siteConfig.url}/#landscaping-service` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/landscaping-lahore#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which areas of Lahore does GardenPlus serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GardenPlus serves residential, commercial, and corporate clients across Lahore, including DHA, Bahria Town, Gulberg, Model Town, Cantt, Bedian Road, and nearby Punjab projects.",
          },
        },
        {
          "@type": "Question",
          name: "What landscaping services are most requested in Lahore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common requests include garden design, lawn installation, lawn maintenance, drip and sprinkler irrigation, seasonal flower beds, artificial grass, outdoor plants, indoor plants, and commercial grounds maintenance.",
          },
        },
        {
          "@type": "Question",
          name: "Can GardenPlus recommend plants for hot Pakistan and Gulf climates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GardenPlus plans planting around heat, sun exposure, soil, wind, water availability, and maintenance needs for Pakistan and similar Middle East climate conditions.",
          },
        },
      ],
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
