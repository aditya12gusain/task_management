import React from "react";
import "./SecondaryButton.css";

import assets from "../../../assets";

const SecondaryButton = ({ text }) => {
  return (
    <button className="secondaryButtonContainer" title={text}>
      <img src={assets.notesSelected} alt="notes" className="icon" />{" "}
      <p>{text}</p>
    </button>
  );
};

export default SecondaryButton;
