import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://sonreve.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "son rêve | 韓国ウェディングドレスレンタル・前撮り 大阪",
    template: "%s | son rêve",
  },
  description:
    "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ソウルのアトリエと直接提携し、最新コレクションをご提案。ドレスレンタルから撮影・ヘアメイクまで一括対応。関西全域対応。",
  keywords: [
    "韓国ウェディングドレス", "ウェディングドレスレンタル", "前撮り", "後撮り",
    "ウェディング撮影", "大阪 ドレスレンタル", "大阪 前撮り", "関西 ウェディング",
    "son rêve", "ソンレーヴ", "韓国ドレス 大阪", "ブライダル 大阪",
  ],
  authors: [{ name: "son rêve" }],
  creator: "son rêve",
  publisher: "son rêve",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    siteName: "son rêve",
    locale: "ja_JP",
    type: "website",
    url: siteUrl,
    title: "son rêve | 韓国ウェディングドレスレンタル・前撮り 大阪",
    description:
      "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ドレスレンタルから撮影まで一括対応。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "son rêve — 韓国ウェディングドレスレンタル・前撮り 大阪",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "son rêve | 韓国ウェディングドレスレンタル・前撮り 大阪",
    description:
      "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ドレスレンタルから撮影まで一括対応。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "son rêve",
  description: "大阪発の韓国ウェディングドレスレンタル・前撮りブランド。ドレスレンタルから撮影まで一括対応。",
  url: siteUrl,
  logo: `${siteUrl}/logo/sonreve_BI.png`,
  image: `${siteUrl}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "大阪市",
    addressRegion: "大阪府",
    addressCountry: "JP",
  },
  areaServed: ["大阪府", "兵庫県", "京都府", "奈良県"],
  serviceType: ["ウェディングドレスレンタル", "前撮り撮影", "ウェディング撮影"],
  sameAs: ["https://www.instagram.com/sonreve_bridal"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
