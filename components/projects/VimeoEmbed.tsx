interface VimeoEmbedProps {
  videoId: string;
  title: string;
  aspectRatio: number;
}

export function VimeoEmbed({ videoId, title, aspectRatio }: VimeoEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
      />
    </div>
  );
}
