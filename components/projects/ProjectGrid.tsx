"use client";

import { useId, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("Todos");
  const gridId = useId();
  const categories = ["Todos", ...new Set(projects.map((project) => project.category))];
  const visible = category === "Todos" ? projects : projects.filter((project) => project.category === category);
  return <><div className="project-filters" role="group" aria-label="Filtrar trabajos por categoría">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} aria-controls={gridId} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="sr-only" role="status">{visible.length} trabajos en {category}</p><div className="project-grid" id={gridId}>{visible.map((project) => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div></>;
}
