"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import type { Dress } from "@/lib/dresses";
import { dresses } from "@/lib/dresses";

function ImageSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${name} ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-background/60 hover:bg-background/90 transition-colors duration-200 opacity-0 group-hover:opacity-100"
            aria-label="前の画像"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 2L4 7l5 5" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-background/60 hover:bg-background/90 transition-colors duration-200 opacity-0 group-hover:opacity-100"
            aria-label="次の画像"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 2l5 5-5 5" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`画像 ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DressContent({ dress }: { dress: Dress }) {
  const specs = [
    { label: "素材", value: dress.fabric },
    { label: "シルエット", value: dress.silhouette },
    { label: "動き", value: dress.movement },
  ];

  const related = dresses.filter((d) => d.slug !== dress.slug).slice(0, 4);

  return (
    <div>
      {/* Mobile: images on top / Desktop: split left-right */}
      <div className="lg:flex lg:min-h-screen">

        {/* Left: image slider */}
        <div className="lg:w-[55%] lg:sticky lg:top-0 lg:h-screen lg:self-start">
          {/* Desktop */}
          <div className="hidden lg:block h-screen relative bg-muted overflow-hidden">
            <ImageSlider images={dress.images} name={dress.name} />
          </div>

          {/* Mobile */}
          <div className="lg:hidden relative mt-16 aspect-[3/4] bg-muted overflow-hidden">
            <ImageSlider images={dress.images} name={dress.name} />
          </div>
        </div>

        {/* Right: product info */}
        <div className="lg:w-[45%] lg:min-h-screen flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-foreground mb-8">
              <Link href="/" className="hover:text-foreground/60 transition-colors">son rêve</Link>
              <span>/</span>
              <Link href="/collection" className="hover:text-foreground/60 transition-colors">Collection</Link>
              <span>/</span>
              <span>{dress.name}</span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl lg:text-6xl font-light text-foreground mb-2 leading-none text-center lg:text-left"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              {dress.name}
            </h1>

            {/* Year */}
            <p className="text-[10px] tracking-[0.45em] uppercase text-foreground mb-8 text-center lg:text-left font-medium">
              {dress.year} Collection
            </p>

            {/* CTA */}
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500 mb-10 w-full max-w-xs"
            >
              <span>試着予約・レンタル予約</span>
            </Link>

            {/* Specs */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-foreground mb-5">
                Product Details
              </p>
              <div className="space-y-3">
                {specs.map((spec, i) => (
                  <p key={i} className="text-sm text-foreground tracking-wider">
                    <span className="text-foreground/50">{spec.label} : </span>
                    {spec.value}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related dresses */}
      <section className="py-16 lg:py-24 px-8 lg:px-16 border-t border-border">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-10">他のドレス</p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {related.map((d, i) => (
            <FadeIn key={d.slug} delay={i * 0.06}>
              <Link href={`/dress/${d.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-muted mb-3 overflow-hidden">
                  {d.images[0] && (
                    <img
                      src={d.images[0]}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <p
                  className="text-sm text-foreground/50 group-hover:text-foreground/80 transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {d.name}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/25 mt-1">
                  {d.year}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
