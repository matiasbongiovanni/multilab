import type { Metadata } from "next";
import VerticalPage from "@/components/verticales/VerticalPage";

export const metadata: Metadata = {
  title: "Higiene y Seguridad",
  description:
    "Análisis de Higiene y Seguridad: control de alimentos, ambientes laborales, microbiología de superficies y bromatología. Multilab Risk Prevention.",
  alternates: { canonical: "https://multilab.vercel.app/higiene-seguridad" },
};

const services = [
  {
    name: "Control de alimentos",
    slug: "control-alimentos",
    description:
      "Análisis fisicoquímicos y microbiológicos de alimentos para verificar calidad e inocuidad según el Código Alimentario Argentino.",
  },
  {
    name: "Ambientes laborales",
    slug: "ambientes-laborales",
    description:
      "Evaluación de condiciones ambientales en entornos de trabajo: calidad del aire, contaminantes y riesgos para la salud ocupacional.",
  },
  {
    name: "Microbiología de superficies",
    slug: "microbiologia-superficies",
    description:
      "Control microbiológico de superficies en establecimientos de alimentos, salud e industria para garantizar condiciones higiénicas.",
  },
  {
    name: "Bromatología",
    slug: "bromatologia",
    description:
      "Análisis bromatológicos completos para habilitaciones comerciales, auditorías de procesos y control de producción alimentaria.",
  },
];

const useCases = [
  "Restaurantes y establecimientos de comida",
  "Industrias alimentarias y frigoríficos",
  "Municipios y organismos de control",
  "Empresas con personal en entornos de riesgo",
  "Establecimientos educativos y de salud",
];

const methodology = [
  "Coordinamos la toma de muestras o kit de recolección según el análisis.",
  "Procesamos las muestras con metodologías validadas según normativa vigente.",
  "Emitimos el informe técnico firmado con resultados e interpretación.",
  "Publicamos el informe en el portal digital para acceso inmediato.",
];

export default function HigieneSeguridadPage() {
  return (
    <VerticalPage
      name="Higiene y Seguridad"
      eyebrow="HIGIENE Y SEGURIDAD"
      claim="Control y prevención para entornos seguros"
      sub="Análisis técnicos de alimentos, ambientes laborales y superficies para empresas, industrias y organismos públicos."
      services={services}
      useCases={useCases}
      methodology={methodology}
      breadcrumbHref="/higiene-seguridad"
    />
  );
}
