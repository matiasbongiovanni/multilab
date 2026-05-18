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
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-rp-bg-soft)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-40"
        style={{
          backgroundColor: "var(--color-rp-bg-elevated)",
          borderBottom: "1px solid var(--color-rp-border)",
        }}
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
                <rect width="36" height="36" rx="8" fill="var(--color-rp-accent)" />
                <path d="M13 8h4v13a4 4 0 01-8 0V8h4z" fill="white" opacity="0.9" />
                <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
                <path
                  d="M23 18v6M27 18v6M21 24h8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="font-black text-xl tracking-tight"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                MULTI<span style={{ color: "var(--color-rp-accent)" }}>LAB</span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <div
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{
                  backgroundColor: "var(--color-rp-bg-soft)",
                  border: "1px solid var(--color-rp-border)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-rp-accent)" }}
                >
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
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-rp-text-strong)" }}
                >
                  {session.nombre} {session.apellido}
                </span>
              </div>
              <button
                onClick={handleLogout}
                disabled={isPending}
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors duration-150 disabled:opacity-50"
                style={{ color: "var(--color-rp-text-muted)" }}
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
          <h1
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: "var(--color-rp-text-strong)" }}
          >
            Bienvenido/a, {session.nombre}
          </h1>
          <p className="mt-1" style={{ color: "var(--color-rp-text-muted)" }}>
            DNI {session.dni} · Acá encontrás todos tus informes disponibles.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
          aria-label="Resumen de informes"
        >
          {[
            {
              label: "Total de informes",
              value: studies.length,
              color: "var(--color-rp-text-strong)",
            },
            {
              label: "Disponibles",
              value: disponibles,
              color: "var(--color-rp-accent)",
            },
            {
              label: "En proceso",
              value: studies.length - disponibles,
              color: "var(--color-rp-warning)",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{
                backgroundColor: "var(--color-rp-bg-elevated)",
                border: "1px solid var(--color-rp-border)",
              }}
            >
              <p className="text-3xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-rp-text-muted)" }}
              >
                {stat.label}
              </p>
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
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--color-rp-text-strong)" }}
            >
              Mis informes
            </h2>
            <div className="relative w-full sm:w-64">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--color-rp-text-muted)" }}
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
                placeholder="Buscar informe..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg outline-none transition-colors"
                style={{
                  border: "1px solid var(--color-rp-border)",
                  backgroundColor: "var(--color-rp-bg-elevated)",
                  color: "var(--color-rp-text)",
                }}
                aria-label="Buscar informes"
              />
            </div>
          </div>

          {studies.length === 0 ? (
            <div
              className="rounded-2xl p-12 text-center"
              style={{
                backgroundColor: "var(--color-rp-bg-elevated)",
                border: "1px solid var(--color-rp-border)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: "var(--color-rp-accent-soft)",
                  color: "var(--color-rp-accent)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                No tenés informes todavía
              </h3>
              <p className="text-sm" style={{ color: "var(--color-rp-text-muted)" }}>
                Cuando tus análisis estén procesados, los vas a ver acá.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-white font-semibold rounded-lg transition-colors text-sm"
                style={{ backgroundColor: "var(--color-rp-accent)" }}
              >
                Solicitar turno
              </Link>
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                backgroundColor: "var(--color-rp-bg-elevated)",
                border: "1px solid var(--color-rp-border)",
              }}
            >
              <p className="text-sm" style={{ color: "var(--color-rp-text-muted)" }}>
                No se encontraron estudios para{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-rp-text-strong)" }}
                >
                  &ldquo;{searchTerm}&rdquo;
                </span>
                .
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-3 text-sm hover:underline underline-offset-2"
                style={{ color: "var(--color-rp-accent)" }}
              >
                Limpiar búsqueda
              </button>
            </div>
          ) : (
            <div
              className="space-y-3"
              role="list"
              aria-label="Lista de informes"
            >
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  role="listitem"
                  className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-150"
                  style={{
                    backgroundColor: "var(--color-rp-bg-elevated)",
                    border: "1px solid var(--color-rp-border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "var(--color-rp-accent-soft)",
                      color: "var(--color-rp-accent)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-sm"
                      style={{ color: "var(--color-rp-text-strong)" }}
                    >
                      {study.tipo}
                    </p>
                    {study.descripcion && (
                      <p
                        className="text-xs mt-0.5 truncate"
                        style={{ color: "var(--color-rp-text-muted)" }}
                      >
                        {study.descripcion}
                      </p>
                    )}
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--color-rp-text-muted)" }}
                    >
                      {formatDate(study.fecha)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={
                        study.disponible
                          ? {
                              backgroundColor: "var(--color-rp-accent-soft)",
                              color: "var(--color-rp-accent)",
                            }
                          : {
                              backgroundColor: "var(--color-rp-warning-soft)",
                              color: "var(--color-rp-warning)",
                            }
                      }
                      aria-label={
                        study.disponible
                          ? "Resultado disponible"
                          : "En proceso"
                      }
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: study.disponible
                            ? "var(--color-rp-accent)"
                            : "var(--color-rp-warning)",
                        }}
                        aria-hidden="true"
                      />
                      {study.disponible ? "Disponible" : "En proceso"}
                    </span>

                    {study.disponible && study.archivo_url && (
                      <a
                        href={study.archivo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-semibold rounded-lg transition-colors"
                        style={{ backgroundColor: "var(--color-rp-accent)" }}
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
          className="mt-10 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            backgroundColor: "var(--color-rp-accent-soft)",
            border: "1px solid var(--color-rp-border)",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: "var(--color-rp-bg-elevated)",
              color: "var(--color-rp-accent)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <div className="flex-1">
            <p
              className="text-sm font-bold"
              style={{ color: "var(--color-rp-text-strong)" }}
            >
              ¿Necesitás ayuda con tus resultados?
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--color-rp-text-muted)" }}
            >
              Si tenés alguna duda sobre tus estudios, contactanos y te orientamos.
            </p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-white text-sm font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: "var(--color-rp-accent)" }}
          >
            Consultar
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
