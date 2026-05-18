"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const contactInfo = [
  {
    label: "WhatsApp",
    value: "Consultanos ahora",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "contacto@multilab.com.ar",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Horarios",
    value: "Lun–Vie 8:00–17:00 hs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function ContactCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28"
      aria-labelledby="cta-heading"
      style={{ backgroundColor: "oklch(99.5% 0.003 143)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* CTA card */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 p-8 sm:p-12 rounded-2xl"
            style={{
              backgroundColor: "oklch(99.5% 0.003 143)",
              border: "1px solid oklch(91% 0.013 143)",
            }}
          >
            <h2
              id="cta-heading"
              className="leading-[0.95] tracking-[-0.02em] mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: "oklch(13% 0.015 143)",
              }}
            >
              ¿Listo para solicitar
              <br />
              <span style={{ color: "oklch(42% 0.13 144)" }}>tus análisis?</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
            >
              Completá el formulario y te respondemos en menos de 24 horas para
              coordinar tu turno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm"
                style={{ backgroundColor: "oklch(42% 0.13 144)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(33% 0.11 144)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(42% 0.13 144)"; }}
              >
                Contactar ahora
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/mis-estudios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-xl border transition-colors duration-200"
                style={{
                  color: "oklch(42% 0.13 144)",
                  borderColor: "oklch(91% 0.013 143)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(96% 0.022 143)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                Ver mis informes
              </Link>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? {} : { opacity: 0, x: 16 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "oklch(98.5% 0.006 143)",
                  border: "1px solid oklch(91% 0.013 143)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "oklch(96% 0.022 143)",
                    color: "oklch(42% 0.13 144)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(44% 0.012 143)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "oklch(13% 0.015 143)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
