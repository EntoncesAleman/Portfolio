import Link from "next/link";

export function AboutCard() {
  return (
    <Link
      href="/about"
      className="group relative flex items-center justify-center overflow-hidden bg-[var(--surface)]"
      style={{ aspectRatio: 1.3675 }}
    >
      <span className="text-7xl font-bold tracking-tight text-[var(--text)] transition-transform duration-500 ease-out group-hover:scale-105 md:text-8xl">
        MW
      </span>

      <div className="absolute inset-0 flex flex-col justify-start bg-black/55 p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 md:p-8">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
          Sobre mí
        </h3>
      </div>
    </Link>
  );
}
