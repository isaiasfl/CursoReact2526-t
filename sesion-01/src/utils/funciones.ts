// funciones tipadas
// crear la función sumar que sume 2 números y retorne un número

function sumar(a: number = 0, b: number = 0): number {
  return a + b;
}

console.log(sumar(5, 5));

// función saludar

function saludar(nombre: string = "Usuario"): void {
  console.log("Bienvenido, ", nombre);
}

saludar("Isaías");

// función con parámetros opcionales

interface Usuario {
  nombre: string;
  email: string;
  edad?: number;
}

function crearUsuario(nombre: string, email: string, edad?: number): Usuario {
  return {
    nombre,
    email,
    edad,
  };
}

crearUsuario("Carlos", "carlos@gmail.com", 34);

// types en TypeScript sirver para asociar diferentes tipos a una variable

let id: string | number;
// id="10"

type Tamano = "small" | "medium" | "large";

const talla: Tamano = "large";

// ejercicio1:
/**
 * Producto(id,nombre,precio,disponible y categoría) siendo opcional la categoría.
 * Declarar una función llamada calcularTotal que reciba un array de producos y retorne la suma de los productos que estén disponibles
 */

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  categoria?: string;
}

function calcularTotal(productos: Producto[]): number {
  return productos.reduce((total, producto) => {
    return total + (producto.disponible ? producto.precio : 0);
  }, 0);
}

const misProductos: Producto[] = [
  {
    id: 1,
    nombre: "Impresora HP",
    precio: 356,
    disponible: true,
    categoria: "Electrónica",
  },
  {
    id: 2,
    nombre: "Ratón HP",
    precio: 21,
    disponible: true,
    categoria: "Electrónica",
  },
  {
    id: 3,
    nombre: "MIcroprocesador Intel 14600K",
    precio: 521,
    disponible: false,
  },
];

const total = calcularTotal(misProductos);
console.log("El total de mis productos es: ", total);
