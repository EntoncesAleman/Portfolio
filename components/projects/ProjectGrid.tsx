import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <RevealOnScroll key={project.id} delay={(index % 2) * 0.08}>
          <ProjectCard project={project} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
