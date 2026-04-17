import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Investigación",
  description:
    "Líneas activas de investigación científica y desarrollo de nuevas metodologías analíticas. Colaboración con universidades e instituciones científicas.",
  alternates: { canonical: "/servicios/investigacion" },
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const analyses = [
  "Desarrollo y validación de métodos analíticos nuevos",
  "Estudios de estabilidad de muestras biológicas",
  "Investigación en biomarcadores diagnósticos",
  "Análisis estadístico de datos de laboratorio",
  "Control de calidad externo e interlaboratorio",
  "Estudios epidemiológicos con soporte analítico",
  "Validación de kits y reactivos de diagnóstico",
  "Investigación en resistencia antimicrobiana",
  "Caracterización molecular de microorganismos",
  "Estudios de prevalencia de enfermedades infecciosas",
  "Soporte analítico para tesis de grado y posgrado",
  "Colaboración con instituciones universitarias",
];

const additionalInfo = [
  "Las colaboraciones de investigación se evalúan de forma individual según los recursos disponibles y la relevancia científica.",
  "Se priorizan proyectos con impacto en salud pública regional y ambiental.",
  "Contamos con equipamiento de precisión y protocolos normalizados para garantizar la reproducibilidad.",
  "Podemos emitir informes técnicos formales para publicaciones científicas y presentaciones académicas.",
];

export default function InvestigacionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Investigación"
          subtitle="Ciencia aplicada con impacto real"
          description="Líneas activas de investigación científica y desarrollo de metodologías analíticas. Colaboramos con universidades, instituciones y profesionales de la salud en proyectos de alto valor científico."
          longDescription="Multilab integra la práctica analítica con la investigación aplicada. Bajo la dirección de la Lic. Cinthia Degliangioli, desarrollamos y validamos nuevas metodologías, colaboramos con instituciones académicas y participamos en proyectos de investigación con impacto en salud humana, animal y ambiental. Nuestra capacidad instalada y nuestro equipo técnico nos permiten ser socios estratégicos en proyectos de distinta envergadura."
          icon={icon}
          color="bg-[#ede9fe] text-[#7c3aed]"
          bgGradient="bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-white"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Consultar sobre colaboración"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
