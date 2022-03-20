import React, { useEffect, useState } from "react";
import "./cards.css";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="card-wrapper">
      <article className="purpleCard">
        <h3>Usuarios</h3>
        <p>10</p>
      </article>
      <article className="blueCard">
        <h3>Productos</h3>
        <p>{data.count}</p>
      </article>
      <article className="greenCard">
        <h3>Categorías</h3>
        <p>4</p>
      </article>
    </div>
  );
};
export default Cards;
