import React from "react";
import "./sidebar.css";
import { FaHome, FaUser, FaShoppingBag } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

export default function Sidebar() {
  return (
    <ul className="sidebar">
      <div className="list">
        <li className="list-item">
          <FaHome className="icon" />
          Home
        </li>
        <li className="list-item">
          <FaUser className="icon" />
          Usuarios
        </li>
        <li className="list-item">
          <FaShoppingBag className="icon" />
          Productos
        </li>
        <li className="list-item">
          <BiCategory className="icon" />
          Categorias
        </li>
      </div>
    </ul>
  );
}
