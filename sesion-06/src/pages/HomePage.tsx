import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Estoy en MAIN</h1>
      </div>
      <div>
        <Link to="/login">Acceder ahora</Link>
      </div>
    </div>
  );
};

export default HomePage;
