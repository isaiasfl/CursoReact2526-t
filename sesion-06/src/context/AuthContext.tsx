import { createContext, useEffect, useState, type ReactNode } from "react";

// 1.- crear el contexto con createContext
const AuthContext = createContext<AuthContextType | null>(null);

// 2.- crear el provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: true,
  });

  // función para el login
  const login = () => {
    const isAdmin =
      Credential.email === "admin@gmail.com" && Credential.password === "1234";
    const isUser =
      Credential.email === "user@gmail.com" && Credential.password === "1234";

    const mockUser = {
      id: isAdmin ? "1" : "2",
      name: isAdmin ? "Administrador de Clase" : "Usuario de Clase",
      email: Credential.email,
      // avatar
      role: isAdmin ? "admin" : "user",
    };
    const mockToken = "ejtws-789fdsas-asdf";

    if (isAdmin || isUser) {
      setState({ user: mockUser, token: mockToken, isLoading: false });
    }
  };

  // función para el logout
  const logout = () => {
    setState({ user: null, token: null, isLoading: false });
  };

  //




  const value:AuthContextType = {
    ...state,
    login,
    logout,
    
  }

  // último paso retornar el contexto:

  return <AuthContext value={value} >{children}</AuthContext>

}
