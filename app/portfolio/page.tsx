import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse GardenPlus landscaping, garden design and outdoor transformation projects across residential, commercial, corporate and large-scale developments.",
  alternates: { canonical: "/portfolio" },
};

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
