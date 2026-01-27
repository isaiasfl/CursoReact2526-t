import Hijo from "./Hijo";

const Padre = () => {
  return (
    <div className="p-4 mx-w-3xl mx-auto">
      <div className="border-4 border-green-500 rounded-lg p-4 bg-green-50">
        <h3>soy el Padre</h3>
        <Hijo />
      </div>
    </div>
  );
};

export default Padre;
