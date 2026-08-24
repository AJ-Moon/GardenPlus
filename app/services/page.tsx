import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { ServiceSegments } from "@/components/service-segments";
import { ServicesSeoSection } from "@/components/seo-content";
import { createPageMetadata, servicesPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping, Garden Design, Lawn Care & Irrigation Services",
  description:
    "Explore GardenPlus services: residential garden design, commercial landscaping, corporate grounds, lawn maintenance, irrigation systems, artificial grass, plant supply and large-scale projects in Lahore.",
  path: "/services",
  keywords: [
    "garden design Lahore",
    "lawn maintenance Lahore",
    "irrigation systems Pakistan",
    "artificial grass Pakistan",
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
        description="Design, build and maintenance across four areas — from a single home garden to a multi-acre development"
        backgroundImage="https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=1600&auto=format&fit=crop"
      />

      <ServiceSegments />
      <ServicesSeoSection />

      <CTASection />

      <Footer />
    </main>
  );
}
