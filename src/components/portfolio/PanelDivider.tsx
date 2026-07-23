const glyphs = "▚▞░▒▓█▮▯▤▥▦▧▨▩◆◇◈◉◊○●◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯▰▱▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅";

const PanelDivider = () => (
  <div className="relative h-10 w-full overflow-hidden bg-hex-dense border-y border-primary/20" aria-hidden>
    <div className="absolute inset-0 opacity-70 flex items-center whitespace-nowrap font-mono text-[10px] tracking-[0.3em] text-primary/40 animate-drift select-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="px-4">
          {glyphs.slice(0, 80)} · SIGNAL · {glyphs.slice(20, 90)} · MDL · {glyphs.slice(10, 70)}
        </span>
      ))}
    </div>
    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="absolute inset-x-0 top-1/2 h-px bg-primary/30 blur-[2px]" />
    <div className="absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-scanline" />
  </div>
);

export default PanelDivider;
