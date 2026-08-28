import Image from "next/image";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  /** Alt text for the banner image. Omit for purely decorative backdrops. */
  imageAlt?: string;
};

/**
 * Shared page hero. Like HeroSection this is a server component with CSS
 * entrance animations, so the <h1> — the LCP element on these pages — is
 * visible in the server HTML instead of waiting on hydration.
 */
export function PageBanner({
  title,
  subtitle,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1600&auto=format&fit=crop",
  imageAlt = "",
}: PageBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {subtitle && (
            <p className="mb-4 animate-rise-in text-sm font-medium uppercase tracking-[0.3em] text-white/80 [animation-delay:80ms]">
              {subtitle}
            </p>
          )}

          <h1 className="animate-rise-in font-serif text-5xl font-light leading-tight text-white [animation-delay:160ms] md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-6 animate-rise-in max-w-2xl text-lg text-white/80 [animation-delay:320ms]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
