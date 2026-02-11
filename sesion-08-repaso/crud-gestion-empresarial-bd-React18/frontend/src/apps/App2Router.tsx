import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CompaniesProvider } from '../contexts/CompaniesContext';
import { ContactsProvider } from '../contexts/ContactsContext';
import CompanyForm from '../components/companies/CompanyForm';
import CompanyList from '../components/companies/CompanyList';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactList';

/**
 * APP 2 - CON REACT ROUTER
 *
 * Para alumnos intermedios:
 * - Con React Router Dom
 * - Rutas para diferentes vistas
 * - Sin autenticación
 * - Practican navegación entre páginas
 */

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Bienvenido al Sistema de Gestión</h2>
      <p className="text-lg text-gray-600 mb-8">
        Gestiona tus empresas y contactos de forma sencilla
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/companies" className="btn btn-primary">
          Ver Empresas
        </Link>
        <Link to="/contacts" className="btn btn-primary">
          Ver Contactos
        </Link>
      </div>
    </div>
  );
}

function CompaniesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Empresas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CompanyForm />
        </div>
        <div className="lg:col-span-2">
          <CompanyList />
        </div>
      </div>
    </div>
  );
}

function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Contactos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default function App2Router() {
  return (
    <CompaniesProvider>
      <ContactsProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4 shadow-md">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                  🏢 CRUD con Router
                </Link>
                <div className="flex gap-4">
                  <Link to="/companies" className="hover:underline">
                    Empresas
                  </Link>
                  <Link to="/contacts" className="hover:underline">
                    Contactos
                  </Link>
                </div>
              </div>
            </nav>

            {/* Rutas */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>

            <Toaster position="top-right" />
          </div>
        </BrowserRouter>
      </ContactsProvider>
    </CompaniesProvider>
  );
}
