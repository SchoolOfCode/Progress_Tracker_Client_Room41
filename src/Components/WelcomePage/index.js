import React from "react";
import SignUp from "../SignUp";
import "./WelcomePage.css";

function WelcomePage({ setWelcome, setName }) {
  // onchange function that takes the users name and passes back up to app

  return (
    <div>
      <SignUp setWelcome={setWelcome} setName={setName} />
    </div>
  );
}

export default WelcomePage;
