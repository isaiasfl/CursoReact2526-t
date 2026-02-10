import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../types/auth.types";
import { getMe, login } from "../utils/api";

// Tipo del contexto de autenticación
interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  loginContext: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
const TOKEN_KEY = "token-dwec";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect para comprobar la autenticación al montar el componente.
  // Sin esto, al recargar la página se perdería la sesión aunque
  // el token siga en localStorage.
  useEffect(() => {
    async function checkAuth() {
      try {
        const savedToken = localStorage.getItem(TOKEN_KEY);
        if (!savedToken) return;

        setToken(savedToken);
        const meResponse = await getMe(savedToken);

        if (meResponse.ok) {
          setUser(meResponse.user);
        } else {
          localStorage.removeItem(TOKEN_KEY);
          setToken(null);
        }
      } catch {
        setToken(null);
        setUser(null);
        localStorage.removeItem(TOKEN_KEY);
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  async function loginContext(email: string, password: string) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await login(email, password);

      if (response.ok) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
      } else {
        setError("Login failed");
      }
    } catch {
      setError("Error during login");
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setToken(null);
    setError(null);
  }

  const value = { user, token, isLoading, error, loginContext, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
