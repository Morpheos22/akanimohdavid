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
    className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[60px] items-center px-[6vw] pt-[100px] pb-20 relative overflow-hidden"
  >
    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(hsl(200 100% 50% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(200 100% 50% / 0.03) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    {/* Glow */}
    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,hsl(200_100%_50%/0.07)_0%,transparent_65%)] pointer-events-none" />

    <div className="relative z-[1]">
      <div className="flex items-center gap-3 mb-6 animate-fade-up animate-fade-up-1">
        <div className="w-9 h-px bg-primary" />
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">
          AI Strategist & Ecosystem Architect
        </span>
      </div>
      <h1 className="font-syne font-extrabold text-[clamp(48px,7.5vw,100px)] leading-[0.92] tracking-tight mb-1.5 animate-fade-up animate-fade-up-2">
        <div>Akanimoh</div>
        <div className="text-transparent" style={{ WebkitTextStroke: "1.5px hsl(200 100% 50% / 0.45)" }}>
          David.
        </div>
      </h1>
      <div className="font-syne text-[clamp(12px,1.4vw,16px)] font-semibold text-primary tracking-[0.18em] uppercase mb-7 animate-fade-up animate-fade-up-3">
        Co-Founder, Metabuilder Solutions Limited &bull; Abuja, Nigeria
      </div>
      <p className="max-w-[540px] text-[clamp(14px,1.3vw,16px)] font-light text-foreground/[0.68] leading-[1.8] mb-11 animate-fade-up animate-fade-up-4">
        I build at the intersection of <strong className="text-foreground font-medium">strategy, AI, and African sovereignty.</strong> From forensic AI products to venture-grade proposals, workshops that change how teams work, and a media show auditing the tools shaping our continent — I am an ecosystem architect for Africa's AI era.
      </p>
      <div className="flex gap-3.5 flex-wrap animate-fade-up animate-fade-up-5">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-transparent text-foreground font-syne font-semibold text-xs tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm border border-foreground/[0.14] hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
        >
          View Projects
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 bg-transparent text-foreground font-syne font-semibold text-xs tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm border border-foreground/[0.14] hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
        >
          Work With Me
        </a>
      </div>
      <div className="flex gap-10 mt-14 pt-9 border-t border-foreground/[0.06] animate-fade-up animate-fade-up-6 flex-wrap">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-syne text-[30px] font-extrabold leading-none mb-1">
              {s.num}<span className="text-primary">{s.suffix}</span>
            </div>
            <div className="text-[10px] font-normal text-muted-foreground tracking-[0.1em] uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-[1] hidden lg:flex items-center justify-center animate-fade-up animate-fade-up-4">
      <div className="relative w-full max-w-[380px]">
        <div className="absolute inset-[-2px] border border-primary/20 rounded-md pointer-events-none" />
        <div className="absolute -top-5 -right-5 w-[120px] h-[120px] border border-primary/[0.12] rounded-full pointer-events-none" />
        <img src={portrait} alt="Akanimoh David" className="w-full rounded-sm contrast-[1.05]" />
        <div className="absolute -bottom-4 left-5 bg-secondary border border-primary/20 px-4 py-2.5 rounded-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          <span className="text-[11px] font-medium text-foreground/[0.68]">Available for Engagements</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
