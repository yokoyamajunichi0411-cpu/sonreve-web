import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface DressCardProps {
  slug: string;
  name: string;
  year?: string;
  image?: string;
  delay?: number;
}

export default function DressCard({ slug, name, year, image, delay = 0 }: DressCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link href={`/dress/${slug}`} className="group block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
          {image && (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.05] transition-colors duration-700" />
          {year && (
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/70 bg-foreground/30 px-2 py-1">{year}</span>
            </div>
          )}
          <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span
              className="text-xl text-white drop-shadow"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              {name}
            </span>
          </div>
        </div>
        <p
          className="text-base text-foreground/60 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {name}
        </p>
      </Link>
    </FadeIn>
  );
}
