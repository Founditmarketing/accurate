"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import { locations } from "@/lib/services";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function LocationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src="/images/gallery-8.jpg" alt="Locations" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text="Locations" as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg max-w-2xl mx-auto">
            Serving Alexandria, Lafayette, and Baton Rouge with expert foundation repair solutions tailored to Louisiana&apos;s unique soil conditions.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <FadeUp key={loc.city} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
                >
                  <div className="h-2 bg-primary" />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6">&#9906;</div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 font-display">{loc.city}, LA</h3>
                    <p className="text-muted mb-2">{loc.address}</p>
                    <a href={`tel:${loc.phoneRaw}`} className="text-primary font-bold text-2xl block mb-6 hover:text-primary-dark transition-colors font-display">
                      {loc.phone}
                    </a>
                    <div className="flex flex-col gap-3">
                      <a href={`tel:${loc.phoneRaw}`} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl text-center text-sm uppercase tracking-wider transition-colors">
                        Call Now
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-gray-200 hover:border-primary text-foreground hover:text-primary font-bold py-3 rounded-xl text-center text-sm uppercase tracking-wider transition-colors"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
