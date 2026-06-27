  import Link from "next/link";
  import { Mail, Phone, MapPin } from "lucide-react";

  const serviciosLinks = [
    { label: "Higiene y Seguridad Laboral", href: "/higiene-seguridad" },
    { label: "Laboratorio de Análisis", href: "/laboratorio" },
    { label: "Medio Ambiente", href: "/medioambiente" },
    { label: "I+D en Ciencias y Medicina", href: "/servicios/investigacion" },
  ];

  const empresaLinks = [
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Portal de resultados", href: "/mis-estudios" },
    { label: "Contacto", href: "/contacto" },
    { label: "Política de privacidad", href: "/privacidad" },
  ];

  export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer
        className="relative bg-[#1A2E1A] text-white overflow-hidden"
        role="contentinfo"
        aria-label="Pie de página Multilab Risk Prevention"
      >
        {/* ── Efecto de Borde Superior Iluminado (Glow) ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#44A148]/50 to-transparent" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#44A148]/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* ── Brand & Info (Ocupa más espacio en desktop) ── */}
            <div className="sm:col-span-2 lg:col-span-4 flex flex-col">
              <Link href="/" className="flex items-center gap-3 group mb-4" aria-label="Inicio — Multilab">
                <img
                  src="/MultiLab-Blanco.webp"
                  alt="Multilab Logo"
                  className="w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{ height: "100px" }}
                />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-5 font-medium">
                Higiene y Seguridad Laboral, Laboratorio de Análisis y Control Ambiental para empresas e industrias desde 2014.
              </p>
              {/* Social */}
              <div className="mt-auto">
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/multilab.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Multilab en Instagram"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#44A148]/50 hover:bg-[#44A148]/10 hover:text-[#44A148] flex items-center justify-center transition-all duration-300 text-white/70 hover:-translate-y-1 shadow-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </a>
                  <a
                    href="https://www.facebook.com/multilab.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Multilab en Facebook"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#44A148]/50 hover:bg-[#44A148]/10 hover:text-[#44A148] flex items-center justify-center transition-all duration-300 text-white/70 hover:-translate-y-1 shadow-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Servicios ── */}
            <div className="lg:col-span-3 lg:ml-auto">
              <h3
                className="text-[11px] font-bold text-[#44A148] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Servicios
              </h3>
              <ul className="space-y-3">
                {serviciosLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-white/60 hover:text-[#44A148] transition-colors duration-200 font-medium"
                    >
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Empresa ── */}
            <div className="lg:col-span-2 lg:ml-auto">
              <h3
                className="text-[11px] font-bold text-[#44A148] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Empresa
              </h3>
              <ul className="space-y-3">
                {empresaLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-white/60 hover:text-[#44A148] transition-colors duration-200 font-medium"
                    >
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contacto ── */}
            <div className="lg:col-span-3 lg:ml-auto">
              <h3
                className="text-[11px] font-bold text-[#44A148] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#44A148]/50 transition-colors shrink-0">
                    <Mail size={14} className="text-[#44A148]" aria-hidden="true" />
                  </div>
                  <a
                    href="mailto:contacto@multilab.com.ar"
                    className="text-sm text-white/70 group-hover:text-[#44A148] transition-colors duration-200 break-all font-medium mt-1"
                  >
                    contacto@multilab.com.ar
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#44A148]/50 transition-colors shrink-0">
                    <Phone size={14} className="text-[#44A148]" aria-hidden="true" />
                  </div>
                  <a
                    href="tel:+5493517344443"
                    className="text-sm text-white/70 group-hover:text-[#44A148] transition-colors duration-200 font-medium mt-1"
                  >
                    +54 9 351 734 4443
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#44A148]/50 transition-colors shrink-0">
                    <MapPin size={14} className="text-[#44A148]" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-white/70 font-medium mt-1 leading-relaxed">
                    Juan de Garay 1931, B° Pueyrredón · Córdoba
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/40 text-center md:text-left font-medium">
              &copy; {year} Multilab Risk Prevention. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  }