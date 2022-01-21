import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Research.css";

function Research() {
  const [value, setValue] = useState(0);

  const referenceArray = [
    {
      order: 3,
      website: ["https://flexbox.malven.co/"],
      tech: "FLEXBOX",
    },
    {
      order: 2,
      website: ["https://grid.malven.co/"],
      tech: "GRID",
    },
    {
      order: 1,
      website: ["https://education.github.com/git-cheat-sheet-education.pdf"],
      tech: "GIT",
    },
  ];

  const { website, tech } = referenceArray[value];

  return (
    <section>
      <h2>Reference Materials</h2>
      <div className="underline"></div>
      {referenceArray.map((item, index) => {
        return (
          <Button
            variant="outlined"
            key={index}
            onClick={() => {
              setValue(index);
            }}
          >
            {item.tech}
          </Button>
        );
      })}
      <h4 className="job-info">{tech}</h4>
      {website.map((website, index) => {
        return (
          <div key={index}>
            <a href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
          </div>
        );
      })}
    </section>
  );
}

export default Research;
