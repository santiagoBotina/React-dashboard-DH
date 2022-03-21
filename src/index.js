import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/navbar/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home/Home";

ReactDOM.render(
  <BrowserRouter>
    <Nav contacto="Santiago" buscar="Hola Prop" nosotros="Hola Prop 2" />
    <div className="wrapper">
      <Sidebar className="sidebar" />
      <Home />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
