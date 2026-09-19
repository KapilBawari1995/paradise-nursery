import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/Home";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const location = useLocation();

  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;