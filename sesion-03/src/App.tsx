import { Suspense, useState } from "react";
import Header from "./components/Header";
import PlatosList from "./components/PlatosList";
import { fetchPlatos } from "./utils/api";
import LoadingFallback from "./components/LoadingFallback";

const App = () => {
  const [platosPromise, setPlatosPromise] = useState(() => fetchPlatos());

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        {/* <ErrorBondary>

      </ErrorBondary> */}
        <Suspense
          fallback={
            <LoadingFallback message="Cocinando platos para ti... 🍽️" />
          }
        >
          <PlatosList platosPromise={platosPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
