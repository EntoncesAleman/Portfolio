import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function CinematicCover({ projects }: { projects: Project[] }) {
  const selected = ["horsey", "radio-tulum-anni-m-fables", "feik-nus", "nuuva-crepes"]
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const lead = selected[1] ?? selected[0];
  return (
    <section className="cinematic-cover" aria-labelledby="home-title">
      <div className="cover-studio" aria-hidden="true"><Image src="/images/atmosphere/studio.webp" alt="" fill sizes="100vw" loading="eager" className="object-cover" /></div>
      <nav className="film-strip" aria-label="Fotogramas de trabajos seleccionados">
        <span className="film-edge-label" aria-hidden="true">MW / ARCHIVO AUDIOVISUAL</span>
        {selected.map((project, index) => <Link key={project.id} href={`/work/${project.slug}`} aria-label={`${project.title} · ${project.role} · ${project.year}`}><span className="film-index" aria-hidden="true">{String(index + 1).padStart(2, "0")} A</span><div className="film-still"><Image src={project.thumbnail.src} alt={project.thumbnail.alt} fill sizes="(min-width: 1024px) 160px, 100px" className="object-cover" /></div></Link>)}
        <span className="film-tail" aria-hidden="true">35 MM · MERCEDES WYLER</span>
      </nav>
      <div className="cover-main">
        <div className="cover-top">
          <div className="cover-titles"><p className="eyebrow">Producción & gestión creativa</p><h1 id="home-title">Mercedes Wyler</h1><span className="title-rule" aria-hidden="true" /><p className="cover-subtitle">Producción audiovisual</p><p className="cover-roles">Productora ejecutiva · Project manager<br />Gerente de producción</p><a href="#trabajos" className="cover-explore">Explorar el portfolio <span aria-hidden="true">↓</span></a></div>
          <div className="cover-collage"><span className="burgundy-paper paper-one" aria-hidden="true" /><span className="composition-circle" aria-hidden="true" /><div className="coastal-frame" aria-hidden="true"><Image src="/images/atmosphere/coastal-road.webp" alt="" fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 55vw, 90vw" className="object-cover" /></div>{lead && <Link href={`/work/${lead.slug}`} className="inset-frame"><Image src={lead.thumbnail.src} alt={lead.thumbnail.alt} fill sizes="(min-width: 1024px) 210px, 130px" className="object-cover" /><span>{lead.title} <span aria-hidden="true">↗</span></span></Link>}<span className="burgundy-paper paper-two" aria-hidden="true" /><span className="registration-mark" aria-hidden="true">+</span></div>
        </div>
        <div className="cover-contact-sheet">
          {selected.slice(0, 3).map((project) => <Link href={`/work/${project.slug}`} className="cover-project" key={project.id}><div className="cover-project-image"><Image src={project.thumbnail.src} alt={project.thumbnail.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" /></div><div className="cover-project-caption"><span>{project.title}<span aria-hidden="true">↗</span></span><p>{project.role} · {project.year}</p></div></Link>)}
        </div>
        <div className="paper-notes"><span className="tape" aria-hidden="true" /><div><p className="eyebrow">Ideas, equipos, historias.</p><p className="paper-title">Cada producción,<br /><em>un mundo por contar.</em></p></div><Link href="/about">Más de 20 años de experiencia<br /><span>Conocé mi trayectoria ↗</span></Link><span className="paper-stamp" aria-hidden="true">mw.</span></div>
        <p className="atmosphere-note">Paisaje y estudio: imágenes de ambientación. Los fotogramas enlazados pertenecen a trabajos del portfolio.</p>
      </div>
    </section>
  );
}
