"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { videoThumbnail, type Video } from "@/lib/site-content";

type VideoGridProps = {
  videos: Video[];
  heading?: string;
  eyebrow?: string;
  className?: string;
};

/**
 * Renders a grid of click-to-play YouTube videos.
 * Returns null when there are no videos, so pages stay clean until real
 * footage is added in lib/site-content.ts.
 */
export function VideoGrid({
  videos,
  heading,
  eyebrow,
  className = "",
}: VideoGridProps) {
  const [playing, setPlaying] = useState<string | null>(null);

  if (videos.length === 0) return null;

  return (
    <div className={className}>
      {(heading || eyebrow) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              {heading}
            </h2>
          )}
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => {
          const key = `${video.id}-${index}`;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                {playing === key ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(key)}
                    className="absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={`Play video: ${video.title}`}
                  >
                    <Image
                      src={videoThumbnail(video)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play
                          className="h-6 w-6 text-foreground ml-1"
                          fill="currentColor"
                        />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <h3 className="mt-4 font-medium text-foreground">
                {video.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
