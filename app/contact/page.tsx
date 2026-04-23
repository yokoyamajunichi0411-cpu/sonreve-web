"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    plan: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // ← 後で設定
          ...formData,
          subject: `[on rêve] ${formData.name}様よりお問い合わせ`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", date: "", plan: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 pt-8 pb-10">
        <div className="relative w-full h-[35vh] lg:h-[40vh] overflow-hidden bg-cream flex items-center justify-center">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 mb-3">on rêve</p>
            <h1
              className="text-3xl lg:text-4xl font-light tracking-[0.15em] text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reservation
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <FadeIn>
          <p className="text-xs text-foreground/45 tracking-wider leading-[2.2] mb-14 text-center">
            ご予約・お問い合わせはこちらのフォームよりお気軽にどうぞ。<br />
            2営業日以内にご返信いたします。
          </p>
        </FadeIn>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-light tracking-wider mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Thank you.
            </p>
            <p className="text-sm text-foreground/55 tracking-wider">
              お問い合わせを受け付けました。<br />
              2営業日以内にご連絡いたします。
            </p>
          </motion.div>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  お名前 <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200 placeholder:text-foreground/25"
                  placeholder="山田 花子"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  メールアドレス <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200 placeholder:text-foreground/25"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  お電話番号
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200 placeholder:text-foreground/25"
                  placeholder="090-0000-0000"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  ご希望日
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200"
                />
              </div>

              {/* Plan */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  ご興味のあるプラン
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground/70 tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200"
                >
                  <option value="">選択してください</option>
                  <option value="rental">Rental Only — レンタルのみ</option>
                  <option value="rental_photo">Rental + Photo — レンタル＋撮影</option>
                  <option value="full">Full Package — フルパッケージ</option>
                  <option value="other">その他・未定</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-2">
                  メッセージ
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-border/60 bg-transparent py-3 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/50 transition-colors duration-200 resize-none placeholder:text-foreground/25"
                  placeholder="ご質問・ご要望などをお気軽にお書きください"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 tracking-wider">
                  送信に失敗しました。しばらくしてから再度お試しください。
                </p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-foreground text-white text-[11px] tracking-[0.3em] uppercase hover:bg-foreground/80 transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
