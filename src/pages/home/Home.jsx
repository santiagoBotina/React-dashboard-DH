import React from "react";
import "./home.css";
import Cards from "../../components/cards/Cards";
import Chart from "../../components/chart/Chart";
import Users from "../../components/users/Users";
import LastProduct from "../../components/lastProduct/LastProduct";

export default function home() {
  return (
    <div className="home">
      <Cards />
      <Chart />
      <div className="wrapper-widgets">
        <Users />
        <LastProduct />
      </div>
    </div>
  );
}
