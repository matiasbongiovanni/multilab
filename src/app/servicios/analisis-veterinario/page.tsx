import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Análisis Veterinario",
  description:
    "Estudios de laboratorio especializados para animales. Hemograma, bioquímica, parasitología y más para caninos, felinos y otras especies.",
  alternates: { canonical: "/servicios/analisis-veterinario" },
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
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const analyses = [
  "Hemograma completo canino y felino",
  "Bioquímica sanguínea (función hepática, renal y pancreática)",
  "Glucemia y perfil hormonal",
  "Perfil tiroideo (T4 total y libre)",
  "Urianálisis y urocultivo veterinario",
  "Coprocultivo y parasitología en heces",
  "Análisis de líquido cefalorraquídeo",
  "Serología infecciosa (Leishmania, Leptospira, Brucella, Parvo)",
  "Cultivos microbiológicos de secreciones",
  "Antibiograma para tratamiento orientado",
  "Estudio citológico de líquidos corporales",
  "Análisis prequirúrgico completo",
  "Perfil geriátrico para animales mayores",
  "Toxicología básica en sangre",
];

const additionalInfo = [
  "Se trabaja con muestras remitidas por veterinarios o extraídas en el laboratorio bajo coordinación previa.",
  "Las muestras deben ser procesadas dentro de las 2 a 4 horas de extracción para garantizar la calidad del resultado.",
  "Emitimos informes detallados orientados al profesional veterinario tratante.",
  "Disponemos de valores de referencia actualizados por especie y raza.",
];

export default function AnalisisVeterinarioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Análisis Veterinario"
          subtitle="Diagnóstico de laboratorio animal"
          description="Estudios especializados para el cuidado de la salud animal. Trabajamos con veterinarios de toda la región para ofrecer resultados precisos que apoyen el diagnóstico y tratamiento."
          longDescription="El servicio de análisis veterinario de Multilab ofrece soporte diagnóstico de laboratorio para clínicas y veterinarios independientes. Nuestros procesos están adaptados a las particularidades fisiológicas de cada especie, con valores de referencia actualizados y una cadena analítica que garantiza la integridad de la muestra desde la extracción hasta el resultado."
          icon={icon}
          color="bg-[#dcfce7] text-[#16a34a]"
          bgGradient="bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-white"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Solicitar análisis veterinario"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
