import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "on rêveについて。韓国ウェディングドレスのレンタルと撮影を行うブランドのストーリー。",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 pt-8 pb-10">
        <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden bg-blush/30 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 mb-3">Our Story</p>
            <h1
              className="text-3xl lg:text-5xl font-light tracking-[0.15em] text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              on rêve
            </h1>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-8">Brand Concept</p>
          <h2
            className="text-2xl lg:text-3xl font-light tracking-wide text-foreground mb-10 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            夢を纏う、特別な一日
          </h2>
          <div className="space-y-6 text-sm text-foreground/60 tracking-wider leading-[2.4]">
            <p>
              on rêveは、「夢を見る」を意味するフランス語から生まれたブランドです。
              韓国の洗練されたウェディングドレス文化に魅せられ、その美しさを日本の花嫁にも届けたいという思いで立ち上げました。
            </p>
            <p>
              ソウルの一流アトリエと直接契約し、最新コレクションをいち早くご提案。
              Aライン、マーメイド、ボールガウンなど多彩なスタイルの中から、あなたにぴったりの一着を見つけてください。
            </p>
            <p>
              ドレスのレンタルはもちろん、ブライダル専門カメラマンによる前撮り・当日撮影もご提供。
              着付け・ヘアメイクからデータ納品まで、すべてをワンストップで。
              大切な記念日を、完璧な形で残すお手伝いをします。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Values */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/35 mb-14 text-center">Our Values</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Authenticity",
                title_ja: "本物のクオリティ",
                desc: "韓国アトリエと直接提携。本場の品質を大阪からご提供します。",
              },
              {
                num: "02",
                title: "One Stop",
                title_ja: "トータルサポート",
                desc: "ドレス・ヘアメイク・撮影まで、すべてon rêveにお任せください。",
              },
              {
                num: "03",
                title: "Memory",
                title_ja: "記憶に残る一枚",
                desc: "写真はずっと残ります。あなたの大切な瞬間を美しく。",
              },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p
                    className="text-4xl font-light text-gold/50 mb-5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {v.num}
                  </p>
                  <p className="text-sm tracking-[0.2em] uppercase text-foreground/70 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {v.title}
                  </p>
                  <p className="text-[11px] text-foreground/40 tracking-wider mb-4">{v.title_ja}</p>
                  <p className="text-xs text-foreground/50 tracking-wider leading-[2.2]">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/35 mb-12">Brand Info</p>
          <div className="divide-y divide-border/40">
            {[
              { label: "ブランド名", value: "on rêve（オン レーヴ）" },
              { label: "拠点", value: "大阪府" },
              { label: "取扱ドレス", value: "韓国ウェディングドレス（ソウルアトリエ直輸入）" },
              { label: "サービス", value: "ドレスレンタル / 前撮り撮影 / ウェディング当日撮影" },
              { label: "対応エリア", value: "大阪・兵庫・京都・奈良（関西全域）" },
              { label: "Instagram", value: "@onreve_bridal" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8 py-5">
                <span className="text-[11px] tracking-[0.2em] text-foreground/35 uppercase w-28 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/65 tracking-wider">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-border/30 px-6">
        <FadeIn>
          <p className="text-xs text-foreground/40 tracking-wider mb-8">お気軽にご相談ください</p>
          <Link
            href="/contact"
            className="inline-block px-12 py-3.5 bg-foreground text-white text-[11px] tracking-[0.3em] uppercase hover:bg-foreground/80 transition-all duration-300"
          >
            Contact Us
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
