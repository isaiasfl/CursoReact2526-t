import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// "guest" = solo para NO logueados (login, registro)
// "private" = solo para logueados
// "admin" = solo para logueados con role ADMIN
type AccessLevel = "guest" | "private" | "admin";

interface Props {
  access: AccessLevel;
  children: React.ReactNode;
}

export default function ProtectedRoute({ access, children }: Props) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p className="p-8 text-center">Cargando...</p>;

  // Ruta solo para visitantes (no logueados)
  if (access === "guest") {
    return user ? <Navigate to="/dashboard" /> : <>{children}</>;
  }

  // A partir de aquí se necesita estar logueado
  if (!user) return <Navigate to="/login" />;

  // Ruta solo para admin
  if (access === "admin" && user.role !== "ADMIN") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}
