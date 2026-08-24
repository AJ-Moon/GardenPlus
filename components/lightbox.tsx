"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type LightboxProps = {
  image: string | null;
  caption?: string;
  onClose: () => void;
};

export function Lightbox({ image, caption, onClose }: LightboxProps) {
  // Close on Escape, and stop the page behind from scrolling while open.
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? "Project image"}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            className="absolute top-5 right-5 z-10 p-2 text-white/80 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={onClose}
            aria-label="Close image"
          >
            <X className="h-7 w-7" />
          </button>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full h-full flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 min-h-0">
              <Image
                src={image}
                alt={caption ?? "Project detail"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {caption && (
              <p className="shrink-0 text-center font-serif text-lg text-white/90">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
