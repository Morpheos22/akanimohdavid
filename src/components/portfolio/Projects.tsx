const Projects = () => (
  <section id="projects" className="py-24 px-[6vw] bg-card">
    <div className="flex items-center gap-3 mb-3.5 reveal">
      <div className="w-[26px] h-px bg-primary" />
      <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">What I'm Building</span>
    </div>
    <h2 className="font-syne text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-tight mb-3.5 reveal">
      The Sovereign<br />Stack.
    </h2>
    <p className="text-[15px] font-light text-foreground/[0.68] max-w-[500px] leading-[1.75] mb-14 reveal">
      A portfolio of AI-native ventures architected under or in collaboration with Metabuilder Solutions Limited.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* TrustScout — Featured */}
      <div className="reveal md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 bg-background border border-primary/10 p-8 rounded items-center hover:border-primary/[0.35] hover:-translate-y-1 transition-all">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.15em] uppercase text-primary bg-primary/[0.08] border border-primary/20 px-3 py-1 rounded-full mb-[18px]">
            <span className="w-[5px] h-[5px] bg-primary rounded-full animate-pulse-dot" /> Beta
          </div>
          <div className="font-syne text-[26px] font-extrabold mb-2.5 leading-[1.1]">TrustScout</div>
          <p className="text-[13.5px] font-light text-foreground/[0.68] leading-[1.75] mb-[22px]">
            Africa's first buyer-initiated forensic vendor verification engine for social commerce. Powered by the Voight-Kampff multi-agent AI framework — four specialised agents (ZHORA, RACHEL, SEBASTIAN, DECKARD) working in concert to surface truth in African digital commerce.
          </p>
          <div className="flex flex-wrap gap-[5px]">
            {["FastAPI", "Z.ai GLM", "Supabase", "Paystack", "Railway", "Lovable", "Cloudflare Pages"].map((t) => (
              <span key={t} className="text-[9px] font-medium tracking-[0.1em] uppercase text-muted-foreground bg-foreground/[0.04] border border-foreground/[0.07] px-[9px] py-[3px] rounded-sm">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          {[
            { label: "Framework", value: "Voight-Kampff — ZHORA, RACHEL, SEBASTIAN, DECKARD" },
            { label: "Live At", value: "trustscout.dev" },
            { label: "Funding Active", value: "Pre-Seed" },
            { label: "AI Partnership", value: "Z.ai GLM Model Family — Startup Credits & Partner Status" },
          ].map((m) => (
            <div key={m.label} className="px-[18px] py-3.5 bg-secondary rounded-sm border-l-2 border-l-primary">
              <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-primary mb-1">{m.label}</div>
              <div className="text-[12.5px] font-normal text-foreground/[0.68]">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* S.H.A.R.P. */}
      <div className="reveal bg-background border border-primary/10 p-8 rounded hover:border-primary/[0.35] hover:-translate-y-1 transition-all">
        <div className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.15em] uppercase text-primary bg-primary/[0.08] border border-primary/20 px-3 py-1 rounded-full mb-[18px]">
          Production
        </div>
        <div className="font-syne text-[26px] font-extrabold mb-2.5 leading-[1.1]">S.H.A.R.P.</div>
        <p className="text-[13.5px] font-light text-foreground/[0.68] leading-[1.75] mb-[22px]">
          Sovereign Humans Auditing Real Products. A biweekly AI tool review show co-hosted with Sherwyn Singh. Two editorial sections: <strong className="text-foreground font-medium">ATHENA</strong> (global AI tools stress-tested against African realities) and <strong className="text-foreground font-medium">NUBIA</strong> (African-built AI founders spotlight).
        </p>
        <div className="flex flex-wrap gap-[5px]">
          {["Media", "AI Reviews", "ATHENA", "NUBIA", "Africa Focus"].map((t) => (
            <span key={t} className="text-[9px] font-medium tracking-[0.1em] uppercase text-muted-foreground bg-foreground/[0.04] border border-foreground/[0.07] px-[9px] py-[3px] rounded-sm">{t}</span>
          ))}
        </div>
      </div>

      {/* Nichy & AfriFlow */}
      <div className="reveal bg-background border border-primary/10 p-8 rounded hover:border-primary/[0.35] hover:-translate-y-1 transition-all">
        <div className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.15em] uppercase text-primary bg-primary/[0.08] border border-primary/20 px-3 py-1 rounded-full mb-[18px]">
          In Development
        </div>
        <div className="font-syne text-[26px] font-extrabold mb-2.5 leading-[1.1]">Nichy & AfriFlow</div>
        <p className="text-[13.5px] font-light text-foreground/[0.68] leading-[1.75] mb-[22px]">
          Two upcoming ventures within the Metabuilder & Automagikal sovereign stack. Nichy and AfriFlow are being architected as part of a deliberate infrastructure play for Africa's AI-native economy — alongside Small Axe, the fifth pillar of the stack.
        </p>
        <div className="flex flex-wrap gap-[5px]">
          {["Nichy", "AfriFlow", "Small Axe", "Sovereign Stack"].map((t) => (
            <span key={t} className="text-[9px] font-medium tracking-[0.1em] uppercase text-muted-foreground bg-foreground/[0.04] border border-foreground/[0.07] px-[9px] py-[3px] rounded-sm">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
