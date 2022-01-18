import React, { useState } from "react";
import "./SignUp.css";

import { Box, TextField, Button } from "@mui/material";

function SignUp({ setWelcome, setName, setPassword }) {
  function onUserChange(event) {
    setName(event.target.value);
    console.log("onUserChange FUNC: ");
  }
  function onPassChange(event) {
    setPassword(event.target.value);
    console.log("onPassChange FUNC: ");
  }

  function handleClick(event) {
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
          <TextField
            onChange={onUserChange}
            label="What shall I call you?"
            variant="standard"
          />
          <TextField
            onChange={onPassChange}
            label="and a password?"
            variant="standard"
          />
          <Button
            onClick={(event) => {
              handleClick(event);
            }}
          >
            Sign up
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default SignUp;
