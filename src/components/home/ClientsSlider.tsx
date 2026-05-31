"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const clients = [
  { name: "Adolfo Cassaro e Hijos SRL", logo: "/clientes/adolfo-cassaro.png", useImg: true },
  { name: "Alimentación del Centro SA", logo: "/clientes/alimentacion-del-centro.png", useImg: true },
  { name: "Canteras Diquecito SA", logo: "/clientes/canteras-diquecito.png", useImg: true },
  { name: "Cantesur SA", logo: null, useImg: false },
  { name: "Dicca ICSA", logo: null, useImg: false },
  { name: "Cía. Cervecera Argentina SRL", logo: null, useImg: false },
  { name: "Clínica de Ojos Reyes Giobellina", logo: "/clientes/clinica-reyes-giobellina.png", useImg: true },
  { name: "La Casa de las Chopperas SRL", logo: null, useImg: false },
  { name: "Ledesma SAIC", logo: "/clientes/ledesma.png", useImg: true },
  { name: "Servicios de Radio y TV (UNC)", logo: "/clientes/servicios-radio-tv-unc.png", useImg: true },
  { name: "Maderas Misioneras SRL", logo: "/clientes/maderas-misioneras.png", useImg: true },
  { name: "Peri S.A.", logo: "/clientes/peri.png", useImg: true },
  { name: "Silcar SAS", logo: "/clientes/silcar.png", useImg: true },
  { name: "Export Pack SRL", logo: "/clientes/export-pack.png", useImg: true },
  { name: "Ferrus SRL", logo: "/clientes/ferrus.png", useImg: true },
];

function ClientLogo({ name, logo, useImg }: (typeof clients)[0]) {
  if (useImg && logo) {
    return (
      <div className="flex items-center justify-center px-8 shrink-0">
        <div className="relative h-10 w-36">
          <Image
            src={logo}
            alt={`Logo de ${name}`}
            fill
            sizes="144px"
            className="object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center px-8 shrink-0">
      <span className="text-sm font-semibold text-[#9CA3AF] hover:text-[#6B7280] transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ClientsSlider() {
  const reduce = useReducedMotion();
  const doubled = [...clients, ...clients];

  return (
    <section
      className="py-12 border-y border-[#E5E7EB] bg-white overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p
          id="clients-heading"
          className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Confían en nosotros
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-center ${reduce ? "" : "animate-marquee"}`}
          aria-hidden={!reduce}
        >
          {doubled.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} {...client} />
          ))}
        </div>

        {/* Accessible static list for screen readers */}
        {reduce && (
          <ul className="sr-only">
            {clients.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
