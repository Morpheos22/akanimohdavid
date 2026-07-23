import PanelSection from "./PanelSection";

const services = [
  {
    num: "01",
    icon: "⚡",
    title: "AI Workshops & Training",
    desc: "Half-day and full-day practical AI sessions for teams, SMEs, NGOs, and institutions. Hands-on with real tools, grounded in African realities, zero fluff.",
    price: "$50 per session",
    tags: ["SMEs", "NGOs", "Corporate", "Government"],
  },
  {
    num: "02",
    icon: "📄",
    title: "Proposals & Pitch Decks",
    desc: "Venture-grade business proposals, pitch decks, and grant applications. I write documents that open doors, close deals, and unlock capital — 48 to 72hr delivery.",
    price: "$20 per document",
    tags: ["Pitch Decks", "Grant Writing", "Proposals"],
  },
  {
    num: "03",
    icon: "🧠",
    title: "AI Strategy Consulting",
    desc: "One-on-one and institutional AI strategy sessions. Mapping your AI stack, building readiness, or designing your organisation's path into the AI era.",
    price: "Book a free 20-min consult",
    tags: ["Founders", "Institutions", "Strategy"],
  },
];

const Services = () => (
  <PanelSection id="services" label="Services" eyebrow="What I Do">
    <p className="text-[15px] font-light text-foreground/[0.72] max-w-[520px] leading-[1.8] mb-10 reveal">
      Practical, high-value engagements for individuals, SMEs, NGOs, and institutions ready to operate in the AI era.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {services.map((s) => (
        <div
          key={s.num}
          className="reveal relative bg-card/60 border border-primary/20 p-8 rounded-sm overflow-hidden group hover:border-primary/60 hover:-translate-y-1 transition-all"
        >
          <div className="absolute inset-0 bg-hex-dense opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform" />
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-[10px] font-bold tracking-[0.28em] text-primary">{s.num}</span>
              <span className="text-[22px] opacity-70">{s.icon}</span>
            </div>
            <div className="font-display text-[17px] font-bold mb-3 leading-[1.2] uppercase">{s.title}</div>
            <p className="text-[13px] font-light text-foreground/[0.68] leading-[1.75] mb-5">{s.desc}</p>
            <div className="font-display text-[11px] font-bold text-primary tracking-[0.12em] uppercase mb-4">{s.price}</div>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-display text-[9px] font-medium tracking-[0.15em] uppercase text-muted-foreground bg-background/40 border border-primary/15 px-2 py-1 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </PanelSection>
);

export default Services;
