"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full border-b border-border bg-transparent py-4 text-sm text-foreground tracking-wider focus:outline-none focus:border-foreground/40 transition-colors duration-300 placeholder:text-foreground/20";
const labelClass = "block text-[10px] tracking-[0.35em] uppercase text-foreground/30 mb-3";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
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
          access_key: "YOUR_WEB3FORMS_KEY",
          ...formData,
          subject: `[son rêve] ${formData.name}様よりお問い合わせ`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="py-12"
      >
        <p
          className="text-3xl font-light text-foreground mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          送信が完了しました。
        </p>
        <p className="text-sm text-foreground/40 tracking-wider leading-loose">
          24時間以内にご連絡いたします。
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label className={labelClass}>お名前 <span className="text-foreground/40">*</span></label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="山田 花子"
        />
      </div>

      <div>
        <label className={labelClass}>メールアドレス <span className="text-foreground/40">*</span></label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="email@example.com"
        />
      </div>

      <div>
        <label className={labelClass}>ご興味のあるサービス</label>
        <select
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className={inputClass}
        >
          <option value="">選択してください</option>
          <option value="dress">ドレスレンタルのみ</option>
          <option value="photo">前撮り・撮影プラン</option>
          <option value="both">ドレス＋撮影</option>
          <option value="undecided">まだ迷っている</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>メッセージ・ご要望</label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="ご要望、ご希望の時期など、お気軽にどうぞ。"
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-foreground/40 tracking-wider">
          送信に失敗しました。しばらくしてから再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-5 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:border-foreground/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(200,185,160,0.5)] transition-all duration-500 disabled:opacity-40"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
