// pasos para crear un contexto.

import { createContext, useContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";

//1.- Crear el contexto con createContext de React

const FamilyContext = createContext<FamilyContextType | null>(null);

// 2.- Estado Inicial
const estadoInicial: FamilyState = {
  message: "Hola desde el contexto",
  counter: 0,
};

// 3.- Hay que crear un PROVIDER (envoltorio de mi app)
export function FamilyProvider({ children }: { children: ReactNode }) {
  // hooks
  const [state, setState] = useState(estadoInicial);
  // funciones simples
  const setMessage = (message: string) => {
    // siempre que set vaya a modificar un estado y necesite del estando inmediantamente anterior usar un callback con prev (siendo prev el valor que había antes guardado en el estado)
    setState((prev) => ({ ...prev, message }));
  };

  const increment = () => {
    setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
  };

  const decrement = () => {
    setState((prev) => ({ ...prev, counter: prev.counter - 1 }));
  };

  // return
  return (
    <FamilyContext value={{ ...state, setMessage, increment, decrement }}>
      {children}
    </FamilyContext>
  );
}

// 4.- hook personalizado para usar el context
// ------ código transladado a el hook useFamily de la carpeta hooks
// export function useFamily(): FamilyContextType {
//   const context = useContext(FamilyContext);
//   if (!context) {
//     throw new Error(
//       "useFamily debe de usarse siempre dentro de FamilyProvider",
//     );
//   }
//   return context;
// }

// 5.- Exportar el contexto

export { FamilyContext };
