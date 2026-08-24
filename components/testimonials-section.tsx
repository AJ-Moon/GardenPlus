import { Quote } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { featuredTestimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  if (featuredTestimonials.length === 0) return null;

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Client Feedback
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredTestimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              delay={index * 0.1}
              className="h-full"
            >
              <figure className="flex h-full flex-col border border-border bg-card p-8 md:p-10">
                <Quote className="mb-6 h-8 w-8 text-accent" aria-hidden="true" />
                <blockquote className="mb-8 flex-1 leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/clients"
            className="text-sm font-medium text-primary hover:underline"
          >
            Read more client stories →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
