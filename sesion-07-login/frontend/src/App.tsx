import { useAuth } from "./hooks/useAuth";
import { login } from "./utils/api";

const App = () => {
  const { user, token, loading, error, checkAuth, loginContext, logout } =
    useAuth();

  async function handleLoginUser() {
    console.log("Login User");
    //     {
    //   "email": "user@dwec.com",
    //   "password": "user123"
    // }
    const respuesta = loginContext("user@dwec.com", "user123");
    console.log(respuesta)
  }
  function handleLogout() {
    console.log("Logout");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 gap-2 flex flex-col ">
        <h1> Probando BD PostgreSQL</h1>
        <button
          onClick={handleLoginUser}
          className="px-4 py-2 rounded bg-sky-700 hover:bg-gray-900 text-white transition-all"
        >
          logIn User
        </button>
        <button className="px-4 py-2 rounded bg-orange-700 text-white hover:bg-gray-900 transition-all">
          logIn Admin
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-purple-700 text-white hover:bg-gray-900 transition-all"
        >
          logOut
        </button>
        <button className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-900 transition-all">
          GetTareas
        </button>
      </div>
    </div>
  );
};

export default App;
