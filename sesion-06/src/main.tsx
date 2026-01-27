import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import App_test from "./App_test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
        {/* <App /> */}
        <App_test />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>,
);
