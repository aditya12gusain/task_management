import React from "react";
import "./NewListButton.css";

import assets from "../../assets";

const NewListButton = () => {
  return (
    <button className="newButtonContainer">
      <img src={assets.add} alt="notes" className="icon" />{" "}
      <p>Create New List</p>
    </button>
  );
};

export default NewListButton;
