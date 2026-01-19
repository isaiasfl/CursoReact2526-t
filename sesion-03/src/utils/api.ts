import { API_CONFIG, type Plato } from "../types";

export const fetchPlatos = async (): Promise<Plato[]> => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al cargar los platos");
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetchPlatos", error);
  }
  throw new Error("Error desconocido al cargar los platos")
};
