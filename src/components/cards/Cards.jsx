import React, { useEffect, useState } from "react";
import "./cards.css";
import UsersCards from "./UsersCard";
import ProductsCards from "./ProductsCard";
import CategoryCards from "./CategoryCard";

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
      <UsersCards />
      <ProductsCards />
      <CategoryCards />
    </div>
  );
};
export default Cards;
