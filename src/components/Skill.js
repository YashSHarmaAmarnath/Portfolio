import React from "react";
import skill from "../skill.json";
import { useState } from "react";

export const Skill = () => {
  const [Choosen, setChoosen] = useState("");
  const [ChoosenName, setChoosenName] = useState("");
  return (
    <div className="skc">
      <div className="skillContainer">
        {skill.map((item, index) => (
          <div
            className="skill"
            onClick={() => {
              setChoosen(item.info);
              setChoosenName(item.name);
            }}
          >
            {/* <li key={index}> */}
            <img src={item.image_url} alt={item.name} />
            {item.name}
            {/* </li> */}
          </div>
        ))}
      </div>
      {Choosen ? ( // Check if 'Choosen' (should be 'Chosen') is true
        <div className="info skillContainer">
          <h3>{ChoosenName}</h3>
          <br />
          {Choosen}
        </div>
      ) : (
        "" // If 'Choosen' is false, render nothing
      )}
    </div>
  );
};
