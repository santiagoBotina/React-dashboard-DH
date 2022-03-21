import React, { useEffect, useState, Component } from "react";
import "./users.css";
import { AiFillEye } from "react-icons/ai";

class TotalUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: [],
    };
  }

  apiCall(url, res) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        res(data.users);
      });
  }

  mostrarData = (data) => {
    this.setState({
      dataUsers: data,
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:5000/api/users", this.mostrarData);
  }

  render() {
    console.log(this.state.dataUsers);
    let dataDisplay;

    if (this.state.data == []) {
      dataDisplay = <p>Cargando...</p>;
    } else {
      dataDisplay = (
        <div className="usersChart">
          <h3>Últimos usuarios registrados</h3>
          <ul className="userList">
            {this.state.dataUsers.map((user, i) => {
              return (
                <div className="listItem">
                  <li key={user + i} className="itemList">
                    {user.nombre}
                  </li>
                  <div className="buttons">
                    <form action={user.detail} method="get">
                      <button type="submit" className="buttonDetail">
                        <AiFillEye className="iconButton" />
                      </button>
                    </form>
                    <img
                      src={`http://localhost:5000/images/profileImages/${user.profile_Image}`}
                      alt="user-image"
                    />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }

    return <div>{dataDisplay}</div>;
  }
}

export default TotalUsers;
