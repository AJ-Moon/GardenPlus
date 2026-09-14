import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { ClientsSection } from "@/components/clients-section";
import { ServicesOverview } from "@/components/services-overview";
import { HomeSeoSection } from "@/components/seo-content";
import { RecentProjects } from "@/components/recent-projects";
import { StatsSection } from "@/components/stats-section";
import { VideoShowcase } from "@/components/video-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { createPageMetadata, homePageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Services Across Pakistan",
  description:
    "GardenPlus provides landscape design, development, civil works, planting, lighting, irrigation and maintenance across Pakistan. View our real work and completed projects.",
  path: "/",
  keywords: [
    "landscaping services Pakistan",
    "landscaping company Pakistan",
    "landscape design Pakistan",
    "landscaping services Lahore",
    "garden design Lahore",
    "landscaping Islamabad",
    "landscaping Rawalpindi",
    "landscaping Karachi",
    "landscaping Faisalabad",
    "landscaping Multan",
  ],
});

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <ClientsSection />
      <ServicesOverview />
      <HomeSeoSection />
      <RecentProjects />
      <StatsSection />
      {/* Hidden until videos are added in lib/site-content.ts */}
      <VideoShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
