import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * Barra de navegación simple
 */
export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'underline font-semibold' : 'hover:underline';

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">🏢 Gestión Empresarial</h1>
          {isAuthenticated && (
            <div className="flex items-center gap-4 text-sm">
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>
              <NavLink to="/companies" className={navLinkClass}>
                Empresas
              </NavLink>
              <NavLink to="/contacts" className={navLinkClass}>
                Contactos
              </NavLink>
            </div>
          )}
        </div>

        {isAuthenticated && user && (
          <div className="flex items-center gap-4">
            <span>Hola, {user.name}</span>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
