"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function InstitutionalVideo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-rp-bg)" }}
      aria-labelledby="video-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--color-rp-accent)" }}
          >
            QUIENES SOMOS EN ACCION
          </p>
          <h2
            id="video-heading"
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: "var(--color-rp-text-strong)" }}
          >
            Conocé el equipo y la metodología.
          </h2>
        </motion.div>

        {/* Placeholder video */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            aspectRatio: "16 / 9",
            backgroundColor: "var(--color-rp-bg-soft)",
            border: "1px solid var(--color-rp-border)",
          }}
          aria-label="Video institucional — próximamente"
        >
          {/* Icono play */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--color-rp-accent-soft)",
              border: "2px solid var(--color-rp-border)",
            }}
            aria-hidden="true"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="var(--color-rp-accent)"
              stroke="none"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>

          {/* Label */}
          <p
            className="absolute bottom-6 text-sm font-medium"
            style={{ color: "var(--color-rp-text-subtle)" }}
          >
            Video institucional próximamente
          </p>

          {/* Estructura preparada para video real:
          <video
            preload="none"
            poster="/video/multilab-poster.jpg"
            controls
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/multilab-institucional.mp4" type="video/mp4" />
          </video>
          */}
        </motion.div>
      </div>
    </section>
  );
}
