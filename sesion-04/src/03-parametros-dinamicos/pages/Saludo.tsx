import { Link, useParams } from "react-router-dom";

const Saludo = () => {
  const { nombre } = useParams<{ nombre: string }>();
  return (
    <>
      <Link to="/" className="mt-12 mb-10">Volver al Panel 🏠</Link>
      <div className="p-10 text-center">
        <span>Saludos : {nombre}</span>
        <p> Dato recuperado desde el hook useParams </p>
      </div>
    </>
  );
};

export default Saludo;
