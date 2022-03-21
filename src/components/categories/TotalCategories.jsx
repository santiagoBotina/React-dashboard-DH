import React, { useEffect, useState, Component } from "react";
import "../lastProduct/lastProduct.css";

class TotalCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategories: [],
    };
  }

  apiCall(url, res) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        res(data.countByCategory);
      });
  }

  mostrarData = (data) => {
    this.setState({
      dataCategories: data,
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:5000/api/products", this.mostrarData);
  }

  render() {
    console.log(this.state.dataCategories.deportivo);
    let datosCategories = this.state.dataCategories;
    let dataDisplay;

    if (this.state.data == []) {
      dataDisplay = <p>Cargando...</p>;
    } else {
      dataDisplay = (
        <div className="usersChart">
          <h3>Productos por categoría</h3>
          <ul className="userList">
            <div className="listItem">
              <li key={datosCategories.deportivo} className="itemList">
                <div className="tituloCategoria">Deportivo</div>
                <div>{datosCategories.deportivo}</div>
              </li>
            </div>
            <div className="listItem">
              <li key={datosCategories.casual} className="itemList">
                <div className="tituloCategoria">Casual</div>
                <div>{datosCategories.casual}</div>
              </li>
            </div>
            <div className="listItem">
              <li key={datosCategories.trekking} className="itemList">
                <div className="tituloCategoria">Trekking</div>
                <div>{datosCategories.trekking}</div>
              </li>
            </div>
            <div className="listItem">
              <li key={datosCategories.futbol} className="itemList">
                <div className="tituloCategoria">Futbol</div>
                <div>{datosCategories.futbol}</div>
              </li>
            </div>
          </ul>
        </div>
      );
    }

    return <div>{dataDisplay}</div>;
  }
}

export default TotalCategories;
