"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  /** Muted, looping background-style playback (no controls). */
  ambient?: boolean;
  /** How far outside the viewport to start loading. */
  rootMargin?: string;
};

/**
 * Video that downloads nothing (not even its poster) until it is near the
 * viewport. Below-the-fold posters and an autoplay MP4 used to compete with the
 * hero's stylesheet, fonts and image on first load, which pushed homepage
 * mobile LCP to 5.7–6.5 s in Lighthouse (21 Nov 2026).
 *
 * Ambient videos (2.4 MB on the homepage) should use rootMargin="0px" so a
 * visitor who never scrolls never downloads them.
 *
 * Ambient videos autoplay muted once visible, unless the visitor prefers
 * reduced motion; they then get the poster and native controls instead.
 */
export function LazyVideo({
  src,
  poster,
  label,
  className,
  ambient = false,
  rootMargin = "300px",
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const autoplay = ambient && !reducedMotion;

  useEffect(() => {
    if (near && autoplay) {
      ref.current?.play().catch(() => {});
    }
  }, [near, autoplay]);

  return (
    <video
      ref={ref}
      aria-label={label}
      className={className}
      playsInline
      muted={ambient}
      loop={ambient}
      autoPlay={near && autoplay}
      controls={!autoplay}
      preload={near ? (autoplay ? "auto" : "metadata") : "none"}
      poster={near ? poster : undefined}
      src={near ? src : undefined}
    />
  );
}
