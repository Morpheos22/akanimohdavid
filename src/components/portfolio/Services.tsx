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
  <section id="services" className="py-24 px-[6vw] bg-background">
    <div className="flex items-center gap-3 mb-3.5 reveal">
      <div className="w-[26px] h-px bg-primary" />
      <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">What I Do</span>
    </div>
    <h2 className="font-syne text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-tight mb-3.5 reveal">
      Services Built<br />for Impact.
    </h2>
    <p className="text-[15px] font-light text-foreground/[0.68] max-w-[500px] leading-[1.75] mb-14 reveal">
      Practical, high-value engagements for individuals, SMEs, NGOs, and institutions ready to operate in the AI era.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
      {services.map((s) => (
        <div
          key={s.num}
          className="reveal bg-secondary p-[38px_30px] relative overflow-hidden group hover:bg-card transition-colors"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform" />
          <div className="font-syne text-[10px] font-bold tracking-[0.2em] text-primary mb-[22px] opacity-60">{s.num}</div>
          <span className="text-[26px] mb-[18px] block">{s.icon}</span>
          <div className="font-syne text-[19px] font-bold mb-3 leading-[1.2]">{s.title}</div>
          <p className="text-[13.5px] font-light text-foreground/[0.68] leading-[1.75] mb-[22px]">{s.desc}</p>
          <div className="font-syne text-xs font-bold text-primary tracking-[0.05em]">{s.price}</div>
          <div className="flex flex-wrap gap-[5px] mt-[18px]">
            {s.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-medium tracking-[0.1em] uppercase text-muted-foreground bg-foreground/[0.04] border border-foreground/[0.07] px-[9px] py-[3px] rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
