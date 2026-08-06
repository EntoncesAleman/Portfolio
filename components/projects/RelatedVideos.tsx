import Image from "next/image";
import Link from "next/link";
import type { RelatedVideo } from "@/types/project";

interface RelatedVideosProps {
  items: RelatedVideo[];
}

export function RelatedVideos({ items }: RelatedVideosProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
      <h2 className="text-sm uppercase tracking-[0.08em] text-[var(--text-muted)]">
        Más episodios
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {items.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden bg-[var(--surface)]"
            style={{ aspectRatio: item.thumbnail.aspectRatio }}
          >
            <Image
              src={item.thumbnail.src}
              alt={item.thumbnail.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-black/0 p-3 opacity-0 transition-all duration-300 ease-out group-hover:bg-black/50 group-hover:opacity-100 group-focus-visible:bg-black/50 group-focus-visible:opacity-100">
              <p className="text-sm font-medium text-white">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
