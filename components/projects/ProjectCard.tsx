import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden bg-[var(--surface)]"
      style={{ aspectRatio: project.thumbnail.aspectRatio }}
    >
      <Image
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-start bg-black/55 p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 md:p-8">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm uppercase tracking-wide text-white/85">{project.role}</p>
        <p className="mt-3 text-sm text-white/85">{project.year}</p>
      </div>
    </Link>
  );
}
