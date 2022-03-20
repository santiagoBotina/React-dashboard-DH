import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PureComponent } from "react";
import "./chart.css";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.products);
      });
  }, []);

  console.log(data);

  return (
    <div className="chart">
      <h3>Estadísticas de productos</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="nombre" stroke="rgb(169, 144, 223)" />
          <Line
            type="monotone"
            dataKey="idproducto"
            stroke="rgb(169, 144, 223)"
          ></Line>
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
