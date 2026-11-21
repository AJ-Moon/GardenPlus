"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    src: "/gardenplus-work/homepage-hero.jpg",
    alt: "GardenPlus residential landscape with a timber gazebo, lawn and mature planting",
    position: "center center",
  },
  {
    src: "/gardenplus-work/development.jpg",
    alt: "Completed GardenPlus lawn with mature trees and landscape planting",
    position: "center center",
  },
  {
    src: "/gardenplus-work/fountain-garden.jpg",
    alt: "GardenPlus fountain garden with flowering borders and mature planting",
    position: "center center",
  },
] as const;

/**
 * The first slide is rendered in the initial HTML and receives image priority,
 * keeping the homepage's primary visual and heading available immediately.
 */
export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isPlaying || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="GardenPlus project highlights"
    >
      <div className="absolute inset-0" aria-live="off">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <Image
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ""}
              fill
              sizes="100vw"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              style={{ objectPosition: slide.position }}
              className="animate-hero-zoom object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* SEO 2026-11: the H1 names the business and what it does; the
              slogan keeps its visual treatment as a paragraph. */}
          <h1 className="mb-4 animate-rise-in text-sm font-medium uppercase tracking-[0.3em] text-white/80 [animation-delay:80ms]">
            GardenPlus: Landscaping Company in Lahore, Pakistan
          </h1>

          <p className="animate-rise-in font-serif text-5xl font-light leading-tight tracking-tight text-white [animation-delay:160ms] md:text-6xl lg:text-7xl">
            <span className="block">Grow Beautiful.</span>
            <span className="mt-2 block italic font-normal">Live Green.</span>
          </p>

          <p className="mx-auto mt-8 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/80 [animation-delay:320ms] md:text-xl">
            From landscape planning and civil works to planting, irrigation and
            maintenance, GardenPlus delivers complete outdoor projects across
            Pakistan.
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

      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
        aria-label="Show previous project image"
        title="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={showNext}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
        aria-label="Show next project image"
        title="Next slide"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="flex h-11 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            title={`Slide ${index + 1}`}
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                index === activeSlide ? "w-7 bg-white" : "w-2 bg-white/55"
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setIsPlaying((current) => !current)}
          className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          title={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
