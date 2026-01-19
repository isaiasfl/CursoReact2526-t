import React from 'react'

type TipoBoton ="primario" | "secundario" | "peligro"

interface BotonProps {
  texto:string;
  tipo: TipoBoton;
  onClick : () => void
}

const Boton = ({texto,tipo,onClick}: BotonProps) => {
  const estilos = {
    primario: "bg-blue-500 hover:bg-blue-700 text-white",
    secundario: "bg-gray-500 hover:bg-gray-700 text-white",
    peligro: "bg-red-500 hover:bg-red-700 text-white"
  };
  return (
    <button 
      onClick={onClick}
      className={`mt-4 px-4 py-2 rounded font-semibold transition ${estilos[tipo]} `}
    >
      {texto}
    </button>
  )
}

export default Boton