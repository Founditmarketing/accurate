"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { services } from "@/lib/services";

interface ContactFormProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function ContactForm({ variant = "light", className = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = variant === "dark";

  const inputBase = isDark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
    : "bg-white border-gray-300 text-foreground placeholder:text-muted-light focus:border-primary";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-12 ${className}`}
      >
        <div className={`text-4xl mb-4 ${isDark ? "text-white" : "text-foreground"}`}>&#10003;</div>
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-foreground"}`}>Thank You!</h3>
        <p className={isDark ? "text-white/70" : "text-muted"}>We&apos;ll contact you shortly to schedule your free inspection.</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className={className}
    >
      <div className="space-y-4">
        <input type="text" placeholder="Name" required className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${inputBase}`} />
        <input type="tel" placeholder="Phone" required className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${inputBase}`} />
        <input type="email" placeholder="Email Address" required className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${inputBase}`} />
        <select defaultValue="" className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${inputBase}`}>
          <option value="" disabled>Select a Service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
        </select>
        <textarea placeholder="Message" rows={4} className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none resize-none ${inputBase}`} />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-lg tracking-wide uppercase"
        >
          Submit
        </motion.button>
      </div>
    </form>
  );
}
