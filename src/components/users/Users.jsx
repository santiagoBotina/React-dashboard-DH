import React, { useEffect, useState } from "react";
import "./users.css";
import { AiFillEye } from "react-icons/ai";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data.users);
      });
  }, []);

  const findLastUsers = (arr) => {
    let lastUsers = [];
    arr.map((user) => {
      if (user.idusuario <= arr.length && user.idusuario >= arr.length - 3) {
        lastUsers.push({
          nombre: user.nombre,
          image: user.profile_Image,
          detail: user.detail,
        });
      }
    });
    return lastUsers;
  };

  let dataFiltered = findLastUsers(data);
  console.log(dataFiltered);

  return (
    <div className="usersChart">
      <h3>Últimos usuarios registrados</h3>
      <ul className="userList">
        {dataFiltered.map((user, i) => {
          return (
            <div className="listItem">
              <li key={user.nombre + i} className="itemList">
                {user.nombre}
              </li>
              <div className="buttons">
                <form action={user.detail} method="get">
                  <button type="submit" className="buttonDetail">
                    <AiFillEye className="iconButton" />
                  </button>
                </form>
                <img
                  src={`http://localhost:5000/images/profileImages/${user.image}`}
                  alt="user-image"
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Users;
