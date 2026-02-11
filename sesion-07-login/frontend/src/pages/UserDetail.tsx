import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../types/auth.types";
import { getUserById } from "../utils/api";

const UserDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!token || !id) return;
      try {
        const res = await getUserById(token, Number(id));
        if (res.ok) setUser(res.data);
      } catch {
        setError("Error al cargar el usuario");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token, id]);

  if (loading) return <p className="p-8 text-center">Cargando usuario...</p>;
  if (error || !user) return <p className="p-8 text-center text-red-500">{error ?? "Usuario no encontrado"}</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button
        onClick={() => navigate("/admin/users")}
        className="mb-4 text-blue-500 hover:underline"
      >
        &larr; Volver al listado
      </button>
      <div className="bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Detalle del usuario</h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        <p><strong>Creado:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default UserDetail;
