import type { Metadata } from "next";
import VerticalPage from "@/components/verticales/VerticalPage";

export const metadata: Metadata = {
  title: "Medioambiente",
  description:
    "Análisis ambientales: calidad de agua potable e industrial, análisis de residuos y control ambiental. Multilab Risk Prevention Argentina.",
  alternates: { canonical: "https://multilab.vercel.app/medioambiente" },
};

const services = [
  {
    name: "Calidad de agua potable",
    slug: "agua-potable",
    description:
      "Análisis fisicoquímico y bacteriológico de agua potable según el Código Alimentario Argentino y normativas provinciales.",
  },
  {
    name: "Calidad de agua industrial",
    slug: "agua-industrial",
    description:
      "Análisis de agua para procesos industriales, calderas, sistemas de enfriamiento y efluentes según normativa vigente.",
  },
  {
    name: "Análisis de residuos",
    slug: "residuos",
    description:
      "Caracterización y análisis de residuos sólidos y líquidos para cumplimiento de normativas ambientales y habilitaciones.",
  },
  {
    name: "Control ambiental",
    slug: "control-ambiental",
    description:
      "Monitoreo ambiental integral para empresas que requieren informes técnicos de impacto ambiental y auditorías.",
  },
];

const useCases = [
  "Municipios y entes de agua potable",
  "Industrias con efluentes o procesos de agua",
  "Empresas que requieren auditorías ambientales",
  "Establecimientos que necesitan habilitación ambiental",
  "Comunidades con dudas sobre la calidad del agua",
];

const methodology = [
  "Coordinamos la toma de muestras con protocolo de cadena de custodia.",
  "Trasladamos las muestras preservando las condiciones requeridas por normativa.",
  "Analizamos con metodologías acreditadas en nuestro laboratorio.",
  "Emitimos el informe técnico oficial con resultados, interpretación y recomendaciones.",
];

export default function MedioambientePage() {
  return (
    <VerticalPage
      name="Medioambiente"
      eyebrow="MEDIOAMBIENTE"
      claim="Monitoreo ambiental con normas internacionales"
      sub="Análisis de calidad de agua, residuos y control ambiental para municipios, industrias y organismos públicos."
      services={services}
      useCases={useCases}
      methodology={methodology}
      breadcrumbHref="/medioambiente"
    />
  );
}
