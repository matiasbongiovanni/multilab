"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  analyses: string[];
  additionalInfo?: string[];
  ctaText?: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  longDescription,
  icon,
  color,
  bgGradient,
  analyses,
  additionalInfo,
  ctaText = "Solicitar análisis",
}: ServiceDetailProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero section */}
      <section
        className={`relative pt-24 pb-16 lg:pt-32 lg:pb-20 ${bgGradient} overflow-hidden`}
        aria-label={`Servicio: ${title}`}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center`}>
              {icon}
            </div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-rp-accent)" }}
            >
              {subtitle}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "var(--color-rp-text-strong)" }}
            >
              {title}
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--color-rp-text-muted)" }}
            >
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[52px]"
                style={{ backgroundColor: "var(--color-rp-accent)" }}
              >
                {ctaText}
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
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all duration-200 min-h-[52px]"
                style={{
                  border: "2px solid var(--color-rp-accent)",
                  color: "var(--color-rp-accent)",
                }}
              >
                Consultar disponibilidad
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content section */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-rp-bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Analyses list */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold mb-8"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                Análisis disponibles
              </h2>
              <ul className="space-y-3" role="list">
                {analyses.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
                    className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-150"
                    style={{
                      backgroundColor: "var(--color-rp-bg-soft)",
                      border: "1px solid var(--color-rp-border)",
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--color-rp-accent-soft)",
                        color: "var(--color-rp-accent)",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "var(--color-rp-text)" }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Description + additional info */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {longDescription && (
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: "var(--color-rp-text-strong)" }}
                  >
                    Descripción del servicio
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--color-rp-text-muted)" }}>
                    {longDescription}
                  </p>
                </div>
              )}

              {additionalInfo && additionalInfo.length > 0 && (
                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "var(--color-rp-accent-soft)",
                    border: "1px solid var(--color-rp-border)",
                  }}
                >
                  <h3
                    className="font-semibold mb-4 flex items-center gap-2"
                    style={{ color: "var(--color-rp-accent)" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                    Información importante
                  </h3>
                  <ul className="space-y-2.5">
                    {additionalInfo.map((info, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--color-rp-text-muted)" }}
                      >
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--color-rp-accent)" }}
                        >
                          •
                        </span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ backgroundColor: "var(--color-rp-accent)" }}
              >
                <h3 className="font-bold text-xl mb-2">
                  ¿Necesitás más información?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Contactanos para conocer requisitos, tiempos de entrega y precios de cada análisis.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg transition-colors duration-200 text-sm"
                  style={{
                    backgroundColor: "white",
                    color: "var(--color-rp-accent)",
                  }}
                >
                  Ir al formulario de contacto
                  <svg
                    width="14"
                    height="14"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
