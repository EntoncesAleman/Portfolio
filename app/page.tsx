import { CinematicCover } from "@/components/projects/CinematicCover";
import Link from "next/link";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const projects = getAllProjects();
  return (
    <div className="portfolio-shell">
      <CinematicCover projects={projects} />
      <section id="trabajos" className="work-section" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / Filmografía & proyectos</p><h2 id="work-title">Historias en <em>producción.</em></h2></div><span className="section-count">{String(projects.length).padStart(2, "0")} trabajos / 2014—2026</span></div>
        <ProjectGrid projects={projects} />
      </section>
      <section className="home-about" aria-labelledby="about-title">
        <p className="eyebrow">02 / Detrás de las producciones</p><div><h2 id="about-title">Una mirada creativa.<br /><em>Una producción precisa.</em></h2><p>{siteConfig.intro} Una trayectoria entre Argentina, Alemania y México.</p><Link className="text-link" href="/about">Conocé mi trayectoria <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="home-contact" aria-labelledby="contact-title"><p className="eyebrow">03 / Próximo proyecto</p><h2 id="contact-title">Hagamos que <em>suceda.</em></h2><Link className="text-link" href="/contact">Conversemos <span aria-hidden="true">↗</span></Link><a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></section>
    </div>
  );
}
