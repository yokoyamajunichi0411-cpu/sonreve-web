import { notFound } from "next/navigation";
import { getDressBySlug, dresses } from "@/lib/dresses";
import DressContent from "./DressContent";

export function generateStaticParams() {
  return dresses.map((d) => ({ slug: d.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DressPage({ params }: PageProps) {
  const { slug } = await params;
  const dress = getDressBySlug(slug);

  if (!dress) notFound();

  return <DressContent dress={dress} />;
}
