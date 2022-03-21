import React from "react";
import "./categoryPage.css";
import CategoryCards from "../../components/cards/CategoryCard";
import TotalCategories from "../../components/categories/TotalCategories";

export default function ProductsPage() {
  return (
    <div className="product-page-main">
      <div className="cardContainerProducts">
        <CategoryCards className="productsPage-card" />
      </div>
      <TotalCategories className="userList" />
    </div>
  );
}
