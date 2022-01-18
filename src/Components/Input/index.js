import React, { useState } from "react";
import WeekDD from "../WeekDD";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";
const url = "http://localhost:3005/";

function Input() {
  //! make the fields required
  //!
  const [week, setWeek] = useState();
  const [day, setDay] = useState();
  const [score, setScore] = useState();
  //! Function to collate week/day/score into an object
  function makeObj() {
    console.log("MAKEOBJ FUNCTION");
  }

  //! Function that sends the object to server
  async function onSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(), // body will come from the
      });
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log(error.message);
    }
  }
  onSubmitForm();

  return (
    <div>
      <div className="input-main-div">
        <div className="welcome-text">
          <h1>Welcome, User...</h1>
        </div>
        <WeekDD setWeek={setWeek} />
        <DayDD setDay={setDay} />
        <ScoreDD setScore={setScore} />
      </div>
    </div>
  );
}

export default Input;
