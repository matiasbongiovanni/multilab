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

const analysisGroups = [
  {
    title: "Servicios ofrecidos",
    items: [
      "Investigación en ciencias exactas, físicas y naturales",
      "Investigación en salud y veterinaria",
      "Investigación en ciencias agropecuarias",
      "Investigación en higiene y seguridad laboral",
    ],
  },
];

export default function InvestigacionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Investigación"
          subtitle="Ciencia aplicada con impacto real"
          description="Transformamos la ciencia en soluciones para tu negocio. En MultiLab vamos un paso más allá del análisis: creamos conocimiento aplicado. Investigamos para encontrar soluciones innovadoras en higiene laboral, ciencias agropecuarias y salud, siendo el socio tecnológico que necesitás para desarrollar nuevos procesos y mejorar la eficiencia de tu industria."
          longDescription="Multilab integra la práctica analítica con la investigación aplicada. Desarrollamos y validamos nuevas metodologías, colaboramos con instituciones académicas y participamos en proyectos de investigación con impacto en salud humana, animal y ambiental. Nuestra capacidad instalada y nuestro equipo técnico nos permiten ser socios estratégicos en proyectos de distinta envergadura."
          icon={icon}
          color="bg-[#ede9fe] text-[#7c3aed]"
          bgGradient="bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-white"
          analysisGroups={analysisGroups}
          ctaText="Consultar sobre colaboración"
          heroImage="/images/equipo-multilab.jpg"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
