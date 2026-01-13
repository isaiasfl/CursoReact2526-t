const nombre: string = "pepe";
const edad: number = 23;
const esEstudiante: boolean = true;
const nulo: null = null;
const indefinido: undefined = undefined;

const lenguajes: string[] = ["React", "Javascript", "TypeScript"];
const numeros: number[] = [1, 2, 3, 4, 5];

// array de objetos:

const usuarios: { nombre: string; edad: number }[] = [
  { nombre: "Antonio", edad: 19 },
  { nombre: "Sara", edad: 39 },
];

// sólo un tipo de objeto.

const persona: { nombre: string; edad: number; activo: boolean } = {
  nombre: "María",
  edad: 30,
  activo: true,
};

// Las interfaces o CONTRATOS.
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;
  activo: boolean;
}

const usuario1: Usuario = {
  id: 1,
  nombre: "Pelayo",
  email: "pelayo@gmail.com",
  activo: false,
  
};

const usuario2: Usuario = {
  id: 2,
  nombre: "marta",
  email: "marta@gmail.com",
  edad:19,
  activo: true,
};