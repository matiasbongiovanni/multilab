"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const services = [
  "Higiene y Seguridad Laboral",
  "Microbiología Integral",
  "Laboratorio Ambiental",
  "I+D en Ciencias y Medicina",
  "Otro / no sé todavía",
];

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <motion.p 
      initial={{ opacity: 0, y: -5 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="flex items-center gap-1.5 text-xs font-semibold text-red-500 mt-2" 
      role="alert"
    >
      <AlertCircle size={14} aria-hidden="true" />
      {msg}
    </motion.p>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fields, setFields] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const set = (k: string, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!fields.email.trim()) {
      e.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Ingresá un email válido.";
    }
    if (!fields.mensaje.trim()) e.mensaje = "Contanos brevemente tu consulta.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstField = document.querySelector<HTMLElement>("[data-error='true']");
      firstField?.focus();
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: fields.nombre,
          email: fields.email,
          telefono: fields.telefono,
          asunto: fields.servicio ? `Consulta: ${fields.servicio}` : "Consulta general",
          mensaje: `${fields.empresa ? `Empresa: ${fields.empresa}\n\n` : ""}${fields.mensaje}`,
        }),
      });

      if (!res.ok) throw new Error("server error");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl border text-sm font-medium text-[#1A2E1A] bg-white placeholder:text-[#1A2E1A]/30 transition-all duration-300 focus:outline-none focus:ring-4 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500/10 focus:border-red-500 bg-red-50/30"
        : "border-[#1A2E1A]/10 hover:border-[#44A148]/40 focus:ring-[#44A148]/10 focus:border-[#44A148]"
    }`;

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-[#fcfdfc] overflow-hidden"
      aria-labelledby="contacto-heading"
    >
      {/* Glow decorativo de fondo */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#44A148]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1A2E1A]/5 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
            <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
              Contacto
            </span>
          </div>

          <h2
            id="contacto-heading"
            className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E1A] leading-tight tracking-tight"
          >
            Hablemos de lo que tu empresa necesita
          </h2>

          <p className="mt-5 text-[#1A2E1A]/70 text-lg leading-relaxed">
            Completá el formulario y te respondemos en menos de 24 horas hábiles. El diagnóstico inicial es <strong className="text-[#1A2E1A]">gratuito y sin compromiso</strong>.
          </p>
        </motion.div>

        {/* Grid body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna Izquierda — Información */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tarjetas de contacto interactivas */}
            <div className="space-y-4">
              {[
                { label: "Laboratorio", email: "laboratorio@multilab.com.ar" },
                { label: "Higiene y Seguridad", email: "higieneyseguridad@multilab.com.ar" },
                { label: "Medioambiente", email: "medioambiente@multilab.com.ar" },
              ].map(({ label, email }) => (
                <a key={email} href={`mailto:${email}`} className="group flex items-center gap-4 p-4 rounded-2xl border border-[#1A2E1A]/5 bg-white hover:border-[#44A148]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#44A148]/10 flex items-center justify-center shrink-0 group-hover:bg-[#44A148]/20 transition-colors">
                    <Mail size={18} className="text-[#44A148]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-inter text-xs font-bold uppercase tracking-wider text-[#1A2E1A]/40 mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-[#1A2E1A] group-hover:text-[#44A148] transition-colors truncate">{email}</p>
                  </div>
                </a>
              ))}

              <div className="group flex items-center gap-5 p-4 rounded-2xl border border-[#1A2E1A]/5 bg-white hover:border-[#44A148]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#44A148]/10 flex items-center justify-center shrink-0 group-hover:bg-[#44A148]/20 transition-colors">
                  <Phone size={20} className="text-[#44A148]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter text-xs font-bold uppercase tracking-wider text-[#1A2E1A]/40 mb-1">Teléfono / WhatsApp</p>
                  <p className="text-base font-semibold text-[#1A2E1A]">[REEMPLAZAR: número de contacto]</p>
                </div>
              </div>

              <div className="group flex items-center gap-5 p-4 rounded-2xl border border-[#1A2E1A]/5 bg-white hover:border-[#44A148]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#44A148]/10 flex items-center justify-center shrink-0 group-hover:bg-[#44A148]/20 transition-colors">
                  <MapPin size={20} className="text-[#44A148]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter text-xs font-bold uppercase tracking-wider text-[#1A2E1A]/40 mb-1">Ubicación</p>
                  <p className="text-base font-semibold text-[#1A2E1A]">[REEMPLAZAR: dirección · Córdoba]</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Oscura: What happens next */}
            <div className="mt-8">
              <div className="relative overflow-hidden p-8 bg-[#1A2E1A] rounded-[2rem] shadow-xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#44A148]/20 rounded-full blur-3xl" />
                <p className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-[#44A148] mb-5">
                  Qué pasa después de que enviás
                </p>
                <ul className="space-y-4">
                  {[
                    "Te respondemos en menos de 24 hs hábiles.",
                    "Coordinamos una llamada de diagnóstico técnico.",
                    "Presentamos propuesta documentada.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/80">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#44A148]/20 border border-[#44A148]/30 text-[#44A148] text-[10px] font-black flex items-center justify-center shrink-0" aria-hidden="true">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha — Formulario */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow sutil detrás del form para destacarlo */}
            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl shadow-[#1A2E1A]/5 transform rotate-1 scale-105 opacity-50" />

            {formState === "success" ? (
              <div className="relative min-h-[420px] flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-[2.5rem] border border-[#1A2E1A]/10 shadow-xl">
                <div className="w-20 h-20 rounded-full bg-[#44A148]/10 border-4 border-white shadow-sm flex items-center justify-center mb-6">
                  <CheckCircle size={36} className="text-[#44A148]" />
                </div>
                <h3 className="font-inter text-3xl font-bold text-[#1A2E1A] mb-4">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#1A2E1A]/70 max-w-md leading-relaxed text-lg">
                  Recibimos tu consulta con éxito. Te responderemos en menos de 24 horas hábiles. Revisá tu carpeta de spam por las dudas.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 font-bold text-[#44A148] hover:text-[#1A2E1A] underline underline-offset-4 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative bg-white rounded-[2.5rem] border border-[#1A2E1A]/10 p-8 lg:p-10 shadow-xl space-y-6"
                aria-label="Formulario de contacto Multilab"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="contact-nombre" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                      Nombre y apellido <span className="text-red-500" aria-label="requerido">*</span>
                    </label>
                    <input
                      id="contact-nombre"
                      type="text"
                      value={fields.nombre}
                      onChange={(e) => set("nombre", e.target.value)}
                      onBlur={() => {
                        if (!fields.nombre.trim())
                          setErrors((e) => ({ ...e, nombre: "El nombre es requerido." }));
                      }}
                      placeholder="Juan García"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "err-nombre" : undefined}
                      data-error={!!errors.nombre || undefined}
                      className={inputClass("nombre")}
                      disabled={formState === "loading"}
                    />
                    <span id="err-nombre"><FieldError msg={errors.nombre} /></span>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="contact-empresa" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                      Empresa
                    </label>
                    <input
                      id="contact-empresa"
                      type="text"
                      value={fields.empresa}
                      onChange={(e) => set("empresa", e.target.value)}
                      placeholder="Nombre de tu empresa"
                      autoComplete="organization"
                      className={inputClass("empresa")}
                      disabled={formState === "loading"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                      Email corporativo <span className="text-red-500" aria-label="requerido">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={fields.email}
                      onChange={(e) => set("email", e.target.value)}
                      onBlur={() => {
                        if (!fields.email.trim())
                          setErrors((e) => ({ ...e, email: "El email es requerido." }));
                        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                          setErrors((e) => ({ ...e, email: "Ingresá un email válido." }));
                      }}
                      placeholder="juan@empresa.com.ar"
                      autoComplete="email"
                      inputMode="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      data-error={!!errors.email || undefined}
                      className={inputClass("email")}
                      disabled={formState === "loading"}
                    />
                    <span id="err-email"><FieldError msg={errors.email} /></span>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="contact-tel" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                      Teléfono
                    </label>
                    <input
                      id="contact-tel"
                      type="tel"
                      value={fields.telefono}
                      onChange={(e) => set("telefono", e.target.value)}
                      placeholder="+54 9 351 000-0000"
                      autoComplete="tel"
                      inputMode="tel"
                      className={inputClass("telefono")}
                      disabled={formState === "loading"}
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="contact-servicio" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="contact-servicio"
                    value={fields.servicio}
                    onChange={(e) => set("servicio", e.target.value)}
                    className={`${inputClass("servicio")} cursor-pointer appearance-none`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                    disabled={formState === "loading"}
                  >
                    <option value="">Seleccioná un área (Opcional)</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="contact-mensaje" className="block text-sm font-bold text-[#1A2E1A] mb-2">
                    ¿En qué podemos ayudarte? <span className="text-red-500" aria-label="requerido">*</span>
                  </label>
                  <textarea
                    id="contact-mensaje"
                    value={fields.mensaje}
                    onChange={(e) => set("mensaje", e.target.value)}
                    onBlur={() => {
                      if (!fields.mensaje.trim())
                        setErrors((e) => ({ ...e, mensaje: "Contanos brevemente tu consulta." }));
                    }}
                    placeholder="Describí brevemente tu situación, el tipo de análisis que buscás o los riesgos a evaluar..."
                    rows={4}
                    aria-required="true"
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
                    data-error={!!errors.mensaje || undefined}
                    className={`${inputClass("mensaje")} resize-none`}
                    disabled={formState === "loading"}
                  />
                  <span id="err-mensaje"><FieldError msg={errors.mensaje} /></span>
                </div>

                {/* Error global */}
                {formState === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm font-medium text-red-600" role="alert">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Hubo un error al enviar el formulario. Por favor, intentá de nuevo o escribinos a{" "}
                      <a href="mailto:contacto@multilab.com.ar" className="font-bold underline hover:text-red-800">
                        contacto@multilab.com.ar
                      </a>
                    </span>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-[#44A148] hover:bg-[#38853b] hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 text-base"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                        Enviando consulta...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send size={18} className="ml-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs font-medium text-[#1A2E1A]/40 mt-4">
                    Tus datos están protegidos. No enviamos spam.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}