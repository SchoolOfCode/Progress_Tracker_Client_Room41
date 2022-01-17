import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";

function WelcomePage({ setWelcome }) {
  function handleClick(e) {
    console.log("ONCLICK FUNCTION");
    setWelcome(true);
  }

  return (
    <div>
      <h1>Hey there, Camper!</h1>
      <h2>What shall I call you?</h2>
      <input type="text" placeholder="Name..." />
      <BsArrowRightSquare
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </div>
  );
}

export default WelcomePage;
