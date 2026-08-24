import { clients } from "@/lib/site-content";

/**
 * Compact scrolling client strip for the homepage.
 * The full client list with testimonials lives on /clients.
 *
 * Uses a CSS animation (not JS) so it costs nothing at runtime and pauses
 * automatically for visitors who prefer reduced motion.
 */
export function ClientsSection() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-20">
      <p className="mb-12 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by Homeowners & Businesses Alike
      </p>

      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Selected GardenPlus clients"
      >
        <div className="flex w-max animate-marquee gap-16 pr-16 motion-reduce:animate-none">
          {/* Rendered twice so the loop is seamless. The copy is hidden from
              assistive tech to avoid reading every name out twice. */}
          {[false, true].map((isDuplicate) => (
            <div
              key={String(isDuplicate)}
              className="flex shrink-0 gap-16 pr-16"
              aria-hidden={isDuplicate || undefined}
            >
              {clients.map((client) => (
                <span
                  key={client.name}
                  className="whitespace-nowrap font-serif text-2xl text-muted-foreground/50 transition-colors hover:text-foreground md:text-3xl"
                >
                  {client.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
