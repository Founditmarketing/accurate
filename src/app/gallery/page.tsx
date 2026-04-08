"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import { galleryImages } from "@/lib/services";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <Image src="/images/gallery-3.jpg" alt="Our Work" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <AnimatedText text="Our Work" as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/60 text-lg">Foundation repair projects across Louisiana</motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(i)}
                  className="group relative block overflow-hidden rounded-xl w-full break-inside-avoid cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider text-sm">
                      View
                    </span>
                  </div>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                &#10005;
              </button>
              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + galleryImages.length) % galleryImages.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-2xl transition-colors backdrop-blur-sm"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % galleryImages.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-2xl transition-colors backdrop-blur-sm"
              >
                &#8250;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
