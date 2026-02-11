import type {
  Company,
  Contact,
  CreateCompanyDTO,
  UpdateCompanyDTO,
  CreateContactDTO,
  UpdateContactDTO,
  RegisterDTO,
  LoginDTO,
  AuthResponse,
  User,
} from '../types';

/**
 * Servicio API para comunicación con el backend
 * Maneja todas las peticiones HTTP con fetch
 */

// URL base del backend (configurable via variable de entorno)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Helper para manejar respuestas de la API
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `Error ${response.status}`);
  }
  return response.json();
}

/**
 * Helper para obtener headers con token si existe
 */
function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Si hay token en localStorage, añadirlo al header
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

// ========================================
// AUTENTICACIÓN
// ========================================

export const authAPI = {
  /**
   * Registrar un nuevo usuario
   */
  async register(data: RegisterDTO): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<AuthResponse>(response);
  },

  /**
   * Iniciar sesión
   */
  async login(data: LoginDTO): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<AuthResponse>(response);
  },

  /**
   * Obtener información del usuario autenticado
   */
  async getMe(): Promise<{ user: User }> {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: getHeaders(),
    });
    return handleResponse<{ user: User }>(response);
  },
};

// ========================================
// EMPRESAS (COMPANIES)
// ========================================

export const companiesAPI = {
  /**
   * Obtener todas las empresas
   */
  async getAll(): Promise<{ companies: Company[]; total: number }> {
    const response = await fetch(`${API_URL}/companies`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  /**
   * Obtener una empresa por ID
   */
  async getById(id: number): Promise<{ company: Company }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  /**
   * Crear una nueva empresa
   */
  async create(data: CreateCompanyDTO): Promise<{ message: string; company: Company }> {
    const response = await fetch(`${API_URL}/companies`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Actualizar una empresa
   */
  async update(
    id: number,
    data: UpdateCompanyDTO
  ): Promise<{ message: string; company: Company }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Eliminar una empresa
   */
  async delete(id: number): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/companies/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  /**
   * Obtener contactos de una empresa
   */
  async getContacts(id: number): Promise<{ company: { id: number; name: string }; contacts: Contact[]; total: number }> {
    const response = await fetch(`${API_URL}/companies/${id}/contacts`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },
};

// ========================================
// CONTACTOS (CONTACTS)
// ========================================

export const contactsAPI = {
  /**
   * Obtener todos los contactos
   */
  async getAll(): Promise<{ contacts: Contact[]; total: number }> {
    const response = await fetch(`${API_URL}/contacts`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  /**
   * Obtener un contacto por ID
   */
  async getById(id: number): Promise<{ contact: Contact }> {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  /**
   * Crear un nuevo contacto
   */
  async create(data: CreateContactDTO): Promise<{ message: string; contact: Contact }> {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Actualizar un contacto
   */
  async update(
    id: number,
    data: UpdateContactDTO
  ): Promise<{ message: string; contact: Contact }> {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Eliminar un contacto
   */
  async delete(id: number): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },
};
