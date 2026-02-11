import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPages from "./pages/LoginPages";
import PublicPage from "./pages/PublicPage";
import UserDashboard from "./pages/UserDashboard";
import UserDetail from "./pages/UserDetail";

const App = () => (
  <div className="page-container">
    <Navbar />
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/login" element={
        <ProtectedRoute access="guest">
          <LoginPages />
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute access="private">
          <UserDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/users" element={
        <ProtectedRoute access="admin">
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/users/:id" element={
        <ProtectedRoute access="admin">
          <UserDetail />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </div>
);

export default App;
