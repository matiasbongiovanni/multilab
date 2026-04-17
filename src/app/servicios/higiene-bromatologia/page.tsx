import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Higiene y Bromatología",
  description:
    "Control de calidad alimentaria, análisis microbiológicos y fisicoquímicos de alimentos. Cumplimiento de normativas SENASA y Código Alimentario Argentino.",
  alternates: { canonical: "/servicios/higiene-bromatologia" },
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
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const analyses = [
  "Recuento de aerobios mesófilos totales en alimentos",
  "Coliformes totales y E. coli en matrices alimentarias",
  "Staphylococcus aureus coagulasa positiva",
  "Salmonella spp. (detección e identificación)",
  "Listeria monocytogenes",
  "Mohos y levaduras",
  "Clostridios sulfito reductores",
  "Determinación de humedad y materia seca",
  "Proteínas totales (método Kjeldahl)",
  "Grasas totales y perfil de ácidos grasos",
  "Cenizas y residuo mineral fijo",
  "pH y acidez titulable",
  "Análisis de conservantes y aditivos",
  "Control microbiológico de superficies y ambiente",
  "Validación de procesos de sanitización",
];

const additionalInfo = [
  "Todos los análisis se realizan siguiendo los métodos oficiales del CAA y del AOAC International.",
  "Trabajamos con industrias alimentarias, restaurantes, frigoríficos y productores primarios.",
  "Emitimos certificados de análisis válidos para habilitaciones municipales y auditorías SENASA.",
  "Ofrecemos planes de monitoreo periódico con cronograma personalizado.",
];

export default function HigieneBromatologiaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Higiene y Bromatología"
          subtitle="Control de calidad alimentaria"
          description="Análisis microbiológicos y fisicoquímicos de alimentos para garantizar la inocuidad y el cumplimiento normativo. Apoyo técnico para industrias, comercios y entes reguladores."
          longDescription="El área de higiene y bromatología de Multilab ofrece soporte analítico completo para el control de calidad de alimentos. Nuestros estudios permiten verificar la aptitud microbiológica y composicional de productos, validar procesos de sanitización y cumplir con los requisitos del Código Alimentario Argentino y el SENASA. Trabajamos con productores, industriales y organismos de control."
          icon={icon}
          color="bg-[#fef9c3] text-[#ca8a04]"
          bgGradient="bg-gradient-to-br from-[#fefce8] via-[#fef9c3] to-white"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Solicitar análisis de alimentos"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
