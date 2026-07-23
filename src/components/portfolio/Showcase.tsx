import { useMemo, useState } from "react";
import PanelSection from "./PanelSection";
import { showcaseFilters, showcaseItems, type ShowcaseCategory } from "@/data/showcase";

const spanClass: Record<string, string> = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-2 md:row-span-1",
  lg: "md:col-span-2 md:row-span-2",
};

const Showcase = () => {
  const [filter, setFilter] = useState<ShowcaseCategory | "all">("all");

  const items = useMemo(
    () => (filter === "all" ? showcaseItems : showcaseItems.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <PanelSection id="showcase" label="Showcase" eyebrow="Creative Output">
      <p className="text-[15px] font-light text-foreground/[0.68] max-w-[520px] leading-[1.8] mb-8 reveal">
        Selected creative work — websites, AI video, and identity design. A live catalogue of what the studio ships.
      </p>

      <div className="flex flex-wrap gap-2 mb-8 reveal">
        {showcaseFilters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`font-display text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-sm border transition-all ${
                active
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_30px_hsl(292_84%_61%/0.35)]"
                  : "bg-secondary/40 text-muted-foreground border-primary/20 hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-3">
        {items.map((item) => {
          const Wrapper: any = item.href ? "a" : "div";
          const wrapperProps = item.href
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={item.id}
              {...wrapperProps}
              className={`reveal group relative overflow-hidden bg-card border border-primary/15 rounded-sm hover:border-primary/60 transition-all ${
                spanClass[item.span ?? "sm"]
              }`}
            >
              {item.media.type === "image" ? (
                <img
                  src={item.media.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              ) : (
                <video
                  src={item.media.src}
                  poster={item.media.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-hex-dense opacity-30 mix-blend-overlay pointer-events-none" />

              {item.category === "video" && (
                <div className="absolute top-3 right-3 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-primary bg-background/70 border border-primary/40 px-2 py-1 rounded-sm">
                  ▶ Video
                </div>
              )}
              {item.placeholder && (
                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground bg-background/60 border border-primary/15 px-2 py-1 rounded-sm">
                  Placeholder
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="font-display text-[9px] font-bold tracking-[0.25em] uppercase text-primary mb-1">
                  {item.category === "web" && "Website"}
                  {item.category === "video" && "AI Video"}
                  {item.category === "logo" && "Identity"}
                  {item.category === "other" && "Studio"}
                </div>
                <div className="font-display text-[15px] font-bold text-foreground leading-tight mb-1">
                  {item.title}
                </div>
                {item.caption && (
                  <div className="text-[11px] text-muted-foreground leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </div>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </PanelSection>
  );
};

export default Showcase;
