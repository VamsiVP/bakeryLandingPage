import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Shop from "./components/Shop/Shop";
import { useEffect, useState } from "react";
import Preloading from "./components/Preloading/Preloading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      ) : (
        <Preloading />
      )}
    </>
  );
}

export default App;
