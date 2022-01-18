import React, { useState } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function WeekDD({ setWeek }) {
  function handleChange(event) {
    console.log("HANDLECHANGE WEEK DD FUNCTION");
    setWeek(event.target.value);
    console.log("WEEK VALUE HERE", event.target.value);
  }
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Week</InputLabel>
        <Select
          label="week"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <MenuItem value={1}>Week One</MenuItem>
          <MenuItem value={2}>Week Two</MenuItem>
          <MenuItem value={3}>Week Three</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default WeekDD;
