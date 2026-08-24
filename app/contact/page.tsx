import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ContactSection } from "@/components/contact-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact GardenPlus - Free Landscaping Quote in Lahore",
  description:
    "Call, WhatsApp or email GardenPlus for a landscaping quote in Lahore. Share details for garden design, lawn maintenance, irrigation, plant supply, artificial grass or commercial landscaping.",
  path: "/contact",
  keywords: ["landscaping quote Lahore", "garden maintenance near me"],
});

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
        description="Tell us about your project and get a free quote within 24 hours"
        backgroundImage="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=1600&auto=format&fit=crop"
      />

      <ContactSection />

      <Footer />
    </main>
  );
}
