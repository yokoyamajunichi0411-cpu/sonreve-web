"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const dressPlanSteps = [
  {
    num: "01",
    title: "ご予約",
    desc: "SON RÊVE公式LINEからお問い合わせのうえ、ご予約をお取りください。",
  },
  {
    num: "02",
    title: "ご来店",
    desc: "スタイリストがしっかりとヒアリングさせていただき、お客様にぴったりの一着をトータルスタイリングでご提案させていただきます。",
  },
  {
    num: "03",
    title: "ドレス予約・アクセサリー選び",
    desc: "お気に入りの一着が決まったら、ドレスのお申し込みをさせていただきます。スタイリングを彩るアイテムも豊富にご用意しております。ドレスに合わせてアクセサリーを工夫してみたり、何通りもある組み合わせをお楽しみください。",
  },
  {
    num: "04",
    title: "お支払い",
    desc: "お支払いは、お申し込み日当日にお内金をクレジットカードにてお支払いいただき、残りのご料金を銀行振込にてお支払いいただきます。",
  },
  {
    num: "05",
    title: "ドレスのお渡し",
    desc: "ご利用日の前日までに、店舗にてお受け取りいただきますようお願いいたします。ご配送でのお受け取りにも対応しております。送料はお客様ご負担となりますので予めご了承ください。",
  },
  {
    num: "06",
    title: "ご利用当日",
    desc: "待ちに待った当日。思う存分楽しんで、最高の一日にしてください。",
  },
  {
    num: "07",
    title: "ドレスのご返却",
    desc: "使用日翌日の午前中までに店舗にご返却をお願いいたします。ご返却が遅れる場合、延長料金が発生いたしますのでお気をつけください。",
  },
];

const photoPlanSteps = [
  {
    num: "01",
    title: "ご相談",
    desc: "お気軽にご連絡ください。理想の一日について、ゆっくりお話しします。",
  },
  {
    num: "02",
    title: "スタイリング",
    desc: "ご希望に合わせたドレスをご提案します。",
  },
  {
    num: "03",
    title: "ドレス選び",
    desc: "あなたのものだと感じる一着を、一緒に見つけます。",
  },
  {
    num: "04",
    title: "撮影当日",
    desc: "その日は、ただそこに存在していてください。あとはお任せください。",
  },
  {
    num: "05",
    title: "データお届け",
    desc: "撮影後3〜4週間以内に、データをお届けします。",
  },
];

type Tab = "dress" | "photo";

export default function FlowTabs() {
  const [active, setActive] = useState<Tab>("dress");
  const steps = active === "dress" ? dressPlanSteps : photoPlanSteps;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex mb-16">
        <button
          onClick={() => setActive("dress")}
          className={`flex-1 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 border ${
            active === "dress"
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-foreground/40 border-border hover:text-foreground/70"
          }`}
        >
          Dress Plan
        </button>
        <button
          onClick={() => setActive("photo")}
          className={`flex-1 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 border-t border-b border-r ${
            active === "photo"
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-foreground/40 border-border hover:text-foreground/70"
          }`}
        >
          Photo Plan
        </button>
      </div>

      {/* Steps */}
      <div className="space-y-0 divide-y divide-border">
        {steps.map((step, i) => (
          <FadeIn key={`${active}-${step.num}`} delay={i * 0.06}>
            <div className="flex gap-10 py-10">
              <p
                className="text-4xl font-light text-foreground/15 flex-shrink-0 w-12"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {step.num}
              </p>
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/50 mb-3">{step.title}</p>
                <p className="text-sm text-foreground/40 leading-loose tracking-wider">{step.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
