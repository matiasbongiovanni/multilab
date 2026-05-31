"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";

export default function InformesLoginPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/informes/dashboard");
      } else {
        setError("Credenciales inválidas. Verificá tu usuario y contraseña.");
      }
    } catch {
      setError("Error de conexión. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#c8e6c9] bg-white text-[#1a2e1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all";

  return (
    <div className="min-h-screen bg-[#f0faf0] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-[#1B5E20]" style={{ fontFamily: "var(--font-heading)" }}>
              Multi<span className="text-[#4CAF50]">lab</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-[#1a2e1a] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
            Portal de clientes
          </h1>
          <p className="text-sm text-[#3d5c3d]">Accedé a tus informes técnicos</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#c8e6c9] p-8 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#3d5c3d] uppercase tracking-wider mb-1.5">Usuario</label>
            <input name="username" type="text" required autoComplete="username" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#3d5c3d] uppercase tracking-wider mb-1.5">Contraseña</label>
            <div className="relative">
              <input name="password" type={showPass ? "text" : "password"} required autoComplete="current-password" className={`${inputClass} pr-10`} />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#81C784] hover:text-[#2E7D32]">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 rounded-xl px-3 py-2.5 border border-red-200">
              <AlertCircle size={14} />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#2E7D32] hover:bg-[#1B5E20] disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            {loading ? <><Loader2 size={15} className="animate-spin" /> Ingresando...</> : <><LogIn size={15} /> Ingresar</>}
          </button>
        </form>

        <p className="text-center text-xs text-[#3d5c3d] mt-6">
          ¿No tenés acceso?{" "}
          <a href="#contacto" onClick={() => window.location.href = "/#contacto"} className="text-[#2E7D32] hover:underline">
            Contactanos
          </a>
        </p>
      </div>
    </div>
  );
}
