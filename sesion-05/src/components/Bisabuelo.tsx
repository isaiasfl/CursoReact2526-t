import { useFamily } from "../hooks/useFamily";
import Abuelo from "./Abuelo";

const Bisabuelo = () => {
  const { message, counter } = useFamily();
  return (
    <div className="p-4 mx-w-3xl mx-auto">
      <div className="border-4 border-purple-500 rounded-lg p-4 bg-purple-50">
        <h1>Soy El Bisabuelo</h1>
        <div className="my-3 p-3 bg-white rounded border">
          <p>
            Mensaje: <strong>{message}</strong>
          </p>
          <p>
            Contador: <strong>{counter}</strong>
          </p>
        </div>
        <p>Aquí veo TODO el estado sin pasar props a mis hijos</p>
        <Abuelo />
      </div>
    </div>
  );
};

export default Bisabuelo;
