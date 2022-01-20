import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

function Login({ setWelcome }) {
  const [loginUser, setLoginUser] = useState("");
  const [loginpPass, setLoginUpPass] = useState("");

  //! Function that sends the object to server
  function onClick(event) {
    event.preventDefault();
    fetchUser();
  }
  //id set id
  //is loged setIslogged(false)
  //isregistered setIsregistered(false)
  //if  click register button => isregistered(true)
  //id(data.payload[payload.length-1].uid)
  //if click on login button => isloggedin(true) isregistered(false)
  //id(data.payload[0].uid)
  async function fetchUser() {
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: loginUser, password: loginpPass }),
      });
      setWelcome(true);
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="main-inputs">
      {" "}
      <div id="login-input">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Username"
            variant="standard"
            onChange={(e) => setLoginUser(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            onChange={(e) => setLoginUpPass(e.target.value)}
          />
          <Button variant="outlined" onClick={onClick}>
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
