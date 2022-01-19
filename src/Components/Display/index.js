import React, { useEffect, useState } from "react";
import "./Display.css";
const url = process.env.REACT_APP_API_URL;

function Display({ userTable }) {
  const [progTable, setProgTable] = useState({});

  async function fetchProgressTable() {
    try {
      const response = await fetch(`${url}/progress`);
      const data = await response.json();
      console.log("progress table data: ", data);
      setProgTable(data);
      console.log("progress table state: ", progTable);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProgressTable();
  });

  console.log("this is the user table", userTable);

  return (
    <div>
      <h1>Here is where the data will be displayed using reactChart</h1>
    </div>
  );
}

export default Display;
