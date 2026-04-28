"use client";
import { locations } from "@/lib/services";

const tickerItems = [
  { label: "Alexandria", phone: "(318) 321-3000", raw: "3183213000" },
  { label: "Lafayette",  phone: "(337) 346-2200", raw: "3373462200" },
  { label: "Baton Rouge",phone: "(225) 255-3070", raw: "2252553070" },
  { label: "Licensed & Insured", phone: null, raw: null },
  { label: "Free Estimates Available", phone: null, raw: null },
  { label: "30+ Years of Experience", phone: null, raw: null },
];

function TickerItem({ item }: { item: typeof tickerItems[0] }) {
  return (
    <span className="flex items-center gap-3 px-8 shrink-0">
      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
      <span className="text-accent/80 font-bold uppercase tracking-widest text-[10px]">
        {item.label}
      </span>
      {item.phone && (
        <>
          <span className="text-white/20">—</span>
          <a
            href={`tel:${item.raw}`}
            className="text-white/80 hover:text-accent transition-colors font-semibold text-[10px] tracking-wider"
          >
            {item.phone}
          </a>
        </>
      )}
    </span>
  );
}

export default function TopBar() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-foreground border-b border-white/5 overflow-hidden relative z-50 h-8 flex items-center">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

      <div className="ticker-track">
        {doubled.map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
