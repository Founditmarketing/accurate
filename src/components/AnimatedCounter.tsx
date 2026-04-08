"use client";
import { useRef, useEffect, useState } from "react";
import { useInView, useSpring, useTransform, motion } from "motion/react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", prefix = "", className = "", duration = 1.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, { stiffness: 50, damping: 20 + duration * 5 });
  const rounded = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) springValue.set(target);
  }, [isInView, target, springValue]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplayValue(v));
    return unsub;
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
