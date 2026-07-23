import PanelSection from "./PanelSection";

const appearances = [
  { year: "2026", title: "Collective Lab × GDG Buildathon", org: "Abuja — Day 2 Lead Facilitator", role: "Facilitator" },
  { year: "2026", title: "Nile University Alumni Startup Competition", org: "Nile University of Nigeria, Abuja", role: "Judge" },
  { year: "2026", title: "S.H.A.R.P. Episode 1 — Abacus AI & Veta Origin", org: "feat. Ismail Waziri (Veta Origin)", role: "Co-Host" },
  { year: "Open", title: "Keynotes, Panels & Workshops", org: "AI, Sovereignty, African Tech Ecosystems", role: "Book Now" },
];

const topics = [
  "AI Adoption for African Businesses",
  "Sovereign AI Infrastructure in Africa",
  "Building with AI — No Engineering Degree Required",
  "The Sociopolitical Impact of Generative AI in Africa",
  "The SIGMA Framework — AI Governance for Africa",
  "Forensic AI & Trust in Digital Commerce",
  "Funding & Pitching African Startups",
];

const Speaking = () => (
  <PanelSection id="speaking" label="Stage" eyebrow="Speaking & Facilitation">
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
      <div className="reveal">
        <p className="text-[15px] font-light text-foreground/[0.72] leading-[1.85] mb-8">
          I bring <strong className="text-foreground font-medium">clarity to complex AI conversations</strong> in rooms that matter — from university buildathons to alumni associations to corporate strategy sessions.
        </p>
        <div className="flex flex-col gap-1">
          {appearances.map((a, i) => (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr_auto] items-center gap-4 px-4 py-4 bg-card/60 border border-primary/15 border-l-2 border-l-transparent hover:border-l-primary hover:border-primary/50 transition-all rounded-sm"
            >
              <div className="font-display text-[10px] font-bold text-primary tracking-[0.2em] uppercase">{a.year}</div>
              <div>
                <div className="text-[13px] font-medium text-foreground mb-0.5">{a.title}</div>
                <div className="text-[11px] font-light text-muted-foreground">{a.org}</div>
              </div>
              <div className="font-display text-[9px] font-bold tracking-[0.18em] uppercase text-muted-foreground bg-background/40 border border-primary/15 px-2 py-1 rounded-sm whitespace-nowrap">
                {a.role}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reveal">
        <div className="font-display text-[10px] font-bold tracking-[0.28em] uppercase text-muted-foreground mb-4">
          // Topics.ls
        </div>
        <div className="flex flex-col gap-1.5 mb-8">
          {topics.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2.5 px-3 py-2.5 bg-card/40 border border-primary/10 rounded-sm text-[12.5px] font-normal text-foreground/[0.72] hover:border-primary/40 hover:text-foreground transition-all"
            >
              <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
              {t}
            </div>
          ))}
        </div>
        <div className="bg-card/60 border border-primary/25 border-l-[3px] border-l-primary p-5 rounded-sm">
          <div className="font-display text-[9px] font-bold tracking-[0.28em] text-primary uppercase mb-2">Grit to Gear — Masterclass</div>
          <div className="text-[13px] font-light text-foreground/[0.72] leading-[1.75]">
            In partnership with <span className="text-foreground font-medium">Sherwyn Singh (Automagikal)</span>, exclusive founder scaling masterclasses for institutions and alumni associations. Limited engagements.
          </div>
        </div>
      </div>
    </div>
  </PanelSection>
);

export default Speaking;
