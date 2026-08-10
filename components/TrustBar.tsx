"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const facts = [
  { value: 4, suffix: "", label: "Core service areas" },
  { value: 1, suffix: "", label: "Helpful conversation" },
  { value: 0, suffix: "", label: "Obligation to proceed" },
  { value: 100, suffix: "%", label: "UK-wide availability" },
] as const;

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(value);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-8" aria-label="Service facts">
      <div className="container-shell grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="px-3 py-5 text-center sm:px-5"
          >
            <div className="text-3xl font-extrabold tracking-[-.04em] text-[#0b2655] sm:text-4xl">
              <CountUp value={fact.value} suffix={fact.suffix} />
            </div>
            <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{fact.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
