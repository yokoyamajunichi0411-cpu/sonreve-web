"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-foreground">
      <img
        src="/dressphoto/IMG_8010.JPG"
        alt="son rêve"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-75"
      />
      <div className="absolute inset-0 bg-foreground/20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-6 left-6 lg:top-6 lg:left-10 z-10 flex items-start gap-4 pr-16"
      >
        <img
          src="/logo/sonreve_logo_white.png"
          alt="SON RÊVE"
          className="h-10 lg:h-12 w-auto flex-shrink-0"
        />
        <div>
          <p className="text-[10px] text-white/55 leading-relaxed tracking-wide max-w-[180px]">
            Robes de mariée coréennes,<br />
            Dress Rental &amp; Pre-wedding — Osaka<br />
            une journée composée pour vous.
          </p>
          <div className="flex gap-2 mt-3">
            <span className="w-5 h-px bg-white/35" />
            <span className="w-5 h-px bg-white/35" />
            <span className="w-5 h-px bg-white/35" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
