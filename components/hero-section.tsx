import Image from "next/image";
import Link from "next/link";

/**
 * Homepage hero. Deliberately a server component with CSS-driven entrance
 * animations: the <h1> here is the page's LCP element, so it must be painted
 * from the server HTML rather than revealed by JS after hydration.
 */
export function HeroSection() {
  return (
    // 100dvh tracks the real viewport on mobile, so the hero doesn't jump
    // as browser chrome shows and hides on scroll.
    <section className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
          alt="Landscaped garden path with mature planting"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 animate-rise-in text-sm font-medium uppercase tracking-[0.3em] text-white/80 [animation-delay:80ms]">
            Professional Landscaping &amp; Gardening
          </p>

          <h1 className="animate-rise-in font-serif text-5xl font-light leading-tight tracking-tight text-white [animation-delay:160ms] md:text-6xl lg:text-7xl">
            <span className="block">Grow Beautiful.</span>
            <span className="mt-2 block italic font-normal">Live Green.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/80 [animation-delay:320ms] md:text-xl">
            From lush lawn maintenance to full outdoor landscaping — GardenPlus
            brings expertise, creativity and care to every green space we touch.
          </p>

          <div className="mt-12 flex animate-rise-in flex-col items-center justify-center gap-4 [animation-delay:480ms] sm:flex-row">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 font-medium tracking-wide text-foreground transition-all hover:bg-accent hover:shadow-xl hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/40 px-8 py-4 font-medium tracking-wide text-white transition-all hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-rise-in [animation-delay:1000ms]"
        aria-hidden="true"
      >
        <div className="flex animate-scroll-nudge flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <span className="block h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
