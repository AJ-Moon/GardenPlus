"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import { VideoGrid } from "@/components/video-grid";
import { segments, videosForSegment, type Project } from "@/lib/site-content";

export function ServiceSegments() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* Sticky sub-navigation between the four service areas */}
      <div className="sticky top-20 z-30 border-y border-border bg-background/95 backdrop-blur-md">
        <nav
          aria-label="Service areas"
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <ul className="flex items-center gap-1 overflow-x-auto py-3 sm:justify-center">
            {segments.map((segment) => (
              <li key={segment.slug} className="shrink-0">
                <a
                  href={`#${segment.slug}`}
                  className="block rounded-md px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {segment.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {segments.map((segment, segmentIndex) => {
        const segmentVideos = videosForSegment(segment.id);

        return (
          <section
            key={segment.slug}
            id={segment.slug}
            // scroll-mt clears the fixed header + sticky sub-nav on anchor jumps
            className={`scroll-mt-36 py-24 md:py-28 ${
              segmentIndex % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Section intro */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {segment.eyebrow}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight">
                    {segment.heading}
                  </h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
                    {segment.intro}
                  </p>
                </div>

                <ul className="space-y-3 lg:pt-4">
                  {segment.offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm text-muted-foreground leading-6">
                        {offering}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Projects */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {segment.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      aria-label={`View larger image: ${project.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground">
                            View
                          </span>
                        </span>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-serif text-lg text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">
                          {project.description}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Segment videos — hidden entirely until videos are added */}
              <VideoGrid
                videos={segmentVideos}
                heading="Project Videos"
                className="mt-20"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-14 text-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-sm bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Discuss a {segment.heading.toLowerCase()} project
                </Link>
              </motion.div>
            </div>
          </section>
        );
      })}

      <Lightbox
        image={selected?.image ?? null}
        caption={selected?.title}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
