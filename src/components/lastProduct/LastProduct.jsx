import React, { useEffect, useState } from "react";
import "./lastProduct.css";

const Lastproduct = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setDataProduct(data.products);
      });
  }, []);

  const findLastProducts = (arr) => {
    let lastProduct;
    arr.map((product) => {
      if (product.idproducto >= arr[arr.length - 1].idproducto) {
        lastProduct = product;
      }
    });
    return lastProduct;
  };

  let dataProductFiltered = findLastProducts(dataProduct);
  console.log(dataProductFiltered);
  return (
    <div className="productChart">
      <h3>Último producto creado</h3>
      <div className="item">
        <h4 key={dataProductFiltered.nombre}>{dataProductFiltered.nombre}</h4>
        <p key={dataProductFiltered.descripcion}>
          {dataProductFiltered.descripcion}
        </p>

        <div className="buttons-product">
          <form
            action={`http://localhost:5000${dataProductFiltered.detail}`}
            method="get"
          >
            <button type="submit" className="verBoton">
              Ir a ver
            </button>
          </form>
          <img
            src={`http://localhost:5000/images/our_products/${dataProductFiltered.image}`}
            alt="user-image"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};
export default Lastproduct;
