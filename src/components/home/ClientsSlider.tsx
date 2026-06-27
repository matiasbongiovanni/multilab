"use client";

import Image from "next/image";

const clients = [
  { name: "Adolfo Cassaro e Hijos SRL", logo: "/clientes/adolfo-cassaro.png" },
  { name: "Alimentación del Centro SA", logo: "/clientes/alimentacion-del-centro.png" },
  { name: "Canteras Diquecito SA", logo: "/clientes/canteras-diquecito.png" },
  { name: "Clínica de Ojos Reyes Giobellina", logo: "/clientes/clinica-reyes-giobellina.png" },
  { name: "Export Pack SRL", logo: "/clientes/export-pack.png" },
  { name: "Ferrus SRL", logo: "/clientes/ferrus.png" },
  { name: "Ledesma SAIC", logo: "/clientes/ledesma.png" },
  { name: "Maderas Misioneras SRL", logo: "/clientes/maderas-misioneras.png" },
  { name: "Peri S.A.", logo: "/clientes/peri.png" },
  { name: "Servicios de Radio y TV (UNC)", logo: "/clientes/servicios-radio-tv-unc.png" },
  { name: "Silcar SAS", logo: "/clientes/silcar.png" },
];

export default function ClientsSlider() {
  return (
    <section
      className="py-12 border-y border-[#E5E7EB] bg-white"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="clients-heading"
          className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Confían en nosotros
        </p>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6 items-center"
          role="list"
        >
          {clients.map((client) => (
            <li key={client.name} className="flex items-center justify-center">
              <div className="relative h-10 w-36">
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  fill
                  sizes="144px"
                  className="object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
