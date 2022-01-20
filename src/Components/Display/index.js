import React, { useEffect, useState } from "react";
import "./Display.css";
const url = process.env.REACT_APP_API_URL;

function Display({ userTable }) {
  const [progTable, setProgTable] = useState({});

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
  console.log("progress table state: ", progTable);

  console.log("this is the user table", userTable);

  console.log("this is the user table", userTable);

  return (
    <div className="display-div">
      <p className="test-chart">chart</p>
      <h2 className="display-h1">
        Here is where the data will be displayed using reactChart
      </h2>
    </div>
  );
}

export default Display;
