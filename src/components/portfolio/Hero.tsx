import portrait from "@/assets/portrait.webp";

const stats = [
  { num: "3", suffix: "+", label: "Live Ventures" },
  { num: "2", suffix: "x", label: "Google Certified" },
  { num: "5", suffix: "+", label: "Partnerships" },
  { num: "1", suffix: "st", label: "AI Show, Abuja" },
];

const Hero = () => (
  <section
    id="home"
    className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[60px] items-center px-[6vw] pt-[100px] pb-20 relative overflow-hidden bg-hex-mesh"
  >
    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,hsl(292_84%_61%/0.10)_0%,transparent_65%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(292_84%_61%/0.07)_0%,transparent_60%)] pointer-events-none" />

    {/* Corner brackets */}
    <div className="absolute top-20 left-[6vw] w-6 h-6 border-l-2 border-t-2 border-primary/60 pointer-events-none" />
    <div className="absolute bottom-8 right-[6vw] w-6 h-6 border-r-2 border-b-2 border-primary/60 pointer-events-none" />

    <div className="relative z-[1]">
      <div className="flex items-center gap-3 mb-6 animate-fade-up animate-fade-up-1">
        <div className="w-9 h-px bg-primary" />
        <span className="font-display text-[10px] font-semibold tracking-[0.28em] uppercase text-primary animate-flicker">
          Chief AI Officer · Creative Technologist
        </span>
      </div>
      <h1 className="font-display font-bold text-[clamp(48px,7.5vw,100px)] leading-[0.92] tracking-tight mb-2 animate-fade-up animate-fade-up-2 uppercase">
        <div>David</div>
        <div className="text-stroke-magenta">Akanimoh.</div>
      </h1>
      <div className="font-display text-[clamp(11px,1.3vw,14px)] font-semibold text-primary tracking-[0.22em] uppercase mb-7 animate-fade-up animate-fade-up-3">
        Chief AI Officer · Metabuilder Solutions Limited · Abuja, NG
      </div>
      <p className="max-w-[560px] text-[clamp(14px,1.3vw,16px)] font-light text-foreground/[0.72] leading-[1.85] mb-11 animate-fade-up animate-fade-up-4">
        Creative technologist and systems integrator. I build at the intersection of{" "}
        <strong className="text-foreground font-medium">modern web, AI video, and autonomous agent orchestration</strong> — from the Voight-Kampff forensic verification framework to venture-grade proposals and a media stack auditing the tools shaping Africa.
      </p>
      <div className="flex gap-3 flex-wrap animate-fade-up animate-fade-up-5">
        <a
          href="#showcase"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_0_30px_hsl(292_84%_61%/0.4)] transition-all"
        >
          → View Showcase
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 bg-transparent text-foreground font-display font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-sm border border-primary/30 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
        >
          Work With Me
        </a>
      </div>
      <div className="flex gap-10 mt-14 pt-9 border-t border-primary/15 animate-fade-up animate-fade-up-6 flex-wrap">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[30px] font-bold leading-none mb-1">
              {s.num}<span className="text-primary">{s.suffix}</span>
            </div>
            <div className="font-display text-[10px] font-normal text-muted-foreground tracking-[0.18em] uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-[1] flex items-center justify-center animate-fade-up animate-fade-up-4">
      <div className="relative w-full max-w-[280px] lg:max-w-[380px] mx-auto">
        <div className="absolute inset-[-8px] border border-primary/30 rounded-sm pointer-events-none" />
        <div className="absolute inset-[-2px] border border-primary/50 rounded-sm pointer-events-none" />
        <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-primary" />
        <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-primary" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-primary" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-primary" />
        <div className="relative overflow-hidden rounded-sm">
          <img src={portrait} alt="David Akanimoh" className="w-full" />
          <div className="absolute inset-0 bg-hex-dense opacity-40 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="absolute -bottom-4 left-5 bg-card border border-primary/40 px-4 py-2 rounded-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">Available</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
