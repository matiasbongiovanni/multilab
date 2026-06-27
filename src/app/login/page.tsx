"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { loginAction } from "@/lib/supabase/actions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/mis-estudios";
  const shouldReduceMotion = useReducedMotion();

  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    dni?: string;
    password?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!dni.trim()) e.dni = "Ingresá tu CUIT.";
    if (!password) e.password = "Ingresá tu contraseña.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const result = await loginAction(dni.trim(), password);
      if (result.success) {
        router.push(redirect);
        router.refresh();
      } else {
        setErrors({ general: result.error ?? "Error al iniciar sesión." });
      }
    } catch {
      setErrors({ general: "Error de conexión. Intentá nuevamente." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md"
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-8 gap-3">
        <Link href="/" aria-label="Volver al inicio — Multilab">
          <Image
            src="/Logo-Multilab.webp"
            alt="Multilab"
            width={160}
            height={56}
            className="object-contain"
            priority
          />
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A2E1A]/50">
          Portal de clientes
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#1A2E1A]/10 p-7 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2E1A]">
            Acceder a mis informes
          </h1>
          <p className="text-sm text-[#1A2E1A]/60 mt-1">
            Ingresá con tu DNI y la contraseña que te asignaron.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4"
          aria-label="Formulario de inicio de sesión"
        >
          {errors.general && (
            <div
              className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-center gap-2"
              role="alert"
              aria-live="polite"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.general}
            </div>
          )}

          <Input
            label="CUIT"
            name="dni"
            type="text"
            inputMode="numeric"
            value={dni}
            onChange={(e) => {
              setDni(e.target.value);
              if (errors.dni) setErrors((p) => ({ ...p, dni: undefined }));
            }}
            placeholder="Ej: 20-30123456-4"
            required
            error={errors.dni}
            autoComplete="username"
          />

          <Input
            label="Contraseña"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password)
                setErrors((p) => ({ ...p, password: undefined }));
            }}
            placeholder="Tu contraseña"
            required
            error={errors.password}
            autoComplete="current-password"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#1A2E1A] hover:bg-[#44A148] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Ingresando...
              </>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#1A2E1A]/8">
          <p className="text-sm text-[#1A2E1A]/60 text-center">
            ¿Olvidaste tu contraseña?{" "}
            <Link
              href="/contacto"
              className="text-[#44A148] font-medium hover:underline underline-offset-2"
            >
              Contactanos
            </Link>{" "}
            para restablecerla.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-[#1A2E1A]/50 mt-6">
        <Link href="/" className="hover:text-[#44A148] transition-colors">
          ← Volver al inicio
        </Link>
      </p>
    </motion.div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAFAF8]">
      <Suspense
        fallback={
          <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#1A2E1A]/10 p-8 flex items-center justify-center h-64">
            <div
              className="w-8 h-8 border-4 rounded-full animate-spin"
              style={{ borderColor: "#44A148", borderTopColor: "transparent" }}
              aria-label="Cargando..."
            />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
