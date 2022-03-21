import React, { useEffect, useState } from "react";
import "./cards.css";

const CategoryCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data.countByCategory);
      });
  }, []);

  return (
    <article className="greenCard">
      <h3>Categorías</h3>
      <p>{data.totalCategories}</p>
    </article>
  );
};
export default CategoryCards;
