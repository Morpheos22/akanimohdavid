import logo from "@/assets/logo.jpg";
import rabbit from "@/assets/rabbit.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#showcase", label: "Showcase" },
  { href: "#speaking", label: "Stage" },
  { href: "#testimonials", label: "Signal" },
];

const Navbar = () => {
  const scrollToCTA = () => {
    document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-[6vw] h-14 flex items-center justify-between bg-background/85 backdrop-blur-[18px] border-b border-primary/20">
      <a href="#home" className="flex items-center gap-2.5">
        <img src={logo} alt="Metabuilder Solutions Limited" className="h-6 invert mix-blend-screen" />
        <span className="hidden sm:block font-display text-[10px] font-bold tracking-[0.28em] uppercase text-primary">
          MDL / David
        </span>
      </a>
      <ul className="hidden md:flex gap-6 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative font-display text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollToCTA}
        className="flex items-center gap-2 bg-transparent border border-primary/40 text-primary px-4 py-1.5 rounded-sm font-display text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary/10 hover:border-primary transition-colors"
      >
        <img src={rabbit} alt="rabbit" className="w-4 h-4 invert mix-blend-screen" />
        Follow
      </button>
    </nav>
  );
};

export default Navbar;
