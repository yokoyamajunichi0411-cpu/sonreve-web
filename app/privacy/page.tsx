import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <h1 className="text-2xl font-light tracking-widest mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Privacy Policy
      </h1>
      <div className="text-sm text-foreground/60 tracking-wider leading-[2.4] space-y-8">
        <p>on rêve（以下「当ブランド」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定めます。</p>
        <div>
          <p className="text-foreground/80 mb-3">収集する情報</p>
          <p>当ウェブサイトでは、お問い合わせフォームを通じてお名前、メールアドレス、電話番号等の個人情報をご提供いただく場合があります。</p>
        </div>
        <div>
          <p className="text-foreground/80 mb-3">利用目的</p>
          <p>収集した個人情報は、お問い合わせへの回答・ご予約の確認・サービスの提供のみに使用し、第三者への提供はいたしません。</p>
        </div>
        <div>
          <p className="text-foreground/80 mb-3">お問い合わせ</p>
          <p>個人情報に関するお問い合わせは、お問い合わせフォームよりご連絡ください。</p>
        </div>
      </div>
    </div>
  );
}
