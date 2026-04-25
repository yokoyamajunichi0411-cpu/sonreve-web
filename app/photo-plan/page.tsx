import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "フォトプラン",
  description: "son rêveのフォトプラン。スタジオ撮影・ロケーション撮影・スタジオ＆ロケーションの3プランをご用意。前撮り・後撮り・記念日撮影に対応。ドレスレンタルからヘアメイク・撮影まで一括対応。大阪・関西全域。",
  alternates: { canonical: "https://sonreve.jp/photo-plan" },
  openGraph: {
    title: "フォトプラン | son rêve",
    description: "son rêveのフォトプラン。スタジオ・ロケーション・3プランからお選びいただけます。前撮り・後撮り・記念日撮影に対応。",
    url: "https://sonreve.jp/photo-plan",
  },
};

const plans = [
  {
    name: "スタジオ撮影",
    price: "¥121,000",
    specs: [
      { label: "撮影時間", value: "60分" },
      { label: "納品数", value: "50 CUT" },
      { label: "ドレス", value: "1着" },
      { label: "ヘアメイク", value: "1回" },
    ],
  },
  {
    name: "ロケーション撮影",
    price: "¥154,000",
    specs: [
      { label: "撮影時間", value: "120分" },
      { label: "納品数", value: "80 CUT" },
      { label: "ドレス", value: "1着" },
      { label: "ヘアメイク", value: "1回" },
    ],
  },
  {
    name: "スタジオ＆ロケーション",
    price: "¥176,000",
    specs: [
      { label: "撮影時間", value: "150分" },
      { label: "納品数", value: "100 CUT" },
      { label: "ドレス", value: "2着まで" },
      { label: "ヘアメイク", value: "2回" },
    ],
  },
];

const included = [
  "ドレス（プランに応じた着数）",
  "ヘアメイク・着付け",
  "ブーケ・アクセサリー",
  "全データ納品（レタッチ済み）",
  "ディレクション・スタイリング",
];

const styles = [
  { name: "Studio",        line: "空間のすべてが、あなたのもの。", image: "/dressphoto/IMG_8013.JPG" },
  { name: "Location",      line: "世界を、背景に。",               image: "/dressphoto/IMG_8017.JPG" },
  { name: "Natural Light", line: "光が選んだ、その瞬間。",         image: "/dressphoto/IMG_8019.JPG" },
  { name: "Editorial",     line: "言葉なく語られる、物語。",       image: "/dressphoto/IMG_8022.JPG" },
];


export default function PhotoPlanPage() {
  return (
    <div className="pt-32 lg:pt-40">

      {/* Hero */}
      <section className="px-8 lg:px-16 pb-20 lg:pb-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">SON RÊVE</p>
          <h1
            className="text-5xl lg:text-7xl font-light text-foreground tracking-wide mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Photo Plan
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-sm text-foreground/40 max-w-xs leading-loose tracking-wider">
            前撮り・後撮り・記念日撮影に対応。<br />
            ドレスレンタルから撮影まで、すべてをご用意します。
          </p>
        </FadeIn>
      </section>

      {/* Plans */}
      <section className="px-8 lg:px-16 pb-24 lg:pb-32">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-12">プラン</p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <div className="bg-background p-10 lg:p-12">
                <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-8">{plan.name}</p>
                <p
                  className="text-4xl lg:text-5xl font-light text-foreground mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {plan.price}
                </p>
                <p className="text-[10px] tracking-wider text-foreground/30 mb-10">税込</p>
                <div className="border-t border-border pt-10 space-y-5">
                  {plan.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] text-foreground/40">{spec.label}</span>
                      <span className="text-sm text-foreground/70 tracking-wider">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Included */}
        <FadeIn delay={0.2}>
          <div className="mt-px bg-background border border-border p-10 lg:p-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/30 mb-8">全プラン共通 — 含まれるもの</p>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-foreground/20 flex-shrink-0" />
                  <span className="text-sm text-foreground/50 tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>


      {/* Style grid */}
      <section className="py-20 lg:py-32 px-8 lg:px-16">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-20">撮影スタイル</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {styles.map((style, i) => (
            <FadeIn key={style.name} delay={i * 0.08}>
              <div>
                <div className="relative aspect-[4/3] bg-muted mb-6 overflow-hidden">
                  <img src={style.image} alt={style.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-3">{style.name}</p>
                <p
                  className="text-xl font-light text-foreground/60"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {style.line}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-muted flex justify-center px-8">
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
