import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DecorativeBackground } from "@/components/projects/DecorativeBackground";
import { RelatedVideos } from "@/components/projects/RelatedVideos";
import { VimeoEmbed } from "@/components/projects/VimeoEmbed";
import { YouTubeEmbed } from "@/components/projects/YouTubeEmbed";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
  previous: Project | null;
  next: Project | null;
}

export function ProjectDetail({ project, previous, next }: ProjectDetailProps) {
  const hasAdjacentNav = previous !== null || next !== null;
  const isKidsShow = project.category === "Serie Infantil";

  const metaItems: { label: string; value: string }[] = [
    ...(project.client ? [{ label: "Cliente", value: project.client }] : []),
    ...(project.director ? [{ label: "Dirección", value: project.director }] : []),
    { label: "Rol", value: project.role },
    { label: "Año", value: String(project.year) },
    ...(project.duration ? [{ label: "Duración", value: project.duration }] : []),
    ...(project.format ? [{ label: "Formato", value: project.format }] : []),
  ];

  return (
    <article>
      <header className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        {isKidsShow ? <DecorativeBackground /> : null}
        <Link
          href="/"
          className="relative text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          Trabajos
        </Link>

        <h1 className="relative mt-6 max-w-3xl text-4xl font-medium tracking-tight text-[var(--text)] md:text-6xl">
          {project.title}
        </h1>

        <dl className="relative mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3">
          {metaItems.map((item) => (
            <div key={item.label}>
              <dt className="text-[var(--text-muted)]">{item.label}</dt>
              <dd className="mt-1 text-[var(--text)]">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="relative mt-8 max-w-[65ch] text-base leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>
      </header>

      <div
        className="relative w-full bg-[var(--surface)]"
        style={{ aspectRatio: project.heroImage.aspectRatio }}
      >
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {project.video ? (
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <RevealOnScroll>
            {project.video.provider === "youtube" ? (
              <YouTubeEmbed
                videoId={project.video.id}
                title={project.title}
                aspectRatio={project.heroImage.aspectRatio}
              />
            ) : (
              <VimeoEmbed
                videoId={project.video.id}
                hash={project.video.hash}
                title={project.title}
                aspectRatio={project.heroImage.aspectRatio}
              />
            )}
          </RevealOnScroll>
          <Link
            href={project.video.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-[var(--text-muted)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--text)]"
          >
            {project.video.provider === "youtube" ? "Ver en YouTube" : "Ver en Vimeo"}
          </Link>
        </div>
      ) : null}

      {project.relatedVideos && project.relatedVideos.length > 0 ? (
        <RelatedVideos items={project.relatedVideos} />
      ) : null}

      {project.galleryImages.length > 0 ? (
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 py-16 md:px-10 md:py-24">
          {project.galleryImages.map((item) => (
            <RevealOnScroll key={item.src}>
              <figure
                className="relative w-full overflow-hidden bg-[var(--surface)]"
                style={{ aspectRatio: item.aspectRatio }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.alt}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      ) : null}

      {hasAdjacentNav ? (
        <nav className="mx-auto flex max-w-[1400px] flex-col gap-6 border-t border-[var(--border)] px-6 py-12 sm:flex-row sm:items-center sm:justify-between md:px-10">
          {previous ? (
            <Link
              href={`/work/${previous.slug}`}
              className="group flex flex-col text-sm text-[var(--text-muted)]"
            >
              <span>Proyecto anterior</span>
              <span className="mt-1 text-base text-[var(--text)] transition-colors group-hover:text-[var(--text-muted)]">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col text-sm text-[var(--text-muted)] sm:text-right"
            >
              <span>Siguiente proyecto</span>
              <span className="mt-1 text-base text-[var(--text)] transition-colors group-hover:text-[var(--text-muted)]">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </article>
  );
}
