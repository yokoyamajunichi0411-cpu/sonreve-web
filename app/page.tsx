import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import DressCard from "@/components/ui/DressCard";
import CTAButtons from "@/components/ui/CTAButtons";
import { dresses } from "@/lib/dresses";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "son rêve | 韓国ウェディングドレスレンタル・前撮り 大阪",
  description: "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ソウルのアトリエと直接提携し、最新コレクションをご提案。ドレスレンタルからヘアメイク・撮影まで一括対応。関西全域対応。",
  alternates: { canonical: "https://sonreve.jp/" },
  openGraph: {
    title: "son rêve | 韓国ウェディングドレスレンタル・前撮り 大阪",
    description: "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ドレスレンタルから撮影まで一括対応。",
    url: "https://sonreve.jp/",
  },
};

const photoScrollImages = [
  "/dressphoto/IMG_8010.JPG",
  "/dressphoto/IMG_8012.JPG",
  "/dressphoto/IMG_8013.JPG",
  "/dressphoto/IMG_8014.JPG",
  "/dressphoto/IMG_8015.JPG",
  "/dressphoto/IMG_8016.JPG",
  "/dressphoto/IMG_8017.JPG",
  "/dressphoto/IMG_8018.JPG",
  "/dressphoto/IMG_8019.JPG",
  "/dressphoto/IMG_8020.JPG",
];

const infoCards = [
  {
    label: "Collection",
    title: "Collection",
    desc: "韓国直輸入の最新ウェディングドレスを多数ご用意。あなただけの一着を見つけてください。",
    href: "/collection",
    image: "/dressphoto/IMG_8014.JPG",
  },
  {
    label: "Photo Plan",
    title: "Photo Plan",
    desc: "ドレスレンタルから撮影まで一括対応。ヘアメイク・着付け込みのプランをご用意しています。",
    href: "/photo-plan",
    image: "/dressphoto/IMG_8019.JPG",
  },
  {
    label: "Reservation",
    title: "Reservation",
    desc: "まずはお気軽にご連絡ください。夢の形がまだ決まっていなくても大丈夫です。",
    href: "/reservation",
    image: "/dressphoto/IMG_8022.JPG",
  },
];

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <HeroSection />

      {/* BRAND INTRO */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">SON RÊVE — ソン・レーヴ</p>
          <h2
            className="text-3xl lg:text-5xl font-light text-foreground leading-[1.3] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ふたりの夢が、交わる場所。
          </h2>
          <p className="text-sm text-foreground/50 leading-loose tracking-wider max-w-lg mx-auto">
            韓国の洗練されたウェディングドレスを大阪からご提案。
            ドレスレンタルから前撮り・当日撮影まで、
            大切な一日のすべてに寄り添います。
          </p>
        </FadeIn>
      </section>

      {/* DRESS COLLECTION */}
      <section className="py-20 lg:py-28 px-8 lg:px-16">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-14">
            <p
              className="text-2xl lg:text-3xl font-light text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Dress Collection
            </p>
            <Link
              href="/collection"
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/35 hover:text-foreground/70 transition-colors duration-300 border-b border-foreground/15 pb-px"
            >
              view ALL
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {dresses.map((dress, i) => (
            <DressCard
              key={dress.slug}
              slug={dress.slug}
              name={dress.name}
              year={dress.year}
              image={dress.images[0]}
              delay={i * 0.06}
            />
          ))}
        </div>
      </section>

      {/* PHOTO PLAN SCROLL */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="px-8 lg:px-16 mb-10">
          <FadeIn>
            <div className="flex items-baseline justify-between">
              <p
                className="text-2xl lg:text-3xl font-light text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Photo Plan
              </p>
              <Link
                href="/photo-plan"
                className="hidden md:block text-[11px] tracking-[0.25em] uppercase text-foreground/35 hover:text-foreground/70 transition-colors duration-300 border-b border-foreground/15 pb-px"
              >
                view ALL
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="flex gap-3 overflow-x-auto px-8 lg:px-16 pb-4 scrollbar-none">
          {photoScrollImages.map((src, i) => (
            <FadeIn key={i} delay={i * 0.04} className="flex-shrink-0">
              <div className="relative w-[220px] lg:w-[280px] aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="px-8 lg:px-16 mt-8 md:hidden">
          <Link
            href="/photo-plan"
            className="text-[11px] tracking-[0.25em] uppercase text-foreground/35 hover:text-foreground/70 transition-colors duration-300 border-b border-foreground/15 pb-px"
          >
            view ALL
          </Link>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.1}>
              <Link href={card.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.35em] uppercase text-white/60">{card.label}</span>
                  </div>
                </div>
                <h3
                  className="text-lg font-light text-foreground mb-2 group-hover:text-foreground/70 transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-xs text-foreground/45 leading-loose tracking-wider">{card.desc}</p>
                <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-foreground/35 border-b border-foreground/15 pb-px w-fit group-hover:text-foreground/60 transition-colors duration-300">
                  詳しく見る
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-muted">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-10 flex justify-center">
          <CTAButtons />
        </div>
      </section>

    </div>
  );
}
