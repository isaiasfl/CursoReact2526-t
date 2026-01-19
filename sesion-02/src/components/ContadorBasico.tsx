import React, { useState } from "react";
import Boton from "./Boton";

const ContadorBasico = () => {
  // hooks
  const [count, setCount] = useState(0);
  // efectos

  // funciones

  // renderizado del componente
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Contador: {count}</h3>
      <div className="flex gap-2">
        <Boton
          texto="Incrementar"
          tipo="primario"
          onClick={() => setCount(count + 1)}
        />

        <Boton
          texto="Decrementar"
          tipo="secundario"
          onClick={() => setCount(count - 1)}
        />
      
        <Boton
          texto="Incrementar +10"
          tipo="primario"
          onClick={() => setCount(count + 10)}
        />

        <Boton
          texto="Decrementar -10"
          tipo="secundario"
          onClick={() => setCount(count - 10)}
        />
        <Boton texto="Reset" tipo="peligro" onClick={() => setCount(0)} />
      </div>
    </div>
  );
};

export default ContadorBasico;
