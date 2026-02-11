import { createContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { authAPI } from '../services/api';
import type { User, RegisterDTO, LoginDTO } from '../types';

/**
 * Context para manejar autenticación
 * Guarda el token en localStorage y maneja login/register/logout
 */

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginDTO) => Promise<boolean>;
  register: (data: RegisterDTO) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Login
  const login = async (data: LoginDTO): Promise<boolean> => {
    try {
      const response = await authAPI.login(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem('token', response.token);
      toast.success(response.message || 'Login exitoso');
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
      toast.error(message);
      return false;
    }
  };

  // Register
  const register = async (data: RegisterDTO): Promise<boolean> => {
    try {
      const response = await authAPI.register(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem('token', response.token);
      toast.success(response.message || 'Registro exitoso');
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al registrarse';
      toast.error(message);
      return false;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    toast.success('Sesión cerrada');
  };

  // Verificar si hay sesión activa
  const checkAuth = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.getMe();
      setUser(response.user);
    } catch (err) {
      // Token inválido o expirado
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Verificar autenticación al montar
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

