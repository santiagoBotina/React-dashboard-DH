import React from "react";
import "./sidebar.css";
import { FaHome, FaUser, FaShoppingBag } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link, Route } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="sidebar">
      <div className="list">
        <li className="list-item">
          <FaHome className="icon" />
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <FaUser className="icon" />
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li className="list-item">
          <FaShoppingBag className="icon" />
          <Link to="/productos">Productos</Link>
        </li>
        <li className="list-item">
          <BiCategory className="icon" />
          <Link to="/categorias">Categorías</Link>
        </li>
      </div>
    </ul>
  );
}
