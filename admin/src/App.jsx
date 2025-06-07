import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Update from "./pages/Update/Update";
const App = () => {
  const url = "https://redbite-deploy-backend.onrender.com";
  return (
    <div className="app">
      <Toaster />
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content flex ">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/update/:id" element={<Update url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
