import React, { useState } from "react";
import WeekDD from "../WeekDD";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";
import { Button, FormControl } from "@mui/material";
import "./Input.css";
const url = "http://localhost:3005/";
let tableData = {};

function Input() {
  //! make the fields required
  const [week, setWeek] = useState();
  const [day, setDay] = useState();
  const [score, setScore] = useState();

  //! Function to collate week/day/score into an object and sets new state
  function makeObj(week, day, score) {
    tableData = {
      weekValue: week,
      dayValue: day,
      scoreValue: score,
    };
    console.log(tableData);
    return tableData;
  }

  //! Function that sends the object to server
  async function onClick(event) {
    // if statement that stops the function if the object is empty
    event.preventDefault();
    console.log("onClick func here with these values: ", week, day, score);
    makeObj(week, day, score);
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tableData), // body will come from the
      });
      const data = await response.json();
      console.log("data: ", data);
      // function that waits a second and then sends a fetch
    } catch (error) {
      console.log(error.message);
    }
  }

  // const userName =

  return (
    <div>
      <div className="input-main-div">
        <div className="welcome-text">
          <h1>Welcome, User...</h1>
        </div>
        <WeekDD setWeek={setWeek} />
        <DayDD setDay={setDay} />
        <ScoreDD setScore={setScore} />
        <Button onClick={onClick} variant="text">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Input;
