import React, { useState } from "react";

function Research() {
  const [value, setValue] = useState(0);

  const referenceArray = [
    {
      order: 3,
      website: ["Tote bag sartorial."],
      tech: "FLEXBOX",
    },
    {
      order: 2,
      website: ["Hashtag drinking ."],
      tech: "GRID",
    },
    {
      order: 1,
      website: ["I'm baby woke mumblecore stumptown."],
      tech: "GIT",
    },
  ];

  const { website, tech } = referenceArray[value];

  return (
    <section>
      <h2>Cheat Sheets</h2>
      {referenceArray.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              setValue(index);
            }}
          >
            {item.tech}
          </button>
        );
      })}
      <h4>{tech}</h4>
      {website.map((website, index) => {
        return (
          <div>
            <p>{website}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Research;
