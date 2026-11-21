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
  // The root layout's title template does not apply to app/page.tsx (same
  // segment), so the brand must be written into the homepage title itself.
  title: "GardenPlus | Landscaping Company in Lahore, Pakistan",
  description:
    "GardenPlus, Lahore landscapers since 1990: garden design, construction, irrigation, planting and maintenance for homes and businesses across Pakistan. Get a quote.",
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
