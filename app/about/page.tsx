import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "ブランドについて",
  description: "son rêve（ソン・レーヴ）は大阪発の韓国ウェディングドレスレンタル・前撮りブランド。「彼の夢」「彼女の夢」、ふたりが共に選ぶ夢を形にします。",
  alternates: { canonical: "https://sonreve.jp/about" },
  openGraph: {
    title: "ブランドについて | son rêve",
    description: "son rêveは大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ソウルのアトリエと直接提携し、最新コレクションをご提案します。",
    url: "https://sonreve.jp/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">

      {/* Brand Story */}
      <section className="py-32 lg:py-40 px-8 lg:px-24 max-w-3xl">
        <FadeIn>
          <p
            className="text-3xl lg:text-5xl font-light text-foreground leading-[1.25] mb-10 text-center lg:text-left"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            SON RÊVE
          </p>
          <p
            className="text-xl lg:text-2xl font-light text-foreground/60 leading-[1.4] mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            &ldquo;his dream&rdquo; or &ldquo;her dream.&rdquo;<br />
            But we believe it is something shared.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-6 text-sm text-foreground/45 leading-loose tracking-wider max-w-sm">
            <p>
              フランス語で「SON RÊVE（ソン・レーヴ）」は、「彼の夢」または「彼女の夢」を意味します。
              わたしたちは、それが二人のあいだで静かに共有される夢だと考えています。
            </p>
            <p>
              私達は、ドレスを売りません。ドレスレンタルや撮影という手段を通じて、
              あなたが自分で選んだ体験と、あなただけの物語を提供するブランドです。
            </p>
            <p>
              韓国の洗練されたウェディング文化に着想を得ながら、大阪から関西全域へ。
              ソウルのアトリエと直接つながり、最新のドレスをご提案します。
            </p>
            <p>
              大切なのは、正しい答えを選ぶことではなく、
              あなたが本当に感じたいことを選ぶことだと私たちは信じています。
            </p>
          </div>
        </FadeIn>
      </section>


      {/* Info */}
      <section className="py-32 lg:py-40 px-8 lg:px-24 max-w-2xl">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-16">ブランド情報</p>
          <div className="space-y-0 divide-y divide-border">
            {[
              { label: "ブランド名", value: "SON RÊVE（ソン・レーヴ）" },
              { label: "拠点", value: "大阪府" },
              { label: "サービス", value: "ドレスレンタル / 前撮り / ウェディング撮影" },
              { label: "対応エリア", value: "大阪・兵庫・京都・奈良（関西全域）" },
              { label: "Instagram", value: "@sonreve_bridal" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-12 py-6">
                <span className="text-[10px] tracking-[0.2em] text-foreground/30 w-20 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/55 tracking-wider">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 lg:px-16 bg-muted flex justify-center">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500"
            >
              ご予約・お問い合わせ
            </Link>
            <a
              href="https://line.me/ti/p/sonreve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500"
            >
              LINEで相談する
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
