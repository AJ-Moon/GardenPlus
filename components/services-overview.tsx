import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCards } from "@/components/service-cards";

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            What We Do
          </p>
          <h2 className="font-serif text-4xl font-light italic text-foreground md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            Landscape design, construction, planting and maintenance for homes
            and businesses.
          </p>
        </div>
        <ServiceCards preview />
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Services{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
