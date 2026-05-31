"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Download, LogOut, FileText, Clock, CheckCircle2 } from "lucide-react";

type ReportStatus = "entregado" | "en_proceso" | "pendiente";

interface Report {
  id: string;
  fecha: string;
  tipo: string;
  numero: string;
  estado: ReportStatus;
  pdfUrl?: string;
}

// TODO: Replace with real data from Supabase
const MOCK_REPORTS: Report[] = [
  { id: "1", fecha: "2024-05-10", tipo: "Prevención de Riesgos", numero: "ML-2024-0312", estado: "entregado", pdfUrl: "#" },
  { id: "2", fecha: "2024-03-22", tipo: "Laboratorio", numero: "ML-2024-0198", estado: "entregado", pdfUrl: "#" },
  { id: "3", fecha: "2024-01-15", tipo: "Medio Ambiente", numero: "ML-2024-0087", estado: "entregado", pdfUrl: "#" },
  { id: "4", fecha: "2023-11-08", tipo: "Laboratorio", numero: "ML-2023-0445", estado: "entregado", pdfUrl: "#" },
];

const statusConfig: Record<ReportStatus, { label: string; color: string; icon: typeof Clock }> = {
  entregado: { label: "Entregado", color: "text-[#2E7D32] bg-[#e8f5e9]", icon: CheckCircle2 },
  en_proceso: { label: "En proceso", color: "text-[#1B5E20] bg-[#f0faf0]", icon: Clock },
  pendiente: { label: "Pendiente", color: "text-[#3d5c3d] bg-[#f9fdf9]", icon: Clock },
};

const allTypes = ["Todos", "Prevención de Riesgos", "Laboratorio", "Medio Ambiente"];
const allYears = ["Todos", "2024", "2023", "2022"];

export default function InformesDashboardClient({ company }: { company: string }) {
  const router = useRouter();
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [yearFilter, setYearFilter] = useState("Todos");

  async function handleLogout() {
    await fetch("/api/auth/login", { method: "DELETE" });
    router.push("/informes");
  }

  const filtered = MOCK_REPORTS.filter((r) => {
    const matchType = typeFilter === "Todos" || r.tipo === typeFilter;
    const matchYear = yearFilter === "Todos" || r.fecha.startsWith(yearFilter);
    return matchType && matchYear;
  });

  const selectClass = "px-3 py-2 rounded-lg border border-[#c8e6c9] bg-white text-[#1a2e1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]";

  return (
    <div className="min-h-screen bg-[#f0faf0]">
      {/* Header */}
      <header className="bg-white border-b border-[#c8e6c9] px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1B5E20]" style={{ fontFamily: "var(--font-heading)" }}>
            Multi<span className="text-[#4CAF50]">lab</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#3d5c3d] hidden sm:block">
              Bienvenido, <strong className="text-[#1a2e1a]">{company}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#3d5c3d] hover:text-[#2E7D32] hover:bg-[#f0faf0] rounded-lg transition-colors"
            >
              <LogOut size={15} />
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1a2e1a]" style={{ fontFamily: "var(--font-heading)" }}>Mis informes</h1>
            <p className="text-sm text-[#3d5c3d] mt-1">{filtered.length} informe{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex gap-3">
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectClass}>
              {allTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className={selectClass}>
              {allYears.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#c8e6c9] overflow-hidden shadow-sm">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-[#3d5c3d]">
              <FileText size={40} className="mb-3 opacity-40" />
              <p className="text-sm">No se encontraron informes con los filtros seleccionados.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f0faf0] border-b border-[#c8e6c9]">
                  <tr>
                    {["Fecha", "Tipo de análisis", "Nro. de informe", "Estado", ""].map((h) => (
                      <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-[#3d5c3d] uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8e6c9]">
                  {filtered.map((r) => {
                    const status = statusConfig[r.estado];
                    const StatusIcon = status.icon;
                    return (
                      <tr key={r.id} className="hover:bg-[#f9fdf9] transition-colors">
                        <td className="px-5 py-4 text-[#1a2e1a] whitespace-nowrap">{r.fecha}</td>
                        <td className="px-5 py-4 text-[#1a2e1a]">{r.tipo}</td>
                        <td className="px-5 py-4 font-mono text-[#2E7D32]">{r.numero}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                            <StatusIcon size={12} />
                            {status.label}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          {r.pdfUrl && r.estado === "entregado" && (
                            <a
                              href={r.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c8e6c9] text-xs font-medium text-[#2E7D32] hover:bg-[#e8f5e9] transition-colors"
                            >
                              <Download size={13} />
                              PDF
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
