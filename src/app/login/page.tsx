"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
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
    if (!dni.trim()) e.dni = "Ingresá tu DNI.";
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
      <div className="text-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 justify-center"
          aria-label="Volver al inicio — Multilab"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
          >
            <rect width="36" height="36" rx="8" fill="#4CAF50" />
            <path d="M13 8h4v13a4 4 0 01-8 0V8h4z" fill="white" opacity="0.9" />
            <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
            <path
              d="M23 18v6M27 18v6M21 24h8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-black text-2xl text-[#1A1A1A] tracking-tight">
            MULTI<span className="text-[#4CAF50]">LAB</span>
          </span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-[#E0E0E0] p-7 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">
            Acceder a mis estudios
          </h1>
          <p className="text-sm text-[#616161] mt-1">
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
              className="p-3.5 bg-[#fef2f2] border border-[#fecaca] rounded-lg text-sm text-[#dc2626] flex items-center gap-2"
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
            label="DNI"
            name="dni"
            type="text"
            inputMode="numeric"
            value={dni}
            onChange={(e) => {
              setDni(e.target.value);
              if (errors.dni) setErrors((p) => ({ ...p, dni: undefined }));
            }}
            placeholder="Ej: 30123456"
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

          <Button type="submit" isLoading={isLoading} fullWidth size="lg">
            Ingresar
          </Button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#E0E0E0]">
          <p className="text-sm text-[#616161] text-center">
            ¿Olvidaste tu contraseña?{" "}
            <Link
              href="/contacto"
              className="text-[#4CAF50] font-medium hover:underline underline-offset-2"
            >
              Contactanos
            </Link>{" "}
            para restablecerla.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-[#616161] mt-6">
        <Link href="/" className="hover:text-[#4CAF50] transition-colors">
          Volver al inicio
        </Link>
      </p>
    </motion.div>
  );
}

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Suspense
        fallback={
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-[#E0E0E0] p-8 flex items-center justify-center h-64">
            <div
              className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: "#4CAF50", borderTopColor: "transparent" }}
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
