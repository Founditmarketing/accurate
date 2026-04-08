"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCounter from "@/components/AnimatedCounter";
import ContactForm from "@/components/ContactForm";
import { services, locations, galleryImages } from "@/lib/services";

/* ─── FADE-UP WRAPPER ─── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── HERO ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image src="/images/hero.png" alt="Foundation repair work in Louisiana" fill sizes="100vw" className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            30+ Years of Experience
          </motion.div>
          <AnimatedText
            text="Setting the Standards in Foundation Repairs"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6"
            delay={0.3}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed"
          >
            Expert foundation repair, house leveling, and structural support services across Alexandria, Baton Rouge, and Lafayette, Louisiana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Get Free Inspection
            </Link>
            <Link href="/services" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:bg-white/10">
              Our Services
            </Link>
          </motion.div>

          {/* Mobile CTA — visible only on mobile where form is hidden */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 lg:hidden flex items-center gap-4"
          >
            <a href="tel:3183213000" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-semibold">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (318) 321-3000
            </a>
            <span className="text-white/30">|</span>
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Free Estimates</span>
          </motion.div>
        </div>

        {/* Right — Form (desktop only) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="hidden lg:block glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2 text-center font-display">
            Get a Free Inspection Today!
          </h3>
          <p className="text-white/50 text-sm text-center mb-6">No cost, no obligation</p>
          <ContactForm variant="dark" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ─── STATS TICKER ─── */
function StatsTicker() {
  const stats = [
    { value: 30, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "", label: "Locations" },
    { value: 1000, suffix: "s+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Licensed & Insured" },
  ];
  return (
    <section className="bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="py-2">
                <div className="text-3xl sm:text-4xl font-light font-display tracking-tight">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/50 mt-2 uppercase tracking-[0.2em] font-semibold">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES — EDITORIAL LAYOUT ─── */
function ServicesSection() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-14 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header — left-aligned for editorial feel */}
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <div className="accent-line mb-6" />
          </FadeUp>
          <AnimatedText text="What We Do" as="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted leading-relaxed">
              Call a foundation repair company you can trust. Setting the standards in all areas we serve across Louisiana.
            </p>
          </FadeUp>
        </div>

        {/* Featured service — large editorial card */}
        <FadeUp>
          <Link href={`/services/${featured.slug}`} className="group block mb-10">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border"
            >
              <div className="relative h-64 lg:h-[400px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Featured Service</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-display">
                  {featured.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                {featured.highlights && (
                  <ul className="space-y-2 mb-6">
                    {featured.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          </Link>
        </FadeUp>

        {/* Remaining services — compact grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {rest.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border h-full"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 text-sm font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">{service.excerpt}</p>
                    <span className="mt-3 inline-flex items-center text-primary font-semibold text-xs gap-1.5 group-hover:gap-2.5 transition-all">
                      Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT PREVIEW — ASYMMETRIC ─── */
function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="py-14 lg:py-28 gradient-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <FadeUp>
          <div className="relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden">
            <motion.div style={{ y: imgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
              <Image src="/images/gallery-6.jpg" alt="Accurate Shoring team at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider">
                30+ Years
              </div>
              <div className="bg-white/90 backdrop-blur-sm text-foreground px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider">
                3 Locations
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Text */}
        <div>
          <FadeUp>
            <div className="accent-line mb-6" />
          </FadeUp>
          <AnimatedText text="About Accurate Shoring & Foundation" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-6" />
          <FadeUp delay={0.2}>
            <p className="text-muted leading-relaxed mb-4">
              Accurate Shoring & Foundation of Louisiana is a foundation repair and house leveling company committed to excellence. With 30 years of experience, we provide structural support solutions for new and existing foundations.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-muted leading-relaxed mb-8">
              Our professionals specialize in concrete foundation support, house leveling, crawl spaces, and drainage. If your home has a failing foundation, our team will customize a solution to make your foundation structurally sound.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="grid grid-cols-3 gap-6 mb-8 border-t border-border pt-8">
              {[
                { val: 30, suf: "+", label: "Years" },
                { val: 3, suf: "", label: "Offices" },
                { val: 1000, suf: "s", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-light text-primary font-display tracking-tight">
                    <AnimatedCounter target={stat.val} suffix={stat.suf} />
                  </div>
                  <div className="text-xs text-muted uppercase tracking-[0.15em] mt-1 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all uppercase tracking-wider text-sm">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS (NEW) ─── */
function Testimonials() {
  const reviews = [
    { name: "Mike R.", location: "Alexandria, LA", text: "Accurate Shoring did an amazing job leveling our home. Professional, on time, and the results speak for themselves. Highly recommend!", rating: 5 },
    { name: "Sarah T.", location: "Baton Rouge, LA", text: "We had serious foundation cracks and they came out quickly for the inspection. The repair was done right and our doors close properly again.", rating: 5 },
    { name: "James L.", location: "Lafayette, LA", text: "Great experience from start to finish. The crew was knowledgeable and explained every step of the process. Our crawlspace has never been better.", rating: 5 },
  ];

  return (
    <section className="py-14 lg:py-28 gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left — editorial header */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <div className="accent-line mb-6" />
            </FadeUp>
            <AnimatedText text="What Our Clients Say" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-4" />
            <FadeUp delay={0.2}>
              <p className="text-muted leading-relaxed mb-6">
                Don&apos;t just take our word for it. See what homeowners across Louisiana say about our work.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">5.0 Average</span>
              </div>
              <a
                href="https://g.page/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Leave a Review
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </FadeUp>
          </div>

          {/* Right — staggered testimonial cards */}
          <div className="space-y-6">
            {reviews.map((t, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className={`bg-white rounded-2xl p-8 shadow-sm border border-border ${i === 1 ? "lg:ml-12" : ""}`}>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 text-lg">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
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
      </div>
    </section>
  );
}

/* ─── VALUES — ASYMMETRIC EDITORIAL ─── */
function Values() {
  const values = [
    { icon: "★", title: "Our Commitment", text: "We are committed to providing our clients with the best possible service and ensuring that service is designed to meet each client's structural concerns." },
    { icon: "✓", title: "Why Choose Us", text: "30 years of professional experience. Proper permits & licenses. Financing options through Regions Bank." },
    { icon: "◆", title: "Our Vision", text: "To set the new standards in foundation repairs with accurate and precise repair plans." },
    { icon: "▶", title: "Our Mission", text: "To provide quality Foundation Repair services that clients recommend to family and friends, employees are proud of, and that ensure the longevity of our company." },
  ];

  return (
    <section className="py-14 lg:py-28 gradient-dark relative grain-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left — big statement */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <div className="h-px w-12 bg-gradient-to-r from-accent to-primary mb-6" />
            </FadeUp>
            <AnimatedText text="Our Commitment to Excellence" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" />
            <FadeUp delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                Every foundation we repair is built on trust, expertise, and an uncompromising standard of quality.
              </p>
            </FadeUp>
          </div>

          {/* Right — value cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-7 hover:border-primary/30 transition-colors group h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary text-lg mb-4 group-hover:bg-primary/25 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{v.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY PREVIEW ─── */
function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);
  return (
    <section className="py-14 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <div className="accent-line mx-auto mb-6" />
          </FadeUp>
          <AnimatedText text="Our Work" as="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg max-w-xl mx-auto">See the quality of our foundation repair projects across Louisiana.</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {previewImages.map((img, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <Link href="/gallery" className="group relative block overflow-hidden rounded-xl aspect-square">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider text-sm">
                    View Gallery
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── LOCATIONS ─── */
function LocationsSection() {
  return (
    <section className="py-14 lg:py-28 gradient-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <div className="accent-line mx-auto mb-6" />
          </FadeUp>
          <AnimatedText text="Serving Louisiana" as="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg">Three locations serving Alexandria, Baton Rouge, Lafayette & surrounding areas.</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <FadeUp key={loc.city} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-border group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">&#9906;</div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{loc.city}</h3>
                <p className="text-muted text-sm mb-2">{loc.address}</p>
                <a href={`tel:${loc.phoneRaw}`} className="text-primary font-bold text-lg hover:text-primary-dark transition-colors block mb-4 font-display">
                  {loc.phone}
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary font-semibold transition-colors uppercase tracking-wider"
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA SECTION ─── */
function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image src="/images/gallery-7.jpg" alt="Foundation repair work" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="accent-line mx-auto mb-6" />
        </FadeUp>
        <AnimatedText text="Get a Free Inspection Today!" as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4" />
        <FadeUp delay={0.2}>
          <p className="text-white/50 text-center mb-10 text-lg">Homeowners — protect your investment. No cost, no obligation.</p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="glass-card rounded-2xl p-8">
            <ContactForm variant="dark" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const items = [
    { icon: "★", label: "Licensed & Insured" },
    { icon: "●", label: "Regions Bank Financing" },
    { icon: "✓", label: "BBB Accredited" },
    { icon: "◆", label: "30 Years Experience" },
  ];
  return (
    <section className="py-12 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="flex items-center justify-center gap-3 py-3">
                <span className="text-accent text-lg">{item.icon}</span>
                <span className="text-sm font-semibold text-foreground uppercase tracking-wide">{item.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsTicker />
      <ServicesSection />
      <AboutPreview />
      <Testimonials />
      <Values />
      <GalleryPreview />
      <LocationsSection />
      <CtaSection />
      <TrustBar />
    </>
  );
}
