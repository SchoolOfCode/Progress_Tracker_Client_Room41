import React from "react";
import SignUp from "../SignUp";
import Login from "../LogIn";
import "./WelcomePage.css";

function WelcomePage({ setWelcome, setName, setPassword }) {
  return (
    <div>
      <SignUp
        setWelcome={setWelcome}
        setName={setName}
        setPassword={setPassword}
      />
      <Login />
    </div>
  );
}

export default WelcomePage;
