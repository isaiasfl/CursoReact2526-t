import { useContext } from "react";
import type { FamilyContextType } from "../types";
import { FamilyContext } from "../context/FamilyContext";

// 4.- hook personalizado para usar el context
export function useFamily(): FamilyContextType {
  const context = useContext(FamilyContext);
  if (!context) {
    throw new Error(
      "useFamily debe de usarse siempre dentro de FamilyProvider",
    );
  }
  return context;
}