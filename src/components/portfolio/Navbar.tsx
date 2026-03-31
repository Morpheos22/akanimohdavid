import logo from "@/assets/logo.jpg";
import rabbit from "@/assets/rabbit.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#speaking", label: "Speaking" },
  { href: "#testimonials", label: "Reviews" },
];

const Navbar = () => {
  const scrollToCTA = () => {
    document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-[6vw] h-16 flex items-center justify-between bg-background/90 backdrop-blur-[18px] border-b border-primary/[0.08]">
      <a href="#home">
        <img src={logo} alt="Metabuilder Solutions Limited" className="h-7" style={{ filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' }} />
      </a>
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollToCTA}
        className="flex items-center gap-2 bg-transparent border border-primary/30 text-primary px-[18px] py-2 rounded-sm font-syne text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-primary/[0.08] hover:border-primary transition-colors"
      >
        <img src={rabbit} alt="rabbit" className="w-5 h-5 brightness-0 invert" />
        Follow the White Rabbit
      </button>
    </nav>
  );
};

export default Navbar;
