"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { locations } from "@/lib/services";

export default function TopBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 50 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      animate={{ y: visible ? 0 : -48 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-foreground text-white text-xs font-semibold tracking-wide z-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-4 sm:gap-6">
        {/* Mobile: show only primary number */}
        <a href={`tel:${locations[0].phoneRaw}`} className="sm:hidden flex items-center gap-1.5 hover:text-accent transition-colors">
          <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call {locations[0].phone}</span>
        </a>
        <span className="sm:hidden text-white/30 text-[10px]">Serving LA Statewide</span>

        {/* Desktop: all locations */}
        {locations.map((loc, i) => (
          <span key={loc.city} className="hidden sm:flex items-center gap-1.5">
            {i > 0 && <span className="text-white/20 mx-1">&bull;</span>}
            <span className="font-bold text-accent/80">{loc.city.toUpperCase()}:</span>
            <a href={`tel:${loc.phoneRaw}`} className="hover:text-accent transition-colors">
              {loc.phone}
            </a>
          </span>
        ))}
        <span className="hidden lg:inline text-white/40 ml-2 text-[10px] uppercase tracking-widest">&bull; Serving These Cities & Surrounding Areas</span>
      </div>
    </motion.div>
  );
}
