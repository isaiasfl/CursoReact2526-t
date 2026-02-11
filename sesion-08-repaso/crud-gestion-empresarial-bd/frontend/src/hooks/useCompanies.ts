import { useContext } from 'react';
import { CompaniesContext } from '../contexts/CompaniesContext';

/**
 * Hook personalizado para acceder al contexto de empresas
 * Lanza error si se usa fuera del CompaniesProvider
 */
export function useCompanies() {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error('useCompanies debe usarse dentro de CompaniesProvider');
  }
  return context;
}
