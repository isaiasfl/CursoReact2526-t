/**
 * Tipos TypeScript para las entidades del backend
 * Sincronizados con los modelos de Prisma
 */

// Usuario para autenticación
export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// Empresa
export interface Company {
  id: number;
  name: string;
  industry: string | null;
  website: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    contacts: number;
  };
}

// Contacto
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  position: string | null;
  companyId: number | null;
  linkedin: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  company?: {
    id: number;
    name: string;
    industry: string | null;
  } | null;
}

// DTOs para crear/actualizar
export interface CreateCompanyDTO {
  name: string;
  industry?: string;
  website?: string;
}

export interface UpdateCompanyDTO {
  name?: string;
  industry?: string;
  website?: string;
}

export interface CreateContactDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position?: string;
  companyId?: number | null;
  linkedin?: string;
  notes?: string;
}

export interface UpdateContactDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  position?: string;
  companyId?: number | null;
  linkedin?: string;
  notes?: string;
}

// DTOs para autenticación
export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}

// Respuestas de la API
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
