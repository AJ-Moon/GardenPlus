import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { ClientsSection } from "@/components/clients-section";
import { ServicesOverview } from "@/components/services-overview";
import { RecentProjects } from "@/components/recent-projects";
import { StatsSection } from "@/components/stats-section";
import { VideoShowcase } from "@/components/video-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <ClientsSection />
      <ServicesOverview />
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
