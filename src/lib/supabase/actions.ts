"use server";

import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { createClient } from "./server";
import type { Patient, SessionUser, Study } from "@/types";

const JWT_SECRET = process.env.JWT_SECRET!;
const SESSION_COOKIE = "ml_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function loginAction(
  dni: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  const { data: patient, error } = await supabase
    .from("patients")
    .select("id, dni, nombre, apellido, email, password_hash")
    .eq("dni", dni.trim())
    .single<Patient>();

  if (error || !patient) {
    return { success: false, error: "DNI o contraseña incorrectos." };
  }

  const passwordMatch = await bcrypt.compare(password, patient.password_hash);
  if (!passwordMatch) {
    return { success: false, error: "DNI o contraseña incorrectos." };
  }

  const sessionUser: SessionUser = {
    id: patient.id,
    dni: patient.dni,
    nombre: patient.nombre,
    apellido: patient.apellido,
    email: patient.email,
  };

  const token = sign(sessionUser, JWT_SECRET, { expiresIn: "7d" });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return { success: true };
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  try {
    const decoded = verify(token, JWT_SECRET) as SessionUser;
    return decoded;
  } catch {
    return null;
  }
}

export async function getStudiesByPatientId(
  patientId: string
): Promise<Study[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("studies")
    .select("*")
    .eq("patient_id", patientId)
    .order("fecha", { ascending: false })
    .returns<Study[]>();

  if (error || !data) return [];
  return data;
}
