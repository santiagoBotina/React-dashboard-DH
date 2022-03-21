import React, { useEffect, useState, Component } from "react";
import "./lastProduct.css";

class LastProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
      data: data[data.length - 1],
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:5000/api/products", this.mostrarData);
  }

  render() {
    console.log(this.state.data);

    let dataDisplay;

    if (this.state.data == []) {
      dataDisplay = <p>Cargando...</p>;
    } else {
      dataDisplay = (
        <div className="productChart">
          <h3>Último producto creado</h3>
          <div className="item">
            <h4 key={this.state.data.nombre}>{this.state.data.nombre}</h4>
            <p key={this.state.data.descripcion}>
              {this.state.data.descripcion}
            </p>

            <div className="buttons-product">
              <form
                action={`http://localhost:5000${this.state.data.detail}`}
                method="get"
              >
                <button type="submit" className="verBoton">
                  Ir a ver
                </button>
              </form>
              <img
                src={`http://localhost:5000/images/our_products/${this.state.data.image}`}
                alt="user-image"
                width={200}
              />
            </div>
          </div>
        </div>
      );
    }

    return <div>{dataDisplay}</div>;
  }
}

export default LastProduct;

// const Lastproduct = () => {
//   const [dataProduct, setDataProduct] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setDataProduct(data.products);
//       });
//   }, []);

// const findLastProducts = (arr) => {
//   let lastProduct;
//   arr.map((product) => {
//     if (product.idproducto >= arr[arr.length - 1].idproducto) {
//       lastProduct = product;
//     }
//   });
//   return lastProduct;
// };

// let dataProductFiltered = findLastProducts(dataProduct);
//   console.log(dataProductFiltered);
//   return (
//     <div className="productChart">
// <h3>Último producto creado</h3>
// <div className="item">
//   <h4 key={dataProductFiltered.nombre}>{dataProductFiltered.nombre}</h4>
//   <p key={dataProductFiltered.descripcion}>
//     {dataProductFiltered.descripcion}
//   </p>

//   <div className="buttons-product">
//     <form
//       action={`http://localhost:5000${dataProductFiltered.detail}`}
//       method="get"
//     >
//       <button type="submit" className="verBoton">
//         Ir a ver
//       </button>
//     </form>
//     <img
//       src={`http://localhost:5000/images/our_products/${dataProductFiltered.image}`}
//       alt="user-image"
//       width={300}
//     />
//   </div>
// </div>
//     </div>
//   );
// };
// export default Lastproduct;
