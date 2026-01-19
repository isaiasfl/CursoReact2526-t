import React from "react";

const Header = () => {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 ">
        Menu <span className="text-orange-600">Premium</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Aprende a cocinar con estas recetas
      </p>
    </header>
  );
};

export default Header;
