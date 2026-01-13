import React from "react";

interface TarjetaProps {
  title: string;
  description: string;
  urlImage?: string;
  favorite?: boolean;
}

// Tajeta Renderiza o simula una Card donde si la tarjeta tiene la propidad Favorite, tendrá un estilo especial y una Estrella de favorita. En caso contrario no tendrá ese estilo.
const Tarjeta = ({
  title,
  description,
  urlImage,
  favorite = false,
}: TarjetaProps) => {
  // RENDERIZADO CONDICIONAL.....
  return (
    <div
      className={`rounded-lg shadow-md p-6 ${
        favorite ? "bg-blue-100 border-2 border-amber-700" : "bg-white"
      }`}
    >
      {urlImage && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={urlImage}
          alt={title}
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {favorite && <span className="text-2xl">⭐</span>}
    </div>
  );
};

export default Tarjeta;
