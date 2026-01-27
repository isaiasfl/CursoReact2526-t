// aquí defino mis tipos

// estos son los valores que voy a pasar a mi App y serán visibles en toda mi familia
export interface FamilyState {
  message: string;
  counter: number;
}

// acciones que tendré disponibles en mi App
export interface FamilyActions {
  setMessage: (message: string) => void;
  increment: () => void;
  decrement: () => void;
}


// tipo completo de valores y acciones para usarlo en mi contexto
export type FamilyContextType = FamilyState & FamilyActions;
