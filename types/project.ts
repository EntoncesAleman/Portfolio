export type MediaType = "image" | "video";

export interface GalleryItem {
  src: string;
  type: MediaType;
  alt: string;
  /** width / height, e.g. 4 / 3 or 16 / 9 - reserva espacio para evitar CLS */
  aspectRatio: number;
  caption?: string;
}

export interface VideoEmbed {
  provider: "vimeo" | "youtube";
  /** ID del video en la plataforma, ej. "325888597" */
  id: string;
  /** URL pública original, para el enlace "ver en Vimeo" */
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  /** Ej. "Cortometraje", "Producción ejecutiva", "Streaming" */
  category: string;
  year: number;
  /** Rol de Mercedes en el proyecto, ej. "Protagonista y Producción", "Productora Ejecutiva" */
  role: string;
  /** Solo cuando aplica: proyectos de cliente/organización, no cortos personales */
  client?: string;
  /** Solo para proyectos audiovisuales con dirección de otra persona */
  director?: string;
  duration?: string;
  format?: string;
  /** Descripción corta para la card / listados (1 frase) */
  shortDescription: string;
  /** Logline / sinopsis del case study */
  description: string;
  thumbnail: {
    src: string;
    alt: string;
    aspectRatio: number;
  };
  heroImage: {
    src: string;
    alt: string;
    aspectRatio: number;
  };
  video?: VideoEmbed;
  galleryImages: GalleryItem[];
  /** Controla el orden en home; menor = primero */
  order: number;
  featured: boolean;
}
