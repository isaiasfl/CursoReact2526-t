import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import { CompaniesProvider } from '../hooks/useCompanies';
import { ContactsProvider } from '../hooks/useContacts';
import LoginForm from '../components/auth/LoginForm';
import Navbar from '../components/common/Navbar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import CompanyForm from '../components/companies/CompanyForm';
import CompanyList from '../components/companies/CompanyList';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactList';

/**
 * APP 3 - PROFESIONAL CON AUTH + RUTAS PROTEGIDAS
 *
 * Para alumnos avanzados:
 * - Con React Router
 * - Con autenticación JWT
 * - Rutas protegidas
 * - Login/Logout
 * - Practican autenticación completa
 */

// Componente para proteger rutas
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <>{children}</>;
}

function LoginPage() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sistema de gestión empresarial
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/companies" className="btn btn-primary">
          Empresas
        </Link>
        <Link to="/contacts" className="btn btn-primary">
          Contactos
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

function AppContent() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/companies" element={<CompaniesPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  </Routes>
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default function App3Professional() {
  return (
    <AuthProvider>
      <CompaniesProvider>
        <ContactsProvider>
          <AppContent />
        </ContactsProvider>
      </CompaniesProvider>
    </AuthProvider>
  );
}
