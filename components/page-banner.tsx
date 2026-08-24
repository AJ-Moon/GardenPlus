"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
};

export function PageBanner({
  title,
  subtitle,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1600&auto=format&fit=crop",
}: PageBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
