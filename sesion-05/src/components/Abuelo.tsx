import Padre from "./Padre";

const Abuelo = () => {
  return (
    <div className="p-4 mx-w-3xl mx-auto">
      <div className="border-4 border-blue-500 rounded-lg p-4 bg-blue-50">
        <h2>Soy el Abuelo</h2>
        <Padre />
      </div>
    </div>
  );
};

export default Abuelo;
