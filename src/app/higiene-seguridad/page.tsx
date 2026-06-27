import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Higiene y Seguridad Laboral",
  description:
    "Evaluación de riesgos, mediciones ambientales y documentación técnica. Cumplimiento de Ley 19.587 y reglamentaciones vigentes.",
  alternates: { canonical: "/higiene-seguridad" },
};

export default function HigieneSeguridadPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Higiene y Seguridad Laboral"
          subtitle="Área 01"
          description="Protege tu capital humano y evita riesgos legales. Un entorno seguro es una inversión, no un gasto. Reducimos la siniestralidad de tu empresa mediante asesoramiento experto, capacitaciones dinámicas y una gestión eficiente ante ART. Desde la confección de programas de seguridad hasta auditorías de campo, diseñamos estrategias a medida que protegen a tu equipo y blindan tu operación ante cualquier contingencia."
          longDescription="Realizamos diagnósticos integrales de seguridad e higiene laboral para empresas de todos los sectores. Nuestros informes técnicos tienen validez legal ante el Ministerio de Trabajo, ART y organismos reguladores. Bajo la supervisión de nuestros profesionales, cada informe es firmado y avalado por los especialistas."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analysisGroups={[
            {
              title: "Seguridad e higiene en el trabajo",
              items: [
                "Asesoramiento integral sobre riesgos del trabajo",
                "Confección y seguimiento de planes de mejoras",
                "Informes de higiene y seguridad en el trabajo",
                "Planes de evacuación",
                "Prevención e identificación de riesgos",
                "Confección de programas y dictado de capacitaciones",
                "Manejo de residuos peligrosos y control de contaminantes",
                "Protección de la salud y seguridad laboral (EPP)",
                "Prevención de enfermedades profesionales",
                "Identificación de riesgos químicos, biológicos y físicos (ruido, vibraciones, iluminación, carga térmica, radiación)",
                "Inspecciones programadas de equipos, herramientas y vehículos",
                "Auditorías de ambientes de trabajo",
                "Confección de mapas de riesgos",
                "Cursos y habilitación de conductores de máquinas viales, autoelevadores y elevadores hidráulicos",
                "Investigación de accidentes laborales",
                "Procedimientos de trabajo seguro",
                "Programas de seguridad para la construcción y tareas repetitivas/de corta duración",
                "Estudios y proyectos de protección contra incendios ante entes de control",
                "Programas y estudios de ergonomía",
                "Relevamiento de productos cancerígenos ante ART",
                "Representación ante ART y Ministerio de Trabajo",
                "Gestión e implementación de normas internacionales (OSHA)",
              ],
            },
            {
              title: "Mediciones",
              ordered: true,
              items: [
                "Ruido",
                "Vibraciones",
                "Iluminación",
                "Carga térmica",
                "Radiación",
                "Puesta a tierra",
              ],
            },
          ]}
          directorLabel="Especialista"
          directorName="Ing. Orlando A. Degliangioli"
          ctaText="Solicitar diagnóstico"
          heroImage="/images/servicios/higiene-seguridad.jpg"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
