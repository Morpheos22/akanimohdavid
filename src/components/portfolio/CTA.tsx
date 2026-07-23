import { useState } from "react";
import rabbit from "@/assets/rabbit.jpg";
import PanelSection from "./PanelSection";

const CTA = () => {
  const [hopping, setHopping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const triggerRabbit = () => {
    if (hopping) return;
    setHopping(true);
    setTimeout(() => setShowOptions(true), 500);
  };

  return (
    <PanelSection id="consult" label="Connect" eyebrow="Let's Build Together">
      <div className="text-center max-w-[600px] mx-auto">
        <h3 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.05] uppercase tracking-tight mb-4 reveal">
          Ready to Go<br /><span className="text-stroke-magenta">Down the Rabbit Hole?</span>
        </h3>
        <p className="text-[14px] font-light text-foreground/[0.7] max-w-[460px] mx-auto mb-10 leading-[1.75] reveal">
          Book a free 20-minute consultation, send a mail, or connect on LinkedIn. Pick your door.
        </p>

        <div className="relative inline-block reveal">
          <button
            onClick={triggerRabbit}
            className={`flex items-center gap-3 bg-transparent border border-primary/50 text-foreground font-display text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_40px_hsl(292_84%_61%/0.3)] transition-all relative z-10 ${hopping ? "rabbit-hopping opacity-0 pointer-events-none" : ""}`}
            style={hopping ? { transition: "opacity 0.1s 0.45s" } : {}}
          >
            <img src={rabbit} alt="White Rabbit" className="w-8 h-8 object-contain invert mix-blend-screen" />
            Follow the White Rabbit
          </button>

          <div
            className={`absolute top-1/2 left-1/2 flex gap-3 whitespace-nowrap transition-all duration-500 ${
              showOptions
                ? "opacity-100 -translate-x-1/2 -translate-y-1/2 scale-100 pointer-events-auto"
                : "opacity-0 -translate-x-1/2 -translate-y-1/2 scale-[0.8] pointer-events-none"
            } flex-col sm:flex-row items-center`}
          >
            <a
              href="https://calendly.com/morphylee22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-sm font-display text-[10px] font-bold tracking-[0.18em] uppercase bg-primary text-primary-foreground shadow-[0_0_30px_hsl(292_84%_61%/0.4)] hover:-translate-y-1 transition-transform"
            >
              📅 Calendly
            </a>
            <a
              href="mailto:morpheos@cc.cc"
              className="flex items-center gap-2 px-5 py-3 rounded-sm font-display text-[10px] font-bold tracking-[0.18em] uppercase bg-secondary text-foreground border border-primary/40 hover:-translate-y-1 transition-transform"
            >
              ✉ Email
            </a>
            <a
              href="https://www.linkedin.com/in/david-akanimoh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-sm font-display text-[10px] font-bold tracking-[0.18em] uppercase bg-[#0A66C2] text-foreground hover:-translate-y-1 transition-transform"
            >
              👥 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </PanelSection>
  );
};

export default CTA;
