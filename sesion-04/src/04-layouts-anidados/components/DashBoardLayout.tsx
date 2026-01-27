import { NavLink, Outlet } from "react-router-dom"

// DONDE APAREZCA LA ETIQUETA <Outlet/> será donde se renderizarán los hijos de este componente
export const Sidebar = () => (
  // crear un sidebar que permita acceder a ajustes y a stats
  <aside className="w-80 bg-sky-900 p-10 flex flex-col border-r border-slate-700 shadow-2xl h-full">
    <div className="mb-14">
      <h2 className="text-2xl text-white italic">Admin</h2>
      <p className="text-slate-500 font-bold mt-2 italic">
        Archivos Presionales
      </p>
    </div>
    <NavLink to="/admin/inicio">Estadisticas</NavLink>
    <NavLink to="/admin/ajustes">Ajustes</NavLink>
  </aside>
);

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      <Sidebar />
      <header>Barra de navegación</header>
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <Outlet /> 
      </main>
      {/* Posible Footer */}
    </div>
  )
}

export default DashBoardLayout