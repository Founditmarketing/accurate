"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import { locations } from "@/lib/services";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src="/images/gallery-9.jpg" alt="Contact Us" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text="Contact Us" as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">We serve these cities & the surrounding areas!</motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <AnimatedText text="Get a Free Inspection Today!" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-8" />
            <FadeUp delay={0.2}>
              <ContactForm variant="light" />
            </FadeUp>
          </div>

          {/* Locations */}
          <div>
            <AnimatedText text="Our Locations" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-8" />
            <div className="space-y-6">
              {locations.map((loc, i) => (
                <FadeUp key={loc.city} delay={0.1 + i * 0.1}>
                  <div className="bg-surface rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl shrink-0">&#9906;</div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{loc.city}</h3>
                      <p className="text-muted text-sm mb-1">{loc.address}</p>
                      <a href={`tel:${loc.phoneRaw}`} className="text-primary font-bold hover:text-primary-dark transition-colors">{loc.phone}</a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
