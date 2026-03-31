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
  <section id="speaking" className="py-24 px-[6vw] bg-background">
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
      <div className="reveal">
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-[26px] h-px bg-primary" />
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">Speaking & Facilitation</span>
        </div>
        <h2 className="font-syne text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-tight mb-3.5">
          In the Room<br />Where It Happens.
        </h2>
        <p className="text-[15px] font-light text-foreground/[0.68] leading-[1.85] mb-9">
          I bring <strong className="text-foreground font-medium">clarity to complex AI conversations</strong> in rooms that matter — from university buildathons to alumni associations to corporate strategy sessions. Direct, systems-oriented, and grounded in African realities.
        </p>
        <div className="flex flex-col gap-0.5">
          {appearances.map((a, i) => (
            <div
              key={i}
              className="grid grid-cols-[72px_1fr_auto] items-center gap-[18px] px-[18px] py-4 bg-secondary border-l-2 border-l-transparent hover:border-l-primary hover:bg-card transition-all"
            >
              <div className="font-syne text-[10px] font-bold text-primary tracking-[0.1em]">{a.year}</div>
              <div>
                <div className="text-[13px] font-medium text-foreground mb-0.5">{a.title}</div>
                <div className="text-[11px] font-light text-muted-foreground">{a.org}</div>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.1em] uppercase text-muted-foreground bg-foreground/[0.04] px-[9px] py-[3px] rounded-sm whitespace-nowrap">
                {a.role}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reveal">
        <div className="font-syne text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground mb-[18px]">Speaking Topics</div>
        <div className="flex flex-col gap-2 mb-8">
          {topics.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2.5 px-4 py-3 bg-secondary rounded-sm text-[13px] font-normal text-foreground/[0.68] hover:bg-card hover:text-foreground transition-all"
            >
              <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
              {t}
            </div>
          ))}
        </div>
        <div className="bg-background border border-primary/[0.12] border-l-[3px] border-l-primary p-5 rounded-r">
          <div className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase mb-2">Grit to Gear — Special Masterclass</div>
          <div className="text-[13px] font-light text-foreground/[0.68] leading-[1.75]">
            In partnership with <span className="text-foreground font-medium">Sherwyn Singh (Automagikal)</span>, exclusive founder scaling masterclasses available for institutions and alumni associations. Limited engagements. Enquire to book.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Speaking;
