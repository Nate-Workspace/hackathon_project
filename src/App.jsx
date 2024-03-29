import { useState } from "react";
import { LeftNav } from "./components/LeftNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductsServicesEvents from "./pages/ProductsServicesEvents";
import Seller from "./pages/Seller";
import Buyer from "./pages/Buyer";
function App() {
  return (
    <div className="App">
      <Router>
        <LeftNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<ProductsServicesEvents />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/buyer" element={<Buyer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
