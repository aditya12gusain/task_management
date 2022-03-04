import React from "react";
import "./PrimaryButton.css";

import assets from "../../../assets";

const PrimartButton = () => {
  return (
    <button className="primaryButtonContainer">
      <img src={assets.add} alt="add" />
    </button>
  );
};

export default PrimartButton;
