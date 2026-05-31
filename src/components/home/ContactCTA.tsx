"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function ContactCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-16 lg:py-24 bg-transparent"
      aria-label="Contacto — Multilab Risk Prevention"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#1A2E1A] rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-20 lg:p-24 overflow-hidden shadow-2xl text-center border border-[#1A2E1A]/10"
        >
          {/* ── Glows decorativos de fondo ── */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#44A148]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#44A148]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

          {/* ── Contenido ── */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Etiqueta */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/30 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44A148] animate-pulse" aria-hidden="true" />
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
                Multilab Risk Prevention
              </span>
            </div>

            {/* Titular */}
            <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
              Consultoría y laboratorio técnico a tu servicio
            </h2>

            {/* Descripción */}
            <p className="text-white/70 text-lg lg:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              Te asesoramos en prevención, diagnóstico e informes certificados para empresas, industrias y municipios.<br />
              <span className="block mt-2">
                Resolvemos tu consulta <strong className="text-white font-semibold">en menos de 24&nbsp;hs hábiles</strong>.
              </span>
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/#contacto"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#44A148] hover:bg-[#38853b] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Solicitar cotización
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/login"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/10 hover:border-[#44A148]/50 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm hover:-translate-y-1"
              >
                <FileText 
                  size={18} 
                  className="text-white/70 group-hover:text-[#44A148] transition-colors" 
                  aria-hidden="true" 
                />
                Ver mis informes
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}