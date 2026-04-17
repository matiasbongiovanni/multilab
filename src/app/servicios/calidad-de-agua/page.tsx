import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Calidad de Agua",
  description:
    "Análisis fisicoquímicos y bacteriológicos de agua potable, industrial y de consumo. Certificación según el Código Alimentario Argentino.",
  alternates: { canonical: "/servicios/calidad-de-agua" },
};

const icon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);

const analyses = [
  "pH y conductividad eléctrica",
  "Turbidez y color aparente",
  "Dureza total (cálcica y magnésica)",
  "Alcalinidad y acidez total",
  "Cloruros, sulfatos y nitratos",
  "Hierro total y manganeso",
  "Flúor y arsénico",
  "Recuento de bacterias aerobias totales",
  "Coliformes totales y fecales (E. coli)",
  "Pseudomonas aeruginosa",
  "Enterococos intestinales",
  "Cloro libre residual",
  "Nitritos y amonio",
  "Sólidos totales disueltos (TDS)",
  "Análisis completo según CAA para agua potable",
];

const additionalInfo = [
  "Los análisis se realizan según los parámetros establecidos por el Código Alimentario Argentino (CAA) y el SENASA.",
  "Se emite un informe técnico con los resultados y su comparación contra los límites normativos vigentes.",
  "El muestreo puede ser realizado por el laboratorio o por el cliente siguiendo el protocolo de toma de muestra que proporcionamos.",
  "Apto para certificaciones de agua potable en establecimientos industriales, gastronómicos y de salud.",
];

export default function CalidadDeAguaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Calidad de Agua"
          subtitle="Análisis fisicoquímico y microbiológico"
          description="Evaluación integral de la calidad del agua potable, industrial y de consumo. Análisis según el Código Alimentario Argentino para garantizar la seguridad hídrica."
          longDescription="El servicio de calidad de agua de Multilab brinda un análisis completo de los parámetros fisicoquímicos y microbiológicos que determinan la aptitud del agua para consumo humano, uso industrial o irrigación. Emitimos informes técnicos detallados que permiten identificar desviaciones, establecer planes de corrección y cumplir con la normativa vigente."
          icon={icon}
          color="bg-[#cffafe] text-[#0891b2]"
          bgGradient="bg-gradient-to-br from-[#ecfeff] via-[#cffafe] to-white"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Solicitar análisis de agua"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
