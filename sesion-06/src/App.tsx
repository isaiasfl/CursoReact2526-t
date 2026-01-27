import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Ruta pública para todo el mundo */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Rutas protegidas para cualquier usuario loguead */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        {/* Ruta protegida sólo para el admin */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute adminOnly={true}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        {/* TOCAR EL PIANO  404 */}
      </Routes>
    </div>
  );
};

export default App;
