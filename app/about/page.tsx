import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Sobre mi - ${siteConfig.name}`,
};

const experience = [
  {
    company: "Zeratype - Criemos Libres",
    role: "Productora Senior | Project Manager",
    years: "2026",
  },
  {
    company: "Greenpeace Andino - Otro Planeta",
    role: "Productora Ejecutiva y Directora",
    years: "2023-2025",
  },
  {
    company: "Poncho Sauer - ESCUELA+, DirecTV LA",
    role: "Production Manager",
    years: "2021-2023",
  },
  {
    company: "Wander Like Me",
    role: "Gerente Regional de Operaciones",
    years: "2019-2021",
  },
];

const education = [
  {
    school: "MET Film School, Berlín",
    degree: "Maestría en Filmmaking",
  },
  {
    school: "Universidad del Cine (FUC)",
    degree: "Directora Cinematográfica",
  },
];

const languages = ["Español (nativo)", "Inglés (fluido)", "Alemán", "Italiano", "Portugués"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-[var(--text)] md:text-6xl">
        Sobre mi
      </h1>

      <div className="mt-10 max-w-[65ch] space-y-6 text-base leading-relaxed text-[var(--text-muted)]">
        <p>
          Soy productora ejecutiva y project manager, con más de 20 años de experiencia
          liderando proyectos audiovisuales, digitales y de comunicación en Argentina,
          Alemania y México.
        </p>
        <p>
          Me especializo en transformar ideas creativas en producciones de alto impacto:
          gestiono equipos multidisciplinarios, presupuestos, cronogramas y stakeholders desde
          la planificación hasta la entrega final. A lo largo de mi carrera dirigí
          producciones para organizaciones internacionales, empresas, startups y medios,
          combinando visión estratégica con excelencia operativa.
        </p>
        <p>
          En paralelo estudié dirección cinematográfica en la Universidad del Cine (FUC) y una
          maestría en Filmmaking en MET Film School, Berlín. Horsey y Regalito, los dos cortos
          en Super 8 de la sección Trabajos, salieron de esa etapa.
        </p>
      </div>

      <div className="mt-16 grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
        <section>
          <h2 className="text-sm uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Experiencia
          </h2>
          <ul className="mt-4 space-y-5">
            {experience.map((item) => (
              <li key={item.company}>
                <p className="text-sm font-medium text-[var(--text)]">{item.company}</p>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                  {item.role} · {item.years}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-12">
          <section>
            <h2 className="text-sm uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Formación
            </h2>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li key={item.school}>
                  <p className="text-sm font-medium text-[var(--text)]">{item.degree}</p>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">{item.school}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Idiomas
            </h2>
            <p className="mt-4 text-sm text-[var(--text-muted)]">{languages.join(", ")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
