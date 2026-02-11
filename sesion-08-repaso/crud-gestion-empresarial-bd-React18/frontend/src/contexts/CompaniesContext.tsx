import { createContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { companiesAPI } from '../services/api';
import type { Company, CreateCompanyDTO, UpdateCompanyDTO } from '../types';

/**
 * Context para manejar el estado global de empresas
 * Incluye funciones para CRUD y estado de loading/error
 */

export interface CompaniesContextType {
  companies: Company[];
  loading: boolean;
  error: string | null;
  fetchCompanies: () => Promise<void>;
  createCompany: (data: CreateCompanyDTO) => Promise<Company | null>;
  updateCompany: (id: number, data: UpdateCompanyDTO) => Promise<Company | null>;
  deleteCompany: (id: number) => Promise<boolean>;
}

export const CompaniesContext = createContext<CompaniesContextType | undefined>(undefined);

export function CompaniesProvider({ children }: { children: ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener todas las empresas
  const fetchCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await companiesAPI.getAll();
      setCompanies(data.companies);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar empresas';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Crear empresa
  const createCompany = async (data: CreateCompanyDTO): Promise<Company | null> => {
    try {
      const response = await companiesAPI.create(data);
      setCompanies((prev) => [response.company, ...prev]);
      toast.success(response.message || 'Empresa creada');
      return response.company;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al crear empresa';
      toast.error(message);
      return null;
    }
  };

  // Actualizar empresa
  const updateCompany = async (id: number, data: UpdateCompanyDTO): Promise<Company | null> => {
    try {
      const response = await companiesAPI.update(id, data);
      setCompanies((prev) =>
        prev.map((c) => (c.id === id ? response.company : c))
      );
      toast.success(response.message || 'Empresa actualizada');
      return response.company;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al actualizar empresa';
      toast.error(message);
      return null;
    }
  };

  // Eliminar empresa
  const deleteCompany = async (id: number): Promise<boolean> => {
    try {
      const response = await companiesAPI.delete(id);
      setCompanies((prev) => prev.filter((c) => c.id !== id));
      toast.success(response.message || 'Empresa eliminada');
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al eliminar empresa';
      toast.error(message);
      return false;
    }
  };

  // Cargar empresas al montar el componente
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        loading,
        error,
        fetchCompanies,
        createCompany,
        updateCompany,
        deleteCompany,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}
