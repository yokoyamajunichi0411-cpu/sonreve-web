import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Plan & Price",
  description: "on rêveのプランと料金。ドレスレンタルのみ、または前撮り・当日撮影とのセットプランをご用意。",
};

const rentalPlans = [
  {
    name: "Rental Only",
    name_ja: "レンタルのみ",
    price: "¥55,000",
    note: "税込",
    features: [
      "韓国ウェディングドレス 1着",
      "着付けサービス",
      "当日ヘアセット＆フルメイク",
      "アクセサリーセット",
      "撮影時間 2時間",
    ],
  },
  {
    name: "Rental + Photo",
    name_ja: "レンタル＋撮影",
    price: "¥99,000",
    note: "税込",
    recommended: true,
    features: [
      "韓国ウェディングドレス 1着",
      "着付けサービス",
      "当日ヘアセット＆フルメイク",
      "アクセサリーセット",
      "スタジオまたはロケーション撮影",
      "50カット以上 データ納品",
      "全カット色補正付き",
    ],
  },
  {
    name: "Full Package",
    name_ja: "フルパッケージ",
    price: "¥143,000",
    note: "税込",
    features: [
      "韓国ウェディングドレス 2着",
      "着付けサービス（2回）",
      "当日ヘアセット＆フルメイク",
      "ヘアアレンジチェンジ 1回",
      "スタジオ＋ロケーション撮影",
      "100カット以上 データ納品",
      "全カット色補正付き",
      "オンライン事前打ち合わせ",
    ],
  },
];

const options = [
  { label: "ドレス追加（2着目）", price: "¥22,000〜（税込）" },
  { label: "ロケーション追加（1時間）", price: "¥33,000〜（税込）" },
  { label: "ヘアアレンジチェンジ", price: "¥11,000（税込）" },
  { label: "生花ブーケ手配", price: "¥16,500〜（税込）" },
  { label: "データ増量（+20カット）", price: "¥11,000（税込）" },
  { label: "アルバム制作", price: "¥44,000〜（税込）" },
];

const flow = [
  { step: "01", title: "お問い合わせ", desc: "ウェブフォームまたはInstagramよりご連絡ください。" },
  { step: "02", title: "オンライン相談", desc: "ご希望のドレスや撮影イメージをお聞きします。" },
  { step: "03", title: "試着・予約確定", desc: "来店またはオンラインで試着後、日程を確定します。" },
  { step: "04", title: "撮影当日", desc: "ヘアメイク・着付けから撮影まで担当スタッフがサポート。" },
  { step: "05", title: "データ納品", desc: "撮影後3〜4週間でデータをお届けします。" },
];

export default function PlanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 pt-8 pb-10">
        <div className="relative w-full h-[40vh] lg:h-[50vh] overflow-hidden bg-cream flex items-center justify-center">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 mb-3">on rêve</p>
            <h1 className="text-3xl lg:text-4xl font-light tracking-[0.15em] text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Plan & Price
            </h1>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 pb-20">
        <FadeIn>
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-foreground/35 mb-12">
            Shooting Plans
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50">
          {rentalPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border/50 last:border-0 ${
                  plan.recommended ? "bg-foreground/[0.02]" : ""
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-2 py-1">
                    人気
                  </span>
                )}
                <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/35 mb-1">{plan.name}</p>
                <p className="text-[11px] text-foreground/40 tracking-wider mb-5">{plan.name_ja}</p>
                <p className="text-3xl font-light tracking-wide mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {plan.price}
                </p>
                <p className="text-[11px] text-foreground/40 tracking-wider mb-8">{plan.note}</p>
                <ul className="space-y-3 border-t border-border/40 pt-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[12px] text-foreground/55 tracking-wider leading-relaxed">
                      <span className="mt-2 w-3 h-px bg-gold/50 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Options */}
      <section className="bg-muted py-14 lg:py-18">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/35 mb-10 text-center">
              Options
            </p>
            <div className="divide-y divide-border/40">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center justify-between py-5">
                  <span className="text-sm text-foreground/65 tracking-wider">{opt.label}</span>
                  <span className="text-sm text-foreground/50 tracking-wider ml-4 text-right">{opt.price}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Flow */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <FadeIn>
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/35 mb-14 text-center">
            Flow
          </p>
          <div className="space-y-10">
            {flow.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <span
                    className="text-3xl font-light text-gold/60 flex-shrink-0 w-12"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm text-foreground/75 tracking-wider mb-2">{item.title}</p>
                    <p className="text-xs text-foreground/50 tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center bg-foreground">
        <FadeIn>
          <p className="text-xs text-white/40 tracking-wider mb-8">
            プランに関するご質問もお気軽にどうぞ
          </p>
          <Link
            href="/contact"
            className="inline-block px-14 py-4 border border-white/30 text-white text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-foreground transition-all duration-300"
          >
            Reservation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
