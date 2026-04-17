import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://multilab.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/quienes-somos", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contacto", priority: 0.9, changeFrequency: "monthly" as const },
    {
      url: "/servicios/analisis-clinico",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/servicios/analisis-veterinario",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/servicios/calidad-de-agua",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/servicios/higiene-bromatologia",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/servicios/investigacion",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
