const credentials = [
  { text: "Google Certified Educator", sub: "Level 1 & Level 2" },
  { text: "Co-Founder", sub: "Metabuilder Solutions Limited, Abuja" },
  { text: "Former HNW Relationship Manager", sub: "Keystone Bank" },
  { text: "Strategic Growth Advisor Partner", sub: "Automagikal (Sherwyn Singh)" },
  { text: "Z.ai Startup Partner", sub: "GLM Model Family, secured via Tanya (Z.ai Ecosystem)" },
  { text: "ElevenLabs Partner", sub: "Voice AI & Audio Infrastructure" },
  { text: "B.Sc. Political Science & Diplomacy", sub: "Veritas University" },
  { text: "Lead Facilitator", sub: "Collective Lab × GDG Buildathon, Abuja" },
  { text: "Judge", sub: "Nile University Alumni Startup Competition" },
  { text: "Class Representative & Student Provost", sub: "Veritas University" },
];

const About = () => (
  <section id="about" className="py-24 px-[6vw] bg-card">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div className="reveal">
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-[26px] h-px bg-primary" />
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">Who I Am</span>
        </div>
        <h2 className="font-syne text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-tight mb-3.5">
          Strategist.<br />Builder.<br />Bridge.
        </h2>
        <p className="text-[15px] font-light text-foreground/[0.68] leading-[1.85] mb-[18px]">
          <strong className="text-foreground font-medium">Metabuilder Solutions Limited</strong> is a forward-thinking technology company dedicated to solving complex challenges through custom digital solutions. Whether you are a startup needing end-to-end product development or an enterprise looking to integrate advanced AI capabilities — our team delivers.
        </p>
        <p className="text-[15px] font-light text-foreground/[0.68] leading-[1.85] mb-[18px]">
          Beyond software, we are pioneering <strong className="text-foreground font-medium">tech education across Africa</strong> through Metabuilder Academy, offering specialised training in fields like Forensic AI. We build the smart, scalable solutions your business needs to thrive.
        </p>
        <p className="text-[15px] font-light text-foreground/[0.68] leading-[1.85] mb-[18px]">
          My personal background spans Political Science & Diplomacy, HNW Relationship Management at Keystone Bank, and self-taught software development. That combination gives me an unusual vantage point where <strong className="text-foreground font-medium">capital, politics, and technology converge.</strong>
        </p>
        <div className="bg-background border border-primary/[0.12] border-l-[3px] border-l-primary p-5 rounded-r mt-7">
          <div className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase mb-2">The SIGMA Framework</div>
          <div className="text-[13px] font-light text-foreground/[0.68] leading-[1.75]">
            Original conceptual contribution on AI's sociopolitical impact in Africa:<br />
            <span className="text-foreground font-medium">Sovereignty · Inclusion · Governance · Media Integrity · Agency</span>
          </div>
        </div>
      </div>
      <div className="reveal">
        <div className="flex flex-col gap-2.5">
          {credentials.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-[13px] bg-background border border-primary/[0.08] rounded-sm hover:border-primary/30 hover:translate-x-1 transition-all"
            >
              <div className="w-[5px] h-[5px] bg-primary rounded-full shrink-0 mt-[5px]" />
              <div className="text-[12.5px] font-normal text-foreground/[0.68] leading-[1.45]">
                <strong className="text-foreground font-medium">{c.text}</strong> — {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
