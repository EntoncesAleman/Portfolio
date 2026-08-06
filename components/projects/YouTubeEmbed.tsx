interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  aspectRatio: number;
}

export function YouTubeEmbed({ videoId, title, aspectRatio }: YouTubeEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
