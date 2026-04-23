"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/collection", label: "Collection", ja: "コレクション" },
  { href: "/plan", label: "Plan", ja: "プラン" },
  { href: "/about", label: "About", ja: "ブランドについて" },
  { href: "/contact", label: "Contact", ja: "お問い合わせ" },
];

function NavLink({ href, label, ja, active }: { href: string; label: string; ja: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative group flex flex-col items-center gap-0.5 transition-colors duration-300 hover:text-foreground ${
        active ? "text-foreground" : "text-foreground/45"
      }`}
    >
      <span className="text-[11px] tracking-[0.22em] uppercase leading-none">{label}</span>
      <span
        className="text-[9px] font-light tracking-[0.15em] text-foreground/45 leading-none
          opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out whitespace-nowrap"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {ja}
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm" : "bg-background border-b border-border/40"
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex items-center relative px-10 xl:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="text-[22px] tracking-[0.25em] font-light text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            on rêve
          </span>
        </Link>

        {/* Nav – centered */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 xl:gap-12 whitespace-nowrap">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} active={pathname === item.href} />
          ))}
        </nav>

        {/* Right: reservation CTA */}
        <div className="ml-auto">
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.25em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 border-b border-foreground/20 pb-px hover:border-foreground/60"
          >
            Reservation
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative flex items-center justify-between px-5 py-4">
        <div className="w-8" />
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-[20px] tracking-[0.25em] font-light text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            on rêve
          </span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1" aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-1">
              <Link href="/" onClick={() => setIsOpen(false)} className={`py-3 text-sm tracking-[0.15em] uppercase ${pathname === "/" ? "text-foreground" : "text-foreground/55"}`}>
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-sm tracking-[0.15em] uppercase ${pathname === item.href ? "text-foreground" : "text-foreground/55"}`}
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
