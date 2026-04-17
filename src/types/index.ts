export interface Patient {
  id: string;
  created_at: string;
  dni: string;
  nombre: string;
  apellido: string;
  email: string | null;
  password_hash: string;
}

export interface Study {
  id: string;
  created_at: string;
  patient_id: string;
  fecha: string;
  tipo: string;
  descripcion: string | null;
  archivo_url: string | null;
  disponible: boolean;
}

export interface SessionUser {
  id: string;
  dni: string;
  nombre: string;
  apellido: string;
  email: string | null;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
