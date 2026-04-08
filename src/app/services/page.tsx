"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import { services } from "@/lib/services";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src="/images/gallery-4.jpg" alt="Our Services" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text="Our Services" as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">Expert foundation solutions for every structural need</motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 0.08}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{service.excerpt}</p>
                      <span className="inline-flex items-center text-primary font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                        Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-dark grain-overlay">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <AnimatedText text="Need Help? Get a Free Inspection" as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-10" />
          <FadeUp delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <ContactForm variant="dark" />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
