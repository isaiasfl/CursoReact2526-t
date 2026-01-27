import { useState } from "react";
import { useFamily } from "../hooks/useFamily";

const Nieto = () => {
  const { message, counter, setMessage, increment, decrement } = useFamily();

  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const handleCambiar = () => {
    if (nuevoMensaje.trim()) {
      setMessage(nuevoMensaje.trim());
      setNuevoMensaje("");
    }
  };

  return (
    <div className="p-4 mx-w-3xl mx-auto">
      <div className="border-4 border-orange-500 rounded-lg p-4 bg-orange-50">
        <h4>soy el Nieto</h4>
        <div className="my-3 p-3 bg-white rounded border">
          <p>
            Mensaje: <strong>{message}</strong>
          </p>
          <p>
            Contador: <strong>{counter}</strong>
          </p>
        </div>
        {/* Creamos un formulario para modificar cosas */}
        <div className="flex gap-2 my-3">
          <input
            type="text"
            value={nuevoMensaje}
            onChange={(e) => setNuevoMensaje(e.target.value)}
            placeholder="Escribe el nuevo mensaje..."
            className="flex-1 px-3 py-2 border rounded-xl"
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded font-bold"
            onClick={handleCambiar}
          >
            Cambiar mensaje:
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={increment}
            className="px-4 py-2 bg-sky-500 text-white rounded font-bold"
          >
            Incrementar
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-slate-500 text-white rounded font-bold"
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nieto;
