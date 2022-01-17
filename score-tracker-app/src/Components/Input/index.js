import React from "react";
import WeekDD from "../WeekDD";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";

function Input() {
  return (
    <div>
      <h1>Welcome, User...</h1>
      <WeekDD />
      <DayDD />
      <ScoreDD />
    </div>
  );
}

export default Input;
