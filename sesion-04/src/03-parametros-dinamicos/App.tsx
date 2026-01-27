import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Saludo from "./pages/Saludo";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-600 mt-8">
     
      <main className="max-w-5xl mx-auto mt-16 px-8 mb-10">
        {/* Aquí pondré mis rutas */}
        <div className="bg-white rounded border border-slate-200 shadow-2xl min-h-[500px] flex items-center justify-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saludo/:nombre" element={<Saludo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
