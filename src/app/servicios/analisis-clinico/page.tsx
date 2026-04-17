import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Análisis Clínico",
  description:
    "Análisis clínicos de alta precisión para diagnóstico médico. Hemogramas, bioquímica, hormonas, coagulación y más. Resultados en 24-48 horas hábiles.",
  alternates: { canonical: "/servicios/analisis-clinico" },
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
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const analyses = [
  "Hemograma completo con fórmula leucocitaria",
  "Glucemia basal y postprandial",
  "Perfil lipídico (colesterol, triglicéridos, HDL, LDL)",
  "Función hepática (TGO, TGP, FAL, bilirrubinas)",
  "Función renal (urea, creatinina, ácido úrico)",
  "Perfil tiroideo (TSH, T3, T4)",
  "Hormonas sexuales y fertilidad",
  "Coagulación (APTT, Quick, fibrinógeno)",
  "Proteínas totales y albúmina",
  "Ionograma (sodio, potasio, cloro)",
  "Ferritina, hierro sérico y transferrina",
  "Marcadores tumorales (PSA, CEA, CA125)",
  "Serología infecciosa (VIH, Hepatitis B y C, Chagas, Sífilis)",
  "Urocultivo y sedimento urinario",
  "Coprocultivo y parasitología en materia fecal",
];

const additionalInfo = [
  "Algunos análisis requieren 8 a 12 horas de ayuno previo. Se indicará al momento de la reserva.",
  "Los resultados se encuentran disponibles en el portal de pacientes dentro de las 24 a 48 horas hábiles.",
  "Para estudios de fertilidad u hormonales se puede requerir un día específico del ciclo menstrual.",
  "Contamos con extracción domiciliaria bajo consulta previa.",
];

export default function AnalisisClinicoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Análisis Clínico"
          subtitle="Diagnóstico de laboratorio humano"
          description="Estudios de laboratorio para el diagnóstico, seguimiento y prevención de enfermedades en adultos y niños. Metodologías validadas, equipamiento moderno y resultados confiables."
          longDescription="Nuestro servicio de análisis clínico cubre la totalidad del espectro diagnóstico de laboratorio para medicina humana. Trabajamos con metodologías actualizadas según las normas internacionales y ofrecemos un sistema de calidad que garantiza la precisión y reproducibilidad de cada resultado. La Lic. Cinthia Degliangioli supervisa personalmente los procesos analíticos críticos."
          icon={icon}
          color="bg-[#e0f2fe] text-[#4CAF50]"
          bgGradient="bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white"
          analyses={analyses}
          additionalInfo={additionalInfo}
          ctaText="Solicitar análisis clínico"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
