import { useState } from 'react';
import { Toaster } from 'sonner';
import { CompaniesProvider } from '../contexts/CompaniesContext';
import { ContactsProvider } from '../contexts/ContactsContext';
import CompanyForm from '../components/companies/CompanyForm';
import CompanyList from '../components/companies/CompanyList';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactList';
import type { Company } from '../types';

/**
 * APP 1 - CRUD SIMPLE SIN RUTAS
 *
 * Para alumnos principiantes:
 * - Sin React Router
 * - Sin autenticación
 * - Solo componentes directos con estado local para alternar vistas
 * - Practican CRUD básico
 * - Incluye edición de empresas con React 19 forms
 */
export default function App1Simple() {
  const [view, setView] = useState<'companies' | 'contacts'>('companies');
  const [companyToEdit, setCompanyToEdit] = useState<Company | null>(null);

  const handleEdit = (company: Company) => {
    setCompanyToEdit(company);
  };

  const handleEditComplete = () => {
    setCompanyToEdit(null);
  };

  return (
    <CompaniesProvider>
      <ContactsProvider>
        <div className="min-h-screen bg-gray-100">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-2xl font-bold text-center">
              🏢 CRUD Empresarial - Versión Simple
            </h1>
          </div>

          {/* Navegación con botones */}
          <div className="p-4 flex gap-4 justify-center">
            <button
              onClick={() => setView('companies')}
              className={view === 'companies' ? 'btn btn-primary' : 'btn btn-secondary'}
            >
              Empresas
            </button>
            <button
              onClick={() => setView('contacts')}
              className={view === 'contacts' ? 'btn btn-primary' : 'btn btn-secondary'}
            >
              Contactos
            </button>
          </div>

          {/* Contenido principal */}
          <div className="max-w-7xl mx-auto p-4">
            {view === 'companies' ? (
              <div>
                <h2 className="text-xl font-bold mb-4">Gestión de Empresas</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <CompanyForm
                      companyToEdit={companyToEdit}
                      onEditComplete={handleEditComplete}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <CompanyList onEdit={handleEdit} />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Gestión de Contactos</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <ContactForm />
                  </div>
                  <div className="lg:col-span-2">
                    <ContactList />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Toaster position="top-right" />
        </div>
      </ContactsProvider>
    </CompaniesProvider>
  );
}
