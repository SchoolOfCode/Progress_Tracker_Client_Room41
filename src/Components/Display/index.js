import React, { useEffect, useState } from "react";
import DoughnutChart from "../DoughnutChart";
import BarChart from "../BarChart";
import Research from "../Research";
import "./Display.css";

const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

function Display({ userTable }) {
  const [progTable, setProgTable] = useState({});
  console.log(progTable);

  useEffect(() => {
    async function fetchProgressTable() {
      try {
        const response = await fetch(`${url}/progress`);
        const data = await response.json();
        console.log("progress table data: ", data);
        setProgTable(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProgressTable();
  }, []);

  return (
    <div>
      <h1 className="display-title">🔥 Here's your data 🔥</h1>
      <div className="underline"></div>
      <div className="chart">
        <DoughnutChart />
        <BarChart />
        <Research />
      </div>
    </div>
  );
}

export default Display;
