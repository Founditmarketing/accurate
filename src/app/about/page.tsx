"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCounter from "@/components/AnimatedCounter";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <section ref={ref} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image src="/images/gallery-5.jpg" alt={title} fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-4">
        <AnimatedText text={title} as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">{subtitle}</motion.p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Regulations, Safety & Commitment to Excellence" />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/images/about.png" alt="About Accurate Shoring" fill className="object-cover" />
            </div>
          </FadeUp>
          <div>
            <AnimatedText text="Protect Yourself. Know Who You're Hiring." as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-6" />
            <FadeUp delay={0.2}>
              <p className="text-muted leading-relaxed mb-6">Trust the professionals at Accurate Shoring & Foundation. We are focused on ensuring the safety of our repair plans, operations, employees, and clients. We&apos;ve been serving the residents of Louisiana for 30 years.</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-6">
                {[{ val: 30, suf: "+", label: "Years" }, { val: 3, suf: "", label: "Locations" }, { val: 100, suf: "%", label: "Licensed" }].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold text-primary font-display"><AnimatedCounter target={s.val} suffix={s.suf} /></div>
                    <div className="text-xs text-muted uppercase tracking-wider mt-1 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedText text="Licensing" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center" />
          <FadeUp delay={0.2}>
            <p className="text-muted leading-relaxed text-center mb-8">We are committed to providing our clients with the best possible service and to ensuring that service is designed to meet each of our clients&apos; structural concerns.</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Homeowners, Protect Yourself</h3>
              <p className="text-muted leading-relaxed">Not all licenses are the same. Contractors with a Home Improvement Contractor&apos;s license and/or a residential contractor&apos;s license are not protected under the law to perform foundation repairs, crawl space repairs, shoring, or house raisings. Please contact the Louisiana State Licensing Board for Contractors for further information.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedText text="Safety First" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-6" />
          <FadeUp delay={0.2}>
            <p className="text-muted leading-relaxed mb-8">Safety is the core value of our company. We work safe and we work smart. Our company is licensed and insured. We value safety by taking part in safety seminars, holding monthly safety meetings, and following strict safety guidelines.</p>
          </FadeUp>
        </div>
      </section>

      {/* Affiliates */}
      <section className="py-20 bg-surface-dark grain-overlay">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedText text="Affiliates & Community" as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CLC Engineering", text: "Consulting engineering firm offering civil, structural, and foundation design since 1994. Available for engineer's reports after residential inspections." },
              { title: "Ballard CLC", text: "Quality civil engineering, planning, and surveying services since 1908. Available for commercial property engineer's reports." },
              { title: "Community Works", text: "Louisiana home and business owners may benefit from programs through the State of Louisiana, HUD, and FEMA." },
            ].map((a, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{a.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
