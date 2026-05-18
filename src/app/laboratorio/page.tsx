import type { Metadata } from "next";
import VerticalPage from "@/components/verticales/VerticalPage";

export const metadata: Metadata = {
  title: "Laboratorio",
  description:
    "Laboratorio de análisis clínicos, veterinarios, investigación y consulta online. Diagnóstico de precisión bajo la dirección de la Lic. Cinthia Degliangioli.",
  alternates: { canonical: "https://multilab.vercel.app/laboratorio" },
};

const services = [
  {
    name: "Análisis clínico",
    slug: "analisis-clinico",
    description:
      "Hemograma, bioquímica, orina y perfiles completos para personas. Resultados precisos para diagnósticos certeros.",
  },
  {
    name: "Análisis veterinario",
    slug: "analisis-veterinario",
    description:
      "Diagnóstico clínico completo para animales de compañía y producción. Hemograma, bioquímica y análisis parasitológicos.",
  },
  {
    name: "Investigación científica",
    slug: "investigacion",
    description:
      "Apoyo a proyectos de investigación científica y universitaria. Metodologías validadas y actualizadas para resultados reproducibles.",
  },
  {
    name: "Consulta online",
    slug: "consulta-online",
    description:
      "Acceso a resultados digitales desde el portal de pacientes y teleconsulta con la bioquímica desde cualquier dispositivo.",
  },
];

const useCases = [
  "Particulares que necesitan análisis clínicos de rutina",
  "Veterinarios y clínicas veterinarias",
  "Médicos y profesionales de la salud",
  "Centros de investigación y universidades",
  "Pacientes con dificultades de traslado (análisis a domicilio)",
];

const methodology = [
  "Solicitás turno por formulario, WhatsApp o teléfono.",
  "Realizamos la extracción de muestra en el laboratorio o coordinamos a domicilio.",
  "Procesamos la muestra con equipamiento de última generación.",
  "Publicamos el informe en el portal digital en 24 a 48 horas hábiles.",
];

export default function LaboratorioPage() {
  return (
    <VerticalPage
      name="Laboratorio"
      eyebrow="LABORATORIO"
      claim="Diagnóstico de precisión para profesionales y particulares"
      sub="Análisis clínicos, veterinarios e investigación científica bajo la dirección de la Lic. Cinthia Degliangioli."
      services={services}
      useCases={useCases}
      methodology={methodology}
      breadcrumbHref="/laboratorio"
    />
  );
}
