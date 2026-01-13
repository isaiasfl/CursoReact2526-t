/**
 * Crear componente llamado saludo que renderice nombre y edad que se pasan como props al componente
 */
import React from "react";

interface SaludoProps {
  nombre?: string;
  edad?: number;
}

const Saludo = ({ nombre = "Anónimo", edad = 0 }: SaludoProps) => {
  return (
    <div className="p-4 bg-amber-200 rounded-lg shadow mb-5">
      <h2 className="text-xl font-semibold">
        Hola {nombre}
      </h2>
      <p className="text-gray-700">
        Tienes {edad} años
      </p>
    </div>
  )
};

export default Saludo;
