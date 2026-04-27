import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTAButtons from "@/components/ui/CTAButtons";
import FlowTabs from "./FlowTabs";

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description: "son rêveのドレスレンタル・フォトプランのご利用の流れ。ご予約からドレス選び・撮影当日・ご返却まで、はじめての方も安心してご来店ください。",
  alternates: { canonical: "https://sonreve.jp/flow" },
  openGraph: {
    title: "ご利用の流れ | son rêve",
    description: "son rêveのドレスレンタル・フォトプランのご利用の流れ。ご予約からご返却まで丁寧にご案内します。",
    url: "https://sonreve.jp/flow",
  },
};

export default function FlowPage() {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="px-8 lg:px-16 pb-20 lg:pb-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">SON RÊVE</p>
          <h1
            className="text-5xl lg:text-7xl font-light text-foreground tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Flow
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-sm text-foreground/40 max-w-xs leading-loose tracking-wider">
            ご利用の流れ。<br />
            はじめての方も、安心してご来店ください。
          </p>
        </FadeIn>
      </section>

      <section className="px-8 lg:px-24 pb-40 max-w-3xl">
        <FlowTabs />
      </section>

      <section className="py-32 px-8 lg:px-16 bg-muted flex justify-center">
        <FadeIn><CTAButtons /></FadeIn>
      </section>
    </div>
  );
}
