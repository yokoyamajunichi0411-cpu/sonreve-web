import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "on rêve | 韓国ウェディングドレス レンタル・撮影",
    template: "%s | on rêve",
  },
  description:
    "on rêveは韓国ウェディングドレスのレンタルと前撮り・ウェディング撮影を提供するブランドです。夢のような一日を、上質なドレスと写真で残しませんか。",
  keywords: ["韓国ウェディングドレス", "ドレスレンタル", "前撮り", "ウェディング撮影", "大阪", "韓国ドレス"],
  authors: [{ name: "on rêve" }],
  openGraph: {
    siteName: "on rêve",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
