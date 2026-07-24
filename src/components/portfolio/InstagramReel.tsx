import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptPromise: Promise<void> | null = null;
const loadEmbedScript = () => {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    if (typeof document === "undefined") return resolve();
    if (window.instgrm) return resolve();
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
  return scriptPromise;
};

interface Props {
  permalink: string;
  title: string;
}

const InstagramReel = ({ permalink, title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadEmbedScript().then(() => {
      window.instgrm?.Embeds.process();
    });
  }, [permalink]);

  return (
    <div className="reveal relative bg-card border border-primary/20 rounded-sm overflow-hidden hover:border-primary/60 transition-all">
      <div className="absolute top-3 right-3 z-10 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-primary bg-background/70 border border-primary/40 px-2 py-1 rounded-sm pointer-events-none">
        ▶ Reel
      </div>
      <div ref={ref} className="ig-embed-wrap p-3">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          style={{
            background: "#160a1a",
            border: 0,
            margin: 0,
            maxWidth: "100%",
            minWidth: "0",
            width: "100%",
          }}
        >
          <a href={permalink} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">
            Watch “{title}” on Instagram
          </a>
        </blockquote>
      </div>
      <div className="px-4 pb-4 pt-1 border-t border-primary/10">
        <div className="font-display text-[9px] font-bold tracking-[0.25em] uppercase text-primary mb-1">
          AI Video
        </div>
        <div className="font-display text-[14px] font-bold text-foreground leading-tight">
          {title}
        </div>
      </div>
    </div>
  );
};

export default InstagramReel;
