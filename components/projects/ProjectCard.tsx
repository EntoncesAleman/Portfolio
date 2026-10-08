import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <div className="project-image">
        <Image src={project.thumbnail.src} alt={project.thumbnail.alt} fill sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-open" aria-hidden="true">↗</span>
      </div>
      <div className="project-caption"><p className="project-category">{project.category}<span>{project.year}</span></p><h3>{project.title}</h3><p className="project-role">{project.role}</p></div>
    </Link>
  );
}
