import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const serviciosLinks = [
  { label: "Higiene y Seguridad Laboral", href: "/higiene-seguridad" },
  { label: "Laboratorio de Análisis", href: "/laboratorio" },
  { label: "Laboratorio Ambiental", href: "/medioambiente" },
  { label: "I+D en Ciencias y Medicina", href: "/servicios" },
];

const empresaLinks = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Portal de resultados", href: "/mis-estudios" },
  { label: "Contacto", href: "#contacto" },
  { label: "Política de privacidad", href: "/privacidad" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#1C1917] text-white"
      role="contentinfo"
      aria-label="Pie de página Multilab Risk Prevention"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Multilab Risk Prevention — inicio"
              className="inline-block mb-4"
            >
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Multi<span className="text-[#4CAF50]">lab</span>
              </span>
              <span
                className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mt-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Risk Prevention
              </span>
            </Link>

            <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-5">
              Higiene y Seguridad Laboral, Laboratorio de Análisis y Control Ambiental para empresas argentinas desde 2014.
            </p>

            <p className="text-xs text-white/30">
              Lic. Cinthia Degliangioli — Directora Técnica
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/multilab.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Multilab en Instagram"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/multilab.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Multilab en Facebook"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3
              className="text-[10px] font-bold text-white/35 uppercase tracking-[0.22em] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Servicios
            </h3>
            <ul className="space-y-3">
              {serviciosLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3
              className="text-[10px] font-bold text-white/35 uppercase tracking-[0.22em] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Empresa
            </h3>
            <ul className="space-y-3">
              {empresaLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
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
              className="text-[10px] font-bold text-white/35 uppercase tracking-[0.22em] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#4CAF50] mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contacto@multilab.com.ar"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 break-all"
                >
                  contacto@multilab.com.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#4CAF50] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-white/40">
                  [REEMPLAZAR: teléfono]
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#4CAF50] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-white/40">
                  Córdoba, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            &copy; {year} Multilab Risk Prevention. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.15em]">
              Ley 19.587
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.15em]">
              Cód. Alimentario Arg.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
