"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: "var(--color-rp-accent-soft)" }}
            aria-hidden="true"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-rp-accent)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
          </div>

          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-rp-text-strong)",
              letterSpacing: "-0.01em",
            }}
          >
            ¿Necesitás un análisis?
          </h2>

          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--color-rp-text-muted)" }}
          >
            Completá el formulario y te respondemos en menos de 24 horas para
            coordinar tu turno o resolver cualquier consulta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md min-h-[52px] text-base"
              style={{ backgroundColor: "var(--color-rp-accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-rp-accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-rp-accent)")
              }
            >
              Contactar ahora
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/mis-estudios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-200 min-h-[52px] text-base border"
              style={{
                color: "var(--color-rp-text)",
                borderColor: "var(--color-rp-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--color-rp-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-rp-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--color-rp-border)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-rp-text)";
              }}
            >
              Ver mis informes
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
