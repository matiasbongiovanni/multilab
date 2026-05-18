import { siteConfig } from "./site-config";

export function getMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    founder: {
      "@type": "Person",
      name: siteConfig.director.name,
      jobTitle: siteConfig.director.role,
    },
    foundingDate: "2014",
    medicalSpecialty: [
      "ClinicalLaboratory",
      "VeterinaryMedicine",
      "EnvironmentalHealth",
      "OccupationalHealth",
    ],
    sameAs: [],
  };
}

export function getBreadcrumbListSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
