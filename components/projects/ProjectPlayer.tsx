"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { VimeoEmbed } from "./VimeoEmbed";
import { YouTubeEmbed } from "./YouTubeEmbed";
import type { Project } from "@/types/project";

export function ProjectPlayer({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loaded) playerRef.current?.querySelector("iframe")?.focus();
  }, [loaded]);
  const video = project.video;
  if (!video) return null;
  if (video.provider === "local") return <video src={video.url} title={project.title} className="w-full" controls playsInline preload="none" poster={project.heroImage.src} />;
  if (!loaded) return <button type="button" onClick={() => setLoaded(true)} className="player-poster" aria-label={`Cargar reproductor: ${project.title}`}><Image src={project.heroImage.src} alt="" fill sizes="(min-width: 1440px) 1280px, 100vw" className="object-cover" /><span className="player-label"><span aria-hidden="true">▷</span> Ver {project.title}</span></button>;
  return <div ref={playerRef}>{video.provider === "youtube" ? <YouTubeEmbed videoId={video.id ?? ""} title={project.title} aspectRatio={16 / 9} /> : <VimeoEmbed videoId={video.id ?? ""} hash={video.hash} title={project.title} aspectRatio={16 / 9} />}</div>;
}
