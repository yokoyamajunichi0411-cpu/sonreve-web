import FadeIn from "@/components/ui/FadeIn";

const steps = [
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

export default function ExperienceFlow() {
  return (
    <div className="space-y-0 divide-y divide-border">
      {steps.map((step, i) => (
        <FadeIn key={step.num} delay={i * 0.08}>
          <div className="flex items-start gap-12 py-8">
            <span
              className="text-3xl font-light text-foreground/20 flex-shrink-0 w-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {step.num}
            </span>
            <div>
              <p className="text-sm tracking-[0.15em] text-foreground/70 mb-2">{step.title}</p>
              <p className="text-sm text-foreground/40 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
