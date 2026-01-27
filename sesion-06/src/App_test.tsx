import React, { useState } from "react";

// crear formulario con nombre, password y botón para mostrar o no el password
const App_test = () => {
  const initalState = {
    nombre: "",
    password: "",
  };

  const [dataForm, setDataForm] = useState<typeof initalState>(initalState);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    console.log(dataForm);
  }

  return (
    <div>
      <h2>Formulario</h2>
      <div>
        <h2>Iniciar sesión:</h2>
      </div>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" onChange={handleChange} />
          <label>Password:</label>
          <input 
            type={showPassword ? "text" : "password"} name="password" onChange={handleChange} 
            
            />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
           >Mostrar/Ocultar Password</button>
        </div>
        <button type="submit">Enviar Formulario</button>
      </form>
    </div>
  );
};

export default App_test;
