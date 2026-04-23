import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Collection",
  description: "on rêveの韓国ウェディングドレスコレクション。Aライン、マーメイド、ボールガウンなど多彩なスタイルをご用意。",
};

const dresses = [
  { id: 1, name: "Lumière", name_ja: "リュミエール", style: "Aライン", desc: "繊細なレースが美しいクラシカルなAライン。清楚で上品な花嫁に。" },
  { id: 2, name: "Céleste", name_ja: "セレスト", style: "マーメイド", desc: "身体のラインを美しく見せるマーメイドシルエット。洗練された大人の花嫁に。" },
  { id: 3, name: "Aurore", name_ja: "オーロール", style: "ボールガウン", desc: "ドラマチックなボリュームが印象的なプリンセスライン。夢見る花嫁に。" },
  { id: 4, name: "Étoile", name_ja: "エトワール", style: "Aライン", desc: "スターモチーフの刺繍が散りばめられた幻想的な一着。" },
  { id: 5, name: "Rosée", name_ja: "ロゼ", style: "ミニ", desc: "ショート丈のモダンなスタイル。フォトウェディングにも人気。" },
  { id: 6, name: "Velours", name_ja: "ヴェルー", style: "マーメイド", desc: "ベルベット素材を使用した深みのある一着。秋冬の撮影におすすめ。" },
];

export default function CollectionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 pt-8 pb-10">
        <div className="relative w-full h-[45vh] lg:h-[55vh] overflow-hidden bg-blush/40 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 w-full text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/70 mb-2">on rêve</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-[0.15em] text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-10">
        <div className="flex items-center gap-6 border-b border-border/50 pb-4 overflow-x-auto">
          {["All", "Aライン", "マーメイド", "ボールガウン", "ミニ"].map((f) => (
            <button
              key={f}
              className={`text-[11px] tracking-[0.25em] uppercase whitespace-nowrap pb-1 transition-colors duration-200 ${
                f === "All"
                  ? "text-foreground border-b border-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {dresses.map((dress, i) => (
            <FadeIn key={dress.id} delay={i * 0.08}>
              <div className="group">
                {/* Image placeholder */}
                <div className="relative aspect-[3/4] bg-blush/30 overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/5" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-foreground/40 bg-background/80 px-2 py-1">
                      {dress.style}
                    </span>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-base text-foreground/80 tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                    >
                      {dress.name}
                    </span>
                    <span className="text-[10px] text-foreground/40 tracking-wider">{dress.name_ja}</span>
                  </div>
                  <p className="text-[11px] text-foreground/45 tracking-wider leading-relaxed hidden md:block">
                    {dress.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 text-center px-6">
        <FadeIn>
          <p className="text-xs text-foreground/45 tracking-wider mb-3">
            気になるドレスがあればお気軽にご相談ください
          </p>
          <p className="text-[10px] text-foreground/30 tracking-wider mb-8">
            試着のご予約・在庫のご確認はお問い合わせより承ります
          </p>
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
