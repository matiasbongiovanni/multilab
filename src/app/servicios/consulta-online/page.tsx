import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Consulta Online",
  description:
    "Accedé a tus resultados digitales desde el portal de pacientes de Multilab y consultá con la bioquímica desde cualquier dispositivo.",
  alternates: { canonical: "/servicios/consulta-online" },
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
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const analyses = [
  "Acceso a resultados desde cualquier dispositivo",
  "Descarga de informes en PDF",
  "Historial completo de análisis anteriores",
  "Consulta de dudas con la bioquímica vía portal",
  "Notificaciones cuando los resultados están disponibles",
  "Portal privado con acceso por DNI y contraseña",
];

const additionalInfo = [
  "Disponible las 24 horas, los 7 días de la semana",
  "Los resultados se publican dentro del plazo informado al realizar el análisis",
  "Si tenés dudas sobre tus resultados, podés consultarnos por el formulario de contacto",
];

export default function ConsultaOnlinePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Consulta Online"
          subtitle="Portal digital de pacientes"
          description="Desde el portal de Multilab podés acceder a todos tus resultados de forma segura, descargarlos en PDF y consultar con la Lic. Cinthia Degliangioli sin necesidad de trasladarte."
          longDescription="El portal de pacientes de Multilab te permite acceder a tus resultados en cualquier momento y desde cualquier dispositivo. Con tu DNI y contraseña ingresás a un espacio privado y seguro donde encontrás todos tus análisis disponibles para ver y descargar."
          icon={icon}
          color="bg-[#fce7f3] text-[#db2777]"
          bgGradient="bg-gradient-to-br from-[#fdf4ff] to-[#fce7f3]"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Acceder al portal"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
