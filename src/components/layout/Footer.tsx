import Link from "next/link";

const serviciosLinks = [
  { label: "Calidad de Agua", href: "/servicios/calidad-de-agua" },
  { label: "Higiene y Bromatología", href: "/servicios/higiene-bromatologia" },
  { label: "Análisis Veterinario", href: "/servicios/analisis-veterinario" },
  { label: "Análisis Clínico", href: "/servicios/analisis-clinico" },
  { label: "Investigación", href: "/servicios/investigacion" },
  { label: "Consulta Online", href: "/servicios/consulta-online" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#071410] text-white/40 mt-auto"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              aria-label="Multilab — inicio"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <rect width="36" height="36" rx="8" fill="#4CAF50" />
                <path d="M13 8h4v13a4 4 0 01-8 0V8h4z" fill="white" opacity="0.9" />
                <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
                <path d="M23 18v6M27 18v6M21 24h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-black text-xl text-white tracking-tight">
                MULTI<span className="text-[#4CAF50]">LAB</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Laboratorio de análisis clínicos, veterinarios, calidad de agua e
              higiene. Precisión y confianza en cada resultado.
            </p>
            <p className="text-xs mt-4 text-[#616161]">
              Lic. Cinthia Degliangioli
            </p>
            {/* Redes */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#4CAF50] text-[#616161] hover:text-white flex items-center justify-center transition-all duration-150"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Institucional
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/quienes-somos"
                  className="text-sm hover:text-white transition-colors duration-150"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm hover:text-white transition-colors duration-150"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-sm hover:text-white transition-colors duration-150"
                >
                  Portal de pacientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Contacto
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  contacto@multilab.com.ar
                </Link>
              </div>
              <div className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Lun–Vie 8:00–17:00 hs</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#616161]">
            &copy; {currentYear} Multilab — Lic. Cinthia Degliangioli. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-[#616161]">
            Desarrollado por{" "}
            <a
              href="https://sideasconsultores.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4CAF50] transition-colors"
            >
              SIDEAS Consultores
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
