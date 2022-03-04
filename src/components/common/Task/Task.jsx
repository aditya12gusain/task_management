import React from "react";
import "./Task.css";

import assets from "../../../assets";

const Task = ({ title }) => {
  return (
    <div className="taskContainer" title={title}>
      <p>{title}</p>
      <div className="taskButtonContainer">
        <button className="completedButton">
          <img src={assets.check} alt="completed" />
        </button>
        <button className="deleteButton">
          <img src={assets.deleteBlack} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
