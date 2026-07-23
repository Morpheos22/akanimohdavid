import PanelSection from "./PanelSection";

const credentials = [
  { text: "Chief AI Officer", sub: "Metabuilder Solutions Limited, Abuja" },
  { text: "Google Certified Educator", sub: "Level 1 & Level 2" },
  { text: "Ecosystem Educator", sub: "University of Abuja & Veritas University" },
  { text: "Former HNW Relationship Manager", sub: "Keystone Bank" },
  { text: "Strategic Growth Advisor Partner", sub: "Automagikal (Sherwyn Singh)" },
  { text: "Z.ai Startup Partner", sub: "GLM Model Family, secured via Tanya (Z.ai Ecosystem)" },
  { text: "ElevenLabs Partner", sub: "Voice AI & Audio Infrastructure" },
  { text: "B.Sc. Political Science & Diplomacy", sub: "Veritas University" },
  { text: "Lead Facilitator", sub: "Collective Lab × GDG Buildathon, Abuja" },
  { text: "Judge", sub: "Nile University Alumni Startup Competition" },
];

const About = () => (
  <PanelSection id="about" label="About" eyebrow="Who I Am">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="reveal">
        <p className="text-[15px] font-light text-foreground/[0.75] leading-[1.9] mb-6">
          <strong className="text-foreground font-medium">David Akanimoh</strong> is a creative technologist, systems integrator, and the Chief AI Officer of Metabuilder Solutions Limited. Bridging a foundational background in political science and diplomacy with agile, self-taught engineering, David specializes in modern web development, AI video content creation, and architecting autonomous AI agent orchestration workflows and forensic verification solutions like the <strong className="text-foreground font-medium">Voight-Kampff framework</strong>.
        </p>
        <p className="text-[15px] font-light text-foreground/[0.75] leading-[1.9] mb-6">
          Operating out of Abuja, he combines deep systems thinking with cutting-edge digital craftsmanship to drive innovative software and multimedia projects. As an ecosystem builder and educator, he actively shapes the tech landscape across institutions like the <strong className="text-foreground font-medium">University of Abuja</strong> and <strong className="text-foreground font-medium">Veritas University</strong>, while scaling enterprise solutions through Metabuilder.
        </p>

        <div className="bg-card/60 border border-primary/25 border-l-[3px] border-l-primary p-5 rounded-sm mt-8">
          <div className="font-display text-[9px] font-bold tracking-[0.28em] text-primary uppercase mb-2">The SIGMA Framework</div>
          <div className="text-[13px] font-light text-foreground/[0.72] leading-[1.75]">
            Original conceptual contribution on AI's sociopolitical impact in Africa:<br />
            <span className="text-foreground font-medium">Sovereignty · Inclusion · Governance · Media Integrity · Agency</span>
          </div>
        </div>
      </div>
      <div className="reveal">
        <div className="font-display text-[10px] font-bold tracking-[0.28em] uppercase text-muted-foreground mb-4">
          // Credentials.log
        </div>
        <div className="flex flex-col gap-2">
          {credentials.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-3 bg-card/60 border border-primary/15 rounded-sm hover:border-primary/50 hover:translate-x-1 transition-all"
            >
              <span className="font-mono text-[10px] text-primary/70 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <div className="text-[12.5px] font-normal text-foreground/[0.72] leading-[1.5]">
                <strong className="text-foreground font-medium">{c.text}</strong> — {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PanelSection>
);

export default About;
