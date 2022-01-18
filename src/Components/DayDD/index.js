import React from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function DayDD({ setDay }) {
  //! Set the day value function
  function handleChange(event) {
    console.log("DAY DD FUNCTION");
    setDay(event.target.value);
    console.log("DAY VALUE HERE:", event.target.value);
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Day</InputLabel>
        <Select
          label="day"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <MenuItem value={1}>Monday</MenuItem>
          <MenuItem value={2}>Tuesday</MenuItem>
          <MenuItem value={3}>Wednesday</MenuItem>
          <MenuItem value={4}>Thursday</MenuItem>
          <MenuItem value={5}>Friday</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DayDD;
