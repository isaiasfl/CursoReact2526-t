import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPages from "./pages/LoginPages";
import PublicPage from "./pages/PublicPage";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  // función que va a proteger las rutas donde debo de estar logueado
  function PrivateRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();
    if (isLoading) return <div>Loading...</div>;
    return user ? { children } : <Navigate to="/login" />;
  }
  // ruta sólo para el admin
  function AdminRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();
    if (isLoading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" />;

    return user && user.role === "ADMIN" ? (
      { children }
    ) : (
      <Navigate to="/dashboard" />
    );
  }

  // function GuestRoute(){

  // }

  return (
    <div className="page-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
