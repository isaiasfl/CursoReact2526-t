import { use } from "react";
import type { Plato } from "../types";
import PlatoCard from "./PlatoCard";

interface PlatosListProps {
  platosPromise: Promise<Plato[]>;
}

const PlatosList = ({ platosPromise }: PlatosListProps) => {
  // magia de react 19.2, el hook use
  const platos = use(platosPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {platos.map((plato: Plato) => (
        <PlatoCard key={plato.id} plato={plato} />
      ))}
    </div>
  );
};

export default PlatosList;
