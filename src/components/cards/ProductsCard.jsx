import React, { useEffect, useState } from "react";
import "./cards.css";

const ProductsCards = () => {
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
    <article className="blueCard">
      <h3>Productos</h3>
      <p>{data.count}</p>
    </article>
  );
};
export default ProductsCards;
