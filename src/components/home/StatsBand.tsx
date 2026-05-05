"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    prefix: "+",
    value: 10,
    suffix: "",
    label: "Años de trayectoria",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    prefix: "+",
    value: 500,
    suffix: "",
    label: "Análisis mensuales",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
        <line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    prefix: "+",
    value: 15,
    suffix: "",
    label: "Tipos de estudios",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    prefix: "+",
    value: 30,
    suffix: "",
    label: "Empresas confían",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function Counter({
  target,
  prefix,
  suffix,
  shouldAnimate,
  hasStarted,
}: {
  target: number;
  prefix: string;
  suffix: string;
  shouldAnimate: boolean;
  hasStarted: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted || !shouldAnimate) {
      setCount(target);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, target, shouldAnimate]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-20"
      aria-label="Estadísticas de Multilab"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4CAF50]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-[#4CAF50]/20 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] mb-5 group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Counter */}
              <p
                className="font-black text-[#4CAF50] leading-none mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                aria-label={`${stat.prefix}${stat.value}${stat.suffix} ${stat.label}`}
              >
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  shouldAnimate={!shouldReduceMotion}
                  hasStarted={isInView}
                />
              </p>

              {/* Label */}
              <p className="text-white/45 text-sm font-medium" aria-hidden="true">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
