import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import NotFound from "./components/NotFound";
import AcercaDe from "./components/AcercaDe";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-600 mt-8">
      <Navbar />
      <main className="max-w-5xl mx-auto mt-16 px-8 mb-10">
        {/* Aquí pondré mis rutas */}
        <div className="bg-white rounded border border-slate-200 shadow-2xl min-h-[500px] flex items-center justify-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
