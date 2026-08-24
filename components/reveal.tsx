"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Direction the content travels in from. */
  from?: "bottom" | "left" | "right";
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li";
};

const offsets = {
  bottom: { x: 0, y: 30 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

/**
 * Small scroll-reveal wrapper so pages can stay server components while
 * still getting the site's entrance animation.
 *
 * Respects `prefers-reduced-motion` — framer-motion disables the transform
 * automatically when the user has asked for reduced motion.
 */
export function Reveal({
  children,
  className,
  from = "bottom",
  delay = 0,
  duration = 0.6,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  const offset = offsets[from];

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
