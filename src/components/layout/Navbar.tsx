"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Multilab Risk Prevention — inicio"
            className="flex items-center gap-2 shrink-0"
          >
            <span
              className="text-xl font-bold tracking-tight text-[#1C1917]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Multi<span className="text-[#2E7D32]">lab</span>
            </span>
            <span
              className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] border-l border-[#E5E7EB] pl-2 ml-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Risk Prevention
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#1C1917] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/mis-estudios"
              className="text-sm font-semibold text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-200 px-3 py-2"
            >
              Ver mis resultados
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Solicitar cotización
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1C1917] hover:bg-[#F4F4F1] transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E5E7EB]"
          >
            <nav
              className="px-4 py-4 flex flex-col gap-1"
              aria-label="Navegación móvil"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-3 text-base font-medium text-[#1C1917] hover:bg-[#F4F4F1] rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
                <Link
                  href="/mis-estudios"
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-3 text-base font-semibold text-[#2E7D32] hover:bg-[#DCFCE7] rounded-lg transition-colors duration-150 text-center"
                >
                  Ver mis resultados
                </Link>
                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-3 text-base font-semibold text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg transition-colors duration-150 text-center"
                >
                  Solicitar cotización
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
