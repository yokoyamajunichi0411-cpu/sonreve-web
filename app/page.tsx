"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const dresses = [
  { id: 1, name: "Lumière", name_ja: "リュミエール", style: "Aライン" },
  { id: 2, name: "Céleste", name_ja: "セレスト", style: "マーメイド" },
  { id: 3, name: "Aurore", name_ja: "オーロール", style: "ボールガウン" },
];

const features = [
  {
    icon: "✦",
    title: "韓国直輸入ドレス",
    desc: "ソウルの一流アトリエから厳選した最新コレクション。トレンドを押さえたデザインをご用意しています。",
  },
  {
    icon: "✦",
    title: "レンタル＋撮影 一括対応",
    desc: "ドレスのレンタルから写真撮影まで、すべてをワンストップでご提供。準備の手間を最小限に。",
  },
  {
    icon: "✦",
    title: "ヘアメイク込みプラン",
    desc: "ブライダル専門のヘアメイクアーティストが当日のスタイリングを担当します。",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative w-full h-[100svh] overflow-hidden bg-cream flex items-center justify-center">
        {/* Placeholder: replace with actual hero image */}
        <div className="absolute inset-0 bg-gradient-to-b from-blush/60 via-cream/40 to-background/80" />

        {/* Hero image slot */}
        <div className="absolute inset-0 bg-[#EDE8E3]" />

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] tracking-[0.45em] uppercase text-foreground/50 mb-6"
          >
            Korean Wedding Dress Rental & Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-6xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8 leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            on rêve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-sm text-foreground/55 tracking-[0.2em] mb-12"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            夢を纏う、特別な一日
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/collection"
              className="px-10 py-3.5 bg-foreground text-white text-[11px] tracking-[0.3em] uppercase hover:bg-foreground/80 transition-all duration-300"
            >
              Collection
            </Link>
            <Link
              href="/plan"
              className="px-10 py-3.5 border border-foreground/30 text-foreground text-[11px] tracking-[0.3em] uppercase hover:bg-foreground/5 transition-all duration-300"
            >
              Plan & Price
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.35em] uppercase text-foreground/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-foreground/20"
          />
        </motion.div>
      </section>

      {/* ── Concept ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-8">Our Concept</p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-8 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            韓国の美しさを、日本の花嫁へ
          </h2>
          <p className="text-sm text-foreground/60 tracking-wider leading-[2.2] max-w-xl mx-auto">
            on rêveは、韓国の最旬ウェディングドレスを大阪からご提案するブランドです。
            ドレスのレンタルから前撮り・当日撮影まで、大切な一日のすべてに寄り添います。
            上質なドレスと洗練された写真で、あなただけの物語を。
          </p>
        </FadeIn>
      </section>

      {/* ── Featured Dresses ── */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/35 mb-3 text-center">Collection</p>
            <p className="text-2xl lg:text-3xl font-light tracking-wider text-center mb-14"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              New Arrivals
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dresses.map((dress, i) => (
              <FadeIn key={dress.id} delay={i * 0.12}>
                <Link href="/collection" className="group block">
                  {/* Dress image placeholder */}
                  <div className="relative aspect-[3/4] bg-blush/50 overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/5" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/40 bg-background/80 px-2 py-1">
                        {dress.style}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  <div className="flex items-baseline justify-between px-1">
                    <span
                      className="text-base text-foreground/80 tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                    >
                      {dress.name}
                    </span>
                    <span className="text-[11px] text-foreground/40 tracking-wider">
                      {dress.name_ja}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/collection"
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-foreground/50 border-b border-foreground/20 pb-px hover:text-foreground hover:border-foreground/60 transition-all duration-300"
              >
                View All Collection
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/35 mb-16 text-center">Why on rêve</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="text-center">
                <p className="text-gold text-lg mb-5 tracking-widest">{f.icon}</p>
                <p className="text-sm tracking-[0.15em] text-foreground/80 mb-4">{f.title}</p>
                <p className="text-xs text-foreground/50 tracking-wider leading-[2.2]">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Plan Preview ── */}
      <section className="bg-foreground text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-6">Plan</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-wider mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              レンタル＆撮影プラン
            </h2>
            <p className="text-sm text-white/50 tracking-wider leading-[2.2] max-w-xl mx-auto mb-12">
              ドレスレンタルのみ、または撮影とのセットプランをご用意しています。
              ヘアメイク・着付けを含む充実した内容で、当日の準備を万全に。
            </p>
            <Link
              href="/plan"
              className="inline-block px-12 py-4 border border-white/30 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Plan & Price
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 text-center px-6">
        <FadeIn>
          <p
            className="text-3xl lg:text-4xl font-light tracking-wider text-foreground mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Your dream begins here.
          </p>
          <p className="text-xs text-foreground/45 tracking-wider mb-10">
            まずはお気軽にお問い合わせください
          </p>
          <Link
            href="/contact"
            className="inline-block px-14 py-4 bg-foreground text-white text-[11px] tracking-[0.3em] uppercase hover:bg-foreground/80 transition-all duration-300"
          >
            Reservation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
