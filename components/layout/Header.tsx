"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/about", label: "About", ja: "ブランドについて" },
  { href: "/collection", label: "Collection", ja: "ドレス一覧" },
  { href: "/flow", label: "Flow", ja: "ご利用の流れ" },
  { href: "/photo-plan", label: "Photo Plan", ja: "フォトプラン" },
  { href: "/faq", label: "FAQ", ja: "よくある質問" },
  { href: "/reservation", label: "Reservation", ja: "ご予約" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const showOverlay = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showOverlay ? "bg-transparent" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-8 lg:px-16 py-5">
        <Link
          href="/"
          className={`flex-shrink-0 transition-opacity duration-500 ${showOverlay ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <img
            src="/logo/sonreve_BI.png"
            alt="son rêve"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden lg:flex items-center gap-10 transition-opacity duration-500 ${showOverlay ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex flex-col items-center gap-0.5 transition-colors duration-300 ${
                pathname === item.href ? "text-foreground" : "text-foreground hover:text-foreground/60"
              }`}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase">{item.label}</span>
              <span className="text-[8px] tracking-wider text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.ja}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-1"
          aria-label="メニュー"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-foreground origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-foreground"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-foreground origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-background overflow-hidden"
          >
            <nav className="flex flex-col px-8 pb-10 pt-4 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] tracking-[0.2em] uppercase ${
                    pathname === item.href ? "text-foreground" : "text-foreground hover:text-foreground/60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
