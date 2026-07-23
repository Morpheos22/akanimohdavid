import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-card border-t border-primary/25 px-[6vw] py-6 flex items-center justify-between flex-wrap gap-3 md:flex-row flex-col text-center relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="flex items-center gap-3">
      <img src={logo} alt="Metabuilder Solutions Limited" className="h-5 invert mix-blend-screen" />
      <span className="font-display text-[10px] font-bold tracking-[0.28em] uppercase text-primary/70">MDL // 2026</span>
    </div>
    <div className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
      © 2026 David Akanimoh — Chief AI Officer, Metabuilder
    </div>
    <div className="flex gap-4">
      {[
        { href: "#about", label: "About" },
        { href: "#showcase", label: "Showcase" },
        { href: "#projects", label: "Portfolio" },
        { href: "mailto:morpheos@cc.cc", label: "Contact" },
      ].map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="font-display text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          {l.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
