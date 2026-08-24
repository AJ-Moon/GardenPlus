import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Portfolio - Gardens, Lawns, Parks & Corporate Grounds",
  description:
    "View GardenPlus residential garden design, commercial landscaping, corporate grounds, irrigation, lawn and large-scale landscape projects in Lahore and Pakistan.",
  path: "/portfolio",
  keywords: [
    "landscaping portfolio Pakistan",
    "garden design projects Lahore",
    "commercial landscaping projects",
  ],
});

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Our Portfolio"
        subtitle="Our Work"
        description="Browse our collection of landscaping, garden design and outdoor transformation projects"
        backgroundImage="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1600&auto=format&fit=crop"
      />

      <PortfolioGallery />

      <Footer />
    </main>
  );
}
