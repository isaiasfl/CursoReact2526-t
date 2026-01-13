import React from "react";
import Header from "./componets/Header";
import Saludo from "./componets/Saludo";
import Tarjeta from "./componets/Tarjeta";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <Saludo nombre="Pepe" edad={44} />
        <Saludo />
        <Saludo nombre="Carla" edad={24} />
        <div className="mt-8 grid grid-cols1 md:grid-cols2 lg:grid-cols4 gap-6">
          <Tarjeta
            title="React"
            description="Lenguaje React"
            urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=400"
            favorite={true}
          />
          <Tarjeta
            title="React"
            description="Lenguaje React"
            urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=400"
          />
          <Tarjeta
            title="React"
            description="Lenguaje React"
            urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=400"
          />
          <Tarjeta
            title="React"
            description="Lenguaje React"
            urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=400"
            favorite={true}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
