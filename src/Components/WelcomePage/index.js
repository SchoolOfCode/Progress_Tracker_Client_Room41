import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import { Box, TextField } from "@mui/material";
import "./WelcomePage.css";

function WelcomePage({ setWelcome }) {
  function handleClick(e) {
    console.log("ONCLICK FUNCTION");
    setWelcome(true);
  }

  return (
    <div>
      <h1>Hey there, Camper!</h1>
      <div id="welcome-input">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="What shall I call you?" variant="standard" />
        </Box>
        <BsArrowRightSquare
          id="enter-icon"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </div>
    </div>
  );
}

export default WelcomePage;
