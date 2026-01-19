import React, { useState } from "react";

interface Credenciales {
  email: string;
  password: string;
}

const FormularioLogin = () => {
  // hooks
  const [credenciales, setCredenciales] = useState<Credenciales>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errores, setErrores] = useState("");

  // efectos

  // funciones
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const validarFormulario = (): boolean => {
    if (!credenciales.email.trim()) {
      setErrores("Error email no válido");
    }
    if (!credenciales.password.trim()) {
      setErrores("Error password no válido");
    }
    if(credenciales.password.length<6){
      setErrores("Error, Longitud de password inferior a 6 caracteres")
    }
    // const regex =/^[^\s@]+  $/
    // regex.test(credenciales.email)
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-amber-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            className="w-full px-3 border rounded focus:outline-none focus:ring-2"
            type="email"
            value={credenciales.email}
            placeholder="tu@email.com"
            onChange={(e) =>
              setCredenciales({ ...credenciales, email: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            className="w-full px-3 border rounded focus:outline-none focus:ring-2"
            type="password"
            value={credenciales.password}
            placeholder="Introduzca la password"
            onChange={(e) =>
              setCredenciales({ ...credenciales, password: e.target.value })
            }
          ></input>
        </div>
      </form>
      <div className="mt-6 mb-6 p-4 bg-amber-100 rounded">
        <h4 className="font-semibold mb-2">Datos Actuales:</h4>
        <pre className="text-sm">{JSON.stringify(credenciales, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormularioLogin;
