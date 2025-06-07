import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider, { StoreContext } from "./context/StoreContext.jsx";
import { PrimeReactProvider } from "primereact/api";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
