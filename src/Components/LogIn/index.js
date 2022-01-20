import React from "react";
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";

function Login() {
  return (
    <div className='main-inputs'>
      {" "}
      {/* <p className="sign-up">already a user?</p> */}

      <div id="login-input">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Username" variant="standard" />
          <TextField label="Password" variant="standard" />
          <Button>Login</Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
