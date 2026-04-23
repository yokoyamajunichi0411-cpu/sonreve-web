"use client";

import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span
              className="text-[24px] tracking-[0.25em] font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              on rêve
            </span>
            <p className="text-xs text-white/40 tracking-wider leading-relaxed">
              韓国ウェディングドレスのレンタル<br />
              前撮り・ウェディング撮影
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <nav className="flex flex-col gap-3">
              <Link href="/collection" className="text-sm text-white/55 hover:text-white transition-colors tracking-wider">
                Collection
              </Link>
              <Link href="/plan" className="text-sm text-white/55 hover:text-white transition-colors tracking-wider">
                Plan
              </Link>
              <Link href="/about" className="text-sm text-white/55 hover:text-white transition-colors tracking-wider">
                About
              </Link>
              <Link href="/contact" className="text-sm text-white/55 hover:text-white transition-colors tracking-wider">
                Reservation
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors tracking-wider"
            >
              <Camera size={16} />
              Instagram
            </a>
            <p className="text-xs text-white/30 tracking-wider leading-relaxed">
              お問い合わせ・ご予約は<br />
              <Link href="/contact" className="underline underline-offset-2 hover:text-white/60 transition-colors">
                こちらのフォーム
              </Link>
              より承ります
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © {year} on rêve. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/30 tracking-wider hover:text-white/55 transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
