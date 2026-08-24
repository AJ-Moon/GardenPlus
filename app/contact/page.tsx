import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free landscaping quote from GardenPlus within 24 hours. Call, email or WhatsApp us, or send your project details using the enquiry form.",
  alternates: { canonical: "/contact" },
};

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
