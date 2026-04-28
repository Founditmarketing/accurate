"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { services } from "@/lib/services";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About Us",  href: "/about" },
  { label: "Services",  href: "/services", hasDropdown: true },
  { label: "Gallery",   href: "/gallery" },
  { label: "Locations", href: "/locations" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const dark = scrolled;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        dark
          ? "bg-foreground shadow-2xl py-2 border-b border-white/5"
          : "bg-white shadow-sm py-3 border-b border-border"
      }`}
    >
      {/* Animated red progress line at bottom of nav on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.4 }}
      />

      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Accurate Shoring & Foundation"
            width={200}
            height={60}
            className={`h-12 sm:h-14 w-auto transition-all duration-300 ${dark ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
            >
              <Link
                href={link.href}
                className={`px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors relative group ${
                  dark ? "text-white/80 hover:text-accent" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                {link.hasDropdown && (
                  <svg className="inline ml-1 w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-foreground border border-white/10 overflow-hidden shadow-2xl"
                      style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
                    >
                      <div className="h-0.5 bg-gradient-to-r from-primary to-accent" />
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-5 py-3 text-[11px] font-bold text-white/70 hover:text-white hover:bg-primary/20 hover:pl-7 transition-all duration-200 tracking-wider uppercase"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase transition-all duration-300 corner-cut shimmer-btn"
          >
            Free Inspection
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${dark ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className={`block w-6 h-0.5 ${dark ? "bg-white" : "bg-foreground"}`} />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className={`block w-6 h-0.5 ${dark ? "bg-white" : "bg-foreground"}`} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className={`block w-6 h-0.5 ${dark ? "bg-white" : "bg-foreground"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-0 bg-foreground z-50 lg:hidden overflow-y-auto"
          >
            <div className="h-0.5 bg-gradient-to-r from-primary to-accent" />
            <div className="flex flex-col p-6 gap-1 mt-16">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pb-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/50 hover:text-accent transition-colors tracking-wider"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 block text-center bg-primary text-white font-bold py-4 text-lg uppercase tracking-widest corner-cut shimmer-btn"
                >
                  Get Free Inspection
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
