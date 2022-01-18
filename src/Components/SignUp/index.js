import React from "react";
import "./SignUp.css";

import { Box, TextField, Button } from "@mui/material";

function SignUp({ setWelcome, setName }) {
  function handleClick(e) {
    console.log("ONCLICK FUNCTION");
    setName();
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
          <TextField label="and a password?" variant="standard" />
          <Button
            handleClick={(e) => {
              handleClick(e);
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
