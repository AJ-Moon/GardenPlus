import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-content";

export function AboutPreview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal from="left" duration={0.8} className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              {/* Local file in /public — swap for your own footage any time. */}
              <video
                src="/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="GardenPlus landscaping work in progress"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 border border-accent/30"
            />
          </Reveal>

          <Reveal from="right" delay={0.15} duration={0.8}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Us
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Over Three Decades of
              <span className="block italic">Green Excellence</span>
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                For over three decades, GardenPlus has been transforming outdoor
                spaces into timeless landscapes of beauty and function. Founded
                in {siteConfig.founded}, the company was built on a passion for
                nature, design and craftsmanship.
              </p>
              <p>
                At GardenPlus, we believe every outdoor space has the potential
                to become a serene and inspiring environment. Our team works
                closely with clients to design and maintain landscapes that are
                not only visually stunning but also practical and sustainable.
              </p>
              <p>
                From elegant garden layouts to complete landscaping solutions,
                we combine creativity with expertise to bring your vision to
                life — while respecting the natural character of the land.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 font-medium tracking-wide text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span>Our Story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
