import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FamilyProvider } from "./context/FamilyContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Aquí tendré que colocar el contexto global para que envuelva a toda mi App */}
    {/* Para ello tengo que crearme un Provider */}
    <FamilyProvider>
      <App />
    </FamilyProvider>
  </StrictMode>,
);
