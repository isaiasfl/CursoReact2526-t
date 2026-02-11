import { useCompanies } from '../../hooks/useCompanies';
import CompanyCard from './CompanyCard';

/**
 * Lista de empresas
 * Muestra todas las empresas usando CompanyCard
 */
export default function CompanyList() {
  const { companies, loading } = useCompanies();

  if (loading) {
    return <div className="p-8 text-center">Cargando empresas...</div>;
  }

  if (companies.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No hay empresas. ¡Crea la primera!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
