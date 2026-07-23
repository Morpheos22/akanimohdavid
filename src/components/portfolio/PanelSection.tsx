import { ReactNode } from "react";

interface PanelSectionProps {
  id?: string;
  label: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  dense?: boolean;
}

const PanelSection = ({ id, label, eyebrow, children, className = "", dense = false }: PanelSectionProps) => (
  <section
    id={id}
    className={`relative overflow-hidden bg-hex-mesh ${dense ? "py-16" : "py-24"} px-[6vw] ${className}`}
  >
    <div className="absolute inset-0 panel-glow pointer-events-none" />
    <div className="relative z-10">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4 reveal">
          <div className="w-6 h-px bg-primary" />
          <span className="font-display text-[10px] font-semibold tracking-[0.28em] uppercase text-primary animate-flicker">
            {eyebrow}
          </span>
        </div>
      )}
      <div className="flex items-start justify-between gap-8 mb-10 reveal">
        <h2 className="panel-label">{label}</h2>
        <div className="hidden md:flex flex-col items-end gap-1 pt-4 shrink-0">
          <span className="font-mono text-[10px] tracking-[0.25em] text-primary/50 uppercase">// SECTOR</span>
          <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            {label.slice(0, 3)}-{String(label.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      {children}
    </div>
  </section>
);

export default PanelSection;
