import React, { useEffect, useState, Component } from "react";
import "./lastProduct.css";
import { AiFillEye } from "react-icons/ai";

class TotalProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducts: [],
    };
  }

  apiCall(url, res) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        res(data.products);
      });
  }

  mostrarData = (data) => {
    this.setState({
      dataProducts: data,
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:5000/api/products", this.mostrarData);
  }

  render() {
    console.log(this.state.dataProducts);
    let dataDisplay;

    if (this.state.data == []) {
      dataDisplay = <p>Cargando...</p>;
    } else {
      dataDisplay = (
        <div className="usersChart">
          <h3>Todos los productos</h3>
          <ul className="userList">
            {this.state.dataProducts.map((product, i) => {
              return (
                <div className="listItem">
                  <li key={product + i} className="itemList">
                    {product.nombre}
                  </li>
                  <div className="buttons">
                    <form
                      action={`http://localhost:5000${product.detail}`}
                      method="get"
                    >
                      <button type="submit" className="buttonDetail">
                        <AiFillEye className="iconButton" />
                      </button>
                    </form>
                    <img
                      src={`http://localhost:5000/images/our_products/${product.image}`}
                      alt="product-image"
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

export default TotalProducts;
