import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        <Link href="/">
          <img
            src="/logo/sonreve_logo.png"
            alt="SON RÊVE"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-8 flex-wrap justify-center md:justify-end">
          {[
            { href: "/about", label: "About", ja: "ブランドについて" },
            { href: "/collection", label: "Collection", ja: "ドレス一覧" },
            { href: "/flow", label: "Flow", ja: "ご利用の流れ" },
            { href: "/photo-plan", label: "Photo Plan", ja: "フォトプラン" },
            { href: "/faq", label: "FAQ", ja: "よくある質問" },
            { href: "/reservation", label: "Reservation", ja: "ご予約" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-0.5 text-foreground/40 hover:text-foreground/70 transition-colors duration-300"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase">{item.label}</span>
              <span className="text-[8px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.ja}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-foreground/30 tracking-wider">
          © {year} SON RÊVE. All rights reserved.
        </p>
        <a
          href="https://instagram.com/sonreve_bridal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
