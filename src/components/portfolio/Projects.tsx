import PanelSection from "./PanelSection";

const Projects = () => (
  <PanelSection id="projects" label="Portfolio" eyebrow="What I'm Building">
    <p className="text-[15px] font-light text-foreground/[0.72] max-w-[520px] leading-[1.8] mb-10 reveal">
      A portfolio of AI-native ventures architected under or in collaboration with Metabuilder Solutions Limited.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* TrustScout — Featured */}
      <div className="reveal md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 bg-card/60 border border-primary/20 p-8 rounded-sm items-center hover:border-primary/60 hover:-translate-y-1 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-dense opacity-20 pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/15 border border-primary/40 px-3 py-1 rounded-sm mb-5">
            <span className="w-[5px] h-[5px] bg-primary rounded-full animate-pulse-dot" /> Beta
          </div>
          <div className="font-display text-[26px] font-bold mb-3 leading-[1.1] uppercase">TrustScout</div>
          <p className="text-[13.5px] font-light text-foreground/[0.72] leading-[1.8] mb-5">
            Africa's first buyer-initiated forensic vendor verification engine for social commerce. Powered by the Voight-Kampff multi-agent AI framework — four specialised agents (ZHORA, RACHEL, SEBASTIAN, DECKARD) working in concert to surface truth in African digital commerce.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["FastAPI", "Z.ai GLM", "Supabase", "Paystack", "Railway", "Lovable", "Cloudflare"].map((t) => (
              <span key={t} className="font-display text-[9px] font-medium tracking-[0.15em] uppercase text-muted-foreground bg-background/40 border border-primary/15 px-2 py-1 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col gap-3">
          {[
            { label: "Framework", value: "Voight-Kampff — ZHORA, RACHEL, SEBASTIAN, DECKARD" },
            { label: "Live At", value: "trustscout.dev" },
            { label: "Funding Active", value: "Pre-Seed" },
            { label: "AI Partnership", value: "Z.ai GLM — Startup Credits & Partner Status" },
          ].map((m) => (
            <div key={m.label} className="px-4 py-3 bg-background/60 rounded-sm border-l-2 border-l-primary">
              <div className="font-display text-[9px] font-bold tracking-[0.22em] uppercase text-primary mb-1">{m.label}</div>
              <div className="text-[12.5px] font-normal text-foreground/[0.75]">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* S.H.A.R.P. */}
      <div className="reveal bg-card/60 border border-primary/20 p-8 rounded-sm hover:border-primary/60 hover:-translate-y-1 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-dense opacity-20 pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/15 border border-primary/40 px-3 py-1 rounded-sm mb-5">
            Production
          </div>
          <div className="font-display text-[24px] font-bold mb-3 leading-[1.1] uppercase">S.H.A.R.P.</div>
          <p className="text-[13.5px] font-light text-foreground/[0.72] leading-[1.8] mb-5">
            Sovereign Humans Auditing Real Products. A biweekly AI tool review show co-hosted with Sherwyn Singh. Two editorial sections: <strong className="text-foreground font-medium">ATHENA</strong> (global AI tools stress-tested against African realities) and <strong className="text-foreground font-medium">NUBIA</strong> (African-built AI founders spotlight).
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Media", "AI Reviews", "ATHENA", "NUBIA", "Africa Focus"].map((t) => (
              <span key={t} className="font-display text-[9px] font-medium tracking-[0.15em] uppercase text-muted-foreground bg-background/40 border border-primary/15 px-2 py-1 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Nichy & AfriFlow */}
      <div className="reveal bg-card/60 border border-primary/20 p-8 rounded-sm hover:border-primary/60 hover:-translate-y-1 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-dense opacity-20 pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground bg-muted/30 border border-primary/20 px-3 py-1 rounded-sm mb-5">
            In Development
          </div>
          <div className="font-display text-[24px] font-bold mb-3 leading-[1.1] uppercase">Nichy & AfriFlow</div>
          <p className="text-[13.5px] font-light text-foreground/[0.72] leading-[1.8] mb-5">
            Two upcoming ventures within the Metabuilder & Automagikal sovereign stack. Nichy and AfriFlow are being architected as part of a deliberate infrastructure play for Africa's AI-native economy — alongside Small Axe, the fifth pillar of the stack.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Nichy", "AfriFlow", "Small Axe", "Sovereign Stack"].map((t) => (
              <span key={t} className="font-display text-[9px] font-medium tracking-[0.15em] uppercase text-muted-foreground bg-background/40 border border-primary/15 px-2 py-1 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PanelSection>
);

export default Projects;
