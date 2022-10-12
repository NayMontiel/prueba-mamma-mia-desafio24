import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserProvider";

import App from "./App";
import Home from "./routes/Home";
import Carrito from "./routes/Carrito";
import Error404 from "./routes/Error404";
import { PizzaSelected } from "./routes/PizzaSelected";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="pizza/:id" element={<PizzaSelected />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
