import Link from "next/link";

const LINE_URL = "https://line.me/ti/p/sonreve";

const btnClass =
  "inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500";

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/reservation" className={btnClass}>
        ご予約・お問い合わせ
      </Link>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        LINEで相談する
      </a>
    </div>
  );
}
