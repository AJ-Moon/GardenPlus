import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { CTASection } from "@/components/cta-section";
import { ServiceSegments } from "@/components/service-segments";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Residential gardens, commercial landscaping, corporate grounds and large-scale developments — full design, build and maintenance from GardenPlus in Lahore.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Our Services"
        subtitle="What We Do"
        description="Design, build and maintenance across four areas — from a single home garden to a multi-acre development"
        backgroundImage="https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=1600&auto=format&fit=crop"
      />

      <ServiceSegments />

      <CTASection />

      <Footer />
    </main>
  );
}
