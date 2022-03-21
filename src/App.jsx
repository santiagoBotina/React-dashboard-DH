import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./app.css";
import Nav from "./components/navbar/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home/Home";
import UsersPage from "./pages/usuarios/UsersPage";
import ProductsPage from "./pages/productos/ProductsPage";
import CategoryPage from "./pages/categorias/CategoryPage";

function App() {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/usuarios" exact={true} element={<UsersPage />} />
          <Route path="/productos" exact={true} element={<ProductsPage />} />
          <Route path="/categorias" exact={true} element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
