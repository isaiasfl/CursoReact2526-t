import { Toaster } from 'sonner';
import { CompaniesProvider } from '../contexts/CompaniesContext';
import CompanyForm from '../components/companies/CompanyForm';
import CompanyList from '../components/companies/CompanyList';

/**
 * APP 1 - CRUD SIMPLE SIN RUTAS
 *
 * Sin React Router, sin autenticación
 * Solo gestión de empresas: crear, listar y eliminar
 */
export default function App1Simple() {
  return (
    <CompaniesProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">
            🏢 CRUD Empresarial
          </h1>
        </div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-xl font-bold mb-4">Gestión de Empresas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <CompanyForm />
            </div>
            <div className="lg:col-span-2">
              <CompanyList />
            </div>
          </div>
        </div>

        <Toaster position="top-right" />
      </div>
    </CompaniesProvider>
  );
}
