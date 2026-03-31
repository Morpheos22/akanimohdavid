import { useState } from "react";
import rabbit from "@/assets/rabbit.jpg";

const CTA = () => {
  const [hopping, setHopping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const triggerRabbit = () => {
    if (hopping) return;
    setHopping(true);
    setTimeout(() => setShowOptions(true), 500);
  };

  return (
    <section id="consult" className="bg-background py-[120px] px-[6vw] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,hsl(200_100%_50%/0.07)_0%,transparent_65%)] pointer-events-none" />
      <div className="relative z-10">
        <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-[18px]">Let's Build Together</div>
        <h2 className="font-syne text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.05] tracking-tight mb-[18px]">
          Ready to Go<br /><span className="text-primary">Down the Rabbit Hole?</span>
        </h2>
        <p className="text-[15px] font-light text-foreground/[0.68] max-w-[460px] mx-auto mb-12 leading-[1.75]">
          Book a free 20-minute consultation, send a mail, or connect on LinkedIn. Pick your door.
        </p>

        <div className="relative inline-block">
          <button
            onClick={triggerRabbit}
            className={`flex items-center gap-3.5 bg-transparent border border-primary/[0.35] text-foreground font-syne text-[13px] font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm hover:bg-primary/[0.06] hover:border-primary hover:shadow-[0_0_40px_hsl(200_100%_50%/0.15)] transition-all relative z-10 ${hopping ? "rabbit-hopping opacity-0 pointer-events-none" : ""}`}
            style={hopping ? { transition: "opacity 0.1s 0.45s" } : {}}
          >
            <img src={rabbit} alt="White Rabbit" className="w-8 h-8 object-contain brightness-0 invert" />
            Follow the White Rabbit
          </button>

          <div
            className={`absolute top-1/2 left-1/2 flex gap-3.5 whitespace-nowrap transition-all duration-400 ${
              showOptions
                ? "opacity-100 -translate-x-1/2 -translate-y-1/2 scale-100 pointer-events-auto"
                : "opacity-0 -translate-x-1/2 -translate-y-1/2 scale-[0.8] pointer-events-none"
            } flex-col sm:flex-row items-center`}
          >
            <a
              href="https://calendly.com/morphylee22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-[22px] py-3 rounded-sm font-syne text-[11px] font-bold tracking-[0.1em] uppercase bg-primary text-primary-foreground shadow-[0_0_30px_hsl(200_100%_50%/0.3)] hover:-translate-y-[3px] transition-transform"
            >
              📅 Book on Calendly
            </a>
            <a
              href="mailto:morpheos@cc.cc"
              className="flex items-center gap-2 px-[22px] py-3 rounded-sm font-syne text-[11px] font-bold tracking-[0.1em] uppercase bg-secondary text-foreground border border-primary/25 hover:-translate-y-[3px] transition-transform"
            >
              ✉ morpheos@cc.cc
            </a>
            <a
              href="https://www.linkedin.com/in/david-akanimoh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-[22px] py-3 rounded-sm font-syne text-[11px] font-bold tracking-[0.1em] uppercase bg-[#0A66C2] text-foreground hover:-translate-y-[3px] transition-transform"
            >
              👥 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
