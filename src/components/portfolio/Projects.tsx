import PanelSection from "./PanelSection";
import InstagramReel from "./InstagramReel";
import { websites } from "@/data/websites";
import { aiVideos } from "@/data/aiVideos";

const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const Projects = () => (
  <PanelSection id="projects" label="Portfolio" eyebrow="What I'm Building">
    <p className="text-[15px] font-light text-foreground/[0.72] max-w-[560px] leading-[1.8] mb-12 reveal">
      A portfolio of AI-native ventures and creative output — websites shipped under Metabuilder Solutions Limited, and AI films exploring avatar, story, and brand.
    </p>

    {/* Websites */}
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6 reveal">
        <span className="font-display text-[10px] font-bold tracking-[0.28em] uppercase text-primary">
          / Websites
        </span>
        <span className="flex-1 h-px bg-primary/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {websites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative flex flex-col bg-card/60 border border-primary/20 rounded-sm overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all"
          >
            <div className="relative aspect-video bg-background/60 overflow-hidden">
              <img
                src={shot(site.url)}
                alt={`${site.title} screenshot`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-hex-dense opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/70 border border-primary/30 rounded-sm px-2 py-1">
                <img
                  src={favicon(site.domain)}
                  alt=""
                  className="w-4 h-4"
                />
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                  {site.domain}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="font-display text-[16px] font-bold uppercase leading-tight text-foreground">
                  {site.title}
                </div>
                <span className="font-display text-primary text-[14px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
              <p className="text-[12.5px] font-light text-foreground/70 leading-[1.7]">
                {site.summary}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* AI Video */}
    <div>
      <div className="flex items-center gap-3 mb-4 reveal">
        <span className="font-display text-[10px] font-bold tracking-[0.28em] uppercase text-primary">
          / AI Video
        </span>
        <span className="flex-1 h-px bg-primary/20" />
      </div>
      <p className="text-[13.5px] font-light text-foreground/70 max-w-[620px] leading-[1.8] mb-8 reveal">
        These AI-generated films showcase my work in avatar creation, narrative storytelling, and sustained visual consistency for brand-grade output.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiVideos.map((v) => (
          <InstagramReel key={v.id} permalink={v.permalink} title={v.title} />
        ))}
      </div>
    </div>
  </PanelSection>
);

export default Projects;
