import React from "react";
import "./productsPage.css";
import ProductsCard from "../../components/cards/ProductsCard";
import TotalProducts from "../../components/lastProduct/TotalProducts";

export default function ProductsPage() {
  return (
    <div className="product-page-main">
      <div className="cardContainerProducts">
        <ProductsCard className="productsPage-card" />
      </div>
      <TotalProducts className="userList" />
    </div>
  );
}
