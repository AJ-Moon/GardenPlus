import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fullAddress } from "@/lib/site-content";

export function HomeSeoSection() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Landscaping in Lahore
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Planning a new garden or restoring an existing one? We handle site
            visits, 3D proposals, construction, planting and ongoing care.
          </p>
          <Link
            href="/landscaping-lahore"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Lahore Services{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-foreground">
            Visit GardenPlus
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            {fullAddress}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Contact Us <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
