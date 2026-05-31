import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import InformesDashboardClient from "./InformesDashboardClient";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("ml_session");
  if (!session?.value) redirect("/informes");

  let company = "Cliente";
  try {
    const parsed = JSON.parse(Buffer.from(session.value, "base64").toString());
    company = parsed.company ?? "Cliente";
  } catch {
    // malformed cookie — still render
  }

  return <InformesDashboardClient company={company} />;
}
