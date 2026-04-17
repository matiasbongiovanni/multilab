"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { prefix: "+", value: 10, suffix: "", label: "Años de trayectoria" },
  { prefix: "+", value: 500, suffix: "", label: "Análisis realizados por mes" },
  { prefix: "+", value: 15, suffix: "", label: "Tipos de estudios disponibles" },
];

interface CounterProps {
  target: number;
  prefix: string;
  suffix: string;
  shouldAnimate: boolean;
  hasStarted: boolean;
}

function Counter({ target, prefix, suffix, shouldAnimate, hasStarted }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted || !shouldAnimate) {
      setCount(target);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
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
      {prefix}{count}{suffix}
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
      className="py-14 lg:py-16"
      style={{ backgroundColor: "#4CAF50" }}
      aria-label="Estadísticas de Multilab"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 sm:py-4 gap-2"
            >
              {/* Número animado */}
              <p
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
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
              <p
                className="text-white/80 text-sm sm:text-base font-medium text-center max-w-[160px]"
                aria-hidden="true"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
