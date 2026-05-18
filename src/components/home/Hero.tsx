"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ backgroundColor: "var(--color-rp-bg)" }}
      aria-label="Presentación Multilab Risk Prevention"
    >
      {/* Background accent sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, var(--color-rp-accent-soft) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center w-full">

          {/* Left: texto editorial */}
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.p
              variants={shouldReduceMotion ? {} : itemVariants}
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-rp-accent)" }}
            >
              RISK PREVENTION · ARGENTINA
            </motion.p>

            {/* H1 display */}
            <motion.div
              variants={shouldReduceMotion ? {} : itemVariants}
            >
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  fontWeight: 900,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: "var(--color-rp-text-strong)",
                }}
                aria-label="Prevención de riesgos con respaldo científico"
              >
                Prevención de riesgos
                <br />
                <span style={{ color: "var(--color-rp-accent)" }}>
                  con respaldo científico.
                </span>
              </h1>
            </motion.div>

            {/* Descripción */}
            <motion.p
              variants={shouldReduceMotion ? {} : itemVariants}
              className="text-lg leading-relaxed max-w-xl"
              style={{
                color: "var(--color-rp-text-muted)",
                maxWidth: "55ch",
              }}
            >
              Análisis técnicos para Higiene y Seguridad, Laboratorio y
              Medioambiente, bajo la dirección de la{" "}
              <strong style={{ color: "var(--color-rp-text)", fontWeight: 600 }}>
                Lic. Cinthia Degliangioli
              </strong>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[52px] text-base"
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
                Solicitar análisis
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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-xl transition-all duration-200 min-h-[52px] text-base border"
                style={{
                  color: "var(--color-rp-text)",
                  borderColor: "var(--color-rp-border)",
                  backgroundColor: "transparent",
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
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex flex-wrap gap-x-5 gap-y-2 pt-1"
              aria-label="Indicadores de confianza"
            >
              {[
                "+10 años de trayectoria",
                "Lab habilitado",
                "Resultados digitales",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--color-rp-text-subtle)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-rp-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: imagen placeholder técnica */}
          <motion.div
            variants={shouldReduceMotion ? {} : imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="relative w-full max-w-sm aspect-square rounded-3xl flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: "var(--color-rp-bg-soft)",
                border: "1px solid var(--color-rp-border)",
              }}
            >
              {/* SVG técnico de laboratorio inline */}
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Erlenmeyer flask */}
                <path
                  d="M65 30h50M72 30v40L42 120a10 10 0 008 16h80a10 10 0 008-16L108 70V30"
                  stroke="var(--color-rp-accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Liquid inside */}
                <path
                  d="M52 120h76L112 90H68L52 120z"
                  fill="var(--color-rp-accent-soft)"
                />
                {/* Bubbles */}
                <circle cx="80" cy="105" r="4" fill="var(--color-rp-accent)" opacity="0.5" />
                <circle cx="95" cy="110" r="3" fill="var(--color-rp-accent)" opacity="0.4" />
                <circle cx="108" cy="103" r="2.5" fill="var(--color-rp-accent)" opacity="0.35" />
                {/* Microscope elements */}
                <rect x="125" y="50" width="28" height="6" rx="2" fill="var(--color-rp-border)" />
                <rect x="135" y="56" width="8" height="40" rx="2" fill="var(--color-rp-border)" />
                <rect x="125" y="96" width="28" height="4" rx="2" fill="var(--color-rp-border)" />
                <circle cx="139" cy="110" r="10" stroke="var(--color-rp-accent)" strokeWidth="2.5" fill="none" />
                {/* Decorative dots */}
                <circle cx="30" cy="60" r="3" fill="var(--color-rp-accent-soft)" />
                <circle cx="150" cy="150" r="5" fill="var(--color-rp-accent-soft)" />
                <circle cx="20" cy="140" r="4" fill="var(--color-rp-border)" />
              </svg>

              {/* Badge esquina */}
              <div
                className="absolute bottom-6 right-6 rounded-xl px-4 py-3 shadow-sm"
                style={{
                  backgroundColor: "var(--color-rp-bg-elevated)",
                  border: "1px solid var(--color-rp-border-soft)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  Risk Prevention
                </p>
                <p
                  className="text-sm font-bold mt-0.5"
                  style={{ color: "var(--color-rp-text-strong)" }}
                >
                  Multilab Argentina
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        style={{ color: "var(--color-rp-text-subtle)" }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Explorar
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
