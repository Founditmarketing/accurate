"use client";
import { useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import { getServiceBySlug, services } from "@/lib/services";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const service = getServiceBySlug(slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const otherServices = services.filter((s) => s.slug !== slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary font-bold">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text={service.title} as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">Service Details</motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-16">
          {/* Main */}
          <div className="lg:col-span-2">
            {service.description.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <p className="text-muted leading-relaxed mb-6 text-lg">{p}</p>
              </FadeUp>
            ))}

            {service.signs && service.signs.length > 0 && (
              <FadeUp delay={0.3}>
                <div className="mt-10 bg-surface rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Warning Signs to Watch For</h3>
                  <ul className="space-y-3">
                    {service.signs.map((sign, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-muted"
                      >
                        <span className="text-primary font-bold mt-0.5">&#10003;</span>
                        {sign}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {service.highlights && (
              <FadeUp>
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Why Choose Us</h4>
                  <ul className="space-y-3">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted">
                        <span className="text-primary">&#9733;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            )}

            <FadeUp delay={0.2}>
              <div className="bg-primary rounded-2xl p-6 text-white text-center">
                <h4 className="text-2xl font-bold mb-2">Free Estimates!</h4>
                <p className="text-white/70 text-sm mb-4">Call now for a professional inspection</p>
                <a href="tel:3183213000" className="block text-2xl font-bold hover:text-white/80 transition-colors">(318) 321-3000</a>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-surface rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-4">Request Inspection</h4>
                <ContactForm variant="light" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Other Services</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-20 rounded-lg overflow-hidden mb-3">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{s.shortTitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
