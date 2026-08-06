import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contacto - ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-[var(--text)] md:text-6xl">
        Trabajemos juntos
      </h1>

      <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-[var(--text-muted)]">
        Si tenés un proyecto en mente, escribime y lo conversamos.
      </p>

      <Link
        href={`mailto:${siteConfig.email}`}
        className="mt-10 inline-block text-2xl font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-8 transition-colors hover:decoration-[var(--text)] md:text-4xl"
      >
        {siteConfig.email}
      </Link>
    </div>
  );
}
