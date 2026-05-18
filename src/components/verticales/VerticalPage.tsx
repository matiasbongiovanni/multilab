"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

interface ServiceItem {
  name: string;
  slug: string;
  description: string;
}

interface VerticalPageProps {
  name: string;
  eyebrow: string;
  claim: string;
  sub: string;
  services: ServiceItem[];
  useCases: string[];
  methodology: string[];
  breadcrumbHref: string;
}

export default function VerticalPage({
  name,
  eyebrow,
  claim,
  sub,
  services,
  useCases,
  methodology,
  breadcrumbHref,
}: VerticalPageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Header */}
        <section
          className="pt-28 pb-16 lg:pt-36 lg:pb-20"
          style={{ backgroundColor: "var(--color-rp-bg)" }}
          aria-labelledby="vertical-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name, href: breadcrumbHref }]} />

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-5"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-rp-accent)" }}
              >
                {eyebrow}
              </p>
              <h1
                id="vertical-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--color-rp-text-strong)",
                }}
              >
                {claim}
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "var(--color-rp-text-muted)",
                  maxWidth: "60ch",
                }}
              >
                {sub}
              </p>
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold rounded-xl transition-all duration-200 shadow-sm text-base"
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
                    width="16"
                    height="16"
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
        </section>

        {/* Sub-servicios */}
        <section
          className="py-20 lg:py-24"
          style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
          aria-labelledby="sub-servicios-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--color-rp-accent)" }}
              >
                ANÁLISIS DISPONIBLES
              </p>
              <h2
                id="sub-servicios-heading"
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                Servicios de {name}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "var(--color-rp-bg-elevated)",
                    border: "1px solid var(--color-rp-border)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ backgroundColor: "var(--color-rp-accent)" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: "var(--color-rp-text-strong)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-rp-text-muted)" }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section
          className="py-20 lg:py-24"
          style={{ backgroundColor: "var(--color-rp-bg)" }}
          aria-labelledby="use-cases-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  CASOS DE USO
                </p>
                <h2
                  id="use-cases-heading"
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{ color: "var(--color-rp-text-strong)" }}
                >
                  ¿Quién nos consulta?
                </h2>
                <ul className="space-y-4">
                  {useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-start gap-3"
                      style={{ color: "var(--color-rp-text-muted)" }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-rp-accent)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-base">{uc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  METODOLOGÍA
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{ color: "var(--color-rp-text-strong)" }}
                >
                  Cómo trabajamos
                </h2>
                <ol className="space-y-4">
                  {methodology.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-4"
                    >
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{
                          backgroundColor: "var(--color-rp-accent-soft)",
                          color: "var(--color-rp-accent)",
                        }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span
                        className="text-base"
                        style={{ color: "var(--color-rp-text-muted)" }}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
