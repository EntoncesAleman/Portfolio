import type { ReactNode } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
  /** Tarjeta adicional renderizada antes de los proyectos, ej. la card de Sobre mí */
  leadingCard?: ReactNode;
}

export function ProjectGrid({ projects, leadingCard }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {leadingCard ? <RevealOnScroll>{leadingCard}</RevealOnScroll> : null}
      {projects.map((project, index) => (
        <RevealOnScroll key={project.id} delay={(index % 2) * 0.08}>
          <ProjectCard project={project} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
