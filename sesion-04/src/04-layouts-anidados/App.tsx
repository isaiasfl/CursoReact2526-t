import { Link, Route, Routes } from "react-router-dom";
import DashBoardLayout from "./components/DashBoardLayout";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-600 mt-8">
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <Link
                to="/admin/inicio"
                className="text-4xl font-bold text-indigo-600 hover:scale-110 transition active:scale-95 italic"
              >
                Entrar Panel Admin
              </Link>
            </div>
          }
        />
        <Route path="/admin" element={<DashBoardLayout/>}>
          <Route path="inicio" element={<Stats />} />
          <Route path="ajustes" element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
