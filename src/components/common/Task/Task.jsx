import React from "react";
import { useParams } from "react-router-dom";
import "./Task.css";

import assets from "../../../assets";

const Task = ({ taskLists, setTaskLists, currentIndex, text, completed }) => {
  // const [completed, setCompleted] = useState(false);
  const { listId } = useParams();

  const updateStatus = () => {
    const newTaskLists = [...taskLists];
    newTaskLists[listId].tasks.forEach((task, index) => {
      if (currentIndex === index) {
        task.completed = !task.completed;
      }
    });
    setTaskLists(newTaskLists);
  };

  const deleteTask = () => {
    const newTaskLists = [...taskLists];
    newTaskLists[listId].tasks.splice(currentIndex, 1);
    setTaskLists(newTaskLists);
  };

  return (
    <div className="taskContainer" title={text}>
      <p>{completed ? <strike>{text}</strike> : text}</p>
      <div className="taskButtonContainer">
        <button className="completedButton" onClick={() => updateStatus()}>
          <img src={completed ? assets.cross : assets.check} alt="completed" />
        </button>
        <button className="deleteButton" onClick={deleteTask}>
          <img src={assets.deleteBlack} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
