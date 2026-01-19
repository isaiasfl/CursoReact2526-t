/**
 * {
    "id": 52772,
    "nombre": "Teriyaki Chicken Casserole",
    "categoria": "Chicken",
    "origen": "Japanese",
    "calorias": 607,
    "ingredientes": [
      "soy sauce",
      "water",
      "brown sugar",
      "ground ginger",
      "minced garlic",
      "cornstarch",
      "chicken breasts",
      "stir-fry vegetables",
      "brown rice"
    ],
    "imagen": "/images/52772.jpg"
  },
 * 
 */
export interface Plato {
  id: number;
  nombre: string;
  categoria: string;
  origen: string;
  calorias: number;
  ingredientes: string[];
  imagen: string;
}


export const API_CONFIG = {
  BASE_URL : `${import.meta.env.VITE_URL}:${import.meta.env.VITE_PORT}`,
  ENDPOINTS : {
    PLATOS: "/api/platos"
  }
}