import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  Pizza,
  Sides,
  Drinks,
  Desserts,
  Folds,
  Rice,
  Pastas,
} from "./components";

import { Home, OrderNow, Cart } from "./pages";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderNow" element={<OrderNow />}>
          <Route path="/OrderNow" element={<Pizza />} />
          <Route path="/OrderNow/Pizza" element={<Pizza />} />
          <Route path="/OrderNow/Sides" element={<Sides />} />
          <Route path="/OrderNow/Drinks" element={<Drinks />} />
          <Route path="/OrderNow/Desserts" element={<Desserts />} />
          <Route path="/OrderNow/Folds" element={<Folds />} />
          <Route path="/OrderNow/Rice" element={<Rice />} />
          <Route path="/OrderNow/Pastas" element={<Pastas />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
