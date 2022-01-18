import React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material/";
import "./WeekDD.css";

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
          defaultValue={""}
          label="week"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <MenuItem value={1}>Week One</MenuItem>
          <MenuItem value={2}>Week Two</MenuItem>
          <MenuItem value={3}>Week Three</MenuItem>
          <MenuItem value={4}>Week Four</MenuItem>
          <MenuItem value={5}>Week Five</MenuItem>
          <MenuItem value={6}>Week Six</MenuItem>
          <MenuItem value={7}>Week Seven</MenuItem>
          <MenuItem value={8}>Week Eight</MenuItem>
          <MenuItem value={9}>Week Nine</MenuItem>
          <MenuItem value={10}>Week Ten</MenuItem>
          <MenuItem value={11}>Week Eleven</MenuItem>
          <MenuItem value={12}>Week Twelve</MenuItem>
          <MenuItem value={13}>Week Thirteen</MenuItem>
          <MenuItem value={14}>Week Fourteen</MenuItem>
          <MenuItem value={15}>Week Fifteen</MenuItem>
          <MenuItem value={16}>Week Sixteen</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default WeekDD;
