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
    quote: "I brought them a digital headache; they handed me a scalable, elegant solution. The team operates with a rare mix of high-level professionalism and sharp, no-nonsense execution. If you want top-tier results without the typical tech jargon, this is the team.",
  },
  {
    initials: "AG",
    name: "Akoloko Gideon",
    role: "Verified Client",
    source: "Google Review",
    quote: 'If you want your digital presence to just "exist," go elsewhere. If you want it to dominate, work with Metabuilder. Their strategies across SEO, web development, and AI are aggressively effective and delivered with absolute precision. 10/10',
  },
  {
    initials: "SO",
    name: "Shadrach Onaemo",
    role: "Content Writer & Digital Entrepreneur",
    source: "LinkedIn Recommendation",
    quote: "When David Akanimoh sets his mind on something, he usually achieves it. He was a valuable team member — writing scripts, reviewing animations, creating content, and managing social media. Confident, determined, and plays well with others. I recommend David for any role that requires a creative, driven, and results-oriented individual.",
  },
  {
    initials: "SL",
    name: "Skiiwalka Liam",
    role: "Verified Client",
    source: "Google Review",
    photo: liamImg,
    quote: "Finding a tech team that actually understands both flawless software development and digital strategy is like finding a unicorn. Luckily, Metabuilder Solutions is that unicorn. Fast, sharp, and wickedly smart. They don't just build solutions; they build advantages.",
  },
  {
    initials: "CE",
    name: "Chiazam Egbo",
    role: "HR Manager, ENCOM LIMITED",
    source: "LinkedIn Recommendation",
    quote: "During our years in tertiary institution, David displayed exemplary qualities as a leader, team builder and effective communicator. Elected as class representative and student provost of his department, he carried out his duties with discipline and gusto, earning the respect of his peers and the faculty.",
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
  <section id="testimonials" className="py-24 px-[6vw] bg-card">
    <div className="flex items-center gap-3 mb-3.5 reveal">
      <div className="w-[26px] h-px bg-primary" />
      <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary">Social Proof</span>
    </div>
    <h2 className="font-syne text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-tight mb-14 reveal">
      What People<br />Are Saying.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {reviews.map((r) => (
        <div
          key={r.initials + r.name}
          className="reveal bg-background border border-primary/[0.08] p-7 rounded relative hover:border-primary/25 transition-colors"
        >
          <div className="absolute top-5 right-6 font-syne text-[64px] font-extrabold text-primary/[0.08] leading-none select-none">"</div>
          <div className="text-primary text-xs mb-3.5 tracking-[2px]">★★★★★</div>
          <p className="text-[13.5px] font-light text-foreground/[0.68] leading-[1.8] mb-5 italic">{r.quote}</p>
          <div className="flex items-center gap-3">
            {r.photo ? (
              <img src={r.photo} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-primary/25 shrink-0" />
            ) : (
              <div className="w-9 h-9 bg-primary/[0.12] border border-primary/25 rounded-full flex items-center justify-center font-syne text-xs font-bold text-primary shrink-0">
                {r.initials}
              </div>
            )}
            <div>
              <div className="text-[13px] font-semibold text-foreground mb-px">{r.name}</div>
              <div className="text-[11px] font-light text-muted-foreground">{r.role}</div>
              <div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-primary opacity-60 mt-0.5">{r.source}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
