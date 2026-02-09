import { createContext, useState, type ReactNode } from "react";
import type { User } from "../types/auth.types";
import { getMe, login } from "../utils/api";

export const AuthContext = createContext<AuthContextType | null>(null);
const TOKEN_KEY = "token-dwec";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function checkAuth() {
    try {
      // comprobar si hay token en localStorage
      const saveToken = localStorage.getItem(TOKEN_KEY);
      if (!saveToken) {
        setLoading(false);
        return;
      }
      // si hay token lo guardo en token
      setToken(saveToken);
      // llamar a getMe
      const meResponse = await getMe(saveToken);
      // si ok es true guardo el usuario en user
      if (meResponse.ok) {
        setUser(meResponse.user);
      }
      // si ok es false elimino el token del localStorage
      else {
        localStorage.removeItem(TOKEN_KEY);
      }
      setLoading(false);
    } catch (error) {
      setError("Error checking auth");
      setToken(null);
      setUser(null);
      localStorage.removeItem(TOKEN_KEY);
    } finally {
      setLoading(false);
    }
  }

  async function loginContext(email: string, password: string) {
    try {
      setLoading(true);
      setError(null);
      // llamar a la api para hacer login
      const response = await login(email, password);
      // si ok es true guardo el token en localStorage y en token
      if (response.ok) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
      }
      // si ok es false guardo el error en error
      else {
        setError("Login failed");
      }
    } catch (error) {
      setError("Error during login");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setToken(null);
    setLoading(false);
    setError(null);
  }

  const value = { user, token, loading, error, checkAuth, loginContext, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
