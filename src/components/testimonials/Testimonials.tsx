"use client";

import { motion } from "framer-motion";

// TODO: REPLACE_WITH_REAL_TESTIMONIALS
const testimonials = [
  {
    quote: "Multilab nos ayudó a regularizar toda la documentación ambiental de nuestra planta ante OPDS en menos de 60 días. Los informes fueron aceptados sin observaciones.",
    name: "Responsable de Medio Ambiente",
    company: "Empresa metalúrgica",
    location: "Provincia de Buenos Aires",
    initials: "RM",
  },
  {
    quote: "Contratamos las mediciones de higiene y seguridad para cumplir con la Ley 19.587. El equipo fue puntual, el informe claro y nos ayudó a presentarlo ante la ART sin problemas.",
    name: "Gerente de Planta",
    company: "Industria alimentaria",
    location: "Córdoba",
    initials: "GP",
  },
  {
    quote: "Necesitábamos análisis de efluentes para renovar habilitación municipal. Multilab coordinó la toma de muestra en 48 hs y entregó resultados dentro del plazo acordado.",
    name: "Responsable de Calidad",
    company: "Planta de tratamiento",
    location: "Mendoza",
    initials: "RC",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#1B5E20] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a]" style={{ fontFamily: "var(--font-heading)" }}>
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f9fdf9] rounded-2xl border border-[#c8e6c9] p-6 flex flex-col gap-4"
            >
              <p className="text-[#1a2e1a] text-sm leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#c8e6c9]">
                <div className="w-9 h-9 rounded-full bg-[#2E7D32] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e1a]">{t.name}</p>
                  <p className="text-xs text-[#3d5c3d]">{t.company} — {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
