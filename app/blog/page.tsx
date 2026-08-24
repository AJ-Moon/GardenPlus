import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { BlogIndex } from "@/components/blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert landscaping guides, plant advice and seasonal care checklists from the GardenPlus team — written for Lahore's climate.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="GardenPlus Blog"
        subtitle="Insights & Inspiration"
        description="Expert landscaping guides, plant advice and practical seasonal care from our team"
        backgroundImage="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
      />

      <BlogIndex />

      <Footer />
    </main>
  );
}
