import { redirect } from "next/navigation";
import { getSession, getStudiesByPatientId, logoutAction } from "@/lib/supabase/actions";
import type { Metadata } from "next";
import MisEstudiosClient from "./MisEstudiosClient";

export const metadata: Metadata = {
  title: "Mis Estudios",
  description: "Portal de pacientes Multilab. Accedé a tus resultados de análisis clínicos de forma segura.",
  robots: { index: false, follow: false },
};

export default async function MisEstudiosPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login?redirect=/mis-estudios");
  }

  const studies = await getStudiesByPatientId(session.id);

  return (
    <MisEstudiosClient
      session={session}
      studies={studies}
      logoutAction={logoutAction}
    />
  );
}
