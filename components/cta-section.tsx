import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* Note: deliberately not using `bg-fixed` — background-attachment:fixed
          is unreliable and janky on iOS Safari. */}
      <Image
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl font-light leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Ready to Transform
            <span className="block italic">Your Outdoor Space?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Whether it&apos;s a garden makeover, irrigation installation or a
            full landscaping project — GardenPlus is here to help. Get a free,
            no-obligation quote today.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 font-medium tracking-wide text-foreground transition-all hover:shadow-xl hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/40 px-8 py-4 font-medium tracking-wide text-white transition-all hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Portfolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
