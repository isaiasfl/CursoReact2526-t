import { useAuth } from "../hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mi Panel</h1>
      <div className="bg-white rounded shadow p-6">
        <p><strong>Nombre:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Rol:</strong> {user?.role}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
