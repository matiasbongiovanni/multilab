"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-16 lg:py-20 bg-[#1C1917]"
      aria-label="Contacto — Multilab Risk Prevention"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/10 border border-[#DCFCE7]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Multilab Risk Prevention
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Necesitás un servicio técnico certificado?
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            El diagnóstico inicial es sin costo. Contactanos y te respondemos en menos de 24 horas hábiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Solicitar cotización
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/mis-estudios"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 bg-transparent text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Ver mis resultados
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
