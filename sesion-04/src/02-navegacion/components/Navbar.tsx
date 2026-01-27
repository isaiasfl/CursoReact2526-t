import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 p-8 flex justify-center items-center gap-12 shadow-sm sticky top-0 z-50">
      <Link
        to="/"
        className="text-slate-400 hover:text-slate-900 font-bold uppercase transition-all text-2xl"
      >
        Inicio 🏠
      </Link>
      <NavLink
        to="/productos"
        className={({ isActive }) =>
          `px-8 py-3 rounded-2xl font-black transition-all text-sm shadow-md active:scale-95 
          ${
            isActive
              ? "bg-indigo-600 text-white shadow-indigo-200"
              : "bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          }       
         `
        }
      >
        Productos
      </NavLink>
      <NavLink
        to="/acerca-de"
        className={({ isActive }) =>
          `px-8 py-3 rounded-2xl font-black transition-all text-sm shadow-md active:scale-95 
          ${
            isActive
              ? "bg-indigo-600 text-white shadow-indigo-200"
              : "bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          }       
         `
        }
      >
        Acerca de
      </NavLink>
    </nav>
  );
};

export default Navbar;
