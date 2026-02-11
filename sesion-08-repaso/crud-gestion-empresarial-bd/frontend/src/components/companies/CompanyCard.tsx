import { useState } from 'react';
import { useCompanies } from '../../hooks/useCompanies';
import type { Company } from '../../types';

/**
 * Tarjeta individual de empresa
 * Muestra información y botones de editar/eliminar
 */
interface Props {
  company: Company;
  onEdit?: (company: Company) => void;
}

export default function CompanyCard({ company, onEdit }: Props) {
  const { deleteCompany } = useCompanies();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    const success = await deleteCompany(company.id);
    if (success) setShowConfirm(false);
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <h3 className="font-bold text-lg mb-2">{company.name}</h3>

      {company.industry && (
        <p className="text-sm text-gray-500 mb-2">
          🏢 {company.industry}
        </p>
      )}

      {company.website && (
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          🔗 {company.website}
        </a>
      )}

      <div className="mt-4 flex gap-2">
        {onEdit && (
          <button
            onClick={() => onEdit(company)}
            className="bg-green-500 text-white px-4 py-2 rounded font-medium transition-colors hover:bg-green-600"
          >
            Editar
          </button>
        )}
        <button
          onClick={() => setShowConfirm(true)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>

      {showConfirm && (
        <div className="mt-4 p-3 bg-red-100 rounded">
          <p className="text-sm mb-2">¿Eliminar {company.name}?</p>
          <div className="flex gap-2">
            <button onClick={handleDelete} className="btn btn-danger">
              Sí, eliminar
            </button>
            <button onClick={() => setShowConfirm(false)} className="btn btn-secondary">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
