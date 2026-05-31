"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, FlaskConical, HardHat, Wheat, Pill, Mountain, Building2, Factory } from "lucide-react";

const sectors = [
  { icon: UtensilsCrossed, label: "Industria alimentaria" },
  { icon: FlaskConical, label: "Química y petroquímica" },
  { icon: HardHat, label: "Construcción" },
  { icon: Wheat, label: "Agropecuario" },
  { icon: Pill, label: "Farmacéutica" },
  { icon: Mountain, label: "Minería" },
  { icon: Building2, label: "Servicios municipales" },
  { icon: Factory, label: "Manufactura" },
];

export default function SectorsGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Trabajamos con empresas de todos los sectores industriales
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-[#c8e6c9] hover:bg-[#e8f5e9] transition-colors cursor-default group"
              >
                <Icon size={28} className="text-[#2E7D32] group-hover:text-[#1B5E20] transition-colors" />
                <span className="text-sm font-medium text-[#1a2e1a] text-center leading-tight">{sector.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
