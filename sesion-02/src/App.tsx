import React from "react";
import Boton from "./components/Boton";
import ContadorBasico from "./components/ContadorBasico";
import FormularioLogin from "./components/FormularioLogin";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-4 mb-2 ">
        <Boton
          texto="Aceptar"
          tipo="primario"
          onClick={() => alert("Has aceptado")}
        />
      </div>
      <div className="mt-4 mb-2 ">
        <Boton
          texto="Cancelar"
          tipo="secundario"
          onClick={() => alert("Has Cancelado")}
        />
      </div>
      <div className="mt-4 mb-2 ">
        <Boton
          texto="Error"
          tipo="peligro"
          onClick={() => alert("Error de acceso")}
        />
      </div>
      <div>
        <ContadorBasico />
      </div>
      <div>
        <FormularioLogin />
      </div>
    </>
  );
};

export default App;
