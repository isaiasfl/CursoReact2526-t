import { useState, FormEvent } from 'react';
import { useCompanies } from '../../contexts/CompaniesContext';
import type { CreateCompanyDTO } from '../../types';

/**
 * Formulario para crear una nueva empresa
 * Usa el contexto para enviar los datos
 */
export default function CompanyForm() {
  const { createCompany } = useCompanies();
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    const data: CreateCompanyDTO = {
      name: name.trim(),
      industry: industry.trim() || undefined,
      website: website.trim() || undefined,
    };

    const success = await createCompany(data);
    if (success) {
      setName('');
      setIndustry('');
      setWebsite('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg">
      <h2 className="text-xl font-bold mb-4">
        Nueva Empresa
      </h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Nombre *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
          placeholder="Ej: Google"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Industria
        </label>
        <input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="input"
          placeholder="Ej: Technology"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Sitio Web
        </label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="input"
          placeholder="https://ejemplo.com"
        />
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? 'Creando...' : 'Crear Empresa'}
      </button>
    </form>
  );
}
