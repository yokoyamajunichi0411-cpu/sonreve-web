import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "ご予約・お問い合わせ",
  description: "son rêveへのご予約・お問い合わせ。ドレスのご試着・レンタル・前撮りのご予約は公式LINEまたはメールフォームにてお気軽にご連絡ください。",
  alternates: { canonical: "https://sonreve.jp/reservation" },
  openGraph: {
    title: "ご予約・お問い合わせ | son rêve",
    description: "son rêveへのご予約・お問い合わせ。公式LINEまたはメールフォームにてお気軽にご連絡ください。",
    url: "https://sonreve.jp/reservation",
  },
};

export default function ReservationPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Header */}
      <section className="px-8 lg:px-16 pb-20 lg:pb-28">
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-foreground/30 mb-8">son rêve</p>
          <h1
            className="text-5xl lg:text-7xl font-light text-foreground tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Reservation
          </h1>
        </FadeIn>
      </section>

      {/* Main: LINE */}
      <section className="px-8 lg:px-24 pb-24 max-w-2xl">
        <FadeIn>
          <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-10">ご予約・お問い合わせ</p>
          <p className="text-sm text-foreground/50 leading-loose tracking-wider mb-12">
            ドレスのご試着・レンタル・前撮りに関するご予約、ならびにお問い合わせは、
            公式LINEアカウントにて承っております。<br />
            下記よりお気軽に友だち追加のうえ、LINEトークにてご連絡ください。
          </p>
          <a
            href="https://line.me/ti/p/sonreve"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.02 2 11c0 3.13 1.68 5.9 4.28 7.72L5.5 22l3.58-1.86C10.1 20.7 11.03 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2zm1 13H9v-1.5h4V15zm2-3H9v-1.5h6V12zm0-3H9V7.5h6V9z"/>
            </svg>
            LINEで友だち追加
          </a>
        </FadeIn>
      </section>

      {/* Secondary: Contact Form */}
      <section className="px-8 lg:px-24 pb-40 max-w-2xl">
        <FadeIn>
          <div className="pt-12 border-t border-border">
            <p className="text-[10px] tracking-[0.45em] uppercase text-foreground/30 mb-6">メールフォーム</p>
            <p className="text-sm text-foreground/40 leading-loose tracking-wider mb-12">
              メールでのご連絡も承っております。
            </p>
            <ContactForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
