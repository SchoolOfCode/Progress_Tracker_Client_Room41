import React from "react";
import WeekDD from "../WeekDD";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";

function Input() {
  return (
    <div>
      <div className="input-main-div">
        <div className="welcome-text">
          <h1>Welcome, User...</h1>
        </div>
        <WeekDD />
        <DayDD />
        <ScoreDD />
      </div>
    </div>
  );
}

export default Input;
