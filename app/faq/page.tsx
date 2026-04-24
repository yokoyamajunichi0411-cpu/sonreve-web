import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "son rêveへのよくあるご質問。レンタル期間・ヘアメイク・撮影場所・試着・データ納品・キャンセルポリシーなど、気になることをまとめました。",
  alternates: { canonical: "https://sonreve.jp/faq" },
  openGraph: {
    title: "よくある質問 | son rêve",
    description: "son rêveへのよくあるご質問。レンタル・撮影についてお気軽にお問い合わせください。",
    url: "https://sonreve.jp/faq",
  },
};

const faqs = [
  {
    q: "ドレスのレンタル期間はどのくらいですか？",
    a: "撮影当日のみのレンタルが基本となります。詳細はご相談ください。",
  },
  {
    q: "ヘアメイクも対応していますか？",
    a: "はい、プロのスタイリストによるヘアメイク・着付けがプランに含まれています。",
  },
  {
    q: "撮影場所はどこですか？",
    a: "スタジオ撮影とロケーション撮影のどちらにも対応しています。ご希望の場所についてはご相談ください。",
  },
  {
    q: "韓国のドレスはどのくらいの数がありますか？",
    a: "常時複数のスタイルをご用意しています。ソウルのアトリエと直接提携しており、最新コレクションをご提案できます。",
  },
  {
    q: "事前にドレスを試着することはできますか？",
    a: "はい、ご来店いただいてのご試着が可能です。まずはご予約のうえ、ご来店ください。",
  },
  {
    q: "データの納品はいつですか？",
    a: "撮影後、編集作業を経てご納品します。期間についてはプランにより異なりますので、ご相談ください。",
  },
  {
    q: "当日キャンセルはできますか？",
    a: "キャンセルポリシーについては、ご予約時に詳しくご説明します。お早めにご連絡いただけますようお願いします。",
  },
  {
    q: "LINEでの相談は可能ですか？",
    a: "はい、LINEでのご相談も承っています。お気軽にご連絡ください。",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="px-8 lg:px-16 pb-20 lg:pb-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">son rêve</p>
          <h1
            className="text-5xl lg:text-7xl font-light text-foreground tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            FAQ
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-sm text-foreground/40 max-w-xs leading-loose tracking-wider">
            よくあるご質問。<br />
            お気軽にお問い合わせください。
          </p>
        </FadeIn>
      </section>

      <section className="px-8 lg:px-24 pb-40 max-w-3xl">
        <div className="space-y-0 divide-y divide-border">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="py-8">
                <p className="text-sm text-foreground/70 tracking-wider mb-4 leading-relaxed">
                  <span className="text-foreground/20 mr-3 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-foreground/40 leading-loose tracking-wider pl-6">
                  {faq.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

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
