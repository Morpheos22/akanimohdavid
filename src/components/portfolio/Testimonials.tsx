import PanelSection from "./PanelSection";
import sherwynImg from "@/assets/sherwyn.png";
import faizaImg from "@/assets/faiza.jpg";
import liamImg from "@/assets/liam.jpg";

const reviews = [
  {
    initials: "SS",
    name: "Sherwyn Singh",
    role: "Founder, Automagikal",
    source: "Google Review",
    photo: sherwynImg,
    quote: "I brought them a digital headache; they handed me a scalable, elegant solution. The team operates with a rare mix of high-level professionalism and sharp, no-nonsense execution.",
  },
  {
    initials: "AG",
    name: "Akoloko Gideon",
    role: "Verified Client",
    source: "Google Review",
    quote: 'If you want your digital presence to just "exist," go elsewhere. If you want it to dominate, work with Metabuilder. Aggressively effective, delivered with absolute precision. 10/10',
  },
  {
    initials: "SO",
    name: "Shadrach Onaemo",
    role: "Content Writer & Digital Entrepreneur",
    source: "LinkedIn Recommendation",
    quote: "When David Akanimoh sets his mind on something, he usually achieves it. Confident, determined, and plays well with others. I recommend David for any role that requires a creative, driven, and results-oriented individual.",
  },
  {
    initials: "SL",
    name: "Skiiwalka Liam",
    role: "Verified Client",
    source: "Google Review",
    photo: liamImg,
    quote: "Finding a tech team that actually understands both flawless software development and digital strategy is like finding a unicorn. Metabuilder is that unicorn. Fast, sharp, and wickedly smart.",
  },
  {
    initials: "CE",
    name: "Chiazam Egbo",
    role: "HR Manager, ENCOM LIMITED",
    source: "LinkedIn Recommendation",
    quote: "During our years in tertiary institution, David displayed exemplary qualities as a leader, team builder and effective communicator. He carried out his duties with discipline and gusto.",
  },
  {
    initials: "FF",
    name: "Faiza Fadipe",
    role: "Verified Client",
    source: "Google Review",
    photo: faizaImg,
    quote: "Highly recommend! It's so good and easy to use.",
  },
];

const Testimonials = () => (
  <PanelSection id="testimonials" label="Signal" eyebrow="Social Proof">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reviews.map((r) => (
        <div
          key={r.initials + r.name}
          className="reveal bg-card/60 border border-primary/15 p-6 rounded-sm relative hover:border-primary/50 transition-colors overflow-hidden"
        >
          <div className="absolute inset-0 bg-hex-dense opacity-15 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="text-primary text-xs tracking-[2px]">★★★★★</div>
              <div className="font-mono text-[9px] tracking-[0.2em] text-primary/50 uppercase">TX-{r.initials}</div>
            </div>
            <p className="text-[13px] font-light text-foreground/[0.75] leading-[1.85] mb-5 italic">"{r.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
              {r.photo ? (
                <img src={r.photo} alt={r.name} className="w-9 h-9 rounded-sm object-cover border border-primary/40 shrink-0" />
              ) : (
                <div className="w-9 h-9 bg-primary/15 border border-primary/40 rounded-sm flex items-center justify-center font-display text-xs font-bold text-primary shrink-0">
                  {r.initials}
                </div>
              )}
              <div>
                <div className="text-[13px] font-semibold text-foreground mb-px">{r.name}</div>
                <div className="text-[11px] font-light text-muted-foreground">{r.role}</div>
                <div className="font-display text-[9px] font-bold tracking-[0.2em] uppercase text-primary/70 mt-0.5">{r.source}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </PanelSection>
);

export default Testimonials;
