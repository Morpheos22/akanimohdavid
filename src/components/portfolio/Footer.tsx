import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-card border-t border-primary/[0.08] px-[6vw] py-7 flex items-center justify-between flex-wrap gap-3 md:flex-row flex-col text-center">
    <div>
      <img src={logo} alt="Metabuilder Solutions Limited" className="h-[22px] mix-blend-screen" />
    </div>
    <div className="text-[11px] text-muted-foreground font-light">
      © 2026 Akanimoh David — Metabuilder Solutions Limited
    </div>
    <div className="flex gap-5">
      {[
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "mailto:morpheos@cc.cc", label: "Contact" },
      ].map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-[10px] font-medium tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          {l.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
