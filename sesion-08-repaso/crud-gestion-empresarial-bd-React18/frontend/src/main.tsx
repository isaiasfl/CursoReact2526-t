import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App2Router from "./apps/App2Router";
import App3Professional from "./apps/App3Professional";
import "./index.css";

/**
 * Entry point del frontend
 *
 * INSTRUCCIONES PARA CAMBIAR DE APP:
 * Descomenta la app que quieras usar y comenta las demás
 */

// APP 1 - CRUD Simple sin rutas (para principiantes)
// import App1Simple from "./apps/App1Simple";

// APP 2 - Con React Router (para intermedios)
// import App2Router from './apps/App2Router';

// APP 3 - Con Auth + Rutas protegidas (para avanzados)
// import App3Professional from './apps/App3Professional';

// Cambiar aquí qué App renderizar

// const App = App1Simple; // <-- Cambiar a App2Router o App3Professional
// const App = App2Router; // <-- Cambiar a App1Simple o App3Professional
const App = App3Professional; // <-- Cambiar a App1Simple o App2Router
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
