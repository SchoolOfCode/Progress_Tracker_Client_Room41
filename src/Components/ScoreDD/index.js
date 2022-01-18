import React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import "./ScoreDD.css";

function ScoreDD({ setScore }) {
  function handleChange(event) {
    console.log("HANDLECHANGE SCORE DD FUNCTION");
    setScore(event.target.value);
    console.log("SCORE VALUE HERE:", event.target.value);
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Score</InputLabel>
        <Select
          defaultValue={""}
          label="score"
          onChange={(event) => {
            handleChange(event);
          }}
          required={true}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ScoreDD;
