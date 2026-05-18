"use client";

import Link from "next/link";
import Logo from "../../../public/Logo-Multilab.webp";

const verticalesLinks = [
  { label: "Higiene y Seguridad", href: "/higiene-seguridad" },
  { label: "Laboratorio",         href: "/laboratorio" },
  { label: "Medioambiente",       href: "/medioambiente" },
];

const institucionalLinks = [
  { label: "Quiénes somos",  href: "/quienes-somos" },
  { label: "Contacto",       href: "/contacto" },
  { label: "Ver mis informes", href: "/mis-estudios" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto overflow-hidden"
      style={{
        backgroundColor: "oklch(99.5% 0.003 143)",
        borderTop: "1px solid oklch(91% 0.013 143)",
        color: "oklch(44% 0.012 143)",
      }}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Multilab — inicio">
              <img src={Logo.src} alt="Logo Multilab" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-3 max-w-xs">
              Laboratorio de prevención de riesgos. Higiene y Seguridad, Laboratorio y Medioambiente.
            </p>
            <p className="text-xs mb-5" style={{ color: "oklch(60% 0.01 143)" }}>
              Lic. Cinthia Degliangioli — Directora Técnica
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: "oklch(96% 0.022 143)",
                    color: "oklch(42% 0.13 144)",
                    border: "1px solid oklch(91% 0.013 143)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(42% 0.13 144)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(96% 0.022 143)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Áreas */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "oklch(13% 0.015 143)" }}
            >
              Áreas
            </h3>
            <ul className="space-y-3">
              {verticalesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "oklch(13% 0.015 143)" }}
            >
              Institucional
            </h3>
            <ul className="space-y-3">
              {institucionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "oklch(13% 0.015 143)" }}
            >
              Contacto
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ stroke: "oklch(42% 0.13 144)" }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ stroke: "oklch(42% 0.13 144)" }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <Link href="/contacto" className="transition-colors duration-200"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}>
                  contacto@multilab.com.ar
                </Link>
              </div>
              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ stroke: "oklch(42% 0.13 144)" }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Lun–Vie 8:00–17:00 hs</span>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(91% 0.013 143)" }}
        >
          <p className="text-xs" style={{ color: "oklch(60% 0.01 143)" }}>
            &copy; {year} Multilab — Lic. Cinthia Degliangioli. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "oklch(60% 0.01 143)" }}>
            Desarrollado por{" "}
            <a
              href="https://sideasconsultores.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-200"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
            >
              SIDEAS Consultores
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
