"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const testimonials = [
  { name: "Mike R.", location: "Alexandria, LA", text: "Accurate Shoring did an amazing job leveling our home. Professional, on time, and the results speak for themselves. Highly recommend!", rating: 5 },
  { name: "Sarah T.", location: "Baton Rouge, LA", text: "We had serious foundation cracks and they came out quickly for the inspection. The repair was done right and our doors close properly again.", rating: 5 },
  { name: "James L.", location: "Lafayette, LA", text: "Great experience from start to finish. The crew was knowledgeable and explained every step. Our crawlspace has never been better.", rating: 5 },
  { name: "Patricia D.", location: "Pineville, LA", text: "After the flood damaged our foundation, Accurate Shoring raised our home and reinforced everything. They saved our house. Thank you!", rating: 5 },
];

export default function ReviewPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src="/images/gallery-11.jpg" alt="Leave a Review" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text="Leave a Review" as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">We value your feedback!</motion.p>
        </div>
      </section>

      {/* Leave a Review CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedText text="Share Your Experience" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-6" />
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg mb-10">Had a great experience with Accurate Shoring & Foundation? Leave us a review on your preferred platform!</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105 w-full sm:w-auto text-center">
                Review on Google
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-primary text-foreground hover:text-primary font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105 w-full sm:w-auto text-center">
                Review on Facebook
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedText text="What Our Clients Say" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center" />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xl">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-light text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
