import { API_CONFIG, type Plato } from "../types";

interface PlatoCardProps {
  plato: Plato;
}

const PlatoCard = ({ plato }: PlatoCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={`${API_CONFIG.BASE_URL}${plato.imagen}`}
          alt={plato.nombre}
        />
        <div className="absolute top-4 right-4 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600">
          {plato.categoria}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{plato.nombre}</h3>
          <span className="text-sm font-medium text-gray-500 bg-gray-50 rounded px-2 py-2">
            {plato.calorias}
          </span>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-500">Ingredientes</p>
          <div className="flex flex-wrap gap-2">
            {/* Aquí todos los ingredientes. (Tengo que recorrer un array de ingredientes) */}
            {plato.ingredientes.map((ingrediente: string, index: number) => (
              <span
                className="bg-orange-50 text-orange-700 rounded-md border border-orange-100"
                key={index}
              >
                {ingrediente}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatoCard;
