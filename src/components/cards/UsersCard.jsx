import React, { useEffect, useState } from "react";
import "./cards.css";

const UserCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);

  return (
    <article className="purpleCard">
      <h3>Usuarios</h3>
      <p>{data.count}</p>
    </article>
  );
};
export default UserCards;
