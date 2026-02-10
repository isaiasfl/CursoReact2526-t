import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../types/auth.types";
import { deleteUser, getUsers } from "../utils/api";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      if (!token) return;
      try {
        const res = await getUsers(token);
        if (res.ok) setUsers(res.data);
      } catch {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [token]);

  async function handleDelete(id: number) {
    if (!token) return;
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;

    try {
      await deleteUser(token, id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      setError("Error al eliminar el usuario");
    }
  }

  if (loading) return <p className="p-8 text-center">Cargando usuarios...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Rol</th>
            <th className="p-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.id}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(u.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
