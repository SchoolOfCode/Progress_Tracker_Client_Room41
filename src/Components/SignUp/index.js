import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./SignUp.css";
const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

function SignUp({ setWelcome, setName, setPassword }) {
  const [signUpUser, setSignUpUser] = useState("");
  const [signUpPass, setSignUpPass] = useState("");

  //! Function that sends the object to server
  async function onClick(event) {
    event.preventDefault();
    await fetchUser();
    await fetchStats();
    setName(signUpUser);
  }
  async function fetchUser() {
    try {
      const response = await fetch(`${url}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: signUpUser, password: signUpPass }),
      });
      setWelcome(true);
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function fetchStats() {
    const response = await fetch(`${url}/progress`);
    const data = await response.json();
    console.log("data from register button: ", data);
  }

  return (
    <div className="main-inputs">
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
            onChange={(e) => setSignUpUser(e.target.value)}
            label="What shall I call you?"
            variant="standard"
          />
          <TextField
            onChange={(e) => setSignUpPass(e.target.value)}
            label="and a password?"
            variant="standard"
            type="password"
          />
          <Button variant="outlined" onClick={onClick}>
            Register
          </Button>
        </Box>
        <div id="sign-line" className="underline"></div>
      </div>
    </div>
  );
}

export default SignUp;
