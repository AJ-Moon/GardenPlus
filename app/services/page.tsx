import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { ServiceSegments } from "@/components/service-segments";
import { createPageMetadata, servicesPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping, Garden Design & Irrigation Services Pakistan",
  description:
    "Landscape design, development, civil works, lighting, soft landscaping, irrigation, water features, BOQs and maintenance across Pakistan.",
  path: "/services",
  keywords: [
    "garden design Lahore",
    "lawn maintenance Lahore",
    "irrigation systems Pakistan",
    "landscape civil works Lahore",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageJsonLd) }}
      />
      <Navigation />

      <PageBanner
        title="Our Services"
        subtitle="What We Do"
        description="Landscape design, development and maintenance for homes, businesses and larger projects across Pakistan."
        backgroundImage="/gardenplus-work/services-hero.jpg"
        imageAlt="GardenPlus fountain garden with flowering borders and mature planting"
      />

      <ServiceSegments />

      <CTASection />

      <Footer />
    </main>
  );
}
