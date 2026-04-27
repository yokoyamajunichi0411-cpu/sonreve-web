import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTAButtons from "@/components/ui/CTAButtons";
import DressCard from "@/components/ui/DressCard";
import { dresses } from "@/lib/dresses";

export const metadata: Metadata = {
  title: "ドレス一覧",
  description: "son rêveの韓国ウェディングドレスコレクション。ソウルのアトリエから直輸入した最新ドレスを多数ご用意。大阪でドレスレンタルをお探しの方に。",
  alternates: { canonical: "https://sonreve.jp/collection" },
  openGraph: {
    title: "ドレスコレクション | son rêve",
    description: "son rêveの韓国ウェディングドレスコレクション。ソウルのアトリエから直輸入した最新ドレスを大阪でレンタル。",
    url: "https://sonreve.jp/collection",
  },
};

export default function CollectionPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Header */}
      <section className="px-8 lg:px-16 pb-20 lg:pb-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">SON RÊVE</p>
          <h1
            className="text-5xl lg:text-7xl font-light text-foreground tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Collection
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-sm text-foreground/40 max-w-xs leading-loose tracking-wider">
            ひとつひとつのドレスが、始まりです。<br />
            あなたのものだと感じる一着を。
          </p>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="px-8 lg:px-16 pb-40">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-20">
          {dresses.map((dress, i) => (
            <DressCard
              key={dress.slug}
              slug={dress.slug}
              name={dress.name}
              year={dress.year}
              image={dress.images[0]}
              delay={i * 0.07}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-8 lg:px-16 bg-muted flex justify-center">
        <FadeIn><CTAButtons /></FadeIn>
      </section>
    </div>
  );
}
