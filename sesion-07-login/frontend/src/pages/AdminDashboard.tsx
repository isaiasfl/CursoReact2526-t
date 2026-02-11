import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../types/auth.types";
import { createUser, deleteUser, getUsers } from "../utils/api";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estado del formulario de alta
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"USER" | "ADMIN">("USER");

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

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setError(null);

    try {
      const res = await createUser(token, { name, email, password, role });
      if (res.ok) {
        setUsers((prev) => [...prev, res.data]);
        // Limpiar formulario
        setName("");
        setEmail("");
        setPassword("");
        setRole("USER");
      }
    } catch {
      setError("Error al crear el usuario");
    }
  }

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

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {/* Formulario de alta */}
      <form onSubmit={handleCreate} className="bg-white rounded shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Dar de alta usuario</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="border rounded p-2"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "USER" | "ADMIN")}
            className="border rounded p-2"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Crear usuario
        </button>
      </form>

      {/* Tabla de usuarios */}
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
              <td className="p-3">
                <Link to={`/admin/users/${u.id}`} className="text-blue-500 hover:underline">
                  {u.name}
                </Link>
              </td>
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
