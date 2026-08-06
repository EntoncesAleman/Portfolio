import { AboutCard } from "@/components/projects/AboutCard";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <ProjectGrid projects={projects} leadingCard={<AboutCard />} />
    </div>
  );
}
