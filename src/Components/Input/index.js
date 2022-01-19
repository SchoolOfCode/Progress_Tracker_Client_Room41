import React, { useState } from "react";
import WeekDD from "../WeekDD";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";
import { Button } from "@mui/material";
import "./Input.css";
const API_URL = process.env.REACT_APP_API_URL;

function Input({ userTable }) {
  //! make the fields required
  const [week, setWeek] = useState();
  const [day, setDay] = useState();
  const [score, setScore] = useState();

  //! Function that sends the object to server
  async function onClick(event) {
    event.preventDefault();
    try {
      const body = { week, day, score };
      console.log(body);

      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log("data: ", data);
      // function that waits a second and then sends a fetch
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log("This is the user table:", userTable);

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
