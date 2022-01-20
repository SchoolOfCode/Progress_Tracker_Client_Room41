import React, { useState } from "react";
import { Button } from "@mui/material";

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
      <h2>Cheat Sheets</h2>
      {referenceArray.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setValue(index);
            }}
          >
            {item.tech}
          </Button>
        );
      })}
      <h4>{tech}</h4>
      {website.map((website, index) => {
        return (
          <div key={index}>
            <p>{website}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Research;
