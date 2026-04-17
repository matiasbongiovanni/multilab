"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { SessionUser, Study } from "@/types";

interface MisEstudiosClientProps {
  session: SessionUser;
  studies: Study[];
  logoutAction: () => Promise<void>;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function MisEstudiosClient({
  session,
  studies,
  logoutAction,
}: MisEstudiosClientProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      router.push("/");
      router.refresh();
    });
  };

  const filtered = studies.filter((s) => {
    const term = searchTerm.toLowerCase();
    return (
      s.tipo.toLowerCase().includes(term) ||
      (s.descripcion ?? "").toLowerCase().includes(term) ||
      s.fecha.includes(term)
    );
  });

  const disponibles = studies.filter((s) => s.disponible).length;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header
        className="bg-white border-b border-[#E0E0E0] sticky top-0 z-40"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 group"
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
                <path
                  d="M13 8h4v13a4 4 0 01-8 0V8h4z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
                <path
                  d="M23 18v6M27 18v6M21 24h8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-black text-xl text-[#1A1A1A] tracking-tight">
                MULTI<span className="text-[#4CAF50]">LAB</span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F5] rounded-lg border border-[#E0E0E0]">
                <div className="w-7 h-7 rounded-lg bg-[#4CAF50] flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1A1A1A]">
                  {session.nombre} {session.apellido}
                </span>
              </div>
              <button
                onClick={handleLogout}
                disabled={isPending}
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#616161] hover:text-[#dc2626] hover:bg-[#fef2f2] rounded-lg transition-colors duration-150 disabled:opacity-50"
                aria-label="Cerrar sesión"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        {/* Welcome */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            Bienvenido/a, {session.nombre}
          </h1>
          <p className="text-[#616161] mt-1">
            DNI {session.dni} · Acá encontrás todos tus estudios disponibles.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
          aria-label="Resumen de estudios"
        >
          {[
            {
              label: "Total de estudios",
              value: studies.length,
              color: "text-[#1A1A1A]",
            },
            {
              label: "Disponibles",
              value: disponibles,
              color: "text-[#4CAF50]",
            },
            {
              label: "En proceso",
              value: studies.length - disponibles,
              color: "text-[#ca8a04]",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 border border-[#E0E0E0] text-center"
            >
              <p className={`text-3xl font-black ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs text-[#616161] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Search & list */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <h2 className="text-xl font-bold text-[#1A1A1A]">Mis estudios</h2>
            <div className="relative w-full sm:w-64">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616161]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar estudio..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-[#E0E0E0] rounded-lg bg-white text-[#1A1A1A] placeholder:text-[#616161] focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] outline-none transition-colors"
                aria-label="Buscar estudios"
              />
            </div>
          </div>

          {studies.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E0E0E0] p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#dcfce7] flex items-center justify-center mx-auto mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                No tenés estudios todavía
              </h3>
              <p className="text-sm text-[#616161]">
                Cuando tus análisis estén procesados, los vas a ver acá.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#2E7D32] transition-colors text-sm"
              >
                Solicitar turno
              </Link>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E0E0E0] p-10 text-center">
              <p className="text-[#616161] text-sm">
                No se encontraron estudios para{" "}
                <span className="font-semibold text-[#1A1A1A]">
                  &ldquo;{searchTerm}&rdquo;
                </span>
                .
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-3 text-sm text-[#4CAF50] hover:underline underline-offset-2"
              >
                Limpiar búsqueda
              </button>
            </div>
          ) : (
            <div
              className="space-y-3"
              role="list"
              aria-label="Lista de estudios"
            >
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  role="listitem"
                  className="bg-white rounded-xl border border-[#E0E0E0] p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-[#4CAF50] hover:shadow-sm transition-all duration-150"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#1A1A1A] text-sm">
                      {study.tipo}
                    </p>
                    {study.descripcion && (
                      <p className="text-xs text-[#616161] mt-0.5 truncate">
                        {study.descripcion}
                      </p>
                    )}
                    <p className="text-xs text-[#616161] mt-1">
                      {formatDate(study.fecha)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={[
                        "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full",
                        study.disponible
                          ? "bg-[#dcfce7] text-[#2E7D32]"
                          : "bg-[#fef9c3] text-[#ca8a04]",
                      ].join(" ")}
                      aria-label={
                        study.disponible
                          ? "Resultado disponible"
                          : "En proceso"
                      }
                    >
                      <span
                        className={[
                          "w-1.5 h-1.5 rounded-full",
                          study.disponible ? "bg-[#2E7D32]" : "bg-[#ca8a04]",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      {study.disponible ? "Disponible" : "En proceso"}
                    </span>

                    {study.disponible && study.archivo_url && (
                      <a
                        href={study.archivo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#4CAF50] text-white text-xs font-semibold rounded-lg hover:bg-[#2E7D32] transition-colors"
                        aria-label={`Descargar resultado: ${study.tipo}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                        Descargar
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Help */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 p-5 bg-[#dcfce7] rounded-xl border border-[#bbf7d0] flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#1A1A1A]">
              ¿Necesitás ayuda con tus resultados?
            </p>
            <p className="text-xs text-[#616161] mt-0.5">
              Si tenés alguna duda sobre tus estudios, contactanos y te
              orientamos.
            </p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#4CAF50] text-white text-sm font-semibold rounded-lg hover:bg-[#2E7D32] transition-colors"
          >
            Consultar
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
