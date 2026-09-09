import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { ServiceSegments } from "@/components/service-segments";
import { createPageMetadata, servicesPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping, Garden Design, Lawn Care & Irrigation Services",
  description:
    "Landscape design, development, civil works, lighting, soft landscaping, irrigation, water features, BOQs and maintenance. Explore GardenPlus services in Lahore.",
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
        description="Landscape design, development and maintenance for homes, businesses and larger projects."
        backgroundImage="https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=1600&auto=format&fit=crop"
      />

      <ServiceSegments />

      <CTASection />

      <Footer />
    </main>
  );
}
